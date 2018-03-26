/**
 * Created by lijianwei on 2016/5/16.
 *
 * 树形组件
 *  Elf.components.tree(options);
 *  @parameters
 *  options
 *      autoOpen:false,自动打开
 *      closable:false,是否可关闭
 *      collapsible:true, 是否可折叠
 *      collapseDirection:true,折叠方向，top,bottom,left,right
 *      vie:false,配置打开互斥，只对兄弟forder生效，如果配置了autoOpen 将不生效
 *      checkable:false,是否有复选框
 *      yes:"ps",勾选时，关联父(parent-p)，关联子(son-s)
 *      not:"ps",取消勾选时，关联父(parent-p)，关联子(son-s)
 *      target:document.body,
 *      store:{},菜单配置Json数据
 *      key:"id",
 *      nameKey:"name",
 *      parentKey:"pid",
 *      pathKey:"path",
 *      onLoaded:function(event){},
 *      onChange:function(event){},
 *      onChecked:function(event){},
 *      onClick:function(event){}
 **/
(function(){
    function initOptions(options){
        options.YP=false;
        options.YS=false;
        options.NP=false;
        options.NS=false;
        if(options.yes){
            if(options.yes=="ps"){
                options.YP=true;
                options.YS=true;
            }else if(options.yes=="p"){
                options.YP=true;
                options.YS=false;
            }else if(options.yes=="s"){
                options.YP=false;
                options.YS=true;
            }
        }
        if(options.not){
            if(options.not=="ps"){
                options.NP=true;
                options.NS=true;
            }else if(options.not=="p"){
                options.NP=true;
                options.NS=false;
            }else if(options.not=="s"){
                options.NP=false;
                options.NS=true;
            }
        }
        if(!!!options.target){
            options.target=document.body;
        }
        return options;
    }
    function initStore(options){
        return Elf.array2tree(Elf.deepCopy(options.store),options.key,options.parentKey);
        //return array2tree(Elf.utils.deepCopy(options.store));//不改变原始数据，生成一个copy
        //return options.store;
    }
    function init(options){
        var target;
        //var opts=target.options;
        target=Elf.createElement("div","elf-tree");
        target.childList=Elf.createElement("ul",target);
        target.nodeList={};//所有节点对象，序列化KEY
        options=initOptions(options);
        //target.store=options.store;//转换为树形结构
        target.store=initStore(options);//扁平数组转换为树形结构数据
        target.options=options;
        initView(target,options);
        if(options.current){
            //target.current=getItem(target,options.current)
            setCurrent(target,options.current);
        }
        initEvent(target,options);
        Elf.appendTo(target,options.target);
        return target;
    }
    
    //处理数据，转换为树形结构，
    
    /*function array2tree(array,parent){
        var tree = [];
        Elf.utils.each(array,function(index,item){
            if(parent){
                if(item.parentID == parent.iD){
                    item.children=array2tree(array,item);
                    tree.push(item);
                }
            }else if(!!!item.parentID){
                //根节点
                item.children=array2tree(array,item);
                tree.push(item);
            }
        });
        return tree;
    }*/
    function initView(target,options){
        //var opts=target.options;
        if(options.root){
            target.root=creatTreeRoot(target,options);
            //是否自动展开
            if(options.autoOpen){
                Elf.addClass(target.root,"elf-opened");
            }
        }else{
            target.isRoot=true;
        }
        if(target.store){
            creatTreeNodes(target,target.store);
        }
        
    }
    function creatTreeRoot(target,options){
        var root;
        root=Elf.createElement("li",target.childList);
        root.node=Elf.createElement("div","elf-tree-node elf-tree-root-node",root);
        root.handle=Elf.createElement("span","elf-tree-handle",root.node);
        root.childList=Elf.createElement("ul",root);
        root.isRoot=true;
        root.renderer=makeNodeRenderer(target,root);
        return root;
    }
    function creatTreeNodes(target,data,parent){
        parent=parent||target.root||target;
        Elf.each(data,function(obj){
            creatTreeNode(target,obj,parent);
        });
    }
    function creatTreeNode(target,data,parent){
        var item,
            renderer,
            options=target.options;
        if(parent.isLeaf){ // 叶子节点转换为枝干节点
            parent.isLeaf=false;
            parent.childList=Elf.createElement("ul",parent);
            parent.isFold=true;
            Elf.addClass(parent.node,"elf-tree-fold");
            Elf.removeClass(parent.node,"elf-tree-leaf");
        }
        item=Elf.createElement("li",parent.childList);
        item.node=Elf.createElement("div","elf-tree-node",item);
        item.handle=Elf.createElement("span","elf-tree-handle",item.node);
        //创建子项
        if(data.children && data.children.length>0){
            item.childList=Elf.createElement("ul",item);
            Elf.addClass(item.node,"elf-tree-fold");
            item.isFold=true;
            item.isEmptyFold=false;
            creatTreeNodes(target,data.children,item); // 创建子项
            if(!options.vie && options.autoOpen){ // 非互斥状态下，是否自动展开
                Elf.addClass(item,"elf-opened");
            }            
        }else if(data.isFold){ // 指定为fold节点
            item.childList=Elf.createElement("ul",item);
            Elf.addClass(item.node,"elf-tree-fold");
            Elf.addClass(item.node,"elf-tree-empty-fold");
            item.isFold=true;
            item.isEmptyFold=true;
            //非互斥状态下，是否自动展开
            if(!options.vie && options.autoOpen){
                Elf.addClass(item,"elf-opened");
            }
        }else{
            Elf.addClass(item.node,"elf-tree-leaf");
            item.isLeaf=true;
        }
        item.ownData=data; // 绑定数据
        item.renderer=makeNodeRenderer(target,item,data);//创建节点内容
        target.nodeList[data[options.key]]=item;
        return item;
    }
    function removeTreeNode(target,item){
        Elf.remove(item);
    }
    //更新节点
    function updateTreeNode(target,item,data){
        item.ownData=data;
        Elf.remove(item.renderer);
        item.renderer=makeNodeRenderer(target,item,data,target.options);
    }
    function makeNodeRenderer(target,item,data){
        var renderer;
        if(typeof target.options.renderer=="function"){
            renderer = target.options.renderer.call(target,item,data,target.options);
        }else if(item.isRoot){
            renderer=options.rootName;
        }else{
            renderer=data[target.options.name];
        }
        if(typeof renderer  == "object"){
            return Elf.appendTo(renderer,item.node);
        }else{
            return Elf.createElement("div",{innerHTML:renderer},item.node);
        }
    }
    /*function closeAll(target){
        return target;
    }
    function openAll(target){
        return target;
    }
    function getChecked(target){
    }*/
    function toggleNode(target,item){
        if(Elf.hasClass(item,"elf-opened")){
            closeNode(target,item);
        }else{
            openNode(target,item);
        }
    }
    function openNode(target,item){
        var ownData=item.ownData,siblings;
        if(item.childList){
            Elf.addClass(item,"elf-opened");
        }
        if(target.options.vie){
            siblings=Elf.siblings(item);
            if(siblings){
                Elf.each(siblings,function(sibling){
                    closeNode(target,sibling);
                });
            }
        }
    }
    function closeNode(target,item){
        if(item.childList){
            Elf.removeClass(item,"elf-opened");
        }
    }
    function setCurrent(target,key){
        target.currentItem=getItem(target,key);        
        selectItem(target,target.currentItem);
        openParents(target,key);
    }
    function selectItem(target,item){
        if(target.selectItem){
            unSelectItem(target,target.selectItem);
        }
        target.selectItem=item;
        Elf.addClass(item.node,"elf-selected");
    }
    function unSelectItem(target,item){
        Elf.removeClass(item.node,"elf-selected");
    }
    function getItem(target,key){
        return target.nodeList[key];
    }
    function getParent(target,key){
        var item=getItem(target,key);
        return target.nodeList[item.ownData[target.options.parentKey]]||target.root||target;
    }
    function openParents(target,key){
        var parent=getParent(target,key);
        if(parent){
            openNode(target,parent);
        }
        if(!parent.isRoot){
            openParents(target,parent.ownData[target.options.key]);
        }
    }
    function insertData(target,data){
        target.options.store.push(data);
        target.store=initStore(target.options);
    }
    function removeData(target,data){
        var i=0;
        for(;i<target.options.store.length;i++){
            if(target.options.store[i][target.options.key]==data[target.options.key]){
                target.options.store.splice(i,1);
                break;
            }
        }
        target.store=initStore(target.options);//
    }
    function updataData(target,data){
        var i=0;
        for(;i<target.options.store.length;i++){
            if(target.options.store[i][target.options.key]==data[target.options.key]){
                target.options.store[i]=data;
                break;
            }
        }
        target.store=initStore(target.options);
    }
    //添加节点
    function addItem(target,data){
        //添加数据store
        var parent=getItem(target,data[target.options.parentKey]);
        insertData(target,data);
        creatTreeNode(target,data,parent);
        if(parent.isEmptyFold){
            Elf.removeClass(parent.node,"elf-tree-empty-fold");
        }
    }
    //删除节点
    function deleteItem(target,data){
        var item=getItem(target,data[target.options.key]),parent=getParent(target,data[target.options.key]);
        if(isCanDelete(target,item)){
            removeData(target,data);
            removeTreeNode(target,item);
        }
        if(parent.childList.children.length<1){
            parent.isEmptyFold=true;
            Elf.addClass(parent.node,"elf-tree-empty-fold");
        }
    }
    //更新节点
    function updateItem(target,data){
        var item=getItem(target,data[target.options.key]);
        updataData(target,data);
        updateTreeNode(target,data,item);
    }
    function isCanDelete(target,item){
        return item.isFold && item.childList && item.childList.children.length > 0 ? false : true;
    }   
    function initEvent(target,options){
        Elf.xEvents.bind(target,"click",function(evt){
            var tt=evt.target,
                item,
                handle; // node折叠对象
            item=Elf.closest(tt,"li");
            handle=Elf.closest(tt,"span.elf-tree-handle");
            if(handle){
                if(item.isFold || item.isRoot){
                    toggleNode(this,item);
                }
            }else if(item){
                selectItem(target,item);
                if(item.isRoot){
                    
                }else if(item.isFold){
                    //activeItem(target,item);
                }else if(item.isLeaf){
                    
                }
                //调用拦截器
                if(typeof options.onSelected =="function"){
                    options.onSelected.call(this,evt,item,item.ownData);
                }
            }
        });
        /*Elf.xEvents.bind(target,"dblClick",function(evt){
            var tt=evt.target,
                item; // node折叠对象
                item=Elf.utils.closest(tt,"li");
            if(item && item.isFold){
                toggleNode(this,item);
            }
        });*/
        /*Elf.utils.iterate(target.nodeList,function(key,item){
            //var item=target.nodeList[key];
            //点击handle图标打开或关闭
            Elf.xEvents.bind(item.handle,"click",function(e){
                e.stopPropagation();
                if(item.childTreeNodes.length){
                    toggleTreeNode(target,item);
                }
            });
            //双击打开或关闭
            Elf.xEvents.bind(item.treeNode,"dblClick",function(e){
                if(item.childTreeNodes.length){
                    toggleTreeNode(target,item);
                }
            });
            Elf.xEvents.bind(item.treeNode,"click",function(e){
                var tt=e.target;
                if(Elf.utils.hasClass(tt,"elf_tree_handle")){
                    return;
                }
                setCurrent(target,item);
                if(opts.onClick && typeof opts.onClick=="function"){
                	opts.onClick.call(target,item);
                    //opts.onClick(item);
                }
            });
            //item.checkbox 点击事件
            if(opts.checkable){
            	Elf.xEvents.bind(item.checkbox,"click",function(e){
            		e.stopPropagation();
            	});
                Elf.xEvents.bind(item.checkbox,"change",function(e){
                    e.stopPropagation();
                    var dataid=Elf.utils.attr(item,"data-id");
                    if(item.checkbox.checked){
                        target.options.store[dataid]["checked"]=true;
                        if(opts.YS){
                            checkedChildren(target,item);
                        }
                        if(opts.YP){
                            checkedParents(target,item);
                        }
                    }else{
                        target.options.store[dataid]["checked"]=false;
                        if(opts.NS){
                            unCheckChildren(target,item);
                        }
                        if(opts.NP){
                            unCheckedParents(target,item);
                        }
                    }
                });
                Elf.xEvents.bind(item.checkbox,"xClick",function(e){
                    e.stopPropagation();
                });
                Elf.xEvents.bind(item.checkbox,"xDblClick",function(e){
                    e.stopPropagation();
                });
            }
        });*/
    }
    Elf.extend(Elf.components,{
        treeMenu:function(options,params){
            if (typeof options == 'string'){
                return Elf.components.tree.methods[options](param);
            }
            return init(Elf.extend({},Elf.components.treeMenu.defaults,options));
        }
    });
    Elf.components.treeMenu.defaults={
        root:false, // 是否显示root
        rootName:"全部", // 根节点名称
        autoOpen:false, // 是否自动展开节点
        vie:false, // 展开时是否互斥，针对兄弟节点互斥关系
        checkable:false, // 是否有复选，显示复选框
        yes:"", // checked ps关联设置,p-parent s-son
        not:"", // unchecked ps关联设置，
        target:document.body,//渲染对象
        store:{}, // 数据
        dataType:"tree", // 数据格式类型，array一维数组 tree树形结构数据
        key:"id", // 设置数据ID字段
        parentKey:"parentId", // 设置数据ID字段，如果是树形数据不需要设置parentId
        name:"name", // 名称字段设置，默认显示
        path:"",// 节点路径
        delimiter:"/", // path 分隔符id/id/id
        renderer:"", // 渲染器
        onOpen:function(li){}, // 展开节点时触发
        onChecked:function(event){}, // check触发事件
        onSelected:null // 选择节点触发事件
    };
    Elf.components.treeMenu.methods = {
        /*openAll:function(target,param){
            return openAll(target,param);
        },
        closeAll:function(target,param){
            return closeAll(target,param);
        },
        openCurrentPath:function(target,param){
            return openCurrentPath(target,param);
        },
        getChecked:function(target,param){
            return getChecked(target,param);
        },
        checkedAll:function(target,param){
        	return checkedAll(target,param);
        },
        unCheckedAll:function(target,param){
        	return unCheckedAll(target,param);
        },
        getCheckedData:function(target,param){
        	return getCheckedData(target,param);
        },*/
        addItem:function(target,param){
            return addItem(target,param);
        },
        deleteItem:function(target,param){
            return deleteItem(target,param);
        },
        updateItem:function(target,param){
            return updateItem(target,param);
        }
    };
})(Elf);