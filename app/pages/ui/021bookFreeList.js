/*免费书籍列表*/
function createBookFreeListUI(depth,name,type) {
    var mainPage = Elf.controls({
        name: "div", className: "book_container"
    });
    var header = ComponentUtil.CreateHeader({ leftIcon: "icon-left2", title: name, rightIcon: "icon-mydetail"});
    mainPage.appendChild(header);

    mainPage.myContents = Elf.createChild(mainPage, {
        name : "div", className: "book_content"
    });

    createBookFreeListUI.BooksUI = mainPage;
    createBookFreeListUI.type = type;
    createBookFreeListUI.depth = depth;

    var args={serviceModule:BOOK.serviceModule,serviceNumber:'0202200',token: BOOK.token, args:{
        pageSize:BOOK.PageSize,page:"1",type:createBookFreeListUI.type,platform:BOOK.platform
    }};
    commonLogic.serviceCaller(args,function(data){
        try{
            if(data.flag=="false"){
                alert(data.error);
            }else{
                createBookFreeListUI.FillBooksListData(data.result.books,true);
                createBookFreeListUI.scrollLoading = new ComponentUtil.ScrollPagination(mainPage.myContents, 2, createBookFreeListUI.LoadMoreBooksListData);
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
createBookFreeListUI.FillBooksListData = function (data){
    var ui = componentUtils.createBookBaseInfos(data,createBookFreeListUI.depth);
    createBookFreeListUI.BooksUI.myContents.appendChild(ui);
}

/**
 * 加载更多
 */
createBookFreeListUI.LoadMoreBooksListData = function (page) {
    if (!page.IsExistMoreData) {
        return;
    }
    var args={serviceModule:BOOK.serviceModule,serviceNumber:'0202200',token: BOOK.token, args:{
        pageSize:BOOK.PageSize,page:page.PageIndex,type:createBookFreeListUI.type,platform:BOOK.platform
    }};
    commonLogic.serviceCaller(args, function (data) {
        if(data.flag=="false"){
            alert(data.error);
        }else{
            createBookFreeListUI.FillBooksListData(data.result.books,false);
            var isExistMore = data.result.books.length > 0;
            createBookFreeListUI.scrollLoading.SetLoadingFinished(isExistMore);
        }
    });
};
