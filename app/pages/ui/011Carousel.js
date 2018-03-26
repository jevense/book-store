/*轮播图*/
function createCarouselUI(depth,data) {
    var mainPage = Elf.controls({
        name: "div", className: "_011_box"
    });
    mainPage.ulDiv = Elf.createChild(mainPage, {
        name : "ul", className: "_011_ul"
    });

    mainPage.olDiv = Elf.createChild(mainPage, {
        name : "ol", className: "_011_ol"
    });

    createCarouselUI.CarouselUI = mainPage;
    createCarouselUI.depth = depth;


    createCarouselUI.cur = 0; //定义一个变量用于设置left值
    createCarouselUI.timer = null; //定义一个计时器
    createCarouselUI.target = 0;
    createCarouselUI.timer1 = null;
    createCarouselUI.i = 0;
    var flag = false; //是否轮播,大于一个才轮播,false:不轮播,true:轮播
    if(data.length>1){
        flag = true;
    }
    mainPage.circularArray = [];
    var countDis = 0;
    Elf.algorithm.iterateValues({
        collection: data,
        handler: function (item) {
            var row = Elf.createChild(mainPage.ulDiv, {
                name : "li", className: ""
            });
            var rowImage = Elf.createChild(row, {
                name : "img", className: "_011_img",initProps: { src: item.imagePath}
            });
            if(flag){
                var rowQuan = Elf.createChild(mainPage.olDiv, {
                    name : "li", className: ""
                });
                rowQuan.sequence = countDis;
                mainPage.circularArray.push(rowQuan);
                countDis++;
                Elf.xEvents.onXClick(rowQuan, function () {
                    this.index = rowQuan.sequence;
                    createCarouselUI.target = -(this.index*100);
                    createCarouselUI.sport(createCarouselUI.target);
                    createCarouselUI.btnBottom();
                });
            }
            Elf.xEvents.onXClick(row, function () {
                if(BOOK.resourceType=="0"){
                    if(item.type=="1"){
                        BOOK.homeType = "singleTag";
                    }else{
                        BOOK.homeType = "adBooksTag";
                    }
                    var urlStr = BOOK.localReadPath+"?token="+BOOK.token+"&resourceType="+BOOK.resourceType+"&homeType="+BOOK.homeType+"&platform="+BOOK.platform+"&titleName="+item.titleName+"&adid="+item.id+"&categoryType="+item.grade;
                    var args={ url: urlStr,titleName:item.titleName};
                    WebCallApp("CmdOpenUrl",args);
                }else{
                    if(item.category=='0' || item.category=='1'){
                        BOOK.OpenNewPage(createBookAdListUI(depth+1,item.titleName,item.id), depth+1);
                    }
                }
            });
        }
    });
    if(flag){
        createCarouselUI.timer = setInterval(createCarouselUI.autoPlay, 2000); // 定义计时器每25毫秒执行一次
    }
    return mainPage;
};
/*轮播页面*/
createCarouselUI.btnBottom = function (){
    createCarouselUI.i = -(createCarouselUI.target/100);
    createCarouselUI.i == 4 ? createCarouselUI.i = 0 : createCarouselUI.i;
    for( j=0; j<createCarouselUI.CarouselUI.circularArray.length; j++){
        createCarouselUI.CarouselUI.circularArray[j].style.background = '';
    }

    createCarouselUI.CarouselUI.circularArray[createCarouselUI.i].style.background = '#fff';
};

createCarouselUI.sport = function (tar){
    clearInterval(createCarouselUI.timer1);
    createCarouselUI.timer1 = setInterval(autoPlay, 30); //设置定时器每30毫秒执行一次
    function autoPlay() {
        if (createCarouselUI.cur == tar) {
            clearInterval(createCarouselUI.timer1) //大于目标值时，清空计时器
        } else {
            speed = (tar - createCarouselUI.cur) / 7; //计算速度
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //取整
            createCarouselUI.cur = createCarouselUI.cur + speed;
            createCarouselUI.CarouselUI.ulDiv.style.left = createCarouselUI.cur + "%";
        }
    }
};

createCarouselUI.autoPlay = function() { //执行每次执行函数，left值减1
    if (createCarouselUI.target <= -400) {
        createCarouselUI.cur = 0;
        createCarouselUI.target = -100;
    } else {
        createCarouselUI.target -= 100;
    }
    createCarouselUI.sport(createCarouselUI.target);
    createCarouselUI.btnBottom();
};



/*广告图*/
function createAdUI(depth,data) {
    var mainPage = Elf.controls({
        name: "div", className: "_011_box"
    });
    var rowImage = Elf.createChild(mainPage, {
        name : "img", className: "_011_img",initProps: { src: data.imagePath}
    });
    Elf.xEvents.onXClick(rowImage, function () {
        if(BOOK.resourceType=="0"){
            if(data.type=="1"){
                BOOK.homeType = "singleTag";
            }else{
                BOOK.homeType = "adBooksTag";
            }
            var urlStr = BOOK.localReadPath+"?token="+BOOK.token+"&resourceType="+BOOK.resourceType+"&homeType="+BOOK.homeType+"&platform="+BOOK.platform+"&titleName="+data.titleName+"&adid="+data.id+"&categoryType="+data.grade;
            var args={ url: urlStr,titleName:data.titleName};
            WebCallApp("CmdOpenUrl",args);
        }else{
            if(data.category=='0' || data.category=='1'){
                BOOK.OpenNewPage(createBookAdListUI(depth+1,data.titleName,data.id), depth+1);
            }
        }
    });
    return mainPage;
};





function createCarouselUI2(depth,data) {
    var mainPage = Elf.controls({
        //name: "div", className: "prl32 _011_box"
        name: "div", className: "prl32 _011_box"
    });

    Elf.components.slider({
        store:data,
        templet:'<img class="_011_img" src="{{imagePath}}">',
        //templet:'<div class="elf-slider-item"><a href="{{linkAddress}}" target="_blank"><img src="{{imagePath}}"></a></div>',
        renderer:function(index,itemData){
            return Elf.utils.templateDataMapping(this.options.templet,itemData);
        },
        autoPlay:3000,
        target:mainPage,
        onClick:function(evt,item){
            //console.info(dataItem);
            if(BOOK.resourceType=="0"){
                if(item.type=="1"){
                    BOOK.homeType = "singleTag";
                }else{
                    BOOK.homeType = "adBooksTag";
                }
                if(item.type=="2"){
                    var args0={ url: item.linkAddress,name:item.titleName,navigation:item.isGoback};
                    WebCallApp("CmdOpenUrl",args0);
                }else{
                    var urlStr = BOOK.localReadPath+"?token="+BOOK.token+"&resourceType="+BOOK.resourceType+"&homeType="+BOOK.homeType+"&platform="+BOOK.platform+"&titleName="+item.titleName+"&adid="+item.id+"&categoryType="+item.grade;
                    var args={ url: urlStr,titleName:item.titleName};
                    WebCallApp("CmdOpenUrl",args);
                }
            }else{
                if(item.type=="2"){
                    var args0={ url: item.linkAddress,name:item.titleName,navigation:item.isGoback};
                    WebCallApp("CmdOpenUrl",args0);
                }else{
                    if(item.category=='0' || item.category=='1'){
                        BOOK.OpenNewPage(createBookAdListUI(depth+1,item.titleName,item.id), depth+1);
                    }
                }
            }
        }
    });
    return mainPage;
};


function createCarouselUI3(depth,data) {
    var mainPage = Elf.controls({
        name: "div", className: "prl32 _011_box"
    });
    var wrapper=Elf.controls.createElement("div","elf-slider-wrapper");
    Elf.controls.appendTo(wrapper,mainPage);

    var items=Elf.controls.createElement("div","elf-slider-items");
    Elf.controls.appendTo(items,wrapper);

    var itemObj=Elf.controls.createElement("div","elf-slider-item");
    Elf.controls.appendTo(itemObj,items);

    Elf.controls.createElement("img",{src:data[0].imagePath},"_011_img",itemObj);

    Elf.xEvents.onXClick(itemObj, function () {
        var item = data[0];
        if(BOOK.resourceType=="0"){
            if(item.type=="1"){
                BOOK.homeType = "singleTag";
            }else{
                BOOK.homeType = "adBooksTag";
            }
            if(item.type=="2"){
                var args0={ url: item.linkAddress,name:item.titleName,navigation:item.isGoback};
                WebCallApp("CmdOpenUrl",args0);
            }else{
                var urlStr = BOOK.localReadPath+"?token="+BOOK.token+"&resourceType="+BOOK.resourceType+"&homeType="+BOOK.homeType+"&platform="+BOOK.platform+"&titleName="+item.titleName+"&adid="+item.id+"&categoryType="+item.grade;
                var args={ url: urlStr,titleName:item.titleName};
                WebCallApp("CmdOpenUrl",args);
            }
        }else{
            if(item.type=="2"){
                var args0={ url: item.linkAddress,name:item.titleName,navigation:item.isGoback};
                WebCallApp("CmdOpenUrl",args0);
            }else{
                if(item.category=='0' || item.category=='1'){
                    BOOK.OpenNewPage(createBookAdListUI(depth+1,item.titleName,item.id), depth+1);
                }
            }
        }
        });

    return mainPage;
};