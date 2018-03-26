/*图书订单支付成功页面*/
function createOrderSuccessUI(depth,bookId,callback) {

    BOOK.bookPurchased = "true";
    var mainPage = Elf.controls({
        name: "div", className: "book_container"
    });

    var header = ComponentUtil.CreateHeader({ leftIcon: "icon-left2", title: "购买成功", rightText: ""});
    mainPage.appendChild(header);

    //createBookOrderUI.BooksUI = mainPage;

    var myContents = Elf.createChild(mainPage, {
        name : "div", className: "book_content"
    });

    var bookBaseInfoRow = "";
    mainPage.priceUI = "";
    var paymentUI = "";
    var amount = "0";   //
    var status = "0";    //status:0:交易失败,1:交易成功;
    var textbook = "";
    var bookInfos = "";
    //var args={serviceModule:BOOK.serviceModule,serviceNumber:'0201200',token: BOOK.token, args:{
    //    id:bookId,platform:BOOK.platform,uuid:BOOK.uuid
    //}};
    var args={serviceModule:BOOK.serviceModule,serviceNumber:'0201210',token: BOOK.token, args:{
        tradeNo:bookId,platform:BOOK.platform,uuid:BOOK.uuid
    }};
    commonLogic.serviceCaller(args,function(data){
        if(data.flag=="false"){
            alert(data.error);
        }else{
            status = "1";
            textbook = data.result.textbook;
            bookInfos = data.result;
            paymentUI = createOrderSuccessUI.createPaymentRow("img/selected.png","购买成功");
            myContents.appendChild(paymentUI);
            bookBaseInfoRow = createOrderSuccessUI.createBookOrderInfos(data.result);
            myContents.appendChild(bookBaseInfoRow);

            mainPage.consumeUI = createOrderSuccessUI.createConsumeInfo(data.result.consumePoint);
            myContents.appendChild(mainPage.consumeUI);

            mainPage.priceUI = createOrderSuccessUI.createOrderAccountInfo(data.result.balance);
            myContents.appendChild(mainPage.priceUI);
/*
            var btnDiv = Elf.createChild(myContents, {
                name : "nav",
                className: "_042_book_bar book_bar_tab"
            });
            var btnTxt = Elf.createChild(btnDiv, {
                name : "a",
                className : "tab-item external book_btnTxt",
                initProps : {
                    innerHTML : "请到已获得图书下载"
                }
            });
*/
            var btnDiv = Elf.createChild(myContents, {
                name : "nav",
                className: "_042_book_bottom"
            });
            var btnTxt = Elf.createChild(btnDiv, {
                name : "div",
                className : "tab-item external _042_btnTxt _042_txtColor",
                initProps : {
                    innerHTML : "请到已获得图书下载"
                }
            });
            /*
            Elf.xEvents.onXClick(btnTxt, function () {
                var downloadCall = { command: "downloadBsBook", args: { datas:data.result } };
                Elf.WebCallApp(JSON.stringify(downloadCall));
            });
            */
            var appCallData={id:data.result.id,bookSet:data.result.bookSet};
            WebCallApp("CmdBookPurchaseSuccess",appCallData);
        }
    });
    Elf.xEvents.onXClick(header.left, function () {
        if(undefined != callback && ""!=callback){
            var paramsJson = {status : status,textbook : textbook,bookInfos:bookInfos};
            callback(paramsJson);
        }
        BOOK.GoBackPage(depth);
        BOOK.GoBackPage(depth-1);
    });

    return mainPage;
};

/*书籍基本信息*/
createOrderSuccessUI.createBookOrderInfos = function (data){
    var ui = Elf.controls({ name: "div", className: "_030_bookInfoZone hFlex" });
    var col1Zone = Elf.createChild(ui, {
        name: "div",
        className: "_030_bookImageZone2"
    });
    Elf.createChild(col1Zone, { name: "img", initProps: { src: BOOK.imagePath+data.cover, alt: "" } });

    var col2Zone = Elf.createChild(ui, {
        name: "vDiv",
        className: "_030_bookInfoRightZone2"
    });
    var bookName = Elf.createChild(col2Zone, {
        name: "div",
        className:"_042_bookTitle",
        initProps: {
            innerHTML: data.name
        }
    });

    var bookAuthor = Elf.createChild(col2Zone, {
        name: "div",
        className:"_042_bookType"
    });

    if(data.bookSet=="1"){
        if(data.textbook=="1"){
            bookAuthor.innerHTML = "作者："+data.author
        }else{
            bookAuthor.innerHTML = "主编："+data.editor
        }
    }else{
        bookAuthor.innerHTML = "作者："+data.author
    }

    var type = Elf.createChild(col2Zone, {
        name: "div",
        className:"_042_bookType",
        initProps: {
            innerHTML: "图书类型："+commonLogic.getNameByCodeInArray(data.textbook,staticData.bookType)
        }
    });
    var bookPrice = Elf.createChild(col2Zone, {
        name: "div",
        className:"_042_bookType",
        initProps: {
            innerHTML: "价格: " +data.price+" 阅点"
        }
    });
    var bookSize = Elf.createChild(col2Zone, {
        name: "div",
        className:"_042_bookType",
        initProps: {
            innerHTML: "大小："+ data.size +"MB"
        }
    });

    return ui;
};


/*账户*/
createOrderSuccessUI.createOrderAccountInfo = function (data){
    var row1 = Elf.controls({ name: "hDiv", className: "_040_orderRowArea book_row_container hFlex justifySpaceBetween" });
    row1.payment = Elf.createChild(row1, {
        name: "span",
        className: "_042_balance _042_txtColor",
        initProps: { innerHTML: "账户余额 : "+"<span class=''>"+data+"</span>"+" 阅点" }
    });
    return row1;
};

/*消费阅点*/
createOrderSuccessUI.createConsumeInfo = function (data){
    //var row1 = Elf.controls({ name: "hDiv", className: "_040_orderRowArea book_row_container hFlex justifySpaceBetween" });
    var row1 = Elf.controls({ name: "hDiv", className: "_042_consumeZone hFlex justifySpaceBetween" });
    row1.payment = Elf.createChild(row1, {
        name: "span",
        className: "_042_balance _042_txtColor",
        initProps: { innerHTML: "本次购买共消费 : "+"<span class=''>"+data+"</span>"+" 阅点" }
    });
    return row1;
};



/*selected true选中的图片*/
createOrderSuccessUI.createPaymentRow = function (image,txt){
    var row = Elf.controls({ name: "hDiv", className: "_040_orderRowArea book_row_container hFlex justifySpaceBetween" });
    var leftZone = Elf.createChild(row, {
        name: "hDiv",
        className: "parallelCenter perpendicularCenter"
    });
    var leftImage = Elf.createChild(leftZone, {
        name: "img",
        className: "_040_image",
        initProps: { src: image }
    });
    var leftTxt = Elf.createChild(leftZone, {
        name: "span",
        className:"_042_paymentTxt",
        initProps: { innerHTML: txt}
    });

    return row;
};
