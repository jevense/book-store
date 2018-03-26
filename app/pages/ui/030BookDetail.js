/*图书详情页面*/
function createBookDetailUI(depth,bookId) {

    WebCallApp("GetAPPVersion",{},function(result){
        BOOK.systemVersion = result.result.appVersion;
    },window,false);

    var mainPage = Elf.controls({
        name: "div", className: "book_container"
    });
    var header = "";
    if(BOOK.detailBtnShow=="1"){
        header = ComponentUtil.CreateHeader({ leftIcon: "", title: "图书详情", rightText: ""});
    }else{
        header = ComponentUtil.CreateHeader({ leftIcon: "icon-left2", title: "图书详情", rightText: ""});
    }
    mainPage.appendChild(header);
/*
    var btnDiv = Elf.createChild(mainPage, {
        name : "nav",
        className: "book_bar book_bar_tab"
    });
    var btnTxt = Elf.createChild(btnDiv, {
        name : "a",
        className : "tab-item external book_btnTxt"
    });
*/

    createBookDetailUI.depth = depth;
    createBookDetailUI.bookId = bookId;
    mainPage.myContents = Elf.createChild(mainPage, {
        name : "div", className: "_030_bookContentBottom _030_book_content"
    });

    var args={serviceModule:BOOK.serviceModule,serviceNumber:'0201000',token: BOOK.token, args:{
        id:bookId,uuid:BOOK.uuid
    }};
    commonLogic.serviceCaller(args,function(data){
        try{
            if(data.flag=="false"){
                var args={ logoutType: "E012"};
                WebCallApp("UserLogout",args);
            }else{
                if(undefined != data.result.textbook && ""!=data.result.textbook){
                    BOOK.textbook = data.result.textbook;
                    BOOK.bookSet = data.result.bookSet;
                }
                BOOK.buyStatus = data.result.buyStatus;
                BOOK.path = data.result.path;
                var argsGet={ isbn: data.result.isbn};
                WebCallApp("GetBookState",argsGet);
                createBookDetailUI.createContent(data,mainPage);
            }
        }catch(err){
            var args={ logoutType: "E012"};
            WebCallApp("UserLogout",args);
        }
    });

    Elf.xEvents.onXClick(header.left, function () {
        if(BOOK.detailBtnShow!="1"){
            if(BOOK.homeType == "bookDetail" && BOOK.resourceType == "0"){
                WebCallApp("CmdGoBack");
            }else{
                BOOK.GoBackPage(depth);
            }
        }
    });

    return mainPage;
};

/*书籍基本信息*/
createBookDetailUI.createBookBaseInfos = function (data){
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
        //className:"mine_quality_bookAuthor",
        className:"_030_bookName",
        initProps: {
            innerHTML: data.name
        }
    });
    var bookPrice = Elf.createChild(col2Zone, {
        name: "div",
        className:"mine_quality_bookAuthor"
        //initProps: {
        //    innerHTML: "<span class='_030_bookColor'>" +data.price+"</span>"+" 阅点 " + "<span class='_030_bookPoint'>" +"("+data.originPrice + "阅点)"+"</span>"
        //}
    });
    if(data.bookSet=="1"){
        if(data.textbook=="1"){
            bookPrice.innerHTML = "<span class='_030_bookColor'>" +data.price+"</span>"+" 阅点 " + "<span class='_030_bookPoint'>" +"("+data.originPrice + "阅点)"+"</span>";
        }else{
            if(data.textbookType=="0"){
                bookPrice.innerHTML = "<span class='_030_bookColor'>" +data.price+"</span>"+" 阅点 " + "<span class='_030_bookPoint'>" +"("+data.originPrice + "阅点)"+"</span>";
            }else{
                bookPrice.innerHTML = "<span class='_030_bookColor'>" +data.price+"</span>"+" 阅点 ";
            }
        }
    }else{
        bookPrice.innerHTML = "<span class='_030_bookColor'>" +data.price+"</span>"+" 阅点 ";
    }
    var bookEditorr = Elf.createChild(col2Zone, {
        name: "div",
        className:"mine_quality_bookAuthor"
    });
    if(data.bookSet=="1"){
        if(data.textbook=="1"){
            bookEditorr.innerHTML = "作者："+data.author
        }else{
            if(data.textbookType == '3'){
                bookEditorr.innerHTML = "总编辑："+data.chiefEditor;
                var bookEditorr2 = Elf.createChild(col2Zone, {
                    name: "div",
                    className:"mine_quality_bookAuthor",
                    initProps: {
                        innerHTML: "执行总编辑："+ data.executiveEditor
                    }
                });
            }else{
                bookEditorr.innerHTML = "主编："+data.editor
            }
        }
    }else{
        bookEditorr.innerHTML = "作者："+data.author
    }

    var bookSize = Elf.createChild(col2Zone, {
        name: "div",
        className:"mine_quality_bookAuthor",
        initProps: {
            innerHTML: "大小："+ data.size +"MB"
        }
    });
    var type = Elf.createChild(col2Zone, {
        name: "div",
        className:"mine_quality_bookAuthor",
        initProps: {
            innerHTML: "图书类型："+commonLogic.getNameByCodeInArray(data.textbook,staticData.bookType)
        }
    });
    var publishingAgency = "";
    if (data.publishingAgency.length > 10) {
        publishingAgency = data.publishingAgency.substr(0, 9) + "...";
    }else{
        publishingAgency = data.publishingAgency;
    }
    var publishAgency = Elf.createChild(col2Zone, {
        name: "div",
        className:"mine_quality_bookAuthor",
        initProps: {
            innerHTML: "出版机构："+data.publishingAgency
        }
    });
    return ui;
};


/*内容简介,flag:false不显示内容,true显示内容*/
createBookDetailUI.createBookBriefSummary = function (title,data,flag){
    var ui = Elf.controls({ name: "vDiv", className: "book_background _030_bookMargin" });
    Elf.createChild(ui, { name: "div", className: "_030_bookBrief_title", initProps: { innerHTML: title } });
    if(flag){
        Elf.createChild(ui, { name: "div", className: "_030_bookBrief_content", initProps: { innerHTML: data } });
    }else{
        Elf.createChild(ui, { name: "div", className: "_030_bookBrief_content", initProps: { innerHTML: "" } });
    }
    return ui;
};

/*底部单个按钮*/
createBookDetailUI.createSingleBtn = function (txt){
    var ui = Elf.controls({ name: "nav", className: "book_bar book_bar_tab" });
    ui.btnTxt = Elf.createChild(ui, {
        name : "a",
        className : "tab-item external book_btnTxt",
        initProps: {
            innerHTML: txt
        }
    });
    return ui;
};

/*内容显示*/
createBookDetailUI.createContent = function (data,mainPage){
    var bookBaseInfoRow = createBookDetailUI.createBookBaseInfos(data.result);
    mainPage.myContents.appendChild(bookBaseInfoRow);
    var bookBrief = createBookDetailUI.createBookBriefSummary("简介",data.result.abstracts,true);
    mainPage.myContents.appendChild(bookBrief);
    var showFlag = false;
    if(data.result.textbook=='0'){
        showFlag = true;
    }
    if(data.result.bookSet=="1" && showFlag){
        var bookCatalog = createBookDetailUI.createBookBriefSummary("目录",data.result.catalog,showFlag);
        mainPage.myContents.appendChild(bookCatalog);
    }
    BOOK.bookInfos = data.result;
    if(data.result.buyStatus=="1"){
        //var argsGet={ isbn: data.result.isbn};
        //WebCallApp("GetBookState",argsGet);
        if(BOOK.platform=='3'){ //pc端放开下载,暂改为3
            mainPage.readBtnTxt = "";
            if(data.result.bookSet=="0"){
                mainPage.readBtnTxt = createBookDetailUI.createSingleBtn(BOOK.promptMessage);
            }else{
                mainPage.readBtnTxt = createBookDetailUI.createSingleBtn("在线阅读");
            }

            mainPage.appendChild(mainPage.readBtnTxt);
            Elf.xEvents.onXClick(mainPage.readBtnTxt, function () {
                if(mainPage.readBtnTxt.btnTxt.innerHTML == "在线阅读"){
                    //var args={ url: BOOK.onlineReadPath+data.result.isbn};
                    //WebCallApp("CmdOpenUrl",args);
                    Elf.CallBackLookBook(BOOK.onlineReadPath+data.result.isbn);
                }
            });
        }else{
            if(data.result.bookSet=="0"){
                mainPage.btnDiv = createBookDetailUI.createSingleBtn(BOOK.promptMessage);
                mainPage.appendChild(mainPage.btnDiv);
            }else{
                if(data.result.textbook=="0"){
                    /*
                    mainPage.readBtnTxt = createBookDetailUI.createSingleBtn("在线阅读");
                    mainPage.appendChild(mainPage.readBtnTxt);
                    Elf.xEvents.onXClick(mainPage.readBtnTxt, function () {
                        var args={ url: BOOK.onlineReadPath+data.result.isbn};
                        WebCallApp("CmdOpenUrl",args);
                    });
                    */
                    if(BOOK.path.length>0){
                        if(BOOK.downloadState=='8'){
                            mainPage.readBtnTxt = createBookDetailUI.createSingleBtn("开始阅读");
                            mainPage.appendChild(mainPage.readBtnTxt);
                            Elf.xEvents.onXClick(mainPage.readBtnTxt, function () {
                                var args={ url: BOOK.onlineReadPath+data.result.isbn};
                                WebCallApp("CmdOpenUrl",args);
                            });
                        }else{
                            if(BOOK.systemVersion != '3.0.0'){
                                if(BOOK.downloadState=='1' || BOOK.downloadState=='2' || BOOK.downloadState=='3'){
                                    var btnDiv = Elf.createChild(mainPage, {
                                        name : "nav",
                                        className: "book_bar book_bar_tab"
                                    });
                                    mainPage.downloadBtnTxt = Elf.createChild(btnDiv, {
                                        name : "a",
                                        className : "tab-item external book_btnTxt"
                                    });
                                    if(BOOK.downloadState=='1'){
                                        mainPage.downloadBtnTxt.innerHTML = "等待";
                                    }else if(BOOK.downloadState=='3'){
                                        mainPage.downloadBtnTxt.innerHTML = "暂停";
                                    }else {
                                        mainPage.downloadBtnTxt.innerHTML = "下载中";
                                    }
                                }else{
                                    var btnDiv = Elf.createChild(mainPage, {
                                        name : "hDiv",
                                        className: "_030_addBottomZone"
                                    });
                                    mainPage.downloadBtnTxt = Elf.createChild(btnDiv, {
                                        name : "div",
                                        className : "parallelCenter perpendicularCenter _030_downloadBtnTxt",
                                        initProps : {
                                            innerHTML : "立即下载"
                                        }
                                    });
                                    var readBtnTxt = Elf.createChild(btnDiv, {
                                        name : "div",
                                        className : "parallelCenter perpendicularCenter _030_downloadBtnTxt",
                                        initProps : {
                                            innerHTML : "在线阅读"
                                        }
                                    });
                                    Elf.xEvents.onXClick(mainPage.downloadBtnTxt, function () {
                                        if(mainPage.downloadBtnTxt.innerHTML == "立即下载"){
                                            var args={ id:data.result.id,nonWifi:"0"};
                                            WebCallApp("GetNetworkState",{},function(result){
                                                if(result.result.network=="2"){
                                                    Elf.components.confirm({
                                                        title:'<div class="_030_confirmTxt">'+"正在使用非Wi-Fi网络下载"+'</div>',
                                                        text:'<div class="_030_confirmTxt">'+"非Wi-Fi下载将产生流量费用"+'</div>',
                                                        minWidth:"240px",
                                                        buttons:{
                                                            "确定":function(){
                                                                args.nonWifi="1",
                                                                    WebCallApp("downloadBsBook",args);
                                                                mainPage.downloadBtnTxt.innerHTML = "下载中";
                                                                mainPage.removeChild(btnDiv);
                                                                ComponentUtil.createMySingleDownloadBtn();
                                                            },
                                                            "取消":function(){}
                                                        }
                                                    });
                                                }else if(result.result.network=="0"||result.result.network=="1"){
                                                    Elf.components.toast({text:"当前无网络"});
                                                }else{
                                                    //wifi
                                                    WebCallApp("downloadBsBook",args);
                                                    mainPage.downloadBtnTxt.innerHTML = "下载中";
                                                    mainPage.removeChild(btnDiv);
                                                    ComponentUtil.createMySingleDownloadBtn();
                                                }
                                            });
                                        }
                                    });
                                    Elf.xEvents.onXClick(readBtnTxt, function () {
                                        var args={ url: BOOK.onlineReadPath+data.result.isbn};
                                        WebCallApp("CmdOpenUrl",args);
                                    });
                                }
                            }else{
                                mainPage.readBtnTxt = createBookDetailUI.createSingleBtn("在线阅读");
                                mainPage.appendChild(mainPage.readBtnTxt);
                                Elf.xEvents.onXClick(mainPage.readBtnTxt, function () {
                                    var args={ url: BOOK.onlineReadPath+data.result.isbn};
                                    WebCallApp("CmdOpenUrl",args);
                                });
                            }
                        }
                    }else{
                        mainPage.readBtnTxt = createBookDetailUI.createSingleBtn("在线阅读");
                        mainPage.appendChild(mainPage.readBtnTxt);
                        Elf.xEvents.onXClick(mainPage.readBtnTxt, function () {
                            var args={ url: BOOK.onlineReadPath+data.result.isbn};
                            WebCallApp("CmdOpenUrl",args);
                        });
                    }


                }else if(data.result.textbook=="1"){
                    mainPage.downloadBtnTxt = createBookDetailUI.createSingleBtn("立即下载");
                    mainPage.appendChild(mainPage.downloadBtnTxt);
                    Elf.xEvents.onXClick(mainPage.downloadBtnTxt, function () {
                        if(mainPage.downloadBtnTxt.btnTxt.innerHTML=='立即下载'){
                            //var args={ datas:data.result};
                            var args={ id:data.result.id};
                            WebCallApp("downloadBsBook",args);
                            mainPage.downloadBtnTxt.btnTxt.innerHTML = "下载中";
                        }
                    });
                }else{
                    mainPage.btnDiv = createBookDetailUI.createSingleBtn(BOOK.promptMessage);
                    mainPage.appendChild(mainPage.btnDiv);
                }
            }
        }
    }else{
        mainPage.downloadBtnTxt = Elf.createChild(mainPage, {
            name : "nav",
            className: "book_bar book_bar_tab"
        });
        mainPage.downloadBtnTxt.btnTxt = Elf.createChild(mainPage.downloadBtnTxt, {
            name : "a",
            className : "tab-item extern    al book_btnTxt"
        });
        mainPage.downloadBtnTxt.btnTxt.innerHTML = "立即购买";
        Elf.xEvents.onXClick(mainPage.downloadBtnTxt.btnTxt, function () {
            if(mainPage.downloadBtnTxt.btnTxt.innerHTML == "立即购买"){
                BOOK.bookIdOrder = data.result.id;
                var args={serviceModule:BOOK.serviceModule,serviceNumber:'0201100',token: BOOK.token, args:{
                    bookId:data.result.id,platform:BOOK.platform,uuid:BOOK.uuid
                }};
                commonLogic.serviceCaller(args,function(data2){
                    if(data2.flag=="false"){
                        alert(data2.error);
                    }else{
                        BOOK.orderDepth = createBookDetailUI.depth+1;
                        APPCommendReBackHandlers.push(createBookOrderUI(data2,createBookDetailUI.depth+1,data.result.id));
                        BOOK.OpenNewPage(createBookOrderUI(data2,createBookDetailUI.depth+1,data.result.id), createBookDetailUI.depth+1);
                    }
                });
                //BOOK.OpenNewPage(createBookOrderUI(createBookDetailUI.depth+1,data.result.id), createBookDetailUI.depth+1);
            }
        });
    }
};
