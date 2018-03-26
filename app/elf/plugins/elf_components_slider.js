/**
 * Created by lijianwei on 2017/4/20.
 *	图像浏览器插件
 *	@author 李见伟
 *	@parameters 
 *	options
 *		width:number|string default:"" 宽度，
 *		height:number|string default:"" 高度，
 *		store:[] 【必须】数组用来加载图像列表，标准JSon对象数据,
 * 		randerer：function(),【必须】渲染器，返回字符串或dom对象
 * 		autoPlay：number default:0,自动播放时间毫秒数，0不播放
 **/
(function(){
	function init(options){
		var target=Elf.controls.createElement("div","elf-slider-wrapper");
		target.interval=null;
		target.run="next";
		target.options=options;
		initView(target,options);
		initEvents(target,options);
		setCurrent(target,0);
		if(options.autoPlay){
			autoRun(target,options);
		}
		if(options.width){
			Elf.utils.css(target,{width:isNaN(options.width)?options.width:options.width+"px"});
		}
		if(options.height){
			Elf.utils.css(target,{width:isNaN(options.height)?options.height:options.height+"px"});
		}
		return target;
	};
	function initView(target,options){
		target.items=Elf.controls.createElement("div","elf-slider-items",target);
		target.paging=Elf.controls.createElement("div","elf-slider-paging",target);
		Elf.utils.each(options.store,function(index,store){
			var item=Elf.controls.createElement("div","elf-slider-item",target.items);
			item.ownData=store;
			var randerer=options.renderer.call(target,index,store);
			if(typeof randerer=="string"){
				Elf.controls.appendTo(Elf.utils.perserHTML(randerer),item);
			}else if(randerer && typeof randerer=="object" && (randerer.nodeType==1||randerer.nodeType==9||randerer.nodeType==11)){
				Elf.controls.appendTo(randerer,item);
			}
			Elf.controls.createElement("span","elf-slider-pagination",target.paging);
		});
		if(options.target){
			Elf.controls.appendTo(target,options.target);
		}
	};
	function setCurrent(target,index){
		if(target.currentIndex==index){
			return;
		}
		target.currentIndex=index;
		Elf.utils.css(target.items,{
			"transitionDuration":"300ms",
			"-webkit-transitionDuration":"300ms",
			"transform":"translate3d("+ (index==0?"0":-1*index*100+"%") +",0,0)",
			"-webkit-transform":"translate3d("+ (index==0?"0":-1*index*100+"%") +",0,0)"
		});
		var current=target.items.children[index];
		currentPagination=target.paging.children[index];
		Elf.utils.removeClass(target.paging.children,"active");
		Elf.utils.addClass(currentPagination,"active");
	};
	function initEvents(target,options){
		Elf.xEvents.bind(target.paging,"click",function(evt){
			var tt=evt.target;
			var pagination=Elf.utils.closest(tt,".elf-slider-pagination");
			if(pagination && !Elf.utils.hasClass("active")){
				index=Elf.utils.index(pagination);
				setCurrent(target,index);
			}
			if(options.autoPlay){
				autoRun(target,options);
			}
		});
		if(typeof options.onClick =="function"){
			Elf.utils.each(target.items.children,function(index,obj){
				Elf.xEvents.bind(obj,"click",function(evt){
					options.onClick.call(target,evt,this.ownData);
				});
			});
		}
	};
	function autoRun(target,options){
		if(target.interval){
			window.clearInterval(target.interval);
			target.interval=null;
		}
		target.interval=window.setInterval(function(){
			if(target.run=="next"){
				if(target.currentIndex < options.store.length-1){
					next(target);
				}else{
					target.run="prev";
					prev(target);
				}
			}else{
				if(target.currentIndex > 0){
					prev(target);
				}else{
					target.run="next";
					next(target);
				}
			}
		},options.autoPlay);
	};
	function next(target){
		setCurrent(target,target.currentIndex+1);
	};
	function prev(target){
		setCurrent(target,target.currentIndex-1);
	};
	Elf.utils.extend(Elf.components,{
        slider:function(options,params){
            if (typeof options == 'string'){
                return Elf.components.slider.methods[options](params);
            }
            options = Elf.utils.extend({},Elf.components.slider.defaults,options);
            return init(options);
        }
    });
    Elf.components.slider.defaults={
		width:"",
		height:"",
		autoPlay:0,
		target:""
    };
    Elf.components.slider.methods ={};
})(Elf);