

//临时RCP组织websocket请求参数
BOOK.CreateRequestParameter = function(obj) {
    var parameter = {};
    //轮播
    parameter = {
        serviceModule: "RCP-PCService",
        //token: BOOK.token,
        //token: "1bc212730a11411d96e7f14751fbb3d3",
        token: "",
        serviceNumber: obj.code,
        args: obj.args
    };
    return parameter;
};

/**
 * 获取资源列表
 * @param {} options ={pageIndex:"当前页数",typeOfResources:"资源类型(必填)",title:"查询标题",typeOfPromulgator:"筛选分类",subjectOfResources:"筛选专业"}
 * @param {} callback
 * @returns {}
 */
BOOK.RequestSourceList = function (options, callback) {
    var typeOfPromulgator = options.typeOfPromulgator;
    if ((options.typeOfPromulgator == undefined) || (options.typeOfPromulgator == "0")) {
        typeOfPromulgator = "";
    }
    var subjectOfResources = options.subjectOfResources;
    if ((options.subjectOfResources == undefined) || (options.subjectOfResources == "0")) {
        subjectOfResources = "";
    }
    var tmp = {
        code: "0022200", args: {
        //code: "0027000", args: {
            //"baseCode": "460004",
            "maxNum": "15",
            "pages": options.PageIndex,
            "typeOfContents": "2",//1.通知 ; 2.资源
            "typeOfResources": options.typeOfResources,     //八大分类
            "title": options.title == undefined ? "" : options.title,
            "typeOfPromulgator": "4",
            "subjectOfResources": subjectOfResources,
            "receivers": "01"
        }
    };
    var obj = BOOK.CreateRequestParameter(tmp);
    commonLogic.serviceCaller(obj, function (data) {
        callback(data);
    });
};

/**
 * 打开第三方连接地址,涉及到积分
 * @param {} options ={uid: 登录用户uuid, uuid: 资源id}
 * @param {} callback 回调事件
 * @returns {}
 */
BOOK.RequestThirdpartyUrl = function (options, callback) {
    //通知
    var tmp = {code: "0022100", args: {id: options.id}};
    //资源
    var isSource = false;
    if (options.type != undefined) {
        //tmp.args.uid = RCP.UserInfo.uuid;
        tmp.args.typeOfResources = options.type;
        isSource = true;
    }
    var obj = BOOK.CreateRequestParameter(tmp);
    commonLogic.serviceCaller(obj, function (data) {
        callback(data);
    });
};

/**
 * 获取通知详情
 * @param {} options 参数
 * @param {} openCallback 打开窗口
 * @param {} closeCallback 关闭窗口
 * @returns {}
 */
BOOK.GetBannerData = function (options, openCallback, closeCallback) {
    //通知
    var tmp = {code: "0022100", args: {id: options.id}};
    //资源
    var isSource = false;
    if (options.type != undefined) {
        //tmp.args.uid = RCP.UserInfo.uuid;
        //tmp.args.typeOfResources = "3";
        tmp.args.typeOfResources = options.type;
        isSource = true;
    }
    var obj = BOOK.CreateRequestParameter(tmp);
    commonLogic.serviceCaller(obj, function (request) {
        if (request.flag == "true") {
            var sui = NoticeDetail(request.result, isSource, closeCallback);
            openCallback(sui);
        } else {
            alert(request.error);
        }
    });
};

//资源类型
BOOK.SourceType = [
    { code: "0", name: "全选" },
    { code: "2", name: "省级资源" },
    { code: "3", name: "本院资源" },
    { code: "4", name: "公共资源" }
];

//学科
BOOK.Subject = [
    { code: "0", name: "全选" },
    { code: "0100", name: "心血管内科" },
    { code: "0200", name: "呼吸内科" },
    { code: "0300", name: "消化内科" },
    { code: "0400", name: "血液内科" },
    { code: "0500", name: "肾脏内科" },
    { code: "0600", name: "内分泌科" },
    { code: "0700", name: "风湿免疫科" },
    { code: "0800", name: "感染科" },
    { code: "0900", name: "神经内科" },
    { code: "1000", name: "普通外科" },
    { code: "1100", name: "骨科" },
    { code: "1200", name: "泌尿外科" },
    { code: "1300", name: "胸心外科" },
    { code: "1400", name: "神经外科" },
    { code: "1500", name: "整形外科" },
    { code: "1600", name: "麻醉科" },
    { code: "1700", name: "儿科" },
    { code: "1800", name: "儿外科" },
    { code: "1900", name: "妇产科" },
    { code: "2000", name: "眼科" },
    { code: "2100", name: "耳鼻咽喉头颈外科" },
    { code: "2200", name: "急诊科" },
    { code: "2300", name: "皮肤科" },
    { code: "2400", name: "精神科" },
    { code: "2500", name: "全科" },
    { code: "2600", name: "康复医学科" },
    { code: "2700", name: "临床病理科" },
    { code: "2800", name: "检验医学科" },
    { code: "2900", name: "放射科" },
    { code: "3000", name: "超声医学科" },
    { code: "3100", name: "核医学科" },
    { code: "3200", name: "放射肿瘤科" },
    { code: "3300", name: "医学遗传科" },
    { code: "3400", name: "预防医学科" },
    { code: "3500", name: "口腔科" },
    { code: "3600", name: "重症监护" }
];

//BOOK.categoryParamsJson = {type : "",code : "",name : ""};
//BOOK.hotSearchPath = "main.html?token="+BOOK.token+"&homeType="+BOOK.homeType;  //热门搜索页面
//BOOK.classificationPath = "ui/phone/book.html?isbn=";  //分类列表页面
//BOOK.newArrivalPath = "ui/phone/book.html?isbn=";  //最新上架页面
//BOOK.bookDetailPath = "main.html?token="+BOOK.token+"&homeType="+BOOK.homeType;  //详情页面页面
//BOOK.categoryPath = "ui/phone/book.html?isbn=";  //种类页面