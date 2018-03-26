var AppCallBacks={};
//动态后退控制
var AppCommendBackHandlers=[],
	APPCommendBookStateHandlers=[],//下载状态监听事件列表
	APPCommendReBackHandlers=[],//监听重新回到页面通知
	APPCommendDownloadStateHandlers=[];//下载状态监听事件列表


/***********************************************************
 处理App发送的后退命令
 ***********************************************************/
var APPCommendBack=function(){
	if(AppCommendBackHandlers.length>0){
		if(typeof AppCommendBackHandlers[AppCommendBackHandlers.length-1]=="function"){
			AppCommendBackHandlers[AppCommendBackHandlers.length-1].call(window);
		}
	}else{
		WebCallApp("goback");
	}
};
/***********************************************************
 AppMsgHandlers 协定回调列表
 App and Web to confirm the list funs
 ***********************************************************/
var AppMsgHandlers={
	onReady:function(msg){
		alert("onReady"+msg);
	},


	//刷新数据通知(Realized)
	"MsgReBack":function(){
		//刷新订单页面
		if(APPCommendReBackHandlers.length>0 && BOOK.platform=='0'){
			Elf.utils.each(APPCommendReBackHandlers,function(index,callback){
				var args={serviceModule:BOOK.serviceModule,serviceNumber:'0201100',token: BOOK.token, args:{
					bookId:BOOK.bookIdOrder,platform:BOOK.platform
				}};
				commonLogic.serviceCaller(args,function(data){
					if(data.flag=="false"){
						alert(data.error);
					}else{
						createBookOrderUI.BooksUI.myContents.innerHTML = "";
						createBookOrderUI.createContentInfo(data,BOOK.orderDepth);
						callback.call(window,data,BOOK.orderDepth);
						APPCommendReBackHandlers=[];
						BOOK.bookIdOrder = "";
					}
				});
			});
		}
	},

	"MsgUpdateBookState":function(data){
		if(APPCommendBookStateHandlers.length>0){
			Elf.utils.each(APPCommendBookStateHandlers,function(index,callback){
				callback.call(window,data);
			});
		}
	},

	//下载图书完成
	"bookDownloadDone":function(bookItem){},
	//图书下载状态通知
	"downloadState":function(data){
		if(APPCommendDownloadStateHandlers.length>0){
			Elf.utils.each(APPCommendDownloadStateHandlers,function(index,callback){
				callback.call(window,data);
			});
		}
	},
	//购买图书完成
	"bookBuyed":function(bookItem){},
	"goback":function(data){
		//Elf.components.toast({text:"goback"+AppCommendBackHandlers.length});
		//后退统一处理
		APPCommendBack();
	}
};
/***********************************************************
 App Call Web 入口方法，
 All of app to web use that
 ***********************************************************/
/* */
Elf.AppCallWeb=function(sn,data){
	if(sn=='MsgGoBack'){
		//拦截回退事件
		if (BOOK.PageDepths.length > 0) {
			var depth = parseInt(BOOK.PageDepths.pop());
			BOOK.GoBackPage(depth, true);
			if(BOOK.bookPurchased=='true'){
				BOOK.bookPurchased='';
				var depth2 = parseInt(BOOK.PageDepths.pop());
				BOOK.GoBackPage(depth2, true);
			}
		} else {
			WebCallApp("CmdGoBack");
		}
	}else if(sn=='MsgUpdateBookState'){
		data = decodeURIComponent(data);
		data = JSON.parse(data); //由JSON字符串转换为JSON对象
		BOOK.downloadState = data.downloadState;
		//if(BOOK.buyStatus=='1' && BOOK.textbook=="0"){
		if(BOOK.buyStatus=='1' && BOOK.textbook=="0" && BOOK.bookSet =="1"){

			if(BOOK.path.length>0){
				if(data.downloadState=='1' || data.downloadState=='2' || data.downloadState=='3'){
					var btnDiv = Elf.createChild(BOOK.ui, {
						name : "nav",
						className: "book_bar book_bar_tab"
					});
					BOOK.ui.downloadBtnTxt = Elf.createChild(btnDiv, {
						name : "a",
						className : "tab-item external book_btnTxt"
					});
				}


				if(data.downloadState=='8'){ //0:未下载,1:等待，2:下载中 3:暂停   8:完成
					//BOOK.ui.downloadBtnTxt.innerHTML = "已下载";
					BOOK.bookIsbn = data.isbn;
					BOOK.ui.readBtnTxt = createBookDetailUI.createSingleBtn("开始阅读");
					BOOK.ui.appendChild(BOOK.ui.readBtnTxt);
					Elf.xEvents.onXClick(BOOK.ui.readBtnTxt, function () {
						var args={ url: BOOK.onlineReadPath+data.isbn};
						WebCallApp("CmdOpenUrl",args);
					});
				}else if(data.downloadState=='0'){
					BOOK.ui.downloadBtnTxt.innerHTML = "立即下载";
					BOOK.bookIsbn = data.isbn;
				}else if(data.downloadState=='3'){
					BOOK.ui.downloadBtnTxt.innerHTML = "暂停";
					BOOK.bookIsbn = data.isbn;
				}else if(data.downloadState=='1'){
					BOOK.ui.downloadBtnTxt.innerHTML = "等待";
					BOOK.bookIsbn = data.isbn;
				}else if(data.downloadState=='2'){
					BOOK.ui.downloadBtnTxt.innerHTML = "下载中";
					BOOK.bookIsbn = "";
				}
			}else{
				BOOK.ui.downloadBtnTxt.btnTxt.innerHTML = "在线阅读";
				Elf.xEvents.onXClick(BOOK.ui.downloadBtnTxt.btnTxt, function () {
					if(BOOK.ui.downloadBtnTxt.btnTxt.innerHTML == "在线阅读"){
						var args={ url: BOOK.onlineReadPath+data.isbn};
						WebCallApp("CmdOpenUrl",args);
					}
				});
			}
		}

		if(BOOK.buyStatus=='1' && BOOK.textbook=="1"){
			if(data.downloadState=='8'){ //0:未下载 2:下载中 3:暂停   8:完成
				BOOK.ui.downloadBtnTxt.btnTxt.innerHTML = "开始阅读";
				//BOOK.bookIsbn = "";
				Elf.xEvents.onXClick(BOOK.ui.downloadBtnTxt, function () {
					if(BOOK.ui.downloadBtnTxt.btnTxt.innerHTML == "开始阅读"){
						var args={ isbn:data.isbn};
						WebCallApp("CmdOpenPDFBook",args);
					}
				});
			}else if(data.downloadState=='0'){
				BOOK.ui.downloadBtnTxt.btnTxt.innerHTML = "立即下载";
			}else if(data.downloadState=='1'){
				BOOK.ui.downloadBtnTxt.btnTxt.innerHTML = "等待";
			}else if(data.downloadState=='3'){
				BOOK.ui.downloadBtnTxt.btnTxt.innerHTML = "暂停";
			}else if(data.downloadState=='2'){
				BOOK.ui.downloadBtnTxt.btnTxt.innerHTML = "下载中";
			}
		}

	}else if(sn=='MsgOpenSuccess'){	//支付宝、或微信时需通知一下
		var dataJson = JSON.parse(data);
		BOOK.OpenNewPage(createOrderSuccessUI(4,dataJson.tradeNo), 4);
	}else{
		if(data && typeof data =="string"){
			data=JSON.parse(decodeURIComponent(data.replace(/\+/g, '%20')));//解决空格变成+的问题
		}
		if(AppCallBacks[sn]){
			if(AppCallBacks[sn].loading){
				Elf.components.loading.methods.close();
			}
			if(JSON.parse(data.opFlag)){
				//执行对应回调
				AppCallBacks[sn].callback.call(AppCallBacks[sn].context,(typeof data.serviceResult=="string")?JSON.parse(data.serviceResult) : data.serviceResult);
			}else{
				//接口调用返回失败信息，统一处理错误消息
				Elf.components.toast({text:data.errorMessage?result.errorMessage:"服务器异常！"});
			}
			//调用完成删除对象
			delete AppCallBacks[sn];

			/*
			if(AppCallBacks[sn].loading){
				Elf.components.loading("close");
			}
			var result=JSON.parse(decodeURIComponent(data.replace(/\+/g, '%20')));//解决空格变成+的问题
			console.info(result);
			if(result.opFlag == "false") {
				//接口调用返回失败信息，统一处理
				Elf.components.toast({text:result.errorMessage+" "});
			}else{
				//执行对应回调
				//console.info(JSON.parse(result.serviceResult));
				AppCallBacks[sn].callback.call(AppCallBacks[sn].context,JSON.parse(result.serviceResult));
				//调用完成删除对象
				delete AppCallBacks[sn];
			}
			*/
		}else if(AppMsgHandlers[sn] && typeof AppMsgHandlers[sn]=="function"){
			//处理消息通知
			//Elf.components.toast({text:"即将调用 AppMsgHandlers"+sn});
			console.info(data);
			AppMsgHandlers[sn].call(window,data);
		}
	}
};


/***********************************************************
 command:协议名称
 params：参数
 callback：返回回调
 context：上下文对象
 loading: 是否显示loading
 ***********************************************************/
function WebCallApp(command,args,callback,context,loading){
	//console.info("WebCallApp commend 》"+command+" "+JSON.stringify(args));
	context=context || window;//默认为window对象
	args=args||{};
	var sn=getSerialNumber(),//请求App统一加水单号
		params={
			args:args,
			command:command
		};
	//绑定回调函数
	if(callback){
		AppCallBacks[sn]={
			callback:callback,
			context:context,
			loading:loading
		};
	}
	if(loading){
		Elf.components.loading();
	}
	//if(command=="CmdBookPurchaseSuccess"){
	//	changeDetailStatus();
	//}
	if(window.webkit && window.webkit.messageHandlers){
		//ios
		params.sn=sn;
		window.webkit.messageHandlers["WebCallApp"].postMessage(JSON.stringify(params));
	}else if(Elf.WebCallApp){
		//安卓
		params.sn=sn;
		Elf.WebCallApp(JSON.stringify(params));
	}else if(Elf.isInCef()){
		params.sn=sn;
		Elf.WebCallCef(JSON.stringify(params));
	}
	if(command=="CmdBookPurchaseSuccess"){
		changeDetailStatus();
	}
}
/***********************************************************
 判断是否在App中
 ***********************************************************/
Elf.isInApp=function(){
	return (window.webkit && window.webkit.messageHandlers) || typeof Elf.WebCallApp =="function";
};


/*监听手机回退按钮,购买成功后，返回详情*/
function changeDetailStatus(){
	BOOK.buyStatus='1';
	if(BOOK.platform=="3"){	//pc端放开下载,暂改为3
		if(BOOK.bookSet=="0"){
			BOOK.ui.downloadBtnTxt.btnTxt.innerHTML = BOOK.promptMessage;
		}else{
			BOOK.ui.downloadBtnTxt.btnTxt.innerHTML = "在线阅读";
			Elf.xEvents.onXClick(BOOK.ui.downloadBtnTxt.btnTxt, function () {
				if(BOOK.ui.downloadBtnTxt.btnTxt.innerHTML == "在线阅读"){
					Elf.CallBackLookBook(BOOK.onlineReadPath+BOOK.bookInfos.isbn);
				}
			});
		}
	}else{
		if(BOOK.bookSet=="0"){
			BOOK.ui.downloadBtnTxt.btnTxt.innerHTML = BOOK.promptMessage;
		}else{
			if(BOOK.path.length>0){
				if(BOOK.textbook=="0"){
					//BOOK.ui.remove(BOOK.ui.downloadBtnTxt);
					BOOK.ui.removeChild(BOOK.ui.downloadBtnTxt);
					/*
					 BOOK.ui.readBtnTxt = createBookDetailUI.createSingleBtn("在线阅读");
					 BOOK.ui.appendChild(BOOK.ui.readBtnTxt);
					 Elf.xEvents.onXClick(BOOK.ui.readBtnTxt, function () {
					 var args={ url: BOOK.onlineReadPath+BOOK.bookInfos.isbn};
					 WebCallApp("CmdOpenUrl",args);
					 });
					 */
					if(BOOK.systemVersion != '3.0.0'){
						var myBottom = Elf.createChild(BOOK.ui, {
							name : "hDiv",
							className: "_030_addBottomZone"
						});
						BOOK.ui.downloadBtnTxt = Elf.createChild(myBottom, {
							name : "div",
							className : "parallelCenter perpendicularCenter _030_downloadBtnTxt",
							initProps : {
								innerHTML : "立即下载"
							}
						});
						var readBtnTxt = Elf.createChild(myBottom, {
							name : "div",
							className : "parallelCenter perpendicularCenter _030_downloadBtnTxt",
							initProps : {
								innerHTML : "在线阅读"
							}
						});
						Elf.xEvents.onXClick(BOOK.ui.downloadBtnTxt, function () {
							if(BOOK.ui.downloadBtnTxt.innerHTML=='立即下载'){
								var args={ id:BOOK.bookInfos.id};
								WebCallApp("downloadBsBook",args);
								BOOK.ui.downloadBtnTxt.innerHTML = "下载中";

								BOOK.ui.removeChild(myBottom);
								ComponentUtil.createMySingleDownloadBtn();
							}
						});
						Elf.xEvents.onXClick(readBtnTxt, function () {
							var args={ url: BOOK.onlineReadPath+BOOK.bookInfos.isbn};
							WebCallApp("CmdOpenUrl",args);
						});
					}else{
						BOOK.ui.readBtnTxt = createBookDetailUI.createSingleBtn("在线阅读");
						BOOK.ui.appendChild(BOOK.ui.readBtnTxt);
						Elf.xEvents.onXClick(BOOK.ui.readBtnTxt, function () {
							var args={ url: BOOK.onlineReadPath+BOOK.bookInfos.isbn};
							WebCallApp("CmdOpenUrl",args);
						});
					}
				}else if(BOOK.textbook=="1"){
					BOOK.ui.downloadBtnTxt.btnTxt.innerHTML = "立即下载";
					Elf.xEvents.onXClick(BOOK.ui.downloadBtnTxt.btnTxt, function () {
						if(BOOK.ui.downloadBtnTxt.btnTxt.innerHTML == "立即下载"){
							//var args={ datas:BOOK.bookInfos};
							var args={ id:BOOK.bookInfos.id};
							WebCallApp("downloadBsBook",args);
							BOOK.ui.downloadBtnTxt.btnTxt.innerHTML = "下载中";
						}
					});
				}
			}else{
				BOOK.ui.downloadBtnTxt.btnTxt.innerHTML = "在线阅读";
				Elf.xEvents.onXClick(BOOK.ui.downloadBtnTxt.btnTxt, function () {
					if(BOOK.ui.downloadBtnTxt.btnTxt.innerHTML == "在线阅读"){
						//Elf.CallBackLookBook(BOOK.onlineReadPath+BOOK.bookInfos.isbn);
						var args={ url: BOOK.onlineReadPath+BOOK.bookInfos.isbn};
						WebCallApp("CmdOpenUrl",args);
					}
				});
			}
		}
	}
}

/***********************************************************
 判断是否在App中
 ***********************************************************/
Elf.isInApp=function(){
	return (window.webkit && window.webkit.messageHandlers) || typeof Elf.WebCallApp =="function"||typeof Elf.WebCallCef=="function";
};
Elf.isInIOS=function(){
	return window.webkit && window.webkit.messageHandlers;
};
Elf.isInAndroid=function(){
	return typeof Elf.WebCallApp == "function";
};
Elf.isInCef=function(){
	return typeof Elf.WebCallCef=="function";
};