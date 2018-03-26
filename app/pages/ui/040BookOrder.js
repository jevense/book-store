/*图书订单页面*/
function createBookOrderUI(data,depth,bookId) {
    var mainPage = Elf.controls({
        name: "div", className: "book_container"
    });

    var header = ComponentUtil.CreateHeader({ leftIcon: "icon-left2", title: "图书订单", rightText: ""});
    mainPage.appendChild(header);

    createBookOrderUI.BooksUI = mainPage;
    createBookOrderUI.BookId = bookId;
    var btnDiv = Elf.createChild(mainPage, {
        name : "nav",
        className: "book_bar book_bar_tab"
    });
    var btnTxt = Elf.createChild(btnDiv, {
        name : "a",
        className : "tab-item external book_btnTxt",
        initProps : {
            innerHTML : "确认付款"
        }
    });

    mainPage.myContents = Elf.createChild(mainPage, {
        name : "div", className: "book_content"
    });

    mainPage.bookBaseInfoRow = "";
    mainPage.discountUI = "";
    mainPage.priceUI = "";
    mainPage.usablePointUI = "";
    mainPage.paymentUI = "";
    mainPage.amount = "0";
    mainPage.isAppPay = data.result.isAppPay;

    createBookOrderUI.createContentInfo(data,depth);
            /*
            amount = data.result.price;
            bookBaseInfoRow = createBookOrderUI.createBookOrderInfos(data.result);
            myContents.appendChild(bookBaseInfoRow);
            if(BOOK.platform!="0"){
                mainPage.discountUI = createBookOrderUI.createOrderRowInfo(data.result,depth);
                myContents.appendChild(mainPage.discountUI);
            }
            mainPage.priceUI = createBookOrderUI.createOrderAccountInfo(data.result.actualPrice);
            myContents.appendChild(mainPage.priceUI);
            usablePointUI = createBookOrderUI.createUsablePointUI(data.result.availablePoint);
            myContents.appendChild(usablePointUI);
            if(BOOK.platform == "1"){
                paymentUI = createBookOrderUI.createOrderPayment(data);
                myContents.appendChild(paymentUI);
            }
            */
            Elf.xEvents.onXClick(btnTxt, function () {
                if(mainPage.isAppPay=='0'){
                    var discountId = "";
                    if(undefined!=createBookOrderUI.BooksUI.discountUI && null!=createBookOrderUI.BooksUI.discountUI && createBookOrderUI.BooksUI.discountUI!=""){
                        discountId = createBookOrderUI.BooksUI.discountUI.discountJson.id;
                        if(undefined==discountId || null==discountId){
                            discountId = "";
                        }
                    }
                    var args={serviceModule:BOOK.serviceModule,serviceNumber:'0301500',token: BOOK.token, args:{
                        bookId:bookId,platform:BOOK.platform,uuid:BOOK.uuid,discountId:discountId
                    }};
                    commonLogic.serviceCaller(args,function(data){
                        //if(data.result.status=="1"){
                        if(data.flag=="true"){
                            //BOOK.OpenNewPage(createOrderSuccessUI(depth+1,bookId), depth+1);
                            BOOK.OpenNewPage(createOrderSuccessUI(depth+1,data.result.tradeNo), depth+1);
                            //var appCallData={id:bookId};
                            //WebCallApp("CmdBookPurchaseSuccess",appCallData);
                        }
                    });
                }else{
                    if(BOOK.platform=="0"){
                        //window.webkit.messageHandlers["openRechargeView"].postMessage();
                        var finishCommand = { command: "openRechargeView", args: {} };
                        window.webkit.messageHandlers["WebCallApp"].postMessage(JSON.stringify(finishCommand));
                    }else if(BOOK.platform=="2"){
                        var discountId = createBookOrderUI.BooksUI.discountUI.discountJson.id;
                        if(undefined==discountId || null==discountId){
                            discountId = "";
                        }
                        location.href = Config.bookPcPayUrl+"?bookId="+bookId+"&uuid="+BOOK.uuid+"&discountId="+discountId+"&token="+BOOK.token;
                    }else{
                        var discountId = "";
                        if(undefined!=createBookOrderUI.BooksUI.discountUI && null!=createBookOrderUI.BooksUI.discountUI && createBookOrderUI.BooksUI.discountUI!=""){
                            discountId = createBookOrderUI.BooksUI.discountUI.discountJson.id;
                            if(undefined==discountId || null==discountId){
                                discountId = "";
                            }
                        }
                        //var appCallData = { command: "payment", args: { payType: paymentUI.payType, bookid: bookId, amount: amount/10,uuid:BOOK.uuid,discountId:discountId } };
                        var appCallData = { command: "payment", args: { payType: mainPage.paymentUI.payType, bookid: bookId, amount: data.result.actualPaymentAmount,uuid:BOOK.uuid,discountId:discountId } };
                        Elf.WebCallApp(JSON.stringify(appCallData));
                    }
                }
            });
    Elf.xEvents.onXClick(header.left, function () {
        BOOK.GoBackPage(depth);
    });

    return mainPage;
};

/*书籍基本信息*/
createBookOrderUI.createBookOrderInfos = function (data){
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
        className:"_040_bookTitle",
        initProps: {
            innerHTML: data.name
        }
    });
    var type = Elf.createChild(col2Zone, {
        name: "div",
        className:"_040_bookType _040_bookTypeMargin",
        initProps: {
            innerHTML: "图书类型："+commonLogic.getNameByCodeInArray(data.textbook,staticData.bookType)
        }
    });
    var bookPrice = Elf.createChild(col2Zone, {
        name: "div",
        className:"_040_bookType _040_bookTypeMargin",
        initProps: {
            innerHTML: "价格: " +data.price+" 阅点"
        }
    });
    var bookSize = Elf.createChild(col2Zone, {
        name: "div",
        className:"_040_bookType _040_bookTypeMargin",
        initProps: {
            innerHTML: "大小："+ componentUtils.validateStr(data.size) +"MB"
        }
    });
    var publishAgency = Elf.createChild(col2Zone, {
        name: "div",
        className:"_040_bookType _040_bookTypeMargin",
        initProps: {
            innerHTML: "出版机构："+data.publishingAgency
        }
    });
    return ui;
};


/*优惠方式*/
createBookOrderUI.createOrderRowInfo = function (data,depth){
    var row1 =Elf.controls({ name: "hDiv", className: "book_row_container hFlex justifySpaceBetween" });
    row1.discountJson = {"id" : data.discountId, "releaseId" : data.releaseId, "type" : data.type, "ratePrice" : data.ratePrice};
    Elf.createChild(row1, {
        name: "span",
        initProps: { innerHTML: "优惠券" }
    });
    var rightZone = Elf.createChild(row1, {
        name: "hDiv",
        className: "parallelCenter perpendicularCenter"
    });
    row1.rightSpan = Elf.createChild(rightZone, {
        name: "span",
        className: "_040_disCountTxt",
        initProps: { innerHTML: "暂无可用优惠券"}
    });
    if(data.isChannel == "1"){
        if(data.flag == "1"){
            if(data.categoryDisCount=='0'){
                row1.rightSpan.innerHTML = data.ratePrice+"折优惠券";
            }else{
                row1.rightSpan.innerHTML = data.ratePrice+"元优惠券"
            }
        }else{
            row1.rightSpan.innerHTML = "暂无可用优惠券";
        }
    }else{
        row1.rightSpan.innerHTML = "暂无可用优惠券";
    }

    row1.rightImage = Elf.createChild(rightZone, {
        name: "img",
        className: "_040_toRightImage",
        initProps: { src: "img/toRight.svg" }
    });

    Elf.xEvents.onXClick(rightZone, function () {
        if(data.flag == "1"){
            BOOK.OpenNewPage(createBookDiscountUI(depth+1,createBookOrderUI.BookId,function (obj) {
                row1.discountJson = obj;
                createBookOrderUI.BooksUI.priceUI.payment.innerHTML = obj.actualPrice;
                if(obj.category=='0'){
                    row1.rightSpan.innerHTML = obj.ratePrice+"折优惠券";
                }else{
                    row1.rightSpan.innerHTML = obj.priceRmb+"元优惠券"
                }
            }), depth+1);
        }
    });
    return row1;
};

/*账户*/
createBookOrderUI.createOrderAccountInfo = function (data){
    var row1 = Elf.controls({ name: "hDiv", className: "_040_orderRowArea book_row_container hFlex justifySpaceBetween" });
    Elf.createChild(row1, {
        name: "span",
        className: "_040_paymentLeftTitle",
        initProps: { innerHTML: "支付金额" }
    });
    row1.payment = Elf.createChild(row1, {
        name: "span",
        className: "_040_pointColor _040_paymentPoint",
        //initProps: { innerHTML: "<span class='_040_pointColor'>"+data+"</span>" }
        initProps: { innerHTML: data }
    });

    row1.company = Elf.createChild(row1, {
        name: "span",
        className: "_040_paymentUnit",
        initProps: { innerHTML: " 阅点" }
    });
    return row1;
};


/*支付*/
createBookOrderUI.createOrderPayment = function (data){
    var ui = Elf.controls({ name: "vDiv", className: "" });
    ui.payType = "1";
    if(data.result.availablePoint<data.result.actualPrice){
        ui.zhifu = createBookOrderUI.createPaymentRow("img/zhifubao.png","支付宝支付",true);
    }else{
        ui.zhifu = createBookOrderUI.createPaymentRow("img/zhifubao.png","支付宝支付");
    }
    ui.appendChild(ui.zhifu);
    ui.weixin = createBookOrderUI.createPaymentRow("img/weixin.png","微信支付");
    ui.appendChild(ui.weixin);

    Elf.xEvents.onXClick(ui.zhifu.rightImage, function () {
        if(data.result.availablePoint<data.result.actualPrice){
            var zhifuImage = ui.zhifu.rightImage.getAttribute("src");
            var weixinImage = ui.weixin.rightImage.getAttribute("src");
            if(zhifuImage=="img/noselected.png"){
                ui.payType = "1";
                ui.zhifu.rightImage.setAttribute("src","img/selected.png");
                ui.weixin.rightImage.setAttribute("src","img/noselected.png");
            }
        }

    });
    Elf.xEvents.onXClick(ui.weixin.rightImage, function () {
        if(data.result.availablePoint<data.result.actualPrice){
            ui.payType = "2";
            var zhifuImage = ui.zhifu.rightImage.getAttribute("src");
            var weixinImage = ui.weixin.rightImage.getAttribute("src");
            if(weixinImage=="img/noselected.png"){
                ui.zhifu.rightImage.setAttribute("src","img/noselected.png");
                ui.weixin.rightImage.setAttribute("src","img/selected.png");
            }
        }

    });
    return ui;
};

/*selected true选中的图片*/
createBookOrderUI.createPaymentRow = function (image,txt,selected){
    var row = Elf.controls({ name: "hDiv", className: "_040_orderRowArea book_row_container hFlex justifySpaceBetween" });
    var leftZone = Elf.createChild(row, {
        name: "hDiv",
        className: "parallelCenter perpendicularCenter"
    });
    var leftImage = Elf.createChild(leftZone, {
        name: "img",
        className: "",
        initProps: { src: image }
    });
    var leftTxt = Elf.createChild(leftZone, {
        name: "span",
        className:"_040_paymentTxt",
        initProps: { innerHTML: txt}
    });
    var rightZone = Elf.createChild(row, {
        name: "hDiv",
        className: ""
    });
    row.rightImage = Elf.createChild(rightZone, {
        name: "img",
        className: "_040_image",
        initProps: { src: "img/noselected.png" }
    });
    if(selected){
        row.rightImage.src = "img/selected.png";
    }
    //Elf.xEvents.onXClick(row.rightImage, function() {
    //    var ss = row.rightImage.getAttribute("src");
    //    if(ss=="img/noselected.png"){
    //        row.rightImage.setAttribute("src","img/selected.png");
    //    }else{
    //        row.rightImage.setAttribute("src","img/noselected.png");
    //    }
    //});
    return row;
};

/*使用阅点*/
createBookOrderUI.createUsablePointUI = function (data){
    var row = Elf.controls({ name: "hDiv", className: "_040_orderRowArea book_row_container hFlex justifySpaceBetween" });
    var leftZone = Elf.createChild(row, {
        name: "hDiv",
        className: "parallelCenter perpendicularCenter"
    });
    var leftImage = Elf.createChild(leftZone, {
        name: "img",
        className: "_040_image",
        initProps: { src: "img/yuedian.png" }
    });
    var leftTxtZone = Elf.createChild(leftZone, {
        name: "vDiv",
        className:"_040_paymentTxt"
    });
    var upTxt = Elf.createChild(leftTxtZone, {
        name: "span",
        className:"",
        initProps: { innerHTML: "使用阅点" }
    });
    var lowTxt = Elf.createChild(leftTxtZone, {
        name: "span",
        className:"_040_pointLowTxt color-gray",
        initProps: { innerHTML: "可用阅点 "+"<span class='_040_pointColor'>"+data+"</span>" }
    });
    var rightZone = Elf.createChild(row, {
        name: "hDiv",
        className: "parallelCenter perpendicularCenter"
    });
    row.rightImage = Elf.createChild(rightZone, {
        name: "img",
        className: "_040_image",
        initProps: { src: "img/selected.png" }
    });
    return row;
};


/*填充内容区域*/
createBookOrderUI.createContentInfo = function (data,depth){
    createBookOrderUI.BooksUI.amount = data.result.price;
    createBookOrderUI.BooksUI.isAppPay = data.result.isAppPay;
    createBookOrderUI.BooksUI.bookBaseInfoRow = createBookOrderUI.createBookOrderInfos(data.result);
    createBookOrderUI.BooksUI.myContents.appendChild(createBookOrderUI.BooksUI.bookBaseInfoRow);
    if(BOOK.platform!="0"){
        createBookOrderUI.BooksUI.discountUI = createBookOrderUI.createOrderRowInfo(data.result,depth);
        createBookOrderUI.BooksUI.myContents.appendChild(createBookOrderUI.BooksUI.discountUI);
    }
    createBookOrderUI.BooksUI.priceUI = createBookOrderUI.createOrderAccountInfo(data.result.actualPrice);
    createBookOrderUI.BooksUI.myContents.appendChild(createBookOrderUI.BooksUI.priceUI);
    createBookOrderUI.BooksUI.usablePointUI = createBookOrderUI.createUsablePointUI(data.result.availablePoint);
    createBookOrderUI.BooksUI.myContents.appendChild(createBookOrderUI.BooksUI.usablePointUI);
    if(BOOK.platform == "1"){
        createBookOrderUI.BooksUI.paymentUI = createBookOrderUI.createOrderPayment(data);
        createBookOrderUI.BooksUI.myContents.appendChild(createBookOrderUI.BooksUI.paymentUI);
    }
};


createBookOrderUI.refreshData=function(data,refresh){
    var args={};
    if(refresh){
        args.refresh=true;//说明刷新数据，保持下载状态
    }
    createBookOrderUI.BooksUI.myContents.innerHTML = "";
    createBookOrderUI.createContentInfo(data);
};

