/*
 * Created by lijianwei on 2016/4/28.
 */
/*
 *  获取URL参数列表
 */
Elf.getParams=function(){
    var search=window.location.search,params={},args,i,param;
    if(search && search.length){
        search=search.replace("?","");
        args=search.split("&");
        for(i=0;i< args.length;i++){
            param=args[i].split("=");
            params[param[0]] = param.length>1 ? param[1] : "";
        } 
        return params;
    }
    return "";
};
/*
*   获取Url参数值
*/
Elf.getParam=function(key){
    var params=Elf.getParams();
    return params ? params[key] || "" : "";
};
/*
 * 确定JavaScript内置对象的类型，并返回小写形式的类型名称
 * create from 2.0
 **/
Elf.type=function(obj) {
    if ( obj == null ) {
        return obj + "";
    }
    var class2type={},toString=class2type.toString;
    return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call( obj ) ] || "object" : typeof obj;
};
/*
* 判断对象是否是window
**/
Elf.isWindow= function( obj ) {
    return obj != null && obj === obj.window;
};
/*
 * 判断是否为类数组对象,
 * 所谓"类数组对象"就是一个常规的Object对象，但它和数组对象非常相似：具备length属性，并以0、1、2、3……等数字作为属性名。
 * 不过它毕竟不是数组，没有从数组的原型对象上继承下来的内置方法(例如：push()、 sort()等)。
 * create from 2.0
 **/
Elf.isArrayLike=function(obj){
    var length = !!obj && "length" in obj && obj.length,type = Elf.type( obj );
    if ( type === "function" || Elf.isWindow( obj ) ) {
        return false;
    }
    return type === "array" || length === 0 || typeof length === "number" && length > 0 && ( length - 1 ) in obj;
};
/*
 * 判断是否是数字
 * create from 2.0
 **/
Elf.isNumeric= function( obj ) {
    var realStringObj = obj && obj.toString();
    return !Array.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
};
/**
 * 判断是否是百分比数字
 */
Elf.isPercent=function(obj){
    return /^-?[\d\.]+%$/.test(obj);
};
/**
 * 判断是否是图片地址
 */
Elf.isImage=function (obj) {
    return /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i.test(obj);
};
/*
 * 判断对象是否是函数
 * create from 2.0
 **/
Elf.isFunction=function( obj ) {
    return typeof obj === "function";
};
/*
 * 判断指定参数是否是一个纯粹的对象
 * create from 2.0
 **/
Elf.isPlainObject= function( obj ) {
    var key,class2type={};
    if ( Elf.type( obj ) !== "object" || obj.nodeType || Elf.isWindow( obj ) ) {
        return false;
    }
    if ( obj.constructor && !class2type.hasOwnProperty.call( obj, "constructor" ) && !class2type.hasOwnProperty.call( obj.constructor.prototype || class2type, "isPrototypeOf" ) ) {
        return false;
    }
    for ( key in obj ){}
    return key === undefined || Object.hasOwnProperty.call( obj, key );
};
/*
 * 判断是否是空对象
 * create from 2.0
 **/
Elf.isEmptyObject= function( obj ) {
    var name;
    for ( name in obj ) {
        if(obj.hasOwnProperty(name)){
            return false;
        }
    }
    return true;
};
/*
 * 判断是否是空对象
 * create from 2.0
 **/
Elf.isEmpty= function( obj ){
    if(typeof obj == "string"){
        var ss=Elf.trim(obj);
        return ss.length>0?false:true;
    }else if(typeof obj =="object"){
        return Elf.isEmptyObject(obj);
    }else if(typeof obj =="undefined"){
        return true;
    }else if(typeof obj =="boolean"){
        return !obj;
    }else if(typeof obj =="number"){
        return obj===0?true:false;
    }else{
        return obj||false;
    }
};
/*
 * 判断元素是否再数组中
 */
Elf.isInArray=function(el,arr,i){
	return Elf.inArray(el,arr,i)>=0?true:false;
};
/*
*   合并数组并去重，支持String，返回数组
**/
Elf.concat=function(a1,a2){
    a1=typeof a1=="string" ? (a1 || "").match(/\S+/g) || [""]:a1;
    a2=typeof a2=="string"?(a2 || "").match(/\S+/g) || [""]:a2;
    Elf.each(a2,function(item,index){
        if(Elf.inArray(item,a1) == -1){
            a1.push(item);
        }
    });
    return a1;
};
/*
*   删除数组中的元素
**/
Elf.reject=function(arg1,args2){
    arg1=typeof arg1=="string" ? (arg1 || "").match(/\S+/g) || [""]:arg1;
    args2=typeof args2=="string"?(args2 || "").match(/\S+/g) || [""]:args2;
    var array=[];
    Elf.each(arg1,function(item,index){
        if(Elf.inArray(item,args2) == -1){
            array.push(item);
        }
    });
    return array;
};
/*
 * 用于合并两个数组的元素到第一个数组中
 * create from 2.0
 * @pa
 * 	第一个参数可以是数组或类数组对象
 * 	第二个参数则可以是数组、类数组对象
 * TODO need test
 **/
Elf.merge = function(first,second){
    var len = +second.length,j = 0,i = first.length;
    for ( ; j < len; j++ ) {
        first[ i++ ] = second[ j ];
    }
    first.length = i;
    return first;
};
/*
 * 将一个类数组对象转换为真正的数组对象 
 * 所谓"类数组对象"就是一个常规的Object对象，但它和数组对象非常相似：具备length属性，并以0、1、2、3……等数字作为属性名。
 * 不过它毕竟不是数组，没有从数组的原型对象上继承下来的内置方法(例如：push()、 sort()等)。
 * create from 2.0
 * TODO need test
 **/
Elf.makeArray= function( arr, results ){
    var ret = results || [];
    if ( arr != null ) {
        if ( Elf.isArrayLike( Object( arr ) ) ) {
            Elf.merge( ret,
                typeof arr === "string" ?
                    [ arr ] : arr
            );
        } else {
            Array.push.call( ret, arr );
        }
    }
    return ret;
};
/*
 * 使用指定的函数过滤数组中的元素，并返回过滤后的数组，源数组不会受到影响，过滤结果只反映在返回的结果数组中
 * create from 2.0
 * TODO need test
 **/
Elf.grep = function( elems, callback, invert ) {
    var callbackInverse,
        matches = [],
        i = 0,
        length = elems.length,
        callbackExpect = !invert;

    // Go through the array, only saving the items
    // that pass the validator function
    for ( ; i < length; i++ ) {
        callbackInverse = !callback( elems[ i ], i );
        if ( callbackInverse !== callbackExpect ) {
            matches.push( elems[ i ] );
        }
    }
    return matches;
};
/*
*   深度复制对象
**/
Elf.deepCopy=function(arr){
    if(typeof arr !="object"){
        return;
    }
    var temp = arr instanceof Array?[]:{};
    for(var item in arr){
        if(arr.hasOwnProperty(item)){
            temp[item]=typeof arr[item]=="object"?Elf.utils.deepCopy(arr[item]):arr[item];
        }
    }
    return temp;
};
/*
 * 确定第一个参数在数组中的位置(如果没有找到则返回 -1 )
 * create from 2.0
 **/
Elf.inArray = function(elem,arr,i){
	var array=[];
    return arr == null ? -1 : array.indexOf.call(arr,elem,i);
};
/*
 * 扩展对象
 * create from 2.0
 **/
Elf.extend=function(){
    var options, name, src, copy, copyIsArray, clone,
        target = arguments[ 0 ] || {},
        i = 1,
        length = arguments.length,
        deep = false;
    if ( typeof target === "boolean" ) {
        deep = target;
        target = arguments[ i ] || {};
        i++;
    }
    if ( typeof target !== "object" && !Elf.isFunction( target ) ) {
        target = {};
    }
    if ( i === length ) {
        target = this;
        i--;
    }
    for ( ; i < length; i++ ) {
        if ( ( options = arguments[ i ] ) != null ) {
            for ( name in options ) {
                if(options.hasOwnProperty(name)){
                    src = target[ name ];
                    copy = options[ name ];
                    if ( target === copy ) {
                        continue;
                    }
                    if ( deep && copy && ( Elf.isPlainObject( copy ) || ( copyIsArray = Array.isArray( copy ) ) ) ) {
                        if ( copyIsArray ) {
                            copyIsArray = false;
                            clone = src && Array.isArray( src ) ? src : [];
                        } else {
                            clone = src && Elf.isPlainObject( src ) ? src : {};
                        }
                        target[ name ] = Elf.extend( deep, clone, copy );
                    } else if ( copy !== undefined ) {
                        target[ name ] = copy;
                    }
                }
            }
        }
    }
    return target;
};
/*
 * 遍历数组或对象数组
 * create from 3.0 
 **/
Elf.each = function(obj,callback,params){
    var length,
        i = 0;
    if(Elf.isArrayLike(obj)){
        length = obj.length;
        for(; i < length;i++) {
            if (callback.call(obj,obj[i],i,params) === false) {
                break;
            }
        }
    }else{
        for(i in obj){
            if(Object.prototype.hasOwnProperty.call(obj,i)){
                if(callback.call(obj,obj[i],i,params) === false){
                    break;
                }
            }
        }
    }
    return obj;
};
/*
 * 遍历对象操作
 * create from 2.0
 **/
Elf.iterate = function(obj,callback){
    for(var key in obj){
        if (key.toString()!="length" && Object.prototype.hasOwnProperty.call(obj, key)){
        	callback.call(obj[key],key,obj[key]);
        }
    }
    return obj;
};
/*
 * 对象转换为&连接符字符串
 * create from 2.0
 **/
Elf.object2requestSting=function(obj){
    var arr = [];
    for (var n in obj) {
        arr.push(n + "=" + obj[n]);
    }
    return arr.join("&");
};
/*
 * 字符串转换为对象
 * create from 2.0
 **/
Elf.requestSting2object=function(ss){
	var _obj={},_arr=ss.split("&");
	Elf.each(_arr,function(obj){
		var _a=obj.split("=");
		_obj[_a[0]]=_a[1]||"";
	});
	return _obj;
};
/*
* 表单验证checkValidity
*/
Elf.formValidity=function(form){
	var validResult=true,
		eles=form.elements,msg="",required,pattern,value,
		i=0;
	for(;i<eles.length;i++){
		var ele=eles[i];
		if(ele.tagName=="BUTTON"||ele.type=="button"||ele.type=="submit"||ele.type=="reset"){
			continue;
		}
		msg=Elf.attr(ele,"msg");
		msg=msg?JSON.parse(msg):{};
		required=Elf.attr(ele,"required");
		pattern=Elf.attr(ele,"pattern");
		value=ele.value;
		if(ele.type=="text"
			||ele.type=="textarea"
			||ele.type=="hidden"
			||ele.type=="password"
			||ele.type=="color"
			||ele.type=="number"
			||ele.type=="date"
			||ele.type=="datetime"
			||ele.type=="datetime-local"
			||ele.type=="month"
			||ele.type=="week"
			||ele.type=="time"
			||ele.type=="email"
			||ele.type=="tel"
			||ele.type=="url"
			||ele.type=="search"
			||ele.type=="range"
			||ele.type=="select-one"){
			if(required && (!value || value=="" || Elf.trim(value)=="")){
				Elf.components.toast({text:msg.required||"请输入此字段！"});
				validResult = false;
				break;
			}
			if(pattern && pattern!=""){
				var reg = new RegExp(pattern, "g");
				if(!reg.test(value)){
					Elf.components.toast({text:msg.pattern||"你输入的格式不正确！"});
					validResult = false;
					break;
				}
			}
		}else if(obj.type=="radio"){
			
		}else if(obj.type=="checkbox"){
			
		}
	}
	return validResult;
};
/*
* 表单序列化
*/
Elf.formSerialize=function(form){
    var _arr={};
    Elf.each(form.elements,function(obj,index){
        if(!obj.disabled){
            if(obj.type=="text"||obj.type=="textarea"||obj.type=="hidden"||obj.type=="password"||obj.type=="color"||obj.type=="number"||obj.type=="date"||obj.type=="datetime"||obj.type=="datetime-local"||obj.type=="month"||obj.type=="week"||obj.type=="time"||obj.type=="email"||obj.type=="tel"||obj.type=="url"||obj.type=="search"||obj.type=="range"||obj.type=="select-one"){
                _arr[obj.name]=obj.value;
            }else if(obj.type=="radio" && obj.checked){
                _arr[obj.name]=obj.value;
            }else if(obj.type=="checkbox" && obj.checked){
                if(form.elements[obj.name].length){
                    if(_arr[obj.name] && _arr[obj.name].push){
                        _arr[obj.name].push(obj.value);
                    }else{
                        _arr[obj.name]=[];
                        _arr[obj.name].push(obj.value);
                    }
                }else{
                    _arr[obj.name]=obj.value;
                }
            }
        }
    });
    return _arr;
};
/*
* 表单序列化为对象
*/
Elf.formSerializeObject=function(form){
    var _arr=Elf.serialize(form),_o={};
    Elf.iterate(_arr,function(key,value){
        var _value=value;
        var _names=key.split(".");
        var length=_names.length;
        do{
            var name=_names[length-1];
            var temp={};
            temp[name]=_value;
            _value=temp;
            length--;
        }while(length>0);
       _o= Elf.extend(true,_o,_value);
    });
    return _o;
};
/*
* 表单序列化为数组
*/
Elf.formSerializeArray=function(form){
    var _arr={};
    Elf.each(form.elements,function(obj,index){
        if(!obj.disabled){
            if(obj.type=="text"||obj.type=="textarea"||obj.type=="hidden"||obj.type=="password"||obj.type=="color"||obj.type=="number"||obj.type=="date"||obj.type=="datetime"||obj.type=="datetime-local"||obj.type=="month"||obj.type=="week"||obj.type=="time"||obj.type=="email"||obj.type=="tel"||obj.type=="url"||obj.type=="search"||obj.type=="range"||obj.type=="select-one"){
                _arr[obj.name]=obj.value;
            }else if(obj.type=="radio" && obj.checked){
                _arr[obj.name]=obj.value;
            }else if(obj.type=="checkbox" && obj.checked){
                _arr[obj.name]=obj.value;
            }
        }
    });
    return _arr;
};
/*
* 表单数据映射填充
*/
Elf.formDeserialize =function(form,data){
    form.reset();
    Elf.iterate(data,function(key,value){
        var element=form.elements[key];
        if(element){
            switch (element.type || element[0].type){
                case "checkbox":
                    if(element.length){
                        Elf.each(element,function(_el,_index){
                            for(var i=0;i<value.length;i++){
                                if(_el.value==value[i]){
                                    _el.checked=true;
                                    break;
                                }
                            }
                        });
                    }else{
                        if(element.value==value){
                            element.checked=true;
                        }
                    }
                break;
                case "radio":
                    Elf.each(element,function(obj,index){
                        if(obj.value==value){
                            obj.checked=true;
                        }
                    });
                break;
                case "select-one":
                    for(var i=0;i<element.length;i++){
                        if(element[i].value==value){
                            element[i].selected=true;
                            break;
                        }
                    }
                break;
                default:
                    element.value=value;
                break;
            }
        }
    });
};
/*
* 表单预设，初始化事件，
*/
Elf.formInitialization=function(form,config){
    if(config){
        Elf.iterate(config,function(key,value){
            var element = form.elements[key],type=element.type||element[0].type;
            if(Elf.isArrayLike(element) && type != "select-one"){
                Elf.each(element,function(el,index){
                    Elf.iterate(config[key],function(name,handler){
                        if(name=="defaultProcessor"){
                            if(typeof handler=="function"){
                                handler.call(el,form);
                            }
                        }else if(typeof handler =="function"){
                            Elf.xEvents.bind(el,name,function(evt){
                                handler.call(this,evt,this.value,form);
                            });
                        }else if(typeof handler=="string"){
                            Elf.attr(el,name,handler);
                        }
                    });
                });
            }else{
                Elf.iterate(config[key],function(name,handler){
                    if(name=="defaultProcessor"){
                        if(typeof handler=="function"){
                            handler.call(element,form);
                        }
                    }else if(typeof handler =="function"){
                        Elf.xEvents.bind(element,name,function(evt){
                            handler.call(element,evt,element.value,form);
                        });
                    }else if(typeof handler=="string"){
                        Elf.attr(element,name,handler);
                    }
                });
            }
        });
    }
};
/*
* documentElement对象转换为DocumentFragment
**/
Elf.toDocumentFragment=function(el){
    var _df=document.createDocumentFragment();
    while(el.children.length>0){        
        Elf.controls.appendTo(el.children[0],_df);
    }    
    return _df;
};
//支持参数字符串和key-value对象
Elf.makeUrl=function(url,params){
    var _params={},_arr=url.split("?");
    url=_arr[0];
    if(_arr.length>1){
        _params=Elf.requestSting2object(_arr[1]);
    }
    if(typeof params=="string"){
        //string 防止输入以?,&开始的参数列表，并转换为URL参数对象
        params=Elf.requestSting2object(params.indexOf("?")==0||params.indexOf("&")==0?params.substring(1):params||"");
    }
    //合并参数
    params=!Elf.isEmptyObject(_params)?Elf.extend(_params,params):params;
    return url && url.indexOf("?")>0 ? url+"&"+Elf.object2requestSting(params):url+"?"+Elf.object2requestSting(params);
};
/*
 * 加密
 * create from 2.0
 **/
Elf.encode=function(s){
	return encodeURIComponent(s).replace(/'/g,"%27").replace(/"/g,"%22");
};
/*
 * 解密
 * create from 2.0
 **/
Elf.decode=function(s){
	return decodeURIComponent(s.replace(/\+/g," "));
};
/*
* 解析字符串xml
* contentType
*   text/xml,text/html
* */
Elf.perser=function(text,contentType){
    try{
        var domParser = new DOMParser();
        return domParser.parseFromString(text,contentType);
    }catch(e){
        console.info(e);
        return null;
    }
};
//解析字符串为HTML对象
Elf.perserHTML=function(text){
	var persed=Elf.perser(text,"text/html");
	return Elf.toDocumentFragment(persed.body);
	//return Elf.perser(text,"text/html").body.innerHTML;
};
//解析字符串为XML对象
Elf.perserXML=function(text){
    return Elf.perser(text,"text/xml");
};
/*
*   数组转换为树，
*   key,设置数据关键属性，
*   parentKey 设置数据关联属性
*   注：调用之前为保险起见，建议对数据进行深度Copy以免影响原数据
*       如果是key==id并且parentKey==parentId,则不用设置
**/
Elf.array2tree=function(array,key,parentKey,parent){
    var tree = [];
    key=key||"id"; // 默认为id
    parentKey=parentKey||"parentId"; // 默认为 parentId
    Elf.utils.each(array,function(index,item){
        if(parent){
            if(item[parentKey] == parent[key]){
                item.children=Elf.utils.array2tree(array,key,parentKey,item);
                tree.push(item);
            }
        }else if(!!!item[parentKey]){
            //根节点
            item.children=Elf.utils.array2tree(array,key,parentKey,item);
            tree.push(item);
        }
    });
    return tree;
};
/*
nodeType
1:Element
2:Attribute
3:Text
4:CDATA Section
5:Entity Reference
6:Entity
7:Processing Instruction
8:Comment
9:Document
10:Document Type
11:Document Fragment
12:Notation
*/
//xml 转换为 Json 如果xml为字符串，需要先转换为XML对象
Elf.xml2Json=function(xml){
    var json={},i;
    if (xml.nodeType == 1){
        // do attributes
        if(xml.attributes.length > 0){
            for(i=0;i < xml.attributes.length;i++){
                var attrs = xml.attributes.item(i);
                json["-"+attrs.nodeName] = attrs.nodeValue;
            }
        }
    }else if(xml.nodeType == 3 && !/^\s+$/.test(xml.nodeValue)){
    	json = xml.nodeValue;
    }
    // do children
    if (xml.hasChildNodes()){
        for(i = 0; i < xml.childNodes.length; i++){
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if(item.nodeType==1){
            	//Element
            	if(typeof(json)=="string"){
            		var old=json;
            		json={};
            		json["#text"]=old;
            		json[nodeName] = Elf.xml2Json(item);
            	}else if(typeof(json[nodeName]) == "undefined"){
	                json[nodeName] = Elf.xml2Json(item);
	            }else{
	                if(typeof(json[nodeName].length) == "undefined"){
	                    var old = json[nodeName];
	                    json[nodeName] = [];
	                    json[nodeName].push(old);
	                }
	                json[nodeName].push(Elf.xml2Json(item));
	            }
            }else if(item.nodeType==3 && !/^\s+$/.test(item.nodeValue)){
            	//Text
            	if(Elf.isEmptyObject(json)){
                    json=item.nodeValue;
                }else{
                	//#text
                    json[nodeName] = item.nodeValue;
                }
            }
        }
    }
    return json;
};
/*
 * 模拟打开链接，设置打开方式
 * */
Elf.openURL=function(url,target){
    var arr=url.split("?"),
        params=arr.length>1?arr[1]:"",
        form=Elf.controls.createElement("form",{action:arr[0],target:target,method:"get"});
        params=Elf.requestSting2object(params);
    Elf.iterate(params,function(key,value){
        var _in=Elf.controls.createElement("input",{type:"hidden",name:key,value:value});
        Elf.controls.appendTo(_in,form);
    });
    Elf.controls.appendTo(form,document.body);
    form.submit();
    Elf.remove(form);
};
/*
*   模板数据映射Template data mapping
*       temp 表达式{命名规则(英文字母或下划线开始英文字母或数字组合命名)}，eg: 
*       data {}
*       eg:temp="共 <b>{total}</b> 条记录 <b>{totalPage}</b> 页",data={total:100,totalPage:10}  result="共 <b>100</b> 条记录 <b>10</b> 页"
*       表达式和对象属性命名区分大小写
*/
Elf.getMatchedData=function(data,match){
    var attributes=match.split("."),result=data;
    Elf.each(attributes,function(obj,index){
        result = typeof result == "object" && result.hasOwnProperty(obj) ? result[obj] : "";
    });
    //undefined转换为空
    result = typeof result == "undefined" ? "" : result;
    return result;
};
Elf.templateDataMapping=function(temp,data){
    if(temp){
        var matches=temp.match(/{{[a-z_A-Z](\w+)?([\.][a-z_A-Z](\w+)?)*}}/g);
        Elf.each(matches,function(match,index){
            temp=temp.replace(match,Elf.getMatchedData(data,match.substring(2,match.length-2)));
        });
    }
    return temp;
};
/*
 * 删除左右空格
 * create from 2.0
 **/
Elf.trim = function(text){
    return text == null ? "" :( text + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");
};
//字符串替换
Elf.replace=function(temp,text,replaced){
    replaced=replaced||"";
    if(temp && text){
        temp=temp.replace(new RegExp(text),replaced);
    }
    return temp;
};
//字符串替换全部
Elf.replaceAll=function(temp,text,replaced){
    replaced=replaced||"";
    if(temp && text){
        temp=temp.replace(new RegExp(text,"g"),replaced);
    }
    return temp;
};
//检查是否支持
Elf.support={
    touch : (window.Modernizr && Modernizr.touch === true) || (function () {
        return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
    })(),
    transforms3d : (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {
        var div = document.createElement('div').style;
        return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
    })()
};
Elf.noop=function(){};//定义空方法引用
/**
 * 计算两点之间的距离 Add on 3.0 
 * x,y,x1,y1
 */
Elf.distance=function(x,y,x1,y1){
	return Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2));
};
/*
 * 生成UUID from 3.0
 * len number 长度
 * radix number 进制(max 62)  default:36位，16进制
 */
Elf.uuid=function(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [],i;
    radix = radix || chars.length;
    if (len) {
        for (i = 0; i < len; i++) {
            uuid[i] = chars[0 | Math.random() * radix];
        }
    } else {
        var r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return uuid.join('');
};
/*
 * 生成水单 from 3.0
 * 当前时间yyyyMMddhhmmssS+3位八进制数
 */
Elf.serialNumber=function(){
    var uuid = UUID(3,8);
    return new Date().format("yyyyMMddhhmmssS") + uuid;
};
/*
vendors
@example webkit|moz|ms|O 
*/
Elf.vendor= (function() {
	var el = document.createElement('div').style;
	var vendors = [ 't','webkitT','MozT','msT','OT'],
		transform,
		i = 0,
		l = vendors.length;
	for (; i < l; i++) {
		transform = vendors[i] + 'ransform';
		if (transform in el) return vendors[i].substr(0, vendors[i].length - 1);
	}
	return false;
})();
/**
 *  attrs with vendor
 *  @return { String }
 **/
Elf.prefixStyle=function(style) {
	if (this.vendor === false) return false;
	if (this.vendor === '') return style;
	return this.vendor + style.charAt(0).toUpperCase() + style.substr(1);
};