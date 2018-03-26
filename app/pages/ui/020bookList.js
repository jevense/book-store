/*书籍列表*/
function createBookListUI(depth,name,type) {
    var mainPage = Elf.controls({
        name: "div", className: "book_container"
    });
    var header = ComponentUtil.CreateHeader({ leftIcon: "icon-left2", title: name, rightIcon: "icon-mydetail"});
    mainPage.appendChild(header);

    mainPage.myContents = Elf.createChild(mainPage, {
        name : "div", className: "book_content"
    });

    createBookListUI.BooksUI = mainPage;
    createBookListUI.describe = type;
    createBookListUI.depth = depth;

    //var bookListInfos = createBookListUI.FillBooksListData(depth,data);
    //mainPage.myContents.appendChild(bookListInfos);

    var args={serviceModule:BOOK.serviceModule,serviceNumber:'0202000',token: BOOK.token, args:{
        pageSize:BOOK.PageSize,page:"1",type:createBookListUI.describe,platform:BOOK.platform
    }};
    commonLogic.serviceCaller(args,function(data){
        try{
            if(data.flag=="false"){
                alert(data.error);
            }else{
                createBookListUI.FillBooksListData(data.result.books,true);
                createBookListUI.scrollLoading = new ComponentUtil.ScrollPagination(mainPage.myContents, 2, createBookListUI.LoadMoreBooksListData);
            }
        }catch(err){
            var args={ logoutType: "E012"};
            WebCallApp("UserLogout",args);
        }
    });
    Elf.xEvents.onXClick(header.left, function () {
        if(BOOK.resourceType == "0"){
            WebCallApp("CmdGoBack");
        }else{
            BOOK.GoBackPage(depth);
        }
    });

    Elf.xEvents.onXClick(header.right, function () {
        //BOOK.OpenNewPage(createHotSearchUI(depth+1), depth+1);
        var args={ url: BOOK.searchPath};
        WebCallApp("CmdOpenUrl",args);
    });

    return mainPage;
};
/*书籍基本信息*/
createBookListUI.FillBooksListData = function (data){
    var ui = componentUtils.createBookBaseInfos(data,createBookListUI.depth);
    createBookListUI.BooksUI.myContents.appendChild(ui);
    //var ui = Elf.controls({ name: "vDiv", className: "" });
    /*
    var ui = Elf.createChild(createBookListUI.BooksUI.myContents,{ name: "vDiv", className: "" });
    Elf.algorithm.iterateValues({
        collection: data,
        handler: function (item) {
            var rowUI = Elf.createChild(ui,{ name: "div", className: "_050_bookInfoZone hFlex" });
            var col1Zone = Elf.createChild(rowUI, {
                name: "div",
                className: "_030_bookImageZone"
            });
            Elf.createChild(col1Zone, { name: "img", initProps: { src: BOOK.imagePath+item.cover, alt: "" } });

            var col2Zone = Elf.createChild(rowUI, {
                name: "vDiv",
                className: "_030_bookInfoRightZone"
            });
            var bookName = Elf.createChild(col2Zone, {
                name: "div",
                className:"_040_bookName",
                initProps: {
                    innerHTML: item.name
                }
            });
            var bookPrice = Elf.createChild(col2Zone, {
                name: "div",
                className:"_040_bookName",
                initProps: {
                    innerHTML: "<span class='_030_bookColor'>" +item.price+"</span>"+" 阅点：" + "<span class='_030_bookPoint'>" +item.originPrice+ "阅点"+"</span>"
                }
            });
            var bookEditor = Elf.createChild(col2Zone, {
                name: "div",
                className:"_040_bookName"
            });
            var briefIntroduction = Elf.createChild(col2Zone, {
                name: "div",
                className:"_040_bookName",
                initProps: {
                    innerHTML: "图书类型："+commonLogic.getNameByCodeInArray(item.textbook,staticData.bookType)
                }
            });
            if(item.textbook=="1"){
                bookEditor.innerHTML = "作者："+item.author
            }else{
                bookEditor.innerHTML = "主编："+item.editor
            }

            var briefIntroduction = Elf.createChild(col2Zone, {
                name: "div",
                initProps: {
                    innerHTML: "大小："+item.size
                }
            });
            Elf.xEvents.onXClick(rowUI, function () {
                BOOK.OpenNewPage(createBookDetailUI(createBookListUI.depth+1), createBookListUI.depth+1);
            });
        }});
    */
    //return ui;
}

/**
 * 加载更多
 */
createBookListUI.LoadMoreBooksListData = function (page) {
    if (!page.IsExistMoreData) {
        return;
    }
    var args={serviceModule:BOOK.serviceModule,serviceNumber:'0202000',token: BOOK.token, args:{
        pageSize:BOOK.PageSize,page:page.PageIndex,type:createBookListUI.describe,platform:BOOK.platform
    }};
    commonLogic.serviceCaller(args, function (data) {
        if(data.flag=="false"){
            alert(data.error);
        }else{
            createBookListUI.FillBooksListData(data.result.books,false);
            var isExistMore = data.result.books.length > 0;
            createBookListUI.scrollLoading.SetLoadingFinished(isExistMore);
        }
    });
};
