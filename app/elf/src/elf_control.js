/*
 * create by lijianwei on 2017-10-26.
 * arguments:
 * 	tagName:string
 * 	className:sting
 * 	attrs:object
 * 	parent:node
 */
Elf.createElement=function(){
    var tagName = arguments[ 0 ],
        length = arguments.length,
        t,i=1,parent,attr,classLs,el;
    for(;i<length;i++){
        t=arguments[i];
        if(typeof t=="object" && (t.nodeType==1||t.nodeType==9||t.nodeType==11)){
            parent=t;
        }else if(typeof t=="object"){
            attr=t;
        }else if(typeof t=="string"){
            classLs=t;
        }
    }
    switch(tagName){
        case "checkbox":
            el=Elf.components.checkbox(attr,classLs);
            return el;
            break;
        default:
            el=document.createElement(tagName);
            break;
    }
    if(attr){
        Elf.properties(el,attr);
    }
    if(classLs){
        Elf.addClass(el,classLs);
    }
    if(parent){
        Elf.appendTo(el,parent);
    }
    return el;
};
/*
 * 修改：设置元素属性或attribute支持自定义属性, from 2.0 copyProperties
 **/
Elf.properties = function(el,props){
    Elf.iterate(props,function(key,obj){
        if(typeof el[key]=="string"){
            el[key] = obj;
        }else{
            el.setAttribute(key,obj);
        }
    });
};
/*
 * 添加子元素 from 2.0
 **/
Elf.append=function(el,child){
   return el.appendChild(child);
};
/*
 * 添加到父元素 from 2.0
 **/
Elf.appendTo=function(el,parent){
    parent.appendChild(el);
    return el;
};
/*
 * 在第一个位置添加子元素 from 2.0
 **/
Elf.prepend=function(el,child,target){
	target = target || el.children[0];
	if(target){
		return el.insertBefore(child,target);
	}else{
		return el.appendChild(child);
	}
};
/*
 * 添加到父元素的第一个位置或者指定位置 from 2.0
 **/
Elf.prependTo=function(el,parent,target){
	target = target || parent.children[0];
	if(target){
		parent.insertBefore(el,target);
	}else{
		parent.appendChild(el);
	}
	return el;
};
/*
 * 删除节点
 * create from 2.0
 **/
Elf.remove=function(el){
    if(el && el.parentNode){
        el.parentNode.removeChild( el );
        el=null;
    }
    return el;
};
/*
 * 设置或读取属性值操作
 * create from 2.0
 **/
Elf.attr=function(el,name,value){
	value= typeof value=="number" ? value+"":value;
    if(typeof value != "undefined"){
        el.setAttribute(name,value);
        return el;
    }else{
        return el.attributes[name]?el.attributes[name].value:"";
    }
};
/*
 * 删除元素的属性
 * create from 2.0
 **/
Elf.removeAttr=function(el,name){
	el.removeAttribute(name);
};
/*
 * 设置CSS
 * create from 2.0
 **/
Elf.css=function(el,styles){
    Elf.iterate(styles,function (key){
        el.style[key] = styles[key];
    });
    return el;
};
/*
 * 为El添加类名，支持列表"a b c"
 * create from 2.0
 **/
Elf.addClass=function(el,names){
    if(el.length){
        Elf.each(el,function(_el,index){
            return Elf.addClass(_el,names);
        });
    }
    var classList=!!el.className?el.className.split(' '):[];
    classList=Elf.concat(classList,names);
    el.className=classList.join(' ');
    return el;
};
/*
 * 删除el 类名
 * create from 2.0
 **/
Elf.removeClass=function(el,names){
    var classList;
    if(el.length){
        Elf.each(el,function(obj,index){
            classList=!!obj.className?obj.className.split(' '):[];
            classList = Elf.reject(classList,names);
            obj.className=classList.join(' ');
        });
    }else{
        classList=!!el.className?el.className.split(' '):[];
        classList = Elf.reject(classList,names);
        el.className=classList.join(' ');
    }
    return el;
};
/*
 * 判断el是否有某类名
 * create from 2.0
 **/
Elf.hasClass=function(el,names){
    var clazz=!!el.className?el.className.split(' '):[],o;
    for(o in clazz){
        if(clazz[o]==names){
            return true;
        }
    }
    return false;
};
/*
* 查找当前元素的在父元素中的索引
* */
Elf.index=function(el){
    return Array.prototype.indexOf.call(el.parentNode.children,el);
};
/*
 * 遍历兄弟元素,返回数组对象
 * create from 2.0
 **/
Elf.siblings=function(el){
    var _array=[],
        _ps=el.previousSibling,
        _ns=el.nextSibling;
    while (_ps!=null){
        _array.push(_ps);
        _ps=_ps.previousSibling;
    }
    while(_ns!=null){
        _array.push(_ns);
        _ns=_ns.nextSibling;
    }
    return _array;
};
/*
* 查找当前元素的满足条件的父元素
* */
Elf.closest=function(el,selector){
    var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)){
            return el;
        } else {
            el = el.parentElement;
        }
    }
    return null;
};

/*
 * 适用于input
 * create from 2.0
 **/
Elf.getValue=function(el){
    return el.value;
};
/*
 * 复制节点 from 3.0
 */
Elf.clone=function(el){
	
};
Elf.getOffsetTop=function(el){
	var offset = el.offsetTop;
	if (el.offsetParent != null) offset += Elf.getOffsetTop(el.offsetParent);
	return offset;
};
Elf.getOffsetLeft=function(el){
	var offset = el.offsetLeft;
	if (el.offsetParent != null) offset += Elf.getOffsetLeft(el.offsetParent);
	return offset;
}
