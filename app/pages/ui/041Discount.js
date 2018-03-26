/*查看图书订单的相关优惠券页面*/
function createBookDiscountUI(depth,bookId,callback) {

    var mainPage = Elf.controls({
        name: "div", className: "book_container"
    });

    var header = ComponentUtil.CreateHeader({ leftIcon: "icon-left2", title: "我的优惠券", rightText: ""});
    mainPage.appendChild(header);

    var myContents = Elf.createChild(mainPage, {
        name : "div", className: "book_content"
    });

    createBookDiscountUI.depth = depth;

    var args={serviceModule:BOOK.serviceModule,serviceNumber:'0500000',token: BOOK.token, args:{
        accountId:BOOK.uuid,bookId:bookId
    }};
    commonLogic.serviceCaller(args,function(data){
        if(data.flag=="false"){
            alert(data.error);
        }else{
            var contentInfo = createBookDiscountUI.createDiscountInfo(data.result.datas,callback);
            myContents.appendChild(contentInfo);
        }
    });

    Elf.xEvents.onXClick(header.left, function () {
        BOOK.GoBackPage(depth);
    });
    return mainPage;
};

createBookDiscountUI.createDiscountInfo = function (data,callback){
    var ui = Elf.controls({ name: "vDiv", className: "" });
    Elf.algorithm.iterateValues({
        collection: data,
        handler: function (item) {
            if(item.availableFlag=='0'){
                var row = createBookDiscountUI.createDiscountRow(item);
                ui.appendChild(row);
                Elf.xEvents.onXClick(row, function () {
                    //var paramsObj = {code:objectInfo.code,name:objectInfo.name};
                    callback(item);
                    BOOK.GoBackPage(createBookDiscountUI.depth);
                });
            }
        }
    });
    return ui;
};

createBookDiscountUI.createDiscountRow = function (data){
    var ui = Elf.controls({ name: "hDiv", className: "_041_discountRowInfo hFlex justifySpaceBetween" });
    var leftZone = Elf.createChild(ui, {
        name: "vDiv",
        className: "_041_leftZone parallelCenter"
    });
    var rightZone = Elf.createChild(ui, {
        name: "div",
        className: "_041_rightZone parallelCenter"
    });

    var leftRow1Txt = "";
    var leftRow2Txt = "";
    var leftRow3Txt = "";
    if(data.category=='0'){
        leftRow1Txt = "<span class='_041_cardAmount'>"+data.ratePrice+"折"+"</span>";
        leftRow2Txt = data.ratePrice+"折";
    }else{
        leftRow1Txt = "<span class='_041_cardAmount'>"+data.priceRmb+"元"+"</span>"+"("+data.ratePrice+"阅点)";
        leftRow2Txt = data.priceRmb+"元";
    }
    if(data.category=='2'){
        leftRow3Txt = "满"+data.minConsumePriceRmb+"元即可使用"+leftRow2Txt+"优惠券";
    }

    var leftRow1 = Elf.createChild(leftZone, {
        name: "span",
        className: "_041_leftRow1",
        initProps: { innerHTML: leftRow1Txt}
    });

    var leftRow2 = Elf.createChild(leftZone, {
        name: "span",
        className: "_041_leftRow2",
        initProps: { innerHTML: leftRow3Txt}
    });
    var leftRow3 = Elf.createChild(leftZone, {
        name: "span",
        className: "_041_leftRow3",
        initProps: { innerHTML: "有效期: "+data.deadline}
    });
    var leftRow4 = Elf.createChild(leftZone, {
        name: "span",
        className: "_041_leftRow4",
        initProps: { innerHTML: "不可和其它活动叠加使用"}
    });

    var rightImage = Elf.createChild(rightZone, {
        name: "img",
        className: "_041_rightImage",
        initProps: { src: "img/immediatelyUse.png" }
    });
    return ui;
};
