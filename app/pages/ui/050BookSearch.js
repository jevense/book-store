/*图书搜索页面*/
function createBookSearchUI(depth) {

    var mainPage = Elf.controls({
        name: "div", className: "book_container"
    });

    //var header = ComponentUtil.CreateHeader({ leftIcon: "icon-left2", title: "图书2", rightText: ""});
    var header = ComponentUtil.CreateHeaderSearch({ leftIcon: "icon-left2", title: "", rightText: "搜索"});
    mainPage.appendChild(header);

    var myContents = Elf.createChild(mainPage, {
        name : "div", className: "book_content"
    });

    createBookSearchUI.BooksUI = mainPage;
    createBookListUI.describe = tipinfo.type;
    createBookSearchUI.depth = depth;

    var as = createBookSearchUI.getBookOrderInfos(depth,staticData.recommendBooks);
    myContents.appendChild(as);

    Elf.xEvents.onXClick(header.left, function () {
        BOOK.GoBackPage(depth);
    });
    return mainPage;
};

/*书籍基本信息*/
createBookSearchUI.getBookOrderInfos = function (depth,data){
    var ui = Elf.controls({ name: "vDiv", className: "" });
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
                className:"_040_bookTxt",
                initProps: {
                    innerHTML: "<span class='_030_bookColor'>" +item.price+"</span>"+" 阅点：" + "<span class='_030_bookPoint'>" +item.accessPoint+ "阅点"+"</span>"
                }
            });
            var bookEditor = Elf.createChild(col2Zone, {
                name: "div",
                className:"_040_bookTxt",
                initProps: {
                    innerHTML: "主编："+item.editor
                }
            });
            var briefIntroduction = Elf.createChild(col2Zone, {
                name: "div",
                className:"_040_bookTxt",
                initProps: {
                    innerHTML: "简介："+item.profiles
                }
            });
            Elf.xEvents.onXClick(rowUI, function () {
                BOOK.OpenNewPage(createBookDetailUI(depth+1), depth+1);
            });
        }});
    return ui;
};






/*书籍信息*/
createBookSearchUI.FillBooksListData = function (data){
    var ui = componentUtils.createBookBaseInfos(data,createBookSearchUI.depth);
    createBookSearchUI.BooksUI.myContents.appendChild(ui);
};

/**
 * 加载更多
 */
createBookSearchUI.LoadMoreBooksListData = function (page) {
    if (!page.IsExistMoreData) {
        return;
    }
    var args={serviceModule:BOOK.serviceModule,serviceNumber:'0202000',token: BOOK.token, args:{
        pageSize:BOOK.PageSize,page:page.PageIndex,type:createBookListUI.describe
    }};
    commonLogic.serviceCaller(args, function (data) {
        if(data.flag=="false"){
            alert(data.error);
        }else{
            createBookSearchUI.FillBooksListData(data.result.books,false);
            var isExistMore = data.result.books.length > 0;
            createBookSearchUI.scrollLoading.SetLoadingFinished(isExistMore);
        }
    });
};
