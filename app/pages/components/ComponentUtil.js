function ComponentUtil() { };

/**
 * 返回组件
 * 
*/
ComponentUtil.CreateReturnComponent = function (title, rightElement) {

    //<div class="header">
    //    <div class="header_box">
    //        <div class="header_left">&lt;</div>
    //        <div class="header_middle">意见反馈</div>
    //        <div class="header_right">提交</div>
    //    </div>
    //</div>
    var ReturnComponent = Elf.controls({
        name: "div",
        className: "headerBar"
    });
    var headerContainer = Elf.createChild(ReturnComponent, {
        name: "div",
        className: "headerBarContainer hFlex"
    });
    ReturnComponent.GoBack = Elf.createChild(headerContainer, {
        name: "div",
        className: "headerBar-left hFlex perpendicularCenter"
    });
    Elf.createChild(ReturnComponent.GoBack, {
        name: "img",
        initProps: { src: "img/common/toBack.svg" }
    });

    ReturnComponent.NoticeTypeName = Elf.createChild(headerContainer, {
        name: "div",
        className: "headerBar-middle hFlex parallelCenter perpendicularCenter",
        initProps: { innerHTML: title }
    });
    ReturnComponent.RightElement = Elf.createChild(headerContainer, {
        name: "div",
        className: "headerBar-right hFlex perpendicularCenter parallelEnd"
    });
    if (rightElement != undefined) {
        ReturnComponent.RightElement.innerHTML = rightElement;
    }

    return ReturnComponent;
}
/**
 * 加载更多 需要一个可以滚动的div 如：<div class="container"></div>
 * @param {} callback 
 * @returns {} 
 */
ComponentUtil.ScrollPagination = function (scrollDiv, startIndex, callback) {


    if (scrollDiv == undefined) {
        return;
    }
    var _this=this;
    _this.options = {};
    _this.options.PageIndex = startIndex;
    _this.options.IsExistMoreData = true;

    //初始化
    var init = function () {
        scrollDiv.IsLoadingData = false;
    };

    var handler = function () {
        if (scrollDiv.scrollTop + scrollDiv.clientHeight >= scrollDiv.scrollHeight - 10) {
            if (!scrollDiv.IsLoadingData) {
                scrollDiv.IsLoadingData = true;
                //为了防止重复执行，需要在回调函数执行完毕后设置IsLoadData=
                callback.call(_this,_this.options);
            }
        };
    }
    scrollDiv.removeEventListener("scroll", handler, false);
    scrollDiv.addEventListener("scroll", handler, false);


    //初始化
    this.ReSet = function () {
        _this.options.PageIndex = startIndex;
        _this.options.IsExistMoreData = true;
        scrollDiv.IsLoadingData = false;
        //console.info("ReSet PageIndex："+ _this.options.PageIndex);
    }
    //加载完成
    this.SetLoadingFinished = function (isExistMore) {
        _this.options.PageIndex += 1;
        _this.options.IsExistMoreData = isExistMore;
        scrollDiv.IsLoadingData = false;
        //console.info("SetLoadingFinished PageIndex："+ _this.options.PageIndex+",isExistMore："+isExistMore);
    }

    //筛选页过来，事件丢失，需要重新绑定
    this.ReBindEvent = function () {
        scrollDiv.removeEventListener("scroll", handler, false);
        scrollDiv.addEventListener("scroll", handler, false);
    }
    //console.info("PageIndex："+ _this.options.PageIndex);

    init();
}


ComponentUtil.ScrollPaginationBF = function (scrollDiv, startIndex, callback) {

    if (scrollDiv == undefined) {
        return;
    }

    var options = {};
    options.PageIndex = startIndex;
    options.IsExistMoreData = true;

    //初始化
    var init = function () {
        scrollDiv.IsLoadingData = false;
    };

    var handler = function () {
        if (scrollDiv.scrollTop + scrollDiv.clientHeight >= scrollDiv.scrollHeight - 10) {
            if (!scrollDiv.IsLoadingData) {
                scrollDiv.IsLoadingData = true;
                //为了防止重复执行，需要在回调函数执行完毕后设置IsLoadData=
                callback(options);
            }
        };
    }
    scrollDiv.removeEventListener("scroll", handler, false);
    scrollDiv.addEventListener("scroll", handler, false);


    //初始化
    this.ReSet = function () {
        options.PageIndex = startIndex;
        options.IsExistMoreData = true;
        scrollDiv.IsLoadingData = false;
    }
    //加载完成
    this.SetLoadingFinished = function (isExistMore) {
        options.PageIndex += 1;
        options.IsExistMoreData = isExistMore;
        scrollDiv.IsLoadingData = false;
    }

    //筛选页过来，事件丢失，需要重新绑定
    this.ReBindEvent = function () {
        scrollDiv.removeEventListener("scroll", handler, false);
        scrollDiv.addEventListener("scroll", handler, false);
    }

    init();
}



/**
 * 搜索条
 * @returns {} 
 */
ComponentUtil.CreateSearchBar = function () {
    var ui = Elf.controls({ name: "div", className: "searchbar" });
    ui.btnCancel = Elf.createChild(ui, { name: "a", className: "searchbar-cancel", initProps: { innerHTML: "取消" } });
    var rowcontainer = Elf.createChild(ui, { name: "div", className: "search-input" });
    var form1 = Elf.createChild(rowcontainer, { name: "form", initProps: { action: "javascript:var a=1;" } });

    ui.SearchButton = Elf.createChild(form1, { name: "label", className: "icon icon-search", initProps: { "for": "search" } });
    ui.SearchText = Elf.createChild(form1, { name: "search", initProps: { placeholder: "输入关键字...", id: "search" } });
    ui.SearchButton.setAttribute("for", "search");
    //获取焦点
    ui.SearchText.addEventListener("focus", function () {
        ComponentUtil.addClass(ui, "searchbar-active");
    });
    ui.SearchText.addEventListener("blur", function () {
        ComponentUtil.removeClass(ui, "searchbar-active");
    });
    //点击
    ui.btnCancel.addEventListener("click", function () {
        ui.SearchText.value = "";
        ComponentUtil.removeClass(ui, "searchbar-active");
    });
    return ui;
};

//针对class 添加 删除
ComponentUtil.hasClass = function (elements, cName) {
    return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
};
ComponentUtil.addClass = function (elements, cName) {
    if (!ComponentUtil.hasClass(elements, cName)) {
        elements.className += " " + cName;
    };
};
ComponentUtil.removeClass = function (elements, cName) {
    if (ComponentUtil.hasClass(elements, cName)) {
        elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
    };
};


/**
 * 创建头部
 * @param {} options ={leftIcon:"左侧图标CSS",leftText:"左侧文字",title:"标题",rightIcon:"右侧图标CSS",rightIcon:"右侧文字"};  
 * 参数所有都时可选
 * @returns {} 
 */
ComponentUtil.CreateHeader = function (options) {
    var header = Elf.controls({ name: "header", className: "bar bar-nav" });

    //左侧图标文字
    if ((options.leftIcon != undefined) || (options.leftText != undefined)) {
        header.left = Elf.createChild(header, {
            name: "a",
            className: "button button-link button-nav pull-left"
        });
        if (options.leftIcon != undefined) {
            header.leftIcon = Elf.createChild(header.left, { name: "span", className: "icon " + options.leftIcon, initProps: { innerHTML: "&nbsp;" } });
        }
        if (options.leftText != undefined) {
            header.leftText = document.createTextNode(options.leftText);
            header.left.appendChild(header.leftText);
        }
    }
    //右侧图标文字
    if ((options.rightIcon != undefined) || (options.rightText != undefined)) {
        header.right = Elf.createChild(header, {
            name: "a",
            className: "button button-link button-nav pull-right book_titleTxt"
        });
        if (options.rightText != null) {
            header.rightText = document.createTextNode(options.rightText);
            header.right.appendChild(header.rightText);
        }
        if (options.rightIcon != undefined) {
            header.rightIcon = Elf.createChild(header.right, { name: "span", className: "icon " + options.rightIcon, initProps: { innerHTML: "&nbsp;" } });
        }
    }

    var midText = options.title == undefined ? "" : options.title;
    //中间文字
    header.Title = Elf.createChild(header, { name: "h1", className: "title book_titleTxt", initProps: { innerHTML: midText } });
    return header;
};

/**
 * 创建弹出选择下拉框
 * @param {} dataSource 数据源 json格式 [{code:"编码",name:"名称"},{code:"编码n",name:"名称n"}]
 * @param {} callback 回调函数
 * @returns {} 
 */
ComponentUtil.CreateDroplistDialog = function (dataSource, callback) {
    var dialog = Elf.controls({
        name: "div",
        className: "dropdialog-container hidden"
    });
    var ul = Elf.createChild(dialog, {
        name: "ul"
    });
    Elf.algorithm.iterateValues({
        collection: dataSource,
        handler: function (item) {
           var li=  Elf.createChild(ul, {
                name: "li",
                initProps: { innerHTML: item.name }
            });
           li.code = item.code;
           Elf.xEvents.onXClick(li, function () {
               commonLogic.addClass(dialog, "hidden");
                if (callback != undefined) {
                    callback(item.code);
                }
            });
        }
    });
    return dialog;
};

/**
 * 创建头部搜索栏
 * @param {} options ={leftIcon:"左侧图标CSS",leftText:"左侧文字",title:"搜索标题",rightIcon:"右侧图标CSS",rightIcon:"右侧文字"};
 * 参数所有都时可选
 * @returns {}
 */
ComponentUtil.CreateHeaderSearch = function (options) {
    var header = Elf.controls({ name: "header", className: "bar bar-nav" });

    //左侧图标文字
    if ((options.leftIcon != undefined) || (options.leftText != undefined)) {
        header.left = Elf.createChild(header, {
            name: "a",
            className: "button button-link button-nav pull-left"
        });
        if (options.leftIcon != undefined) {
            header.leftIcon = Elf.createChild(header.left, { name: "span", className: "icon " + options.leftIcon, initProps: { innerHTML: "&nbsp;" } });
        }
        if (options.leftText != undefined) {
            header.leftText = document.createTextNode(options.leftText);
            header.left.appendChild(header.leftText);
        }
    }
    //右侧图标文字
    if ((options.rightIcon != undefined) || (options.rightText != undefined)) {
        header.right = Elf.createChild(header, {
            name: "a",
            className: "button button-link button-nav pull-right book_titleTxt"
        });
        if (options.rightText != null) {
            header.rightText = document.createTextNode(options.rightText);
            header.right.appendChild(header.rightText);
        }
        if (options.rightIcon != undefined) {
            header.rightIcon = Elf.createChild(header.right, { name: "span", className: "icon " + options.rightIcon, initProps: { innerHTML: "&nbsp;" } });
        }
    }

    //中间
    var midText = options.title == undefined ? "" : options.title;
    header.Title = Elf.createChild(header, { name: "div", className: "searchbar"});
    var rowcontainer = Elf.createChild(header.Title, { name: "div", className: "search-input book_border" });
    var form1 = Elf.createChild(rowcontainer, { name: "form", initProps: { action: "javascript:var a=1;" } });

    header.Title.SearchButton = Elf.createChild(form1, { name: "label", className: "icon icon-search", initProps: { "for": "search" } });
    header.Title.SearchText = Elf.createChild(form1, { name: "text", initProps: { placeholder: "请输入书名、作者名", id: "search" } });
    header.Title.SearchButton.setAttribute("for", "search");

    if(""!=midText){
        header.Title.SearchText.placeholder = midText;
    }

    //获取焦点
    //header.Title.SearchText.addEventListener("focus", function () {
    //    commonLogic.addClass(header.Title, "searchbar-active");
    //});
    //header.Title.SearchText.addEventListener("blur", function () {
    //    commonLogic.removeClass(header.Title, "searchbar-active");
    //});
    return header;


};

ComponentUtil.getElementByCode = function (code, arr) {
    var targetItem = null;
    Elf.algorithm.iterateValues({
        collection: arr,
        handler: function (item) {
            if (item["code"] == code) {
                targetItem = item;
            }
        }
    });
    return targetItem;
}


/*底部单个按钮*/
ComponentUtil.createSingleDownloadBtn = function (txt){
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

/*下载*/
ComponentUtil.createMySingleDownloadBtn = function (){
    var ui = Elf.createChild(BOOK.ui, {
        name : "nav",
        className: "book_bar book_bar_tab"
    });
    BOOK.ui.downloadBtnTxt = Elf.createChild(ui, {
        name : "a",
        className : "tab-item external book_btnTxt",
        initProps: {
            innerHTML: "下载中"
        }
    });
};