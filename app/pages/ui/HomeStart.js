function initUI() {
    /*
    var args={serviceModule:"BS-Service",serviceNumber:'0200000',token: BOOK.token, args:{
        uuid: "1" //,pageSize:"10",page:"1"
    }};
    commonLogic.serviceCaller(args,function(data){
        var as = initMainUI(data.result);
        document.body.appendChild(as);
    });
    */
    var as = initMainUI();
    document.body.appendChild(as);
};

function initMainUI(bookData){
    BOOK.PageDepths = new Array();

    BOOK.ebook = Elf.controls({
        name : "div",
        className:"ebook_container"
    });
    BOOK.ebook.chooser = Elf.createChild(BOOK.ebook, {
        name : "div",
        className : "current_container full"
    });

    //隐藏工作区
    BOOK.ebook.waitingPage1 = Elf.createChild(BOOK.ebook, {
        name : "div",
        className : "waiting_container full"
    });
    BOOK.ebook.waitingPage2 = Elf.createChild(BOOK.ebook, {
        name : "div",
        className : "waiting_container full"
    });
    BOOK.ebook.waitingPage3 = Elf.createChild(BOOK.ebook, {
        name : "div",
        className : "waiting_container full"
    });
    BOOK.ebook.waitingPage4 = Elf.createChild(BOOK.ebook, {
        name : "div",
        className : "waiting_container full"
    });

    BOOK.ebook.waitingPage5 = Elf.createChild(BOOK.ebook, {
        name : "div",
        className : "waiting_container full"
    });
    BOOK.ebook.waitingPage6 = Elf.createChild(BOOK.ebook, {
        name : "div",
        className : "waiting_container full"
    });

    //var ui = createHomeUI(bookData);
    //BOOK.ebook.chooser.appendChild(ui);
    var ui = "";
    if(BOOK.homeType=="search"){
        ui = createHotSearchUI(2);
        BOOK.ebook.chooser.appendChild(ui);
    }else if(BOOK.homeType=="bookDetail"){
        /*
        ui = createBookDetailUI(2,BOOK.orderBookId);
        BOOK.ebook.chooser.appendChild(ui);
        */
        BOOK.ui = createBookDetailUI(2,BOOK.orderBookId);
        BOOK.ebook.chooser.appendChild(BOOK.ui);
    }else if(BOOK.homeType=="bookClassification"){
        ui = createBookClassifyUI(2);
        BOOK.ebook.chooser.appendChild(ui);
    }else if(BOOK.homeType=="singleTag"){
        ui = createBookFreeListUI(2,BOOK.titleName,BOOK.categoryType);
        BOOK.ebook.chooser.appendChild(ui);
    }else if(BOOK.homeType=="multipleTag"){
        ui = createBookCategoryListUI(2,BOOK.titleName,BOOK.categoryCode,BOOK.categoryType);
        BOOK.ebook.chooser.appendChild(ui);
    }else if(BOOK.homeType=="newArrival"){
        ui = createBookListUI(2,BOOK.titleName,BOOK.newArrivalType);
        BOOK.ebook.chooser.appendChild(ui);
    }else if(BOOK.homeType=="adBooksTag"){
        ui = createBookAdListUI(2,BOOK.titleName,BOOK.adid);
        BOOK.ebook.chooser.appendChild(ui);
    }else{
        var args={serviceModule:"BS-Service",serviceNumber:'0200000',token: BOOK.token, args:{
            platform:BOOK.platform
        }};
        commonLogic.serviceCaller(args,function(data){
            try{
                if(data.flag=="true"){
                    ui = createHomeUI(data.result);
                    BOOK.ebook.chooser.appendChild(ui);
                }else{
                    alert(data.error);
                }
            }catch(err){
                var args={ logoutType: "E012"};
                WebCallApp("UserLogout",args);
            }
        });
    }
    return BOOK.ebook;
};

/**
 *返回上一级
 */
BOOK.GoBackPage = function(depth, isRefresh) {
    if (depth == 7) {
        BOOK.effects.moveToRight(BOOK.ebook.waitingPage6);
    } else if (depth == 6) {
        BOOK.effects.moveToRight(BOOK.ebook.waitingPage5);
    } else if (depth == 5) {
        BOOK.effects.moveToRight(BOOK.ebook.waitingPage4);
    }else if (depth == 4) {
        BOOK.effects.moveToRight(BOOK.ebook.waitingPage3);
    } else if (depth == 3) {
        BOOK.effects.moveToRight(BOOK.ebook.waitingPage2);
    } else if (depth == 2) {
        BOOK.effects.moveToRight(BOOK.ebook.waitingPage1);
    }
    if (!isRefresh) {
        BOOK.PageDepths.pop();
    }
};

/**
 * 返回上级页面
 * @param {} subUI 生成的UI
 * @param {} depth 打开页面级次
 */
BOOK.OpenNewPage = function(subUI, depth) {
    BOOK.PageDepths.push(depth);
    if (depth == 2) {
        BOOK.ebook.waitingPage1.innerHTML = "";
        BOOK.ebook.waitingPage1.appendChild(subUI);
        BOOK.effects.moveToCentral(BOOK.ebook.waitingPage1);
    } else if (depth == 3) {
        BOOK.ebook.waitingPage2.innerHTML = "";
        BOOK.ebook.waitingPage2.appendChild(subUI);
        BOOK.effects.moveToCentral(BOOK.ebook.waitingPage2);
    } else if (depth == 4) {
        BOOK.ebook.waitingPage3.innerHTML = "";
        BOOK.ebook.waitingPage3.appendChild(subUI);
        BOOK.effects.moveToCentral(BOOK.ebook.waitingPage3);
    } else if (depth == 5) {
        BOOK.ebook.waitingPage4.innerHTML = "";
        BOOK.ebook.waitingPage4.appendChild(subUI);
        BOOK.effects.moveToCentral(BOOK.ebook.waitingPage4);
    } else if (depth == 6) {
        BOOK.ebook.waitingPage5.innerHTML = "";
        BOOK.ebook.waitingPage5.appendChild(subUI);
        BOOK.effects.moveToCentral(BOOK.ebook.waitingPage5);
    } else if (depth == 7) {
        BOOK.ebook.waitingPage6.innerHTML = "";
        BOOK.ebook.waitingPage6.appendChild(subUI);
        BOOK.effects.moveToCentral(BOOK.ebook.waitingPage6);
    }
};
