/*图书分类列表*/
function createBookClassifyUI(depth) {

    var mainPage = Elf.controls({
        name: "div", className: "book_container"
    });

    var header = ComponentUtil.CreateHeader({ leftIcon: "icon-left2", title: "分类列表", rightIcon: "icon-mydetail"});
    mainPage.appendChild(header);


    var myContents = Elf.createChild(mainPage, {
        name : "div", className: "book_content"
    });

    var args={serviceModule:BOOK.serviceModule,serviceNumber:'0400000', token: BOOK.token,args:{
        type:"0",platform:BOOK.platform
    }};
    commonLogic.serviceCaller(args,function(data){
        try{
            if(data.flag=="false"){
                alert(data.error);
            }else{
                var as = createBookClassifyUI.getClassifyContentUI(depth,data.result.books);
                myContents.appendChild(as);
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
    Elf.xEvents.onXClick(header.right,function(){
        var args={ url: BOOK.searchPath};
        WebCallApp("CmdOpenUrl",args);
        //BOOK.OpenNewPage(createHotSearchUI(depth+1), depth+1);
    });
    return mainPage;
};

createBookClassifyUI.getClassifyContentUI = function (depth,data){
    var ui = Elf.controls({ name: "hDiv", className: "_010_contentZone" });
    var leftZone = Elf.createChild(ui, {
        name: "vDiv",
        className: "_010_leftZone"
    });
    var rightZone = Elf.createChild(ui, {
        name: "vDiv",
        className: "_010_rightZone book_background"
    });

    ui.leftDataArray = [];
    Elf.algorithm.iterateValues({
        collection: data,
        handler: function (item) {
            var leftCol = Elf.createChild(leftZone, {
                name: "span",
                className: "_010_leftRow",
                initProps: {
                    innerHTML: item.name
                }
            });
            leftCol.code = item.code;
            ui.leftDataArray.push(leftCol);

            if(item.index==1){
                createBookClassifyUI.changeLeftZone(rightZone, ui, leftCol, item, depth);
            }

            Elf.xEvents.onXClick(leftCol, function () {
                createBookClassifyUI.changeLeftZone(rightZone, ui, leftCol, item, depth);
            });
        }
    });
    return ui;
};

/*改变左侧分类颜色*/
createBookClassifyUI.changeClassifyColor = function (myparent,obj) {
    //Elf.utils.each(myparent.leftDataArray,function(index,item){
    //    Elf.utils.addClass(obj,"_010_selectedleftRow");
    //    Elf.utils.removeClass(Elf.utils.siblings(obj),"_010_selectedleftRow");
    //});
    for (var i =0; i < myparent.leftDataArray.length; i++) {
        var className1 = (myparent.leftDataArray[i].code == obj.code) ? "_010_leftRow _010_selectedleftRow" : "_010_leftRow";
        var ctrl = getElementByCode(myparent.leftDataArray[i].code, myparent.leftDataArray);
        ctrl.className = className1;
        if(myparent.leftDataArray[i].code==obj.code){
            myparent.myCategory=obj.code;
        }
    }
};

/*改变右侧种类颜色*/
createBookClassifyUI.changeCategoryColor = function (myparent,obj) {
    for (var i =0; i < myparent.rightDataArray.length; i++) {
        var className1 = (myparent.rightDataArray[i].code == obj.code) ? "_010_rightCol _010_selectedRightCol" : "_010_rightCol";
        var ctrl = getElementByCode(myparent.rightDataArray[i].code, myparent.rightDataArray);
        ctrl.className = className1;
        if(i==obj.code){
            myparent.myCategory=obj.code;
        }
    }
};

getElementByCode = function (id, arr){
    var targetItem = null;
    Elf.algorithm.iterateValues({
        collection: arr,
        handler: function (item) {
            if (item["code"] == id) {
                targetItem = item;
            }
        }
    });
    return targetItem;
};

createBookClassifyUI.changeLeftZone = function (rightZone, ui, leftCol, item, depth){
    //createBookClassifyUI.changeClassifyColor(ui, item);
    createBookClassifyUI.changeClassifyColor(ui, leftCol);
    rightZone.innerHTML = "";
    var totalCount=0;
    var rightRow = Elf.createChild(rightZone, {
        name: "hDiv",className: "book_rowInfos"
    });
    ui.rightDataArray = [];
    Elf.algorithm.iterateValues({
        collection: item.datas,
        handler: function (item2) {
            if(totalCount%3 == 0 && totalCount != 0){
                rightRow = Elf.createChild(rightZone, {
                    name: "hDiv",className: "book_rowInfos"
                });
            }
            var rightCol = Elf.createChild(rightRow, {
                name: "span",
                className: "_010_rightCol",
                initProps: {
                    innerHTML: item2.name
                }
            });
            rightCol.code = item2.code;
            ui.rightDataArray.push(rightCol);
            totalCount++;
            Elf.xEvents.onXClick(rightCol, function () {
                //createBookClassifyUI.changeCategoryColor(ui, item2);
                createBookClassifyUI.changeCategoryColor(ui, rightCol);
                var paramsJson = {code : item2.code,name : item2.name};
                BOOK.OpenNewPage(createSubCategoryListUI(depth+1,paramsJson), depth+1);
            });
        }
    });
};
