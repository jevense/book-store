(function () {
    var global = this;//create a pointer to the window root
    if (typeof BOOK === 'undefined') {
        global.BOOK = {};//create elf root if not existed
    }
    BOOK.Global = global;//add a pointer to window
})();

BOOK.PageSize = 5;
BOOK.PageDepths = new Array();

BOOK.token = "";

//用户信息
BOOK.UserInfo = function () { };

//记录当前页
BOOK.CurrentPageName = null;

//数据刷新标记
BOOK.isRefresh = false;

//serviceModule
BOOK.serviceModule = "BS-Service";
BOOK.platform = ""; //平台 0:ios,1:anroid,2:windows
BOOK.imagePath = Config.vistPrefix;

BOOK.homeType = ""; //默认首页面,search:搜索页面,bookDetail:书籍订单页面
BOOK.orderBookId = ""; //书籍订单页面书籍id

//BOOK.onlineReadPath = "ui/phone/book.html?isbn=";  //在线阅读
BOOK.onlineReadPath = Config.onlineReadPath;  //在线阅读

BOOK.localReadPath = Config.localReadPath;  //本地跳转
BOOK.localCoursePath = Config.localCoursePath;  //教程疾病课件本地跳转
BOOK.searchPath = Config.searchPath;  //跳转搜索页面

BOOK.uuid = "";

BOOK.resourceType = ""; //来源：0:来源书包,1:来源住培
BOOK.downLoadStatus=""; //图书下载状态

/*调用app支付成功后,打开成功购买页面*/
BOOK.textbook=""; //0:教材,1:pdf
BOOK.bookSet = "";    //是否是套餐书籍   0是套餐,1不是
BOOK.bookInfos = "";    //记录书的信息
BOOK.bookPurchased = "";    //购买后通知

BOOK.downloadState = "";    //返回下载状态 0:未下载 2:下载中 3:暂停   8:完成
BOOK.bookIsbn = ""; //book的isbn
BOOK.buyStatus = "";    //购买状态 0:未购买,1:已购买

/* ios在书城充值后返回到订单页面部分局部数据修改，暂不全局刷新,会影响到详情的部分回调 */
BOOK.bookIdOrder = "";
BOOK.orderDepth = "";

/*提示信息*/
BOOK.promptMessage = "已购买，请到已获得图书列表查看";

BOOK.systemVersion = "";    //版本信息, 3.0.0无下载,以后版本有下载

BOOK.path = "";    //书籍路径，因手术视频无下载功能,牵涉到已购列表暂定为根据路径为空无下载按钮

BOOK.clientType = "";   //终端类型 iphone:1, ipad:3, 2:androidPhone, 4:androidPad
