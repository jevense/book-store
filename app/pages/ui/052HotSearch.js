/*热门搜索*/
function createHotSearchUI(depth) {
    var mainPage = Elf.controls({
        name: "div", className: "book_container"
    });
    createHotSearchUI.header = ComponentUtil.CreateHeaderSearch({ leftIcon: "icon-left2", title: "", rightText: "搜索"});
    mainPage.appendChild(createHotSearchUI.header);

    mainPage.myContents = Elf.createChild(mainPage, {
        name : "div", className: "book_content"
    });

    createHotSearchUI.BooksUI = mainPage;
    createHotSearchUI.depth = depth;

    var args={serviceModule:BOOK.serviceModule,serviceNumber:'0202400',token: BOOK.token, args:{

    }};
    commonLogic.serviceCaller(args,function(data){
        if(data.flag=="false"){
            alert(data.error);
        }else{
            mainPage.myContents.hotSearchUI = createHotSearchUI.getHotSearchUI(depth,data.result.datas);
            mainPage.myContents.appendChild(mainPage.myContents.hotSearchUI);

            mainPage.myContents.historyUI = createHotSearchUI.getHistoryUI();
            mainPage.myContents.appendChild(mainPage.myContents.historyUI);
        }
    });
    Elf.xEvents.onXClick(createHotSearchUI.header.left, function () {
        if(BOOK.homeType == "search" || BOOK.resourceType == "0"){
            WebCallApp("CmdGoBack");
        }else{
            BOOK.GoBackPage(depth);
        }
    });
    Elf.xEvents.onXClick(createHotSearchUI.header.right, function () {
        createHotSearchUI.saveSearchHistory(createHotSearchUI.header.Title.SearchText.value);

        mainPage.myContents.innerHTML = "";
        var args={serviceModule:BOOK.serviceModule,serviceNumber:'0202100',token: BOOK.token, args:{
            pageSize:BOOK.PageSize,page:"1",condition:createHotSearchUI.header.Title.SearchText.value
        }};
        commonLogic.serviceCaller(args,function(data){
            if(data.flag==false){
                alert(data.error);
            }else{
                createHotSearchUI.FillBooksListData(data.result.books,true);
                createHotSearchUI.scrollLoading = new ComponentUtil.ScrollPagination(mainPage.myContents, 2, createHotSearchUI.LoadMoreBooksListData);
            }
        });

    });

    return mainPage;
};

/*热门搜索区域*/
createHotSearchUI.getHotSearchUI = function (depth,data){
    var ui = Elf.controls({ name: "vDiv", className: "_052_hotZone book_background" });
    var title = Elf.createChild(ui,{
        name: "vDiv",
        className: "_052_hotTxt" ,
        initProps: {
            innerHTML: "热门搜索"
        }
    });
    var hotZone = Elf.createChild(ui,{ name: "vDiv", className: "" });
    var totalCount=0;
    var rightRow = Elf.createChild(ui, {
        name: "hDiv",className: "_052_rowInfos parallelCenter"
    });
    hotZone.rightDataArray = [];
    Elf.algorithm.iterateValues({
        collection: data,
        handler: function (item) {
            if(totalCount%4 == 0 && totalCount != 0){
                rightRow = Elf.createChild(hotZone, {
                    name: "hDiv",className: "_052_rowInfos parallelCenter"
                });
            };
            var rightCol = Elf.createChild(rightRow, {
                name: "span",
                className: "_052_hotCol",
                initProps: {
                    innerHTML: item.name
                }
            });
            rightCol.code = item.code;
            hotZone.rightDataArray.push(rightCol);
            totalCount++;
            Elf.xEvents.onXClick(rightCol, function () {
                createHotSearchUI.header.Title.SearchText.value=item.name;
                createHotSearchUI.BooksUI.myContents.innerHTML = "";
                //createHotSearchUI.BooksUI.myContents.removeChild(createHotSearchUI.BooksUI.myContents.hotSearchUI);
                //createHotSearchUI.BooksUI.myContents.removeChild(createHotSearchUI.BooksUI.myContents.historyUI);
                var args={serviceModule:BOOK.serviceModule,serviceNumber:'0202100',token: BOOK.token, args:{
                    pageSize:BOOK.PageSize,page:"1",condition:createHotSearchUI.header.Title.SearchText.value
                }};
                commonLogic.serviceCaller(args,function(data){
                    if(data.flag=="false"){
                        alert(data.error);
                    }else{
                        createHotSearchUI.FillBooksListData(data.result.books,true);
                        createHotSearchUI.scrollLoading = new ComponentUtil.ScrollPagination(createHotSearchUI.BooksUI.myContents, 2, createHotSearchUI.LoadMoreBooksListData);
                    }
                });
            });
        }
    });
    return ui;
};

/*搜索历史*/
createHotSearchUI.getHistoryUI = function (depth,data){
    var ui = Elf.controls({ name: "vDiv", className: "_052_hotZone book_background" });
    var titleZone = Elf.createChild(ui,{
        name: "hDiv",
        className: "parallelCenter perpendicularCenter"
    });
    var leftTitle = Elf.createChild(titleZone,{
        name: "vDiv",
        className: "_052_historyTitle _052_hotTitleLeft",
        initProps: {
            innerHTML: "搜索历史"
        }
    });

    var centerZone = Elf.createChild(titleZone,{
        name: "hDiv",
        className: "_052_hotTitleCenter"
    });

    var rightZone = Elf.createChild(titleZone,{
        name: "hDiv",
        className: "_052_hotTitleRight parallelCenter perpendicularCenter"
    });
    var rightImage= Elf.createChild(rightZone, {
        name: "img",
        className: "_052_delImage",
        initProps: { src: "img/toDelete.svg" }
    });
    var rightTitle = Elf.createChild(rightZone,{
        name: "vDiv",
        className: "_052_txtColor _052_hotTitleRightTxt",
        initProps: {
            innerHTML: "清空"
        }
    });

    var historyZone = Elf.createChild(ui,{ name: "vDiv", className: "" });

    Elf.algorithm.iterateValues({
        collection: localStorage.getItem('searchHistory').split("&あ;"),
        handler: function (item) {
            if(item.trim()!=""){
                var row = Elf.createChild(historyZone, {
                    name: "hDiv",className: "_052_historyRow perpendicularCenter"
                });
                var rowImage= Elf.createChild(row, {
                    name: "img",
                    className: "_052_historyImage",
                    initProps: { src: "img/history.png" }
                });
                var rowCol = Elf.createChild(row, {
                    name: "span",
                    className: "_052_historyTxt",
                    initProps: {
                        innerHTML: item
                    }
                });
                Elf.xEvents.onXClick(row, function () {
                    createHotSearchUI.header.Title.SearchText.value=item;
                    createHotSearchUI.BooksUI.myContents.innerHTML = "";
                    var args={serviceModule:BOOK.serviceModule,serviceNumber:'0202100',token: BOOK.token, args:{
                        pageSize:BOOK.PageSize,page:"1",condition:createHotSearchUI.header.Title.SearchText.value
                    }};
                    commonLogic.serviceCaller(args,function(data){
                        if(data.flag=="false"){
                            alert(data.error);
                        }else{
                            createHotSearchUI.FillBooksListData(data.result.books,true);
                            createHotSearchUI.scrollLoading = new ComponentUtil.ScrollPagination(createHotSearchUI.BooksUI.myContents, 2, createHotSearchUI.LoadMoreBooksListData);
                        }
                    });
                });
            }

        }
    });

    Elf.xEvents.onXClick(rightZone, function () {
        localStorage.setItem('searchHistory',"");
        historyZone.innerHTML = "";
    });

    return ui;
};


/*搜索内容信息*/
createHotSearchUI.FillBooksListData = function (data){
    var ui = componentUtils.createBookBaseInfos(data,createHotSearchUI.depth);
    createHotSearchUI.BooksUI.myContents.appendChild(ui);
};

/**
 * 加载更多
 */
createHotSearchUI.LoadMoreBooksListData = function (page) {
    if (!page.IsExistMoreData) {
        return;
    }
    var args={serviceModule:BOOK.serviceModule,serviceNumber:'0202100',token: BOOK.token, args:{
        pageSize:BOOK.PageSize,page:page.PageIndex,condition:createHotSearchUI.header.Title.SearchText.value
    }};
    commonLogic.serviceCaller(args, function (data) {
        if(data.flag=="false"){
            alert(data.error);
        }else{
            createHotSearchUI.FillBooksListData(data.result.books,false);
            var isExistMore = data.result.books.length > 0;
            createHotSearchUI.scrollLoading.SetLoadingFinished(isExistMore);
        }
    });
};

/*存储搜索历史记录*/
createHotSearchUI.saveSearchHistory = function (data) {
    var strs = localStorage.getItem('searchHistory');
    if(data.trim().length>0){
        if(null !=  strs && strs.length>0){
            var flag = "true";  //true:未重复可以添加,false:重复不添加
            Elf.algorithm.iterateValues({
                collection: strs.split("&あ;"),
                handler: function (item) {
                    if(item.trim()==data.trim()){
                        flag = "false";
                    }
                }
            });
            if(flag == "true"){
                localStorage.setItem('searchHistory',data+"&あ;"+strs);
            }
        }else{
            localStorage.setItem('searchHistory',data);
        }
    }

};