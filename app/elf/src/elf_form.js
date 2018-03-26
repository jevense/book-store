/*
 * create by lijianwei on 2017-10-27
 * 
 * 表单序列化，
 * 表单数据映射
 * 表单配置
 * 表单默认行为，
 * 表单校验
 * */
Elf.form={
	defaults:{},
	requiredMsg:"{{name}}不能为空",
	types:{
		"mobile":{
			name:"手机号",
			pattern:"^1[34578]\d{9}$",
			msg:"手机号格式不正确"
		},
		"password":{
			name:"密码",
			pattern:"^.{6,18}$",
			msg:"密码格式不正确"
		},
		"zipCode":{
			name:"邮编",
			pattern:"[1-9][0-9]{5}",
			msg:"邮编格式不正确"
		},
		"imgCode":{
			name:"图片验证码",
			pattern:"^1[34578]\d{9}$",
			msg:"图片验证码格式不正确"
		},
		"idcared":{
			name:"身份证号码",
			pattern:"^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$",
			msg:"身份证号码格式不正确"
		},
		"qq":{
			name:"qq号码",
			pattern:"[1-9][0-9]{4,}",
			msg:"qq号码格式不正确"
		},
		"url":{
			name:"url",
			pattern:"^http[s]?:\/\/([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$",
			msg:"url格式不正确"
		},
		"email":{
			name:"email",
			pattern:"^\w+[-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$",
			msg:"email格式不正确"
		}
	}
};
/*
* 表单预设，初始化事件，
*/
Elf.form.initialization=function(form,config){
    if(config){
        Elf.iterate(config,function(key,value){
            var element = form.elements[key],
            	type=element.type||element[0].type;
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
* 表单验证checkValidity
*/
Elf.form.validity=function(form){
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
Elf.form.serialize=function(form){
    var _arr={},
    	elements=form.elements;
    Elf.each(form.elements,function(obj,index){
        if(!obj.disabled && obj.name){
        	if(_arr[obj.name]==undefined){
				_arr[obj.name]="";
			}
        	switch(obj.type){
        		case "text":
        		case "textarea":
        		case "hidden":
        		case "password":
        		case "color":
        		case "number":
        		case "date":
        		case "datetime":
        		case "datetime-local":
        		case "month":
        		case "week":
        		case "email":
        		case "time":
        		case "tel":
        		case "url":
        		case "search":
        		case "range":
        		case "select-one":
        			_arr[obj.name]=obj.value;
        		break;
        		case "select-multiple":
        			_arr[obj.name]=[];
        			for(var i=0;i<form.elements[obj.name].length;i++){
        				var opt=form.elements[obj.name][i];
        				if(opt.selected){
        					_arr[obj.name].push(opt.value);
        				}
        			}
        		break;
        		case "radio":
        			if(obj.checked){
        				_arr[obj.name]=obj.value;
        			}
        		break;
        		case "checkbox":
        			if(obj.checked){
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
        		break;
        	}
        }
    });
    return _arr;
};
/*
* 表单序列化为对象
*/
Elf.form.serializeObject=function(form){
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
/*Elf.form.serializeArray=function(form){
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
};*/
/*
* 表单数据映射填充
*/
Elf.form.deserialize =function(form,data){
    form.reset();
    Elf.iterate(data,function(key,value){
        var element=form.elements[key];
        if(element){
            switch (element.type || element[0].type){
                case "checkbox":
                    if(element.length){
                        Elf.each(element,function(_index,_el){
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
                    Elf.each(element,function(index,obj){
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
