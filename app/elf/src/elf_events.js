
Elf.events={
	dbClickDelay:200,//单位ms 
	minMoveDistance:6,//单位PX 最小移动距离，小于此值则认为是点击
	customEvents:'tap'//
	
};
Elf.events.addEvent=function(el,type,handler,capture){
    if(el.addEventListener){
        el.addEventListener(type,handler,!!capture);
    }else if(el.attachEvent){
    	el.attachment('on'+type,handler);//ie浏览器下的事件都要用一个on,IE 默认冒泡
    }else{
        el["on"+type]=handler;//ie下的事件添加
    }
};
Elf.events.removeEvent=function(el,type,handler,capture){
	if(el.removeEventListener){
		el.removeEventListener(type,handler,!!capture);
	}else if(el.detachEvent){
		el.detachEvent("on"+type,handler);
	}else{
		el["on"+type]=null;
	}
};
/**
 * 触发事件
 */
Elf.events.fire=function(el,type,evt){
	if(el.events && typeof el.events[type]=="function"){
		el.events[type].call(el,evt);
	}
};
/**
 * 绑定事件 
 * argments
 * 	0:elements
 * 	1:eventType
 * 	3:callback
 * 	4:useCapture
 */
Elf.on=function(el,type,handler,capture){
	if(!el._events){
		el._events={};
	}
	el.events[type]=handler;
	Elf.events.addEvent(el,type,handler,capture);
};
Elf.tap=function(e,eventName){
	var evt = document.createEvent('Event');
	evt.initEvent(eventName, true, true);
	evt.pageX = e.pageX;
	evt.pageY = e.pageY;
	e.target.dispatchEvent(evt);
};
Elf.one=function(el,type,handler,capture){
	
};
