var commonLogic = {};
/*
commonLogic.serviceCallerInit = function (url) {
    Elf.webSocket.wsUrl=url;
};
*/
commonLogic.serviceCaller = function (args,callback,loading) {
   loading = loading==undefined?true:loading;   //loading:true显示转圈圈,false:不显示,不传:则显示;
    args["TerminalType"] = "";
    if (Elf.terminalInfo.IsIOS) {
        args["TerminalType"] = "B";
    }
    else if (Elf.terminalInfo.IsAndroid) {
        args["TerminalType"] = "C";
    }
    else {
        args["TerminalType"] = "A";
    }
    //console.info("args**:"+JSON.stringify(args));
    //console.info(encodeURIComponent(JSON.stringify(args)));
    Elf.components.ajax({
        type: "POST",
        url: Config.busUrl,
        dataType: "json",
        data: encodeURIComponent(JSON.stringify(args)),
        success: function (data) {
            //callback(JSON.parse(decodeURIComponent(data)));
            //var result = JSON.parse(decodeURIComponent(data));
            var result = JSON.parse(decodeURIComponent(data.replace(/\+/g, '%20')));
            // console.log(result);
            // console.info("qq:"+JSON.stringify(result));
            if (result["opFlag"] == false) {
                //alert(Elf.constants.E008 + result["errorMessage"]);
                if (result["errorMessage"].indexOf("E012-") >= 0) {
                    var args={ logoutType: "E012"};
                    WebCallApp("UserLogout",args);
                }
            }
            else {
                //console.info("qq:"+JSON.stringify(result["serviceResult"]));
                var resultObj = JSON.parse(result["serviceResult"]);
                var delay = 500;//delay some time, or ios browser will crash for both loadmask and pop windows coexists
                setTimeout(function () {
                    callback(resultObj);
                }, delay);
            }
        },
        beforeSend:function(xhr,settings){
            if(loading){
                Elf.components.loading();
            }

        },
        error: function (xhr) {
            //console.info(xhr);
            console.error(xhr);
            alert(Elf.constants.E007);
        },
        complete: function () {
            if(loading){
                Elf.components.loading("close", {});
            }
        }
    });
};

commonLogic.getNameByCodeInArray = function (code, arr) {
    var targetItem = null;
    Elf.algorithm.iterateValues({
        collection: arr,
        handler: function (item) {
            if (item["code"] == code) {
                targetItem = item;
            }
        }
    });
    return targetItem ? targetItem["name"] : "";
};

commonLogic.getCodeByNameInArray = function (name, arr) {
    var targetItem = null;
    Elf.algorithm.iterateValues({
        collection: arr,
        handler: function (item) {
            if (item["name"] == name) {
                targetItem = item;
            }
        }
    });
    return targetItem ? targetItem["code"] : "not found!";
};

commonLogic.linkQuestions = function (questions) {
    questions.singleCollection = [];
    questions.twoPlusCollection = [];
    questions.judgmentCollection = [];
    questions.fillCollection = [];
    questions.onePlusCollection = [];
    for(var i=0;i<questions.length;i++){
        var quest=questions[i];
        quest.prev=questions[i-1];
        quest.next=questions[i+1];
        var questionTypeCode=quest["questionTypeCode"];
        switch(questionTypeCode){
            case "01":
                questions.singleCollection.push(quest);
                break;
            case "02":
                questions.twoPlusCollection.push(quest);
                break;
            case "03":
                questions.fillCollection.push(quest);
                break;
            case "04":
                questions.judgmentCollection.push(quest);
                break;
            case "05":
                questions.onePlusCollection.push(quest);
                break;
        }
    }
};

commonLogic.stripQuestionsData=function(qData){
    delete qData.twoPlusCollection;
    delete qData.singleCollection;
    delete qData.onePlusCollection;
    delete qData.judgmentCollection;
    delete qData.fillCollection;

    Elf.algorithm.iterateValues({
        collection: qData,
        handler: function (item) {
            delete item.prev;
            delete item.next;
            delete item.bindedUI;
            //delete item.isWritten;
            delete item.bindedMarker;
        }
    });
};