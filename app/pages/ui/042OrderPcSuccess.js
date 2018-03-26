/*PC端图书订单支付成功页面*/
function createOrderPcSuccessUI(depth,bookId,callback) {

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
    /* */
    var args={serviceModule:BOOK.serviceModule,serviceNumber:'0201210',token: BOOK.token, args:{
        tradeNo:bookId,platform:BOOK.platform
    }};
    commonLogic.serviceCaller(args,function(data){
        if(data.flag=="false"){
            alert(data.error);
        }else{
            status = "1";
            textbook = data.result.textbook;
            bookInfos = data.result;
            paymentUI = createOrderPcSuccessUI.createPaymentRow("img/selected.png","购买成功");
            myContents.appendChild(paymentUI);
            bookBaseInfoRow = createOrderPcSuccessUI.createBookOrderInfos(data.result);
            myContents.appendChild(bookBaseInfoRow);

            mainPage.consumeUI = createOrderPcSuccessUI.createConsumeInfo(data.result.consumePoint);
            myContents.appendChild(mainPage.consumeUI);

            mainPage.priceUI = createOrderPcSuccessUI.createOrderAccountInfo(data.result.balance);
            myContents.appendChild(mainPage.priceUI);
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
            var appCallData={id:data.result.id,bookSet:data.result.bookSet};
            WebCallApp("CmdBookPurchaseSuccess",appCallData);
        }
    });

    Elf.xEvents.onXClick(header.left, function () {
        Elf.CallBackShop();
    });
    try {
        //在此运行代码
        Elf.CallBackSj("payok");
    } catch(err) {
        //在此处理错误
    }
    return mainPage;
};

/*书籍基本信息*/
createOrderPcSuccessUI.createBookOrderInfos = function (data){
    var ui = Elf.controls({ name: "div", className: "_030_bookInfoZone hFlex" });
    var col1Zone = Elf.createChild(ui, {
        name: "div",
        className: "_030_bookImageZone"
    });
    Elf.createChild(col1Zone, { name: "img", initProps: { src: BOOK.imagePath+data.cover, alt: "" } });

    var col2Zone = Elf.createChild(ui, {
        name: "vDiv",
        className: "_030_bookInfoRightZone"
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
        className:"_042_bookType",
        initProps: {
            innerHTML: "作者："+data.author
        }
    });
    if(data.textbook=="0"){
        bookAuthor.innerHTML = "作者："+data.author;
    }else{
        bookAuthor.innerHTML = "编辑："+data.editor;
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
createOrderPcSuccessUI.createOrderAccountInfo = function (data){
    var row1 = Elf.controls({ name: "hDiv", className: "_040_orderRowArea book_row_container hFlex justifySpaceBetween" });
    row1.payment = Elf.createChild(row1, {
        name: "span",
        className: "_042_balance _042_txtColor",
        initProps: { innerHTML: "账户余额 : "+"<span class=''>"+data+"</span>"+" 阅点" }
    });
    return row1;
};

/*消费阅点*/
createOrderPcSuccessUI.createConsumeInfo = function (data){
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
createOrderPcSuccessUI.createPaymentRow = function (image,txt){
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
