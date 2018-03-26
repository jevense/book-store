function componentUtils(parameters) {

};



/**
 * 页面标题栏(左右图片)
 *
 */
componentUtils.createHeaderImageComponent = function (leftText,centerText,rightImage) {

    var returnComponent = Elf.controls({
        name: "hDiv",
        className:"header perpendicularCenter"
    });
    returnComponent.leftZone= Elf.createChild(returnComponent, {
        name: "div",
        className: "header_left hFlex perpendicularCenter"
    });


    returnComponent.leftName= Elf.createChild(returnComponent.leftZone, {
        name: "div",
        className: "nav_left"
    });
    returnComponent.leftName.setImg = function (src) {
        returnComponent.leftNameImage = Elf.createChild(returnComponent.leftName, {
            name: "img",
            //className: "hFlex perpendicularCenter home_headerBar_backImage",
            initProps: {
                src: src
            }
        });
    };
    returnComponent.leftName.setImg("img/arrowWhiteback.svg");




    var centerContainer = Elf.createChild(returnComponent, {
        name: "hDiv",
        className: "header_middle hFlex perpendicularCenter parallelCenter"
    });
    returnComponent.centerName = Elf.createChild(centerContainer, {
        name: "div",
        className: "parallelCenter perpendicularCenter",
        initProps: { innerHTML: centerText }
    });
    returnComponent.searchImg= Elf.createChild(centerContainer, {
        name: "div",
        className: "parallelCenter perpendicularCenter"
    });

    returnComponent.rightName= Elf.createChild(returnComponent, {
        name: "hDiv",
        className:"book_header_right parallelCenter perpendicularCenter"
    });
    returnComponent.rightName.setImg = function (src) {
        returnComponent.rightImage = Elf.createChild(returnComponent.rightName, {
            name: "img",
            //className: "home_headerBar_image",
            initProps: {
                src: src
            }
        });
    };
    returnComponent.rightName.setImg(rightImage);


    return returnComponent;

};




componentUtils.createHeaderImageComponent2 = function (leftText,centerText,rightImage) {

    var returnComponent = Elf.controls({
        name: "hDiv",
        className:"book_header parallelCenter perpendicularCenter"
    });
    returnComponent.leftZone= Elf.createChild(returnComponent, {
        name: "div",
        className: "home_headerBar_leftZone"
    });

    returnComponent.leftName= Elf.createChild(returnComponent.leftZone, {
        name: "div",
        className: "home_headerBar_backZone"
    });
    returnComponent.leftName.setImg = function (src) {
        returnComponent.leftNameImage = Elf.createChild(returnComponent.leftName, {
            name: "img",
            className: "hFlex perpendicularCenter home_headerBar_backImage",
            initProps: {
                src: src
            }
        });
    };
    returnComponent.leftName.setImg("img/arrowWhiteback.svg");

    var centerContainer = Elf.createChild(returnComponent, {
        name: "hDiv",
        className: "parallelCenter perpendicularCenter book_header_center"
    });
    returnComponent.centerName = Elf.createChild(centerContainer, {
        name: "div",
        className: "parallelCenter perpendicularCenter header_font",
        initProps: { innerHTML: centerText }
    });
    returnComponent.searchImg= Elf.createChild(centerContainer, {
        name: "div",
        className: "parallelCenter perpendicularCenter"
    });

    returnComponent.rightName= Elf.createChild(returnComponent, {
        name: "hDiv",
        className:"book_header_right parallelCenter perpendicularCenter"
    });
    returnComponent.rightName.setImg = function (src) {
        returnComponent.rightImage = Elf.createChild(returnComponent.rightName, {
            name: "img",
            className: "home_headerBar_image",
            initProps: {
                src: src
            }
        });
    };
    returnComponent.rightName.setImg(rightImage);
    return returnComponent;
};



/**
 * 通用标题栏(纯文字)
 *
 */
componentUtils.createTextHeaderComponent = function (leftText,centerText,rightText) {
    var returnComponent = Elf.controls({
        name: "hDiv",
        className:"book_header parallelCenter perpendicularCenter"
    });
    returnComponent.leftZone= Elf.createChild(returnComponent, {
        name: "div",
        className: "home_headerBar_leftZone"
    });

    returnComponent.leftName= Elf.createChild(returnComponent.leftZone, {
        name: "div",
        className: "home_headerBar_backZone"
    });
    returnComponent.leftName.setImg = function (src) {
        returnComponent.leftNameImage = Elf.createChild(returnComponent.leftName, {
            name: "img",
            className: "hFlex perpendicularCenter home_headerBar_backImage",
            initProps: {
                src: src
            }
        });
    };
    returnComponent.leftName.setImg("img/arrowWhiteback.svg");

    var centerContainer = Elf.createChild(returnComponent, {
        name: "hDiv",
        className: "parallelCenter perpendicularCenter book_header_center"
    });
    returnComponent.centerName = Elf.createChild(centerContainer, {
        name: "div",
        className: "parallelCenter perpendicularCenter header_font",
        initProps: { innerHTML: centerText }
    });


    var rightContainer = Elf.createChild(returnComponent, {
        name: "hDiv",
        className: "parallelCenter perpendicularCenter book_header_right"
    });
    returnComponent.rightName = Elf.createChild(rightContainer, {
        name: "div",
        className: "parallelCenter perpendicularCenter header_font",
        initProps: { innerHTML: rightText }
    });

    return returnComponent;
};


/**
 * 标题栏(两个标签)
 * 未用
 */
componentUtils.createTwoTabHeaderComponent = function (leftText,rightText) {
    var returnComponent = Elf.controls({
        name: "hDiv",
        //className:"book_header parallelCenter perpendicularCenter"
        className:"header hFlex perpendicularCenter"
    });
    returnComponent.leftZone= Elf.createChild(returnComponent, {
        name: "div",
        className: "home_headerBar_leftZone"
    });

    returnComponent.leftName= Elf.createChild(returnComponent.leftZone, {
        name: "div",
        className: "home_headerBar_backZone"
    });
    returnComponent.leftName.setImg = function (src) {
        returnComponent.leftNameImage = Elf.createChild(returnComponent.leftName, {
            name: "img",
            className: "hFlex perpendicularCenter home_headerBar_backImage",
            initProps: {
                src: src
            }
        });
    };
    returnComponent.leftName.setImg("img/arrowWhiteback.svg");


    var leftContainer = Elf.createChild(returnComponent, {
        name: "hDiv",
        className: "parallelCenter perpendicularCenter book_header_center"
    });
    returnComponent.centerName = Elf.createChild(leftContainer, {
        name: "div",
        className: "nav_middle_lt hFlex perpendicularCenter parallelCenter",
        initProps: { innerHTML: leftText }
    });

    var rightContainer = Elf.createChild(returnComponent, {
        name: "hDiv",
        className: "parallelCenter perpendicularCenter book_header_right"
    });
    returnComponent.rightName = Elf.createChild(rightContainer, {
        name: "div",
        className: "nav_middle_rt hFlex perpendicularCenter parallelCenters",
        initProps: { innerHTML: rightText }
    });

    return returnComponent;
};

componentUtils.validateStr = function (str){
    if(undefined == str || null==str || "null"==str){
        return ""
    }
    return str;
};

/*书籍基本信息*/
componentUtils.createBookBaseInfos = function (data,depth){
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
            var nameStr = item.name;
            //if(BOOK.clientType=="1" || BOOK.clientType=="2"){
                if(nameStr.length>11){
                    nameStr = nameStr.substring(0,11)+"...";
                }
            //}
            var bookName = Elf.createChild(col2Zone, {
                name: "div",
                className:"_040_bookName _040_bookTypeMargin2",
                initProps: {
                    innerHTML: nameStr
                }
            });
            var price = item.price;
            if(item.bookSet=='0' && item.isChannel=='0'){
                price = undefined==item.channelPrice?'':item.channelPrice;
            }
            var bookPrice = Elf.createChild(col2Zone, {
                name: "div",
                className:"_040_bookTxt _040_bookTypeMargin2"
                //initProps: {
                //    innerHTML: "<span class='_030_bookColor'>" +price+"</span>"+" 阅点 " + "<span class='_030_bookPoint'>" +"("+item.originPrice+ "阅点)"+"</span>"
                //}
            });
            if(item.bookSet=="1"){
                if(item.textbook=="1"){
                    bookPrice.innerHTML = "<span class='_030_bookColor'>" +price+"</span>"+" 阅点 " + "<span class='_030_bookPoint'>" +"("+item.originPrice+ "阅点)"+"</span>";
                }else{
                    if(item.textbookType=="0"){
                        bookPrice.innerHTML = "<span class='_030_bookColor'>" +price+"</span>"+" 阅点 " + "<span class='_030_bookPoint'>" +"("+item.originPrice+ "阅点)"+"</span>";
                    }else{
                        bookPrice.innerHTML = "<span class='_030_bookColor'>" +price+"</span>"+" 阅点 ";
                    }
                }
            }else{
                bookPrice.innerHTML = "<span class='_030_bookColor'>" +price+"</span>"+" 阅点 ";
            }
            var bookEditor = Elf.createChild(col2Zone, {
                name: "div",
                className:"_040_bookTxt _040_bookTypeMargin2"
            });
            var briefIntroduction = Elf.createChild(col2Zone, {
                name: "div",
                className:"_040_bookTxt _040_bookTypeMargin2",
                initProps: {
                    innerHTML: "图书类型："+commonLogic.getNameByCodeInArray(item.textbook,staticData.bookType)
                }
            });

            if(item.bookSet=="1"){
                if(item.textbook=="1"){
                    bookEditor.innerHTML = "作者："+componentUtils.validateStr(item.author)
                }else{
                    if(item.textbookType == '3'){
                        bookEditor.innerHTML = "总编辑："+componentUtils.validateStr(item.chiefEditor)
                    }else{
                        bookEditor.innerHTML = "主编："+componentUtils.validateStr(item.editor)
                    }
                }
            }else{
                bookEditor.innerHTML = "作者："+componentUtils.validateStr(item.author)
            }

            var briefIntroduction = Elf.createChild(col2Zone, {
                name: "div",
                className:"_040_bookTxt _040_bookTypeMargin2",
                initProps: {
                    innerHTML: "大小："+ componentUtils.validateStr(item.size) +"MB"
                }
            });
            Elf.xEvents.onXClick(rowUI, function () {
                //var argsGet={ isbn: item.isbn};
                //WebCallApp("GetBookState",argsGet);
                BOOK.ui = createBookDetailUI(depth+1,item.isbn);
                BOOK.OpenNewPage(BOOK.ui, depth+1);
                //BOOK.OpenNewPage(createBookDetailUI(depth+1,item.isbn), depth+1);
            });
        }});
    return ui;
}
