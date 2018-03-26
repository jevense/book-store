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
		var target=Elf.controls.createElement("div","elf-audio-wrapper");
		if(options.context){
			Elf.utils.attr(options.context,"data-play","playing");
		}
		target.triggerElement =document.activeElement;
		Elf.utils.addClass(target.triggerElement,"playing");
		target.triggerElement.blur();
		target.audio=Elf.controls.createElement("audio",{src:options.src},target);
		target.timer=null;
		if(options.autoPlay){
			Elf.utils.attr(target.audio,"autoplay","autoplay");
		}
		if(options.loop){
			Elf.utils.attr(target.audio,"loop","loop");
		}
		initView(target,options);
		initEvents(target,options);
		if(options.target){
			Elf.controls.appendTo(target,options.target);
		}
		target.options=options;
		if(options.autoPlay){
			//Elf.utils.attr(target.audio,"autoplay","autoplay");
			//play(target);
		}
		return target;
	};
	function initView(target,options){
		Elf.controls.createElement("div","elf-audio-bg",target);
		var media=Elf.controls.createElement("div","ui-media",target);
		var mediaLeft=Elf.controls.createElement("div","ui-media-left",media);
		var mediaBody=Elf.controls.createElement("div","ui-media-body",media);
		var mediaRight=Elf.controls.createElement("div","ui-media-right",media);
		target.controls=Elf.controls.createElement("span","icon player-play",mediaLeft);
		target.stop=Elf.controls.createElement("span","icon player-stop",mediaRight);
		target.progress=Elf.controls.createElement("div","elf-audio-progress",mediaBody);
		target.progressBar=Elf.controls.createElement("div","elf-audio-progress-bar",target.progress);
		target.progressValue=Elf.controls.createElement("div","elf-audio-progress-value",target.progressBar);
	};
	function play(target){
		target.audio.play();
		Elf.utils.removeClass(target.controls,"player-play");
		Elf.utils.addClass(target.controls,"player-pause");
		if(target.timer){
			window.clearInterval(target.timer);
			target.timer=null;
		}
		target.timer=window.setInterval(function(){
			Elf.utils.css(target.progressValue,{width:target.audio.currentTime/target.audio.duration*100+"%"});
		},1000);
	};
	function pause(target){
		target.audio.pause();
		Elf.utils.removeClass(target.controls,"player-pause");
		Elf.utils.addClass(target.controls,"player-play");
		if(target.timer){
			window.clearInterval(target.timer);
			target.timer=null;
		}
	};
	function onClose(target){
		//Elf.effects.fadeOut(target,"null",function(){
			target.triggerElement.focus();
			if(target.options.onCloseDestroy){
				Elf.utils.remove(target);
			}else{
				Elf.utils.css(target,{display:"none"});
			}
			if(target.options.onClose){
				target.options.onClose(target);
			}
		//});
	}
	function stop(target){
		//target.audio.currentTime=0;
		close(target);
	};
	function close(target){
		pause(target);
		Elf.utils.remove(target.audio);
		if(typeof target.options.onClose =="function"){
			target.options.onClose.call(target);
		}
		return Elf.utils.remove(target);
	}
	function initEvents(target,options){
		Elf.xEvents.bind(target,"click",function(evt){
			var tt=evt.target;
			if(Elf.utils.hasClass(tt,"player-play")){
				play(target);
			}else if(Elf.utils.hasClass(tt,"player-pause")){
				pause(target);
			}else if(Elf.utils.hasClass(tt,"player-stop")){
				close(target);
			}
		});
		target.audio.onended=function(){
			if(typeof options.onEnded =="function"){
				options.onEnded.call(target);
			}
		};
		target.audio.onplaying=function(){
			play(target);
		};
		target.audio.onerror=function(){
			pause(target);
		};
		target.audio.oncanplay=function(){
			console.info("oncanplay");
			play(target);
		};
	};
	function update(target,options){
		target.options=Elf.utils.extend({},target.options,options);
		Elf.utils.attr(target.audio,"src",target.options.src);
	};
	Elf.utils.extend(Elf.components,{
        audioPlayer:function(options,params){
            if (typeof options == 'string'){
                return Elf.components.audioPlayer.methods[options](params);
            }
            options = Elf.utils.extend({target:document.body},Elf.components.audioPlayer.defaults,options);
            return init(options);
        }
    });
    Elf.components.audioPlayer.defaults={
    	src:"",
		autoPlay:true,
		loop:false,
		context:"",
		onEnded:function(target){
			Elf.components.audioPlayer.methods.close(this);
		},
		onClose:function(target){},
    };
    Elf.components.audioPlayer.methods ={
    	update:function(target,options){
			return update(target,options);
		},
		play:function(target,options){
			return play(target,options);
		},
		pause:function(target,options){
			return pause(target,options);
		},
		stop:function(target,options){
			return stop(target,options);
		},
		close:function(target,options){
			return close(target,options);
		}
    };
})(Elf);