/*
 * create by lijianwei on 2017-10-25
 * 
 * W3C API
 * open(method, url, async, username, password) 
 * 参数method定义请求的类型，如GET、POST方法等等，大小写不敏感
 * 参数url定义请求的URL地址
 * 参数async定义是否异步处理请求，true(异步)或者false(同步)，默认为true
 * 参数username定义用户名，不常用，默认为null
 * 参数password定义密码，不常用，默认为null
 * username 和 password 参数是可选的，为 url 所需的授权提供认证资格。如果指定了，它们会覆盖 url 自己指定的任何资格。
 * 说明：
 * 		这个方法初始化请求参数以供 send() 方法稍后使用。
 * 		它把 readyState 设置为1，删除之前指定的所有请求头部，以及之前接收的所有响应头部，并且把 responseText、responseXML、status 以及statusText 参数设置为它们的默认值。
 * 		当 readyState 为 0 的时候（当 XMLHttpRequest 对象刚创建或者abort() 方法调用后）以及当 readyState 为 4时（已经接收响应时），调用这个方法是安全的。
 * 		当针对任何其他状态调用的时候，open() 方法的行为是为指定的。除了保存供 send() 方法使用的请求参数，以及重置 XMLHttpRequest 对象以便复用，open() 方法没有其他的行为。
 * 要特别注意：
 * 		当这个方法调用的时候，实现通常不会打开一个到 Web 服务器的网络连接。
 * setRequestHeader(name, value)
 * 		1.setRequestHeader方法必须在open方法调用之后、send方法之前调用，否则会出现异常 
 * 		2.setRequestHeader方法可以连续调用多次，如果已经存在同名的HTTP头时，最终结果是追加而不是覆盖
 * timeout属性
 * 		timeout属性用于设置HTTP请求的超时时间，单位毫秒。当发生超时时，会触发ontimeout事件。在IE中，超时属性只能在调用 open() 方法之后且在调用 send() 方法之前设置。
 * upload属性
 * 		upload用于在数据传输到服务器时收集一些传输信息，比如上传了多少字节，总共多少字节等，其里面还包含了一些事件回调。
 * send([body=null]) send方法用于发送open方法创建的HTTP请求，其定义如下
 * 		参数body定义HTTP请求的数据，当HTTP请求的方法为GET、HEAD时，该参数被忽略。
 * 		body的类型可以为ArrayBuffer(二进制缓冲数组)、Blob(二进制大对象)、Document(类似XML格式的数据)、DOMString（字符串）、FormData(表单)。
 * abort() 当请求发送后如果想终止这个请求，则可以调用abort方法，其定义如下：
 * XHR事件回调
 * 		onloadstart
 * 		onprogress
 * 		onabort
 * 		onerror
 * 		onload
 * 		ontimeout
 * 		onloadend
 * XHR的状态定义
 * 		UNSENT = 0  最初始状态，还未调用open方法
 * 		OPENED = 1 已经调用了open方法
 * 		HEADERS_RECEIVED = 2 已经调用了send方法，响应的HTTP头部和状态可以获取
 * 		LOADING = 3 正在下载数据，下载的数据还不完整
 * 		DONE = 4 数据下载完成
 * 		readyState 用于描述XHR的状态
 * onreadystatechange属性可以指定一个回调函数，当XHR的状态（即readyState）发生改变时就会调用该函数，可以在这个回调函数中判断请求是否成功。
 * 事件触发的时机
 * 		upload的回调方法会在数据上传的过程中触发，XHR的回调方法大多在响应数据下载的过程中触发，具体的触发时机见下表：
 * 		onreadystatechange	当readyState的值改变时触发，除了当它从非0变成0时
 * 		onloadstart	当调用send方法时会触发xhr.onloadstart,然后会触发xhr.upload.onloadstart，代表开始上传数据
 * 		onprogress	上传数据过程中会触发xhr.upload.onprogress，下载数据过程中会触发xhr.onprogress，onprogress每50ms会触发一次
 * 		onabort	调用abort方法后会触发
 * 		onerror	当发生网络异常的时候会触发，
 * 			如果上传数据的过程还未结束，此时会先触发xhr.upload.onerror，然后再触发xhr.onerror；
 * 			如果上传数据的过程已经结束，此时只会触发xhr.onerror
 * 		onload	上传数据成功，会触发xhr.upload.onload；下载数据成功会触发xhr.onload
 * 		ontimeout	当服务端响应的时间超过指定的timeout时间时，会触发此事件
 * 		onloadend	上传数据完成（成功或者失败）时会触发xhr.upload.onloadend；下载数据完成（成功或失败）会触发xhr.onloadend
 * 事件触发的顺序
 * 		调用了open方法
 * 		onreadystatechange(),readyState=1
 *		调用了send方法
 * 		onloadstart()
 *		//上传数据过程中的事件回调
 * 		upload.onloadstart()//开始上传请求数据
 * 		upload.onprogress()//正在上传请求数据
 * 		upload.onload()//成功上传请求数据
 * 		upload.onloadend()//完成上传请求数据
 * 		下载响应数据过程中的事件回调
 * 		onreadystatechange(),readyState=2//已经获取到响应头部和响应状态码
 * 		onreadystatechange(),readyState=3//正在下载响应数据，改变状态
 * 		onprogress()//正在下载响应数据
 * 		onreadystatechange(),readyState=4//响应数据下载完成，改变状态
 * 		onload()//成功下载响应数据
 * 		onloadend()//完成下载响应数据
 * 事件回调方法的参数
 * 		XMLHttpRequestEventTarget里面的回调方法的参数类型为ProgressEvent
 * 			lengthComputable;//数据长度是否可计算的
 * 			loaded;//已经下载或者上传了多少字节
 * 			total;//需要下载或者上传的总字节数
 * 		所以在onprogress方法回调中，可以通过loaded和total这两个属性来实现上传或者下载的进度条功能。
 * XHR响应
 * 		了解了XHR的请求、XHR的事件回调之后，就剩下处理XHR响应的工作了，比如解析数据等等，要处理响应，需要了解下面的方法和属性
 * getResponseHeader(name)
 * 		参数name为HTTP响应头部的键值
 * getAllResponseHeaders()
 * 		获取所有的HTTP响应头的数据
 * status和statusText属性
 * 		status属性表示HTTP响应状态码，即200、404等；
 * 		statusText属性表示HTTP响应状态的描述文本，即OK、Not Found等
 * responseType、response、responseText、responseXML属性
 * 		可以在发送请求之前设置responseType，用于指定返回的响应数据的类型
 * 		empty string	空字符串，这是默认值
 * 		arraybuffer	二进制缓冲数组
 * 		blob	二进制大对象
 * 		document	文档类型
 * 		json	JSON类型
 * 		text	文本类型
 * 	处理响应数据时，需要根据responseType来判断返回的数据类型。
 * 		当responseType为text或者empty string类型时可以使用responseText属性，为其它类型时调用responseText会发生异常；
 * 		当responseType为document或者empty responseXML属性，为其它类型时调用responseXML会发生异常；
 * 		当responseType不是empty string、text、document类型时，需要转换成具体的类型进行解析
 * 		
 * 
 * */
Elf.ajax=function(options){
	defaults:{},
	timout:60000//
};
Elf.ajax.defaults={};
Elf.ajax.getXMLHttpRequest=function(){
	return window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
};
Elf.ajax.initSettings=function(options,type){
	var _params,_arr,separator;
	options = Elf.extend({
		url:"",
		type:"GET",
		data:"",
		dataType:"json",
		contentType:"text/plain;charset=UTF-8",
		context:document.body,
		async:true,
		cache:false,
		beforeSend:function(xhr,settings){},
		complete:function(xhr,status){},
		success:function(responseText,status,xhr){},
		error:function(xhr,status,errorThrown){},
		ontimeout:function(xhr){},
		onprogress:function(xhr){},
		onloadstart:function(xhr){},
		onloadend:function(xhr){},
		onload:function(xhr){},
		onerror:function(xhr){},
		onabort:function(xhr){}
	},Elf.ajax.defaults,options);
	if(type=="GET"){
		//get方式处理参数拼接
		if(options.data && typeof options.data =="object"){
			arr=[];
			for(var name in options.data) {
			    arr.push(name + "=" + options.data[name]);
			}
			params=_arr.join("&");
			_arr=null;
		}
		if(!opts.cache){
			var now=new Date().getTime();
			params +=Elf.isEmpty(params)?"v="+ now:"&"+"v="+ now;
		}
		separator=options.url.indexOf("?") == -1 ? "?" : "&";
		options.url=params ? options.url+ separator + params : options.url;
	}
};
Elf.ajax.get=function(options){
	Elf.ajax.initSettings(options,"POST");
	if(options.type=="GET"){
		Elf.ajaxGet(options);
	}else{
		Elf.ajaxPost(options);
	}
};
Elf.ajax.post=function(options){
	var xhr=Elf.ajax.getXMLHttpRequest(),
		setting={};
	Elf.ajax.initSettings(options,"POST");
    try{
		xhr.open(type,options.url,options.async);
		if(options.contentType){
	        xhr.setRequestHeader("Content-Type",options.contentType);
	    }
		Elf.ajaxSend(xhr,options,options.data);
	}catch(e){
		console.info(e.toString());
	}
	setting.xhr=xhr;
	setting.options=options;
	return setting;
};
Elf.ajax.get=function(options){
	var xhr=Elf.ajax.getXMLHttpRequest(),setting={};
	Elf.ajax.initSettings(options,"GET");
	try{
		xhr.open(type,options.url,options.async);
		Elf.ajaxSend(xhr,options);//Get方式不发送数据
	}catch(e){
		console.info(e.toString());
	}
	setting.xhr=xhr;
	setting.options=options;
	return setting;
};
Elf.ajax.send=function(xhr,options,params){
	params=params?params:null;
	Elf.ajax.beforeSend(xhr,options);
    xhr.send(params);
};
Elf.ajax.beforeSend=function(xhr,options){
	//绑定
	if(options.beforeSend){
		options.beforeSend.call(options.context,xhr,options);
	}
	xhr.onreadystatechange=function(){
		if(xhr.readyState == 4){
			Elf.ajax.complete(xhr,options);
		}
	};
};
//执行回调
Elf.ajax.complete=function(xhr,options){
	var responseText=xhr.responseText;
	if(typeof options.complete == "function"){
		options.complete.call(options.context,xhr,xhr.status);
	}
	if(xhr.status>=200 && xhr.status<300){
		options.success.call(options.context,responseText,xhr.responseXML,xhr);
	}else{
		options.error.call(options.context,xhr,xhr.status,xhr.error);
	}
};