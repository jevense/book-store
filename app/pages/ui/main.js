function createHomeUI(data){
    var mainPage = Elf.controls({
        name: "div", className: "book_container"
    });

    //var header = ComponentUtil.CreateHeader({ leftText: "分类", title: "书城", rightIcon: "icon-mydetail"});
    var header = ComponentUtil.CreateHeader({ leftIcon: "icon-category", title: "书城", rightIcon: "icon-mydetail"});
    mainPage.appendChild(header);

    var myContents = Elf.createChild(mainPage, {
        name : "div", className: "book_content"
    });

    //var lunboUI = createCarouselUI(2,data.rotateData);
    var lunboUI = "";
    if(data.rotateData.length>1){
        lunboUI = createCarouselUI2(2,data.rotateData);
        myContents.appendChild(lunboUI);
    }else if(0<data.rotateData.length && data.rotateData.length<=1){
        //lunboUI = createCarouselUI(2,data.rotateData);
        lunboUI = createCarouselUI3(2,data.rotateData);
        myContents.appendChild(lunboUI);
    }


    //var categoryUI = getCategoryUI(2,staticData.HomeBagData);
    var categoryUI = getCategoryUI(2,staticData.HomeBagDataNew);
    myContents.appendChild(categoryUI);

    if(undefined != data.adData && ""!=data.adData && undefined != data.imagePath && null!=data.imagePath && ""!=data.imagePath){
        var adUI = createAdUI(2,data.adData);
        myContents.appendChild(adUI);
    }

    var newestBookZone = "";
    var recommendBookZone = "";

    newestBookZone = showPcHomeBook(staticData.bookTitleName[0],data.newestBooks);
    recommendBookZone = showPcHomeBook(staticData.bookTitleName[1],data.recommendBooks);
    /*
    if(BOOK.platform=='2'){
        newestBookZone = showPcHomeBook(staticData.bookTitleName[0],data.newestBooks);
        recommendBookZone = showPcHomeBook(staticData.bookTitleName[1],data.recommendBooks);
    }else{
        newestBookZone = showHomeBook(staticData.bookTitleName[0],data.newestBooks);
        recommendBookZone = showHomeBook(staticData.bookTitleName[1],data.recommendBooks);
    }
    */
    myContents.appendChild(recommendBookZone);
    myContents.appendChild(newestBookZone);

    Elf.xEvents.onXClick(header.left, function () {
        if(BOOK.resourceType=="0"){
            BOOK.homeType = "bookClassification";
            var urlStr = BOOK.localReadPath+"?token="+BOOK.token+"&resourceType="+BOOK.resourceType+"&homeType="+BOOK.homeType+"&platform="+BOOK.platform;
            //var readCall = { command: "CmdOpenUrl", args: { url: urlStr} };
            //Elf.WebCallApp(JSON.stringify(readCall));

            var args={ url: urlStr};
            WebCallApp("CmdOpenUrl",args);
        }else{
            BOOK.OpenNewPage(createBookClassifyUI(2), 2);
            //BOOK.OpenNewPage(createOrderPcSuccessUI(2,'90590b92749c40b88bd4a9e56280906d'), 2);
        }
    });
    Elf.xEvents.onXClick(header.right, function () {
        var args={ url: BOOK.searchPath};
        WebCallApp("CmdOpenUrl",args);
        /*
        if(BOOK.resourceType=="0"){
            BOOK.homeType = "search";
            var urlStr = BOOK.localReadPath+"?token="+BOOK.token+"&resourceType="+BOOK.resourceType+"&homeType="+BOOK.homeType+"&platform="+BOOK.platform;
            var args={ url: urlStr};
            WebCallApp("CmdOpenUrl",args);
        }else{
            BOOK.OpenNewPage(createHotSearchUI(2), 2);
        }
        */
    });
    return mainPage;
}

//首页面种类分类
function getCategoryUI(depth,categoryData){
    //类型
    if(BOOK.platform=='3'){ //pc端放开下载,暂改为3
        categoryData = staticData.HomePcBagData;
    }
    var iconsRow = Elf.controls({
        name: "div",
        className: "bookRow home-category-row"
    });
    Elf.algorithm.iterateValues({
        collection: categoryData,
        handler: function (item) {
            /*
            var a = Elf.createChild(iconsRow, {
                name: "a",
                title:"asdf",
                className: "col-33 icon-item"
            });
             var a = Elf.controls.createElement("a","col-33 icon-item",{title:"asdasd"},iconsRow);
             */
            var a = Elf.controls.createElement("a","col-33 icon-item",{},iconsRow);
            if(item.clickable=='1'){
                Elf.utils.attr(a,"title","此版块,PC端暂未上线,请登录书包移动客户端使用");
            }

            Elf.createChild(a, {
                name: "span",
                className: "icon icon-" + item.iconname
            });
            Elf.createChild(a, {
                name: "span",
                className: "icon-text",
                initProps: { innerHTML: item.name }
            });
            var paramsJson = {type : item.type,code : item.code,name : item.name};
            BOOK.categoryParamsJson = {type : item.type,code : item.code,name : item.name};
            Elf.xEvents.onXClick(a,function(){
                if(item.clickable=='0'){
                    if(item.code==""){
                        if(BOOK.resourceType=="0"){
                            BOOK.homeType = "singleTag";
                            var urlStr = BOOK.localReadPath+"?token="+BOOK.token+"&resourceType="+BOOK.resourceType+"&homeType="+BOOK.homeType+"&platform="+BOOK.platform+"&titleName="+paramsJson.name+"&categoryCode="+paramsJson.code+"&categoryType="+paramsJson.type;
                            //var readCall = { command: "CmdOpenUrl", args: { url: urlStr} };
                            //Elf.WebCallApp(JSON.stringify(readCall));
                            var args={ url: urlStr,titleName:paramsJson.name};
                            WebCallApp("CmdOpenUrl",args);
                        }else{
                            BOOK.OpenNewPage(createBookFreeListUI(2,paramsJson.name,paramsJson.type), 2);
                        }
                    }else{
                        if(BOOK.resourceType=="0"){
                            BOOK.homeType = "multipleTag";
                            var urlStr = BOOK.localReadPath+"?token="+BOOK.token+"&resourceType="+BOOK.resourceType+"&homeType="+BOOK.homeType+"&platform="+BOOK.platform+"&titleName="+paramsJson.name+"&categoryCode="+paramsJson.code+"&categoryType="+paramsJson.type;
                            //var readCall = { command: "CmdOpenUrl", args: { url: urlStr} };
                            //Elf.WebCallApp(JSON.stringify(readCall));
                            var args={ url: urlStr,titleName:paramsJson.name};
                            WebCallApp("CmdOpenUrl",args);
                        }else{
                            BOOK.OpenNewPage(createBookCategoryListUI(2,paramsJson.name,paramsJson.code,paramsJson.type), 2);
                        }
                    }
                }else{
                    Elf.components.toast({ type: "", opacity: 1, text: "此版块,PC端暂未上线,请登录书包移动客户端使用！" });
                }
            });
        }
    });
    return iconsRow;
}

//首页面显示推荐或最新书籍

function showHomeBook(tipInfo,bookList){
    var parent = Elf.controls({
        name: "div"
    });
    var tip = Elf.createChild(parent, {
        name: "hDiv",
        className: "book_tips hFlex book_border_bottom"
    });
    Elf.createChild(tip, {
        name: "div",
        className: "book_tipsLeft hFlex perpendicularCenter parallelStart",
        initProps: {innerHTML: tipInfo.value, id: tipInfo.name}
    });

    var newestInfos = Elf.createChild(tip, {
        name: "div",
        className: "book_tipsRight hFlex parallelEnd"
    });

    var showMore = Elf.createChild(newestInfos, {
        name: "span",
        className: "icon icon-more"
    });

    Elf.xEvents.onXClick(newestInfos, function () {
        if(BOOK.resourceType=="0"){
            BOOK.homeType = "newArrival";
            var urlStr = BOOK.localReadPath+"?token="+BOOK.token+"&resourceType="+BOOK.resourceType+"&homeType="+BOOK.homeType+"&platform="+BOOK.platform+"&titleName="+tipInfo.value+"&newArrivalType="+tipInfo.type;
            var args={ url: urlStr,titleName:tipInfo.value};
            WebCallApp("CmdOpenUrl",args);
        }else{
            BOOK.OpenNewPage(createBookListUI(2,tipInfo.value,tipInfo.type), 2);
        }
    });

    var booksInfo = Elf.createChild(parent, {
        name: "hDiv",className: "book_rowInfos"
    });

    var totalCount=0;
    Elf.algorithm.iterateValues({
        collection: bookList,
        handler: function (item) {
            if(totalCount%3 == 0 && totalCount != 0){
                booksInfo = Elf.createChild(parent, {
                    name: "hDiv",className: "book_rowInfos"
                });
            }
            var bookName = "";
            if (item.name.length > 7) {
                bookName = item.name.substr(0, 6) + "...";
            }else{
                bookName = item.name;
            }
            var bookDiv = Elf.createChild(booksInfo, {
                name: "vDiv",
                className: "book_bookZone parallelCenter perpendicularCenter"
            });
            var bookitem = Elf.createChild(bookDiv, {
                    name: "div",
                    className: "mine_bookImgeZone",
                    initProps: {
                        innerHTML: "<img class='mine_bookImge' src='"+ BOOK.imagePath + item.cover + "'>"+ ""
                    }
                }
            );

            var bookInfo = Elf.createChild(bookDiv, {
                name: "vDiv",
                className: "mine_bookTxtZone"
            });
            var bookName = Elf.createChild(bookInfo, {
                name: "div",
                className:"book_fontSize",
                initProps: {
                    innerHTML:  bookName
                }
            });
            var bookPriceZone = Elf.createChild(bookInfo, {
                name: "hDiv",
                className:"book_fontSmallSize"
            });
            var price = item.price;
            if(item.bookSet=='0' && item.isChannel=='0'){
                price = undefined==item.channelPrice?'':item.channelPrice;
            }
            var bookPrice = Elf.createChild(bookPriceZone, {
                name: "span",
                className:"book_price",
                initProps: {
                    innerHTML:  price+"阅点"
                }
            });
            var bookPoint = Elf.createChild(bookPriceZone, {
                name: "span",
                className:"book_point",
                initProps: {
                    innerHTML:  item.originPrice
                }
            });

            totalCount++;
            Elf.xEvents.onXClick(bookitem, function () {
                if(BOOK.resourceType=="0"){
                    BOOK.homeType = "bookDetail";
                    var urlStr = BOOK.localReadPath+"?token="+BOOK.token+"&resourceType="+BOOK.resourceType+"&homeType="+BOOK.homeType+"&platform="+BOOK.platform+"&isbn="+item.isbn;
                    var args={ url: urlStr};
                    WebCallApp("CmdOpenUrl",args);
                }else{
                    BOOK.ui = createBookDetailUI(2,item.isbn);
                    BOOK.OpenNewPage(BOOK.ui, 2);
                }
            });
        }
    });
    return parent;
}






function showPcHomeBook(tipInfo,bookList){

    var parent=Elf.controls.createElement("div","layoutLs");

    var tip = Elf.createChild(parent, {
        name: "hDiv",
        className: "book_tips hFlex book_border_bottom"
    });
    Elf.createChild(tip, {
        name: "div",
        className: "book_tipsLeft hFlex perpendicularCenter parallelStart",
        initProps: {innerHTML: tipInfo.value, id: tipInfo.name}
    });

    var newestInfos = Elf.createChild(tip, {
        name: "div",
        className: "book_tipsRight hFlex parallelEnd"
    });

    var showMore = Elf.createChild(newestInfos, {
        name: "span",
        className: "icon icon-more"
    });

    Elf.xEvents.onXClick(newestInfos, function () {
        if(BOOK.resourceType=="0"){
            BOOK.homeType = "newArrival";
            var urlStr = BOOK.localReadPath+"?token="+BOOK.token+"&resourceType="+BOOK.resourceType+"&homeType="+BOOK.homeType+"&platform="+BOOK.platform+"&titleName="+tipInfo.value+"&newArrivalType="+tipInfo.type;
            var args={ url: urlStr,titleName:tipInfo.value};
            WebCallApp("CmdOpenUrl",args);
        }else{
            BOOK.OpenNewPage(createBookListUI(2,tipInfo.value,tipInfo.type), 2);
        }
    });

    var bookShelf=Elf.controls.createElement("ul","flex-box flex-justify-start flex-wrap shelfLs media_list");
    Elf.controls.appendTo(bookShelf,parent);

    var totalCount=0;
    Elf.algorithm.iterateValues({
        collection: bookList,
        handler: function (item) {
            var bookitem = showHomeBooks(item);
            Elf.controls.appendTo(bookitem,bookShelf);
            Elf.xEvents.onXClick(bookitem, function () {
                if(BOOK.resourceType=="0"){
                    BOOK.homeType = "bookDetail";
                    var urlStr = BOOK.localReadPath+"?token="+BOOK.token+"&resourceType="+BOOK.resourceType+"&homeType="+BOOK.homeType+"&platform="+BOOK.platform+"&isbn="+item.isbn;
                    var args={ url: urlStr};
                    WebCallApp("CmdOpenUrl",args);
                }else{
                    BOOK.ui = createBookDetailUI(2,item.isbn);
                    BOOK.OpenNewPage(BOOK.ui, 2);
                }
            });
        }
    });
    return parent;
}

/***/
function showHomeBooks(item){
    var li=Elf.controls.createElement("li");
    var book=Elf.controls.createElement("div","book",li);
    //图书封面
    var bookCover=Elf.controls.createElement("div","book-cover",book);
    var coverbox=Elf.controls.createElement("div","elf-ibox-limited",bookCover);
    Elf.controls.createElement("img",{src:"img/book_cover_default.png"},coverbox);
    var cover=Elf.controls.createElement("div",coverbox);
    Elf.controls.createElement("img",{src:item.cover||item.coverBase},cover);
    //图书名称
    //Elf.controls.createElement("div","book_fontSize",{innerHTML:item.name},book);
    //Elf.controls.createElement("div","book_price",{innerHTML:item.price},book);

    var bookName = "";
    if (item.name.length > 7) {
        bookName = item.name.substr(0, 6) + "...";
    }else{
        bookName = item.name;
    }
    var bookInfo = Elf.createChild(book, {
        name: "vDiv",
        className: "mine_bookTxtZone2"
    });

    var bookName = Elf.createChild(bookInfo, {
        name: "div",
        className:"book_fontSize",
        initProps: {
            innerHTML:  bookName
        }
    });

    var bookPriceZone = Elf.createChild(bookInfo, {
        name: "hDiv",
        className:"book_fontSmallSize"
    });
    var price = item.price;
    if(item.bookSet=='0' && item.isChannel=='0'){
        price = undefined==item.channelPrice?'':item.channelPrice;
    }
    var bookPrice = Elf.createChild(bookPriceZone, {
        name: "span",
        className:"book_price",
        initProps: {
            innerHTML:  price+"阅点"
        }
    });
    var bookPoint = Elf.createChild(bookPriceZone, {
        name: "span",
        className:"book_point",
        initProps: {
            innerHTML:  item.originPrice
        }
    });
    return li;
};
