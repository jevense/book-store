/**
 * Created by lijianwei on 2016/6/20.
 * pop window Elf.components.popMenus()
 *	@author 李见伟
 *	@parameters 
 *	options
 *		onCloseDestroy 	true|false default true 当关闭时销毁，当配置了此项为true时，关闭后不能再次调用methods.show方法
 *		content:documentElement|htmlstring 窗口内容
 *		target：default body 窗口打印位置
 **/
(function(){
	function init(options){
		var target=Elf.controls.createElement("div","elf-popMenus");
		target.options=options;
		target.bg=Elf.controls.createElement("div","elf-popMenus-bg",target);
		target.list=Elf.controls.createElement("div","elf-popMenus-items ui-media-list",target);
		Elf.utils.each(options.data,function(){
			var item=initItem(options.templete,this);
			Elf.utils.addClass(item.childNodes,"elf-popMenus-item");
			Elf.controls.appendTo(item,target.list);
		});
		initEvents(target,options);
		var position={
			top:!isNaN(Number(options.top)) && options.top!="" ? options.top+"px" : options.top,
			left:!isNaN(Number(options.left))&& options.left>0?options.left+"px" : options.left,
			right:!isNaN(Number(options.right))&& options.right>0?options.right+"px" : options.right,
			bottom:!isNaN(Number(options.bottom)) && options.bottom>0?options.bottom+"px" : options.bottom,
			width:!isNaN(Number(options.width)) && options.width>0?options.width+"px" : options.width,
			"min-width":!isNaN(Number(options.minWidth)) && options.minWidth>0?options.minWidth+"px" : options.minWidth
		};
		//console.info(position);
		Elf.utils.css(target.list,position);
		if(options.target){
			Elf.controls.appendTo(target,options.target);
		}
		return target;
	};
	function initItem(templete,data){
		var df,doc;
		doc=Elf.utils.perser(Elf.utils.templateDataMapping(templete,data),"text/html");
		df=Elf.utils.toDocumentFragment(doc.body);
		return df;
	};
	function close(target){
		if(target.options.onClose){
			target.options.onClose.call(target);
		}
		if(target.options.onCloseDestroy){
			return Elf.utils.remove(target);
		}else{
			return Elf.utils.css(target,{display:"none"});
		}
	};
	function initEvents(target,options){
		Elf.xEvents.bind(target,"click",function(evt){
			var tt=evt.target;
			var item=Elf.utils.closest(tt,".elf-popMenus-item");
			if(item){
				var index=Elf.utils.index(item);
				if(typeof options.onClick=="function"){
					options.onClick.call(item,target,options.data[index]);
				}
			}
			close(target);
		});
	};
	Elf.utils.extend(Elf.components,{
        popMenus:function(options,params){
            if (typeof options == 'string'){
                return Elf.components.popMenus.methods[options](params);
            }
            options = Elf.utils.extend({
            	top:"",
            	left:"",
            	bottom:"",
            	right:"",
                width:"",
                minWidth:"",
                data:[],
				templete:'<div class="ui-media"><div class="ui-media-left"><span class="icon"><img src="{{icon}}"></span></div><div class="ui-media-body vam"><span>{{title}}</span></div></div>',
				onClick:"",
				onCloseDestroy:true,
				target:document.body
			},options);
            return init(options);
        }
    });
    Elf.components.popMenus.methods ={
    	close:function(target){
			return close(target);
		}
    };
})(Elf);