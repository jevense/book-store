/*种类下的书籍列表*/
//function createBookCategoryListUI(depth,paramsJson) {
function createBookCategoryListUI(depth,name,code,type) {
    var mainPage = Elf.controls({
        name: "div", className: "book_container"
    });
    var header = ComponentUtil.CreateHeader({ leftIcon: "icon-left2", title: name, rightIcon: "icon-mydetail"});
    mainPage.appendChild(header);

    mainPage.myContents = Elf.createChild(mainPage, {
        name : "div", className: "_022book_content"
    });

    createBookCategoryListUI.BooksUI = mainPage;
    createBookCategoryListUI.type = code;
    createBookCategoryListUI.depth = depth;

    var args={serviceModule:BOOK.serviceModule,serviceNumber:'0202300',token: BOOK.token, args:{
        pageSize:BOOK.PageSize,page:"1",categoryId:createBookCategoryListUI.type,type:"0",platform:BOOK.platform
    }};
    commonLogic.serviceCaller(args,function(data){
        try{
            if(data.flag=="false"){
                alert(data.error);
            }else{
                var as = createBookCategoryListUI.queryCategoryData(data.result.categorys);
                mainPage.appendChild(as);
                createBookCategoryListUI.FillBooksListData(data.result.books,true);
                createBookCategoryListUI.scrollLoading = new ComponentUtil.ScrollPagination(mainPage.myContents, 2, createBookCategoryListUI.LoadMoreBooksListData);
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
/*分类标题*/
createBookCategoryListUI.queryCategoryData = function (data){
    var ui = Elf.controls({
        name: "div", className: "_022_title buttons-tab"
    });
    ui.titleArray = [];
    var totalCount=0;
    Elf.algorithm.iterateValues({
        collection: data,
        handler: function (item) {
            var tab = Elf.createChild(ui, {
                name: "a",
                //className: "tab-link button",
                className: "tab-link _022_button",
                initProps: { innerHTML: item.name}
            });
            if(totalCount==0){
                Elf.utils.addClass(tab,"active");
            }
            //var content = createBookCategoryListUI.createDynamicContent();
            //Elf.effects.appendClass(content, "book_hidden");
            tab.code = item.id;
            ui.titleArray.push(tab);
            totalCount++;
            Elf.xEvents.onXClick(tab, function () {
                createBookCategoryListUI.type = item.id;

                if(!Elf.utils.hasClass(tab,"active")){
                    createBookCategoryListUI.changeTitileColor(ui, tab);
                    createBookCategoryListUI.scrollLoading.ReSet();
                    createBookCategoryListUI.BooksUI.myContents.innerHTML = "";

                     var args={serviceModule:BOOK.serviceModule,serviceNumber:'0202300',token: BOOK.token, args:{
                        pageSize:BOOK.PageSize,page:"1",categoryId:createBookCategoryListUI.type,type:"0",platform:BOOK.platform
                     }};
                     commonLogic.serviceCaller(args,function(data){
                         if(data.flag=="false"){
                            alert(data.error);
                         }else{
                             //var as = createBookCategoryListUI.queryCategoryData(data.result.categorys);
                             //createBookCategoryListUI.BooksUI.myContents.appendChild(as);
                             //createBookCategoryListUI.BooksUI.appendChild(as);
                             createBookCategoryListUI.FillBooksListData(data.result.books,true);
                             createBookCategoryListUI.scrollLoading = new ComponentUtil.ScrollPagination(createBookCategoryListUI.BooksUI.myContents, 2, createBookCategoryListUI.LoadMoreBooksListData);
                         }
                     });
                }
                //createBookCategoryListUI.changeTitileColor(ui, tab);
            });
        }
    });
    return ui;
};

/*书籍基本信息*/
createBookCategoryListUI.FillBooksListData = function (data){
    var ui = componentUtils.createBookBaseInfos(data,createBookCategoryListUI.depth);
    createBookCategoryListUI.BooksUI.myContents.appendChild(ui);
};

/**
 * 加载更多
 */
createBookCategoryListUI.LoadMoreBooksListData = function (page) {
    //createBookCategoryListUI.scrollLoading.options.IsExistMoreData
    if (!createBookCategoryListUI.scrollLoading.options.IsExistMoreData) {
        return;
    }
    var args={serviceModule:BOOK.serviceModule,serviceNumber:'0202300',token: BOOK.token, args:{
        pageSize:BOOK.PageSize,page:createBookCategoryListUI.scrollLoading.options.PageIndex,categoryId:createBookCategoryListUI.type,platform:BOOK.platform
    }};
    commonLogic.serviceCaller(args, function (data) {
        //console.info("page:"+JSON.stringify(page));
        if(data.flag=="false"){
            alert(data.error);
        }else{
            createBookCategoryListUI.FillBooksListData(data.result.books,false);
            var isExistMore = data.result.books.length > 0;
            createBookCategoryListUI.scrollLoading.SetLoadingFinished(isExistMore);
            //console.info("******page:"+JSON.stringify(page));
        }
    });
};


//根据tab动态创建content
createBookCategoryListUI.createDynamicContent = function (data) {
    var ui = Elf.controls({
        name: "div", className: ""
    });
    return ui;
};


/*改变标题栏颜色*/
createBookCategoryListUI.changeTitileColor = function (myparent,obj) {
    for (var i =0; i < myparent.titleArray.length; i++) {
        //var className1 = (myparent.titleArray[i].code == obj.code) ? "tab-link button active" : "tab-link button";
        var className1 = (myparent.titleArray[i].code == obj.code) ? "tab-link _022_button active" : "tab-link _022_button";
        var ctrl = getElementByCode(myparent.titleArray[i].code, myparent.titleArray);
        ctrl.className = className1;
        if(i==obj.code){
            myparent.myCategory=obj.code;
        }
    }
};

/*改变标题下内容区域的隐藏显示*/
createBookCategoryListUI.showTitileContent = function (myparent,obj) {
    for (var i =0; i < myparent.titleArray.length; i++) {
        var className1 = (myparent.titleArray[i].code == obj.code) ? "" : "book_hidden";
        var ctrl = getElementByCode(myparent.titleArray[i].code, myparent.titleArray);
        ctrl.className = className1;
        if(i==obj.code){
            myparent.myCategory=obj.code;
        }
    }
};