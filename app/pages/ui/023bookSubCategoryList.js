/*二级目录书籍列表*/
function createSubCategoryListUI(depth,paramsJson) {
    var mainPage = Elf.controls({
        name: "div", className: "book_container"
    });
    var header = ComponentUtil.CreateHeader({ leftIcon: "icon-left2", title: paramsJson.name, rightIcon: "icon-mydetail"});
    mainPage.appendChild(header);

    mainPage.myContents = Elf.createChild(mainPage, {
        name : "div", className: "book_content"
    });

    createSubCategoryListUI.BooksUI = mainPage;
    createSubCategoryListUI.type = paramsJson.code;
    createSubCategoryListUI.depth = depth;

    var args={serviceModule:BOOK.serviceModule,serviceNumber:'0202300',token: BOOK.token, args:{
        pageSize:BOOK.PageSize,page:"1",categoryId:createSubCategoryListUI.type,platform:BOOK.platform
    }};
    commonLogic.serviceCaller(args,function(data){
        try{
            if(data.flag=="false"){
                alert(data.error);
            }else{
                createSubCategoryListUI.FillBooksListData(data.result.books,true);
                createSubCategoryListUI.scrollLoading = new ComponentUtil.ScrollPagination(mainPage.myContents, 2, createSubCategoryListUI.LoadMoreBooksListData);
            }
        }catch(err){
            var args={ logoutType: "E012"};
            WebCallApp("UserLogout",args);
        }
    });
    Elf.xEvents.onXClick(header.left, function () {
        BOOK.GoBackPage(depth);
    });

    Elf.xEvents.onXClick(header.right,function(){
        var args={ url: BOOK.searchPath};
        WebCallApp("CmdOpenUrl",args);
    });

    return mainPage;
};
/*书籍基本信息*/
createSubCategoryListUI.FillBooksListData = function (data){
    var ui = componentUtils.createBookBaseInfos(data,createSubCategoryListUI.depth);
    createSubCategoryListUI.BooksUI.myContents.appendChild(ui);
}

/**
 * 加载更多
 */
createSubCategoryListUI.LoadMoreBooksListData = function (page) {
    if (!page.IsExistMoreData) {
        return;
    }
    var args={serviceModule:BOOK.serviceModule,serviceNumber:'0202300',token: BOOK.token, args:{
        pageSize:BOOK.PageSize,page:page.PageIndex,categoryId:createSubCategoryListUI.type,platform:BOOK.platform
    }};
    commonLogic.serviceCaller(args, function (data) {
        if(data.flag=="false"){
            alert(data.error);
        }else{
            createSubCategoryListUI.FillBooksListData(data.result.books,false);
            var isExistMore = data.result.books.length > 0;
            createSubCategoryListUI.scrollLoading.SetLoadingFinished(isExistMore);
        }
    });
};
