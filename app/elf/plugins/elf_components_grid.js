/**************************************************
 Created by lijianwei on 2016/6/20.
 grid table
 @author 李见伟
 @parameters
 options
 deep:num default 1 定义表头深度
 cols:[] 数据模型，
 data:[json]，数据使用本地对象数组
 nowrap:ellipsis,clip default：不配置 表格显示的数据超出列宽时行为。
 --fullWidthRows:boolean true:表格第一次加载数据时列伸展，自动充满表格。
 --checkCol:表格显示checkbox
 --indexCol:表格显示索引列
 **************************************************/
(function(){
	function initOptions(opts){
		opts.fixedTableSize=0;
		var colWidth=0;
		opts.hasFixedCol=false;
		opts.fixedColSize=0;
		for(var i=0;i<opts.cols.length;i++){
			colWidth+=opts.cols[i].width ? Number(opts.cols[i].width)||0 : 0;
			if(opts.cols[i].fixedColumn){
				opts.hasFixedCol=true;
				opts.fixedColSize=opts.fixedColSize+1;
				opts.fixedTableSize+=opts.cols[i].width ? Number(opts.cols[i].width)||0 : 0;
			}
		}
		opts.width=opts.width && opts.width >= colWidth ? opts.width :colWidth;
		return opts;
	};
	function initializeCol(col,deep){
		col.groupSize=getGroupSize(col);
		return col;
	};
	function getGroupSize(col){
		var size=0;
		if(col.cols && col.cols.length>1){
			Elf.utils.each(col.cols,function(index, el) {
				return size+=getGroupSize(el);
			});
		}else{
			return size+1;
		}
	};
	function makeTHead(target,opts){
		var row=Elf.controls.createElement("tr");
		Elf.utils.each(opts.cols,function(index,obj){
			var tcell=Elf.controls.createElement("th");
			if(obj.checkCol){
				target.checkedAll=Elf.controls.createElement("input",{type:"checkbox",name:"checkAll"});
				Elf.controls.appendTo(target.checkedAll,tcell);
			}else{
				tcell.innerHTML=obj.title;
			}
			if(obj.align=="left"){
				Elf.utils.addClass(tcell,"tal");
			}else if(obj.align=="right"){
				Elf.utils.addClass(tcell,"tar");
			}else if(obj.align=="center"){
				Elf.utils.addClass(tcell,"tac");
			}
			Elf.utils.addClass(tcell,"vam");
			Elf.controls.appendTo(tcell,row);
		});
		Elf.controls.appendTo(row,target.gridHeadThead);
	};
	function makeFixedTHead(target,opts){
		var fixedRow=Elf.controls.createElement("tr");
		Elf.utils.each(opts.cols,function(index,obj){
			if(obj.fixedColumn){
				var fixedCell=Elf.controls.createElement("th");
				if(obj.checkCol){
					target.fixedCheckedAll=Elf.controls.createElement("input",{type:"checkbox",name:"checkAll"});
					Elf.controls.appendTo(target.fixedCheckedAll,fixedCell);
				}else{
					fixedCell.innerHTML=obj.title;
				}
				Elf.utils.css(fixedCell,{width:obj.width+"px"});
				Elf.utils.addClass(fixedCell,"vam");
				if(obj.align=="left"){
					Elf.utils.addClass(fixedCell,"tal");
				}else if(obj.align=="right"){
					Elf.utils.addClass(fixedCell,"tar");
				}else if(obj.align=="center"){
					Elf.utils.addClass(fixedCell,"tac");
				}
				Elf.controls.appendTo(fixedCell,fixedRow);
			}
		});
		Elf.controls.appendTo(fixedRow,target.fixedHeadTable);
	};
	function makeColgroup(target,opts,fixed){
		fixed=!!fixed?true:false;
		var colgroup=Elf.controls.createElement("colgroup");
		Elf.utils.each(opts.cols,function(index,obj){
			var col,cw = !! opts.fullWidth ? obj.width/opts.width*100+"%" : obj.width+"px";
			if(fixed){
				if(obj.fixedColumn){
					col=Elf.controls.createElement("col",{width:cw});
					Elf.controls.appendTo(col,colgroup);
				}
			}else{
				col=Elf.controls.createElement("col",{width:cw});
				Elf.controls.appendTo(col,colgroup);
			}
		});
		return colgroup;
	};
	function makeTBody(target,items){
		if(Array.isArray(items) && items.length>0){
			Elf.utils.each(items,function(index,item){
				var row=makeRow(target,index,item);
				Elf.controls.appendTo(row,target.gridBodyTbody);
				target.rows.push(row);
				if(target.options.hasFixedCol){
					var fixedRow=makeRow(target,index,item,true);
					Elf.controls.appendTo(fixedRow,target.fixedTBody);
					target.fixedRows.push(fixedRow);
				}
			});
		}else{
			//数据为空时，显示一空行
			var row=makeRow(target,0,null);
			Elf.controls.appendTo(row,target.gridBodyTbody);
			target.rows.push(row);
			if(target.options.hasFixedCol){
				var fixedRow=makeRow(target,0,null,true);
				Elf.controls.appendTo(fixedRow,target.fixedTBody);
				target.fixedRows.push(fixedRow);
			}
		}
	};
	function makeRow(target,rowIndex,rowData,fixed){
		//fixed 标示是否是固定表格
		var opts=target.options;
		var _row=Elf.controls.createElement("tr","elf-grid-row"),colspan;
		Elf.utils.addClass(_row,rowIndex%2==1?"even":"odd");

		Elf.utils.each(opts.cols,function(index,col){
			var cell;
			if(colspan>0){
				colspan=--colspan;
			}else{
                if(!!fixed){
                    if(col.fixedColumn){
                        cell=makeCell(target,_row,col,rowIndex,rowData);
                        Elf.controls.appendTo(cell,_row);
                    }
                }else{
                    cell=makeCell(target,_row,col,rowIndex,rowData);
                    Elf.controls.appendTo(cell,_row);
                }
                if(col.colspan && col.colspan>0){
                    colspan=col.colspan;
                    Elf.utils.attr(cell,"colspan",colspan);
                }
			}
		});
		return _row;
	};
	function makeCell(target,row,col,rowIndex,rowData){
		opts=target.options;
		var _cell=Elf.controls.createElement("td");
		var randerer=makeCellRanderer(target,row,col,rowIndex,rowData);
		if(randerer && typeof randerer =="object"){
			Elf.controls.appendTo(randerer,_cell);
		}else{
			_cell.innerHTML=randerer;
		}
		if(col.align=="left"){
			Elf.utils.addClass(_cell,"tal");
		}else if(col.align=="right"){
			Elf.utils.addClass(_cell,"tar");
		}else if(col.align=="center"){
			Elf.utils.addClass(_cell,"tac");
		}
		switch (col.valign){
			case "top":
				Elf.utils.addClass(_cell,"vat");
				break;
			case "bottom":
				Elf.utils.addClass(_cell,"vab");
				break;
			default:
				Elf.utils.addClass(_cell,"vam");
				break;
		}
		if(opts.nowrap){
			Elf.utils.addClass(_cell,opts.nowrap);
		}
		return _cell;
	};
	function makeCellRanderer(target,row,col,rowIndex,rowData){
		if(!Elf.utils.isEmptyObject(rowData)){
			if(col.checkCol){
				row.check= Elf.controls.createElement("input",{type:"checkbox",name:"checkrow"});
				if(typeof target.options.isCanCheck=="function" && !target.options.isCanCheck(target,rowIndex,rowData)){
					Elf.utils.attr(row.check,"disabled","disabled");
				}
				return row.check;
			}else if(col.renderer && typeof col.renderer == "function"){
				return col.renderer(col.name,rowIndex,rowData);
			}else{
				return rowData ? rowData[col.name]||"":"";
			}
		}else{
			return "&nbsp;";
		}
	};
	function updateView(target){
		//更新head和表格衔接
		var headHeight=target.gridHead.offsetHeight;
		Elf.utils.css(target.gridHeadBody,{width:target.gridBodyTbody.offsetWidth+"px"});
		if(headHeight>0){
			Elf.utils.css(target,{paddingTop:headHeight+"px"});
			Elf.utils.css(target.gridHead,{marginTop:-1*headHeight+"px"});
			if(target.options.hasFixedCol){
				Elf.utils.css(target.fixedHeadTable,{height:headHeight+"px"});
			}
		}
		//更新fixedColumn行高,和宽度
		if(target.options.hasFixedCol){
			var fixedWidth=0;
			Elf.utils.each(target.gridBodyTbody.children,function(index){
				var height=this.offsetHeight;
				Elf.utils.css(target.fixedTBody.children[index],{height:height+"px"});
				//target.fixedTBody.children[index]
			});
			for(var i=0;i<target.options.fixedColSize;i++){
				fixedWidth=fixedWidth+target.gridBodyTbody.children[0].children[i].offsetWidth;
			}
			Elf.utils.css(target.fixedHeadTable,{width:fixedWidth+"px"});
			Elf.utils.css(target.fixedTable,{width:fixedWidth+"px"});
		}
	};
	//更新数据
	function update(target,data){
		target.checkedLength=0;
		target.checked={};
		target.rows=[];
		target.fixedRows=[];
		if(target.checkedAll){
			target.checkedAll.checked=false;
			target.checkedAll.indeterminate=false;
		}
		target.options.data=data;
		target.gridBodyTbody.innerHTML="";
		if(target.options.hasFixedCol){
			if(target.fixedCheckedAll){
				target.fixedCheckedAll.checked=false;
				target.fixedCheckedAll.indeterminate=false;
			}
			target.fixedTBody.innerHTML="";
		}
		makeTBody(target,data);
		updateView(target);
	};
	//动态更新行
	function updateRow(target,rowIndex,rowData){
		//更新数据，
		//如果checked数据存在处理
		var opts=target.options;
		opts.data[rowIndex]=rowData;
		var row=target.gridBodyTbody.children[rowIndex];//makeRow(target,rowIndex,rowData);
		row.innerHTML="";
		Elf.utils.each(opts.cols,function(index,col){
			var cell;
			cell=makeCell(target,row,col,rowIndex,rowData);
			Elf.controls.appendTo(cell,row);
		});
		if(opts.hasFixedCol){
			var fixedRow=target.fixedTBody.children[rowIndex];//makeRow(target,rowIndex,rowData,true);
			fixedRow.innerHTML="";
			Elf.utils.each(opts.cols,function(index,col){
				var cell;
				if(col.fixedColumn){
					cell=makeCell(target,fixedRow,col,rowIndex,rowData);
					Elf.controls.appendTo(cell,fixedRow);
				}
			});
		}
		if(Elf.utils.hasClass(row,'checked')){
			checkedRow(target,rowIndex);
		}
		updateView(target);
		return target;
	};
	//获取选中行的数据
	function getCheckedData(target){
		return target.checked;
	};
	//选中
	function checked(target,rowIndex){
		var options=target.options;
		if(checkedRow(target,rowIndex)){
			target.checkedLength=target.checkedLength ? target.checkedLength+1 : 1;
			target.checked[rowIndex]=options.data[rowIndex];
		}
		if(target.checkedLength>=options.data.length){
			if(target.checkedAll){
				target.checkedAll.checked=true;
				target.checkedAll.indeterminate=false;
			}
			if(target.fixedCheckedAll){
				target.fixedCheckedAll.checked=true;
				target.fixedCheckedAll.indeterminate=false;
			}
		}else{
			if(target.checkedAll){
				target.checkedAll.checked=false;
				target.checkedAll.indeterminate=true;
			}
			if(target.fixedCheckedAll){
				target.fixedCheckedAll.checked=false;
				target.fixedCheckedAll.indeterminate=true;
			}
		}
	};
	function unChecked(target,rowIndex){
		delete target.checked[rowIndex];
		unCheckedRow(target,rowIndex);
		target.checkedLength=target.checkedLength>0 ? target.checkedLength-1 : 0;
		if(target.checkedLength > 0 ){
			if(target.checkedAll){
				target.checkedAll.checked=false;
				target.checkedAll.indeterminate=true;
			}
			if(target.fixedCheckedAll){
				target.fixedCheckedAll.checked=false;
				target.fixedCheckedAll.indeterminate=true;
			}
		}else{
			if(target.checkedAll){
				target.checkedAll.checked=false;
				target.checkedAll.indeterminate=false;
			}
			if(target.fixedCheckedAll){
				target.fixedCheckedAll.checked=false;
				target.fixedCheckedAll.indeterminate=false;
			}
		}
	};
	function checkedRow(target,index){
		if(typeof target.options.isCanCheck=="function" && !target.options.isCanCheck(target,index,target.options.data[index])){
			return false;
		}
		var row=target.rows[index],fixedRow;
		if(row && row.check){
			Elf.utils.addClass(row,'checked');
			row.check.checked=true;
		}
		if(target.options.hasFixedCol){
			fixedRow=target.fixedRows[index];
			fixedRow.check.checked=true;
			Elf.utils.addClass(fixedRow,'checked');
		}
		return true;
	};
	function unCheckedRow(target,rowIndex){
		var row = target.rows[rowIndex],fixedRow;
		if(row.check){
			Elf.utils.removeClass(row,'checked');
			row.check.checked=false;
		}
		if(target.options.hasFixedCol){
			fixedRow=target.fixedRows[rowIndex];
			if(fixedRow && fixedRow.check){
				fixedRow.check.checked=false;
				Elf.utils.removeClass(fixedRow,'checked');
			}
		}
	};
	function checkedAll(target){
		var hasChecked=false,hasNoChecked=false;
		target.checkedLength=0;
		target.checked={};
		Elf.utils.each(target.options.data,function(index,data){
			checked(target,index);
		});
		if(target.checkedAll){
			if(target.checkedLength==0){
				target.checkedAll.indeterminate=false;
				target.checkedAll.indeterminate=false;
			}else if(target.checkedLength >0 && target.checkedLength<target.options.data.length){
				target.checkedAll.indeterminate=true;
				target.checkedAll.indeterminate=true;
			}else{
				target.checkedAll.indeterminate=true;
				target.checkedAll.indeterminate=false;
			}
		}
		if(target.options.hasFixedCol && target.fixedCheckedAll){
			if(target.checkedLength==0){
				target.fixedCheckedAll.checked=false;
				target.fixedCheckedAll.indeterminate=false;
			}else if(target.checkedLength >0 && target.checkedLength<target.options.data.length){
				target.fixedCheckedAll.checked=true;
				target.fixedCheckedAll.indeterminate=true;
			}else{
				target.fixedCheckedAll.checked=true;
				target.fixedCheckedAll.indeterminate=false;
			}
		}
	};
	function unCheckedAll(target){
		if(target.checkedAll){
			target.checkedAll.checked=false;
		}
		if(target.options.hasFixedCol && target.fixedCheckedAll){
			target.fixedCheckedAll.checked=false;
		}
		target.checkedLength=0;
		target.checked={};
		Elf.utils.each(target.options.data,function(index,el){
			unChecked(target,index);
		});
	};
	function init(target,params){
		var opts=target.options;
		target.rows=[];
		target.fixedRows=[];
		target.options=initOptions(opts);
		target.checked={};//保存选中的数据
		target.checkedLength=0;//保存
		//grid head
		target.gridHead=Elf.controls.createElement("div","elf-grid-head");
		target.gridHeadBody=Elf.controls.createElement("div","elf-grid-head-body",target.gridHead);
		target.gridHeadTable=Elf.controls.createElement("table","elf-grid-table",target.gridHeadBody);
		target.gridHeadThead=Elf.controls.createElement("thead","elf-grid-thead");
		Elf.controls.appendTo(makeColgroup(target,opts),target.gridHeadTable);
		Elf.controls.appendTo(target.gridHeadThead,target.gridHeadTable);
		Elf.controls.appendTo(target.gridHead,target);
		//grid body
		target.gridBody=Elf.controls.createElement("div","elf-grid-body");
		target.gridBodyTable=Elf.controls.createElement("table","elf-grid-table");
		target.gridBodyTbody=Elf.controls.createElement("tbody","elf-grid-tbody");
		Elf.controls.appendTo(makeColgroup(target,opts),target.gridBodyTable);
		Elf.controls.appendTo(target.gridBodyTbody,target.gridBodyTable);
		Elf.controls.appendTo(target.gridBodyTable,target.gridBody);
		Elf.controls.appendTo(target.gridBody,target);
		if(opts.headHTML){
			target.gridHeadThead.innerHTML=opts.headHTML;
		}else{
			makeTHead(target,opts);
		}
		//垂直方向固定
		if(opts.fullWidth){
			Elf.utils.css(target.gridHeadTable,{width:"100%"});
			Elf.utils.css(target.gridBodyTable,{width:"100%"});
		}else{
			Elf.utils.css(target.gridHeadTable,{width:opts.width+"px"});
			Elf.utils.css(target.gridBodyTable,{width:opts.width+"px"});
		}
		if(opts.hasFixedCol){
			target.fixedHeadTable=Elf.controls.createElement("table","elf-grid-fixed-table",target.gridHeadBody);
			//target.fixedHeadThead=Elf.controls.createElement("thead");
			Elf.controls.appendTo(makeColgroup(target,opts,true),target.fixedHeadTable);
			target.fixedTable=Elf.controls.createElement("table","elf-grid-fixed-table");
			target.fixedTBody=Elf.controls.createElement("tbody","elf-grid-tbody");
			Elf.controls.appendTo(makeColgroup(target,opts,true),target.fixedTable);
			Elf.controls.appendTo(target.fixedTBody,target.fixedTable);
			Elf.controls.appendTo(target.fixedTable,target.gridBody);
			if(opts.fullWidth){
				Elf.utils.css(target.fixedHeadTable,{width:opts.fixedTableSize/opts.colWidth*100+"%"});
				Elf.utils.css(target.fixedTable,{width:opts.fixedTableSize/opts.colWidth*100+"%"});
			}else{
				Elf.utils.css(target.fixedHeadTable,{width:opts.fixedTableSize+"px"});
				Elf.utils.css(target.fixedTable,{width:opts.fixedTableSize+"px"});
			}
			makeFixedTHead(target,opts);
		}
		//列设置
		bindEvents(target);
		makeTBody(target,opts.data);
		if(opts.target){
			Elf.controls.appendTo(target,opts.target);
		}
		update(target,opts.data);
	};
	function scrollGrid(target,left,top){
		Elf.utils.css(target.gridHeadTable,{left:-1*left+"px"});
		if(target.options.hasFixedCol){
			Elf.utils.css(target.fixedTable,{left:left+"px"});
		}
	};
	function bindEvents(target){
		Elf.xEvents.bind(target.gridBody,"scroll",function(evt){
			scrollGrid(target,this.scrollLeft,this.scrollTop);
		});
		Elf.xEvents.bind(window,"resize",function(evt){
			updateView(target);
		});
		//处理点击事件
		Elf.xEvents.bind(target,"click",function(evt){
			var tt=evt.target,row,col,rowIndex,colIndex;
			var opts=target.options;
			if(Elf.utils.closest(tt,"td")){
				row=Elf.utils.closest(tt,"tr");
				col=Elf.utils.closest(tt,"td");
				rowIndex=Elf.utils.index(row);
				colIndex=Elf.utils.index(col);
				if(tt.nodeName=="INPUT" && tt.type=="checkbox"){
					if(tt.checked){
						checked(target,rowIndex,colIndex);
						opts.onChecked.call(this,evt,opts.data[rowIndex],rowIndex);
					}else{
						unChecked(target,rowIndex,colIndex);
						opts.onUnChecked.call(this,evt,opts.data[rowIndex],rowIndex);
					}
					opts.onCheck.call(this,evt,target.checked);
				}else{
					opts.onCellSelected.call(this,evt,opts.data[rowIndex],rowIndex,colIndex,row,col);
				}
			}else if(Elf.utils.closest(tt,"th")){
				//标题点击处理
				if(tt.nodeName=="INPUT" && tt.type=="checkbox"){
					if(tt.checked){
						checkedAll(target);
						opts.onCheckedAll.call(this,evt,target.checked);
					}else{
						unCheckedAll(target);
						opts.onUnCheckedAll.call(this,evt,target.checked);
					}
					opts.onCheck.call(this,evt,target.checked);
				}
			}
		});
	};
	Elf.utils.extend(Elf.components,{
		grid:function(options,params){
			if (typeof options == 'string'){
				return Elf.components.grid.methods[options](params);
			}
			var me=Elf.controls.createElement("div","elf-grid");
			options = Elf.utils.extend({
				data:[],
				headHTML:"",
				dataModel:[],
				cols:[],
				deep:1,
				fullWidth:false,
				target:document.body
			},Elf.components.grid.defaults,options);
			me.options=options;
			init(me,params);
			return me;
		}
	});
	Elf.components.grid.defaults={
		onCellSelected:function(evt,item,rowIndex,colIndex){},
		onCheck:function(evt,items){},
		onChecked:function(evt,item,rowIndex,colIndex){},
		onUnChecked:function(evt,item,rowIndex,colIndex){},
		onCheckedAll:function(evt,items){},
		onUnCheckedAll:function(evt,items){}
	};
	Elf.components.grid.methods={
		//更新数据
		update:function(target,data){
			return update(target,data);
		},
		//更新行
		updateRow:function(target,rowIndex,rowData){
			return updateRow(target,rowIndex,rowData);
		},
		//更新视图
		updateView:function(target){
			return updateView(target);
		},

		//获取复选行数据
		getCheckedData:function(target){
			return getCheckedData(target);
		}
	};
})(Elf);