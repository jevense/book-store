Elf.effects = function (args) {
//    if (Elf.effects.isAnimating()) return;

    var effectsName = args["effectName"];
    var effectsArgs = args["effectArgs"];
    Elf.effects[effectsName](effectsArgs);
};
Elf.effects.DefaultTransition=300;//ms
Elf.effects.DefaultDuration=0.3;//s, because css3 use seconds as unit

Elf.effects.AnimatingFlags = [];
Elf.effects.isAnimating = function () {
    return Elf.effects.AnimatingFlags.length != 0;
};

Elf.effects.changeStyle= function (args) {
    var targetObj = args["targetObj"];
    var duration = args["duration"];
    var css = args["css"];
    Elf.effects.AnimatingFlags.push(Elf.effects.AnimatingFlags.length);

    css += Elf.cssText.duration(duration);
    targetObj.style.cssText += css;
};

Elf.effects.moveToLeft= function (args) {
    var targetObj = args["targetObj"];
    var duration = args["duration"];
    Elf.effects.AnimatingFlags.push(Elf.effects.AnimatingFlags.length);

    var left = "-100%";
    var top = "0";
    var css = Elf.cssText.leftTopPosition(left, top);
    css += Elf.cssText.duration(duration);
    targetObj.style.cssText += css;
};
Elf.effects.moveToCentral= function (args) {
    var targetObj = args["targetObj"];
    var duration = args["duration"];
    Elf.effects.AnimatingFlags.push(Elf.effects.AnimatingFlags.length);

    var left = "0";
    var top = "0";
    var css = Elf.cssText.leftTopPosition(left, top);
    css += Elf.cssText.duration(duration);
    targetObj.style.cssText += css;
};
Elf.effects.moveToCentralPosition= function (args) {
    var targetObj = args["targetObj"];
    var duration = args["duration"];
//    var position = args["position"];
    Elf.effects.AnimatingFlags.push(Elf.effects.AnimatingFlags.length);

    var left = args["left"];
    var top = "0";
    var css = Elf.cssText.leftTopPosition(left, top);
    css += Elf.cssText.duration(duration);
    targetObj.style.cssText += css;
};
Elf.effects.moveToRight= function (args) {
    var targetObj = args["targetObj"];
    var duration = args["duration"];
    Elf.effects.AnimatingFlags.push(Elf.effects.AnimatingFlags.length);

    var left = "100%";
    var top = "0";
    var css = Elf.cssText.leftTopPosition(left, top);
    css += Elf.cssText.duration(duration);
    targetObj.style.cssText += css;
};
Elf.effects.moveToUpper= function (args) {
    var targetObj = args["targetObj"];
    var duration = args["duration"];
    Elf.effects.AnimatingFlags.push(Elf.effects.AnimatingFlags.length);

    var left = "0";
    var top = "-100%";
    var css = Elf.cssText.leftTopPosition(left, top);
    css += Elf.cssText.duration(duration);
    targetObj.style.cssText += css;
};
Elf.effects.moveToLower= function (args) {
    var targetObj = args["targetObj"];
    var duration = args["duration"];
    Elf.effects.AnimatingFlags.push(Elf.effects.AnimatingFlags.length);

    var left = "0";
    var top = "100%";
    var css = Elf.cssText.leftTopPosition(left, top);
    css += Elf.cssText.duration(duration);
    targetObj.style.cssText += css;
};
/*
 * 建议使用 Elf.addClass()
 * TODO delete form 2.0
 **/
Elf.effects.appendClass= function (obj,aClass) {
    //obj.classMemory=obj.className;
    //obj.className+=" "+aClass;
    var classArray=aClass.split(" ");
    var oldClassName=obj.className?obj.className:"";
    var _length=classArray.length;
    var classMatch=" "+oldClassName+" ";
    var result=oldClassName;
    for(var i=0;i<_length;i++){
        if(classMatch.indexOf(" "+classArray[i]+" ")<0){
            result+=" "+classArray[i];
        }
    }
    obj.className=result;
};
/*
 * 建议使用 Elf.removeClass()
 * TODO delete form 2.0
 **/
Elf.effects.removeClass= function (obj,rClass) {
    var classArray=rClass.split(" ");
    var _length=classArray.length;
    var oldClassName=obj.className?obj.className:"";
    var result=" "+oldClassName+" ";
    for(var i=0;i<_length;i++){
        result=result.replace(" "+classArray[i]+" "," ");
    }
    obj.className=result;
};

Elf.effects.unSelected=function(obj,selectedClass) {
    if (obj.isSelected) {
        Elf.removeClass(obj,selectedClass);
        //Elf.effects.removeClass(obj,selectedClass);
        obj.isSelected = false;
    }
};

Elf.effects.singleSelect=function(obj, list, selectedClass) {
    if (!obj.isSelected) {
        //Elf.effects.appendClass(obj, selectedClass);
        Elf.addClass(obj,selectedClass);
        obj.isSelected = true;
        Elf.iterate(list,function(key,item){
            if (item != obj) {
                Elf.effects.unSelected(item,selectedClass);
            }
        });
        /*Elf.algorithm.iterateValues({
            collection: list,
            handler: function (item) {
                if (item != obj) {
                    Elf.effects.unSelected(item,selectedClass);
                }
            }
        });*/
    }
};
/*
 * 对象隐藏--支持回调，完成回调 可为空
 * time 毫秒数
 * create from 2.0
 **/
Elf.effects.hidden=function(obj,time,callback){
    time=!!time && Elf.isNumeric(time)?time:Elf.effects.DefaultTransition;
    obj.style.opacity= 0;
    obj.style.transition = "opacity "+ time/1000+"s"+" ease-out";
    window.setTimeout(function(){
        obj.style["display"]="none";
        obj.style.opacity="";
        obj.style.transition="";
        if(typeof(callback)==="function") {
            callback.call(obj);
        }
    },time);
    //Elf.xEvents.bind(obj,"transitionend",function(){
    //    obj.style["display"]="none";
    //    obj.style.opacity="";
    //    obj.style.transition="";
    //    console.info("dss");
    //    Elf.xEvents.unBind(obj,"transitionend",function(){});
    //    if(!!callback && typeof(callback)==="function") {
    //        callback.call(obj);
    //    }
    //});
};
/*
 * 对象显示--支持回调，完成回调 可为空
 * time 毫秒数
 * create from 2.0
 **/
Elf.effects.show=function(obj,time,fun){
    time=!!time && Elf.isNumeric(time)?time:Elf.effects.DefaultTransition;
    obj.style.opacity=1;
    obj.style.transition = "opacity "+ time/1000+"s"+" ease-out";
    window.setTimeout(function(){
        obj.style["display"]="";
        obj.style.opacity="";
        obj.style.transition="";
        if(typeof fun ==="function") {
            fun.call(this,obj);
        }
    },time);
    /*Elf.xEvents.bind(obj,"transitionend",function(){
        if(!!callback && typeof(callback)==="function") {
            callback.call(obj);
        }
    });*/
};
/*
 * 对象效果--支持回调，完成回调 可为空
 * time 毫秒数
 * create from 2.0
 * TODO need test
 **/
Elf.effects.slideUp=function(obj,time,fun){
    time = Elf.isNumeric(time) ? time : Elf.effects.DefaultTransition;
    obj.style.height = 0;
    obj.style.overflow="hidden";
    obj.style.transition = "height "+ time/1000 + "s"+" ease-out";
    window.setTimeout(function(){
        obj.style["display"]="none";
        obj.style.height="";
        obj.style.transition="";
        if(typeof fun ==="function") {
            fun.call(this,obj);
        }
    },time);
};

Elf.effects.fadeIn=function(obj,duration,callback){
    Elf.effects.cssAnimate(obj,duration,"animated fadeIn",function(){
        if(typeof callback== "function"){
            callback.call(this,obj);
        }
    });
};
Elf.effects.fadeOut=function(obj,duration,callback){
    Elf.effects.cssAnimate(obj,duration,"animated fadeOut",function(){
        if(typeof callback== "function"){
            callback.call(this,obj);
        }
    });
};
Elf.effects.cssAnimate=function(obj,duration,classlist,callback){
    var time=duration=="fast"?300:duration=="slow"?2000:1000;
    classlist= typeof duration=="string" ? classlist+" "+ duration : classlist || "";
    Elf.addClass(obj,classlist);
    setTimeout(function(){
        Elf.removeClass(obj,classlist);
        if(typeof callback== "function"){
            callback.call(this,obj);
        }
    },time);
};
//transform 3D 动画
Elf.effects.transition=function(el,duration){
    if (typeof duration !== 'string') {
        duration = duration + 'ms';
    }    
    return el.style.webkitTransitionDuration=el.style.MsTransitionDuration = el.style.msTransitionDuration = el.style.MozTransitionDuration = el.style.OTransitionDuration = el.style.transitionDuration = duration;
};
Elf.effects.transform=function(el,transform){
    el.style.webkitTransform=transform;
    el.style.MsTransform=transform;
    el.style.msTransform = transform;
    el.style.MozTransform = transform;
    el.style.OTransform=transform;
    el.style.transform = transform;
    return  el;
};
/*
(function () {
    document.addEventListener("webkitTransitionEnd", function () {//webkit
        Elf.effects.AnimatingFlags.pop();
    });
    document.addEventListener("transitionend", function () {//moz, ie10,ie11
        Elf.effects.AnimatingFlags.pop();
    });
    document.addEventListener("otransitionend", function () {//opera
        Elf.effects.AnimatingFlags.pop();
    });
})();*/

//Elf.effects.enableVScroll=function(obj) {
//    obj.className = obj.className ? obj.className + " autoOverflowY" : "autoOverflowY";
//    Elf.xEvents.onXDragging(obj,function(data){// for scroll function in mobile
//        var e = Elf.getEvent(arguments[0]);
//        Elf.stopPop(e);
//        obj.scrollTop+=(-1)*data.args.draggedY;
//    });
//};

Elf.effects.rollPage=function(wrapper,content,beyondTop,beyondBottom){
//    var wrapper=document.getElementById("wrapper");
//    var content=document.getElementById("content");
//    console.log("roll");

    content.initScale=1;
    content.initTransformX=0;
    content.initTransformY=0;

    content.currentScale=content.initScale;
    content.dragOriX=content.initTransformX;
    content.dragOriY=content.initTransformY;
    content.currentTransformX=content.initTransformX;
    content.currentTransformY=content.initTransformY;


    function judgeBorder(){
        var wrapperHeight=wrapper.clientHeight;
        var contentHeight=content.offsetHeight;
        var scrollSpan=contentHeight-wrapperHeight;
        var scrollY=wrapper.scrollTop;

        content.isTouchTop=scrollY<=0;//move to top
        content.isTouchBottom=contentHeight<wrapperHeight || scrollY>=scrollSpan-10;//move to bottom
        content.isInCenter=scrollY>0 && scrollY<scrollSpan-10;//normal scroll
    }
    judgeBorder();

//    wrapper.addEventListener("scroll",function(event){
//        judgeBorder();
//    });

    Elf.xEvents.onXDragging(wrapper,function(ev){
//        judgeBorder();
        if(content.isInCenter){
            return;
        }

        var args=ev.args;
        if(args.draggedY>0){
            Elf.addClass(content,"draggingDown");
        }
        else{
            Elf.addClass(content,"draggingUp");
        }

//        console.log(args.draggedY);

        content.currentTransformY=content.dragOriY+args.draggedY;
//        console.log(content.currentTransformY);
//        console.log(content.isTouchTop);
//        console.log(content.isTouchBottom);
//        console.log(content.isInCenter);

        if(content.isTouchTop){
            if(args.draggedY>60){
//                console.log("o");
                Elf.addClass(content,"oversize");
                content.isTopOverSize=true;
            }
            else{
                content.isTopOverSize=false;
            }
        }
        if(content.isTouchBottom){
//             console.log(args.draggedY);
            if(args.draggedY<-60){
                Elf.addClass(content,"oversize");
                content.isBottomOverSize=true;
            }
            else{
                content.isBottomOverSize=false;
            }
        }
        Elf.effects({
            effectName:"changeStyle",
            effectArgs:{
                targetObj:content,
                duration:0,
                css:Elf.cssText.transformWithScale(content.currentTransformX,content.currentTransformY,content.currentScale)
            }
        });

    },function(){
        judgeBorder();
        resetEffect();
        Elf.removeClass(content,"draggingUp draggingDown oversize");
//        console.log(content.isTouchTop);
//        console.log(content.isTouchBottom);
        if(content.isInCenter){
            return;
        }

        if(content.isTouchTop){
            if(content.isTopOverSize){
                beyondTop();
            }
        }
        if(content.isTouchBottom){
            if(content.isBottomOverSize){
                beyondBottom();
            }
        }
    });

    function resetEffect(){
        Elf.effects({
            effectName:"changeStyle",
            effectArgs:{
                targetObj:content,
                duration:Elf.effects.DefaultDuration,
                css:Elf.cssText.transformWithScale(content.initTransformX,content.initTransformY,content.initScale)
            }
        });
        content.currentScale=content.initScale;
        content.dragOriX=content.initTransformX;
        content.dragOriY=content.initTransformY;
        content.currentTransformX=content.initTransformX;
        content.currentTransformY=content.initTransformY;
    }
//    Elf.xEvents.onXSwipe(wrapper, function(){
//        console.log("swipe");
//        Elf.effects({
//            effectName:"changeStyle",
//            effectArgs:{
//                targetObj:content,
//                duration:Elf.effects.DefaultDuration,
//                css:Elf.cssText.transformWithScale(content.initTransformX,content.initTransformY,content.initScale)
//            }
//        });
//    });

//    wrapper.notifyChange=function(){
//        console.log("get change notification!");
//        judgeBorder();
//    };
};