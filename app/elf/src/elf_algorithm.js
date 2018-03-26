

Elf.algorithm.minGestureDistance=50;


Elf.algorithm.contains=function(collection,targetObj){
    var result=false;
    Elf.iterate(collection,function(key,item){
        if(item==targetObj){
            result= true;
        }
    });
    return result;
};

Elf.algorithm.appendEvent = function (args) {
    var evtObj = args["eventObj"];
    var name = args["eventName"];
    var evt = args["eventFunction"];
    var stopPop = args["isStopPop"];

    var newEventFun = function (evt) {
        var event = Elf.getEvent(evt);
        Elf.iterate(newEventFun.AppendedEvents,function(key,item){
            item.apply(this, arguments);
        });
        /*Elf.algorithm.iterateValues({
            collection: newEventFun.AppendedEvents,
            handler: function (item) {
                item.apply(this, arguments);
            }
        });*/
        if (newEventFun.StopPop) {
            Elf.StopPop(event);
        }
    };
    if (evtObj == null) {//if there is not an event yet
        newEventFun.AppendedEvents = {};
        newEventFun.AppendedEvents[name] = evt;
        newEventFun.StopPop = stopPop;
    }
    else if (!evtObj.AppendedEvents) {//if there is only one event, the events list is not created yet
        newEventFun.AppendedEvents = {};
        newEventFun.AppendedEvents['one'] = evtObj;
        newEventFun.AppendedEvents[name] = evt;
        newEventFun.StopPop = stopPop;
    }
    else {//if there are some events appended, the events list was created
        newEventFun.AppendedEvents = evtObj.AppendedEvents;
        newEventFun.AppendedEvents[name] = evt;
        newEventFun.StopPop = evtObj.StopPop;
        if (stopPop) {
            newEventFun.StopPop = true;
        }
    }

    return newEventFun;
};

Elf.algorithm.removeEvent = function (args) {
    var evtObj = args["eventObj"];
    var name = args["eventName"];
    if (evtObj && evtObj.AppendedEvents) {
        delete evtObj.AppendedEvents[name];
    }
};
Elf.algorithm.isDraggedToRight=function(dragInfo){
//    if(dragInfo.draggedX>0 && dragInfo.draggedX-Math.abs(dragInfo.draggedY)> Elf.algorithm.minGestureDistance){
//        return true;
//    }
//    else{
//        return false;
//    }
    return dragInfo.draggedX>0 && (dragInfo.draggedX-Math.abs(dragInfo.draggedY))> Elf.algorithm.minGestureDistance;
};
Elf.algorithm.isDraggedToLeft=function(dragInfo){
    return dragInfo.draggedX<0 && (Math.abs(dragInfo.draggedX)-Math.abs(dragInfo.draggedY))> Elf.algorithm.minGestureDistance;
};
Elf.algorithm.getBlobByArrayBuffer=function(buffer, format) {
    var Builder = window.WebKitBlobBuilder || window.MozBlobBuilder;
    if (Builder) {
        var builder = new Builder;
        builder.append(buffer);
        return builder.getBlob(format);
    } else {
        return new window.Blob([ buffer ], {
            type : format
        });
    }
};

Elf.algorithm.buildClosedDoublyLink=function(arr) {
    for (var i = 0; i < arr.length; i++) {
        var previousIndex = i == 0 ? (arr.length - 1) : (i - 1);
        var nextIndex = i == (arr.length - 1) ? 0 : i + 1;
        var previous = arr[previousIndex];
        var current = arr[i];
        var next = arr[nextIndex];
        current.previous = previous;
        current.next = next;
        current.index=i;
    }
};

Elf.algorithm.StripHTML=function(strHtml) {
    return strHtml.replace(/<\/?.+?>/g,"");
};
Elf.algorithm = {};