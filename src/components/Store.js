import Vue from 'vue'
import Vuex from 'vuex'
import getQueryString from './common'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        config: {
            busUrl: 'http://developer.mvwchina.com:8080/bus/services',
            storeUrl: 'https://mvw-imed3-mall.oss-cn-beijing.aliyuncs.com',
            examUrl: 'https://exam.mvwchina.com',
        },
        currentId: "",
        showLoading: false,
        loginInfo: {
            remainPrice: 0,
            ownList: [],
        },//当前用户简要信息
        packageInfo: {
            list: [],
        },
        video: "",
        price: 0,
        payOrder: {},
        paySuccess: {},
    },
    getters: {
        config(state) {
            return state.config
        },
        showLoading(state) {
            return state.showLoading
        },
        loginInfo(state) {
            return state.loginInfo
        },
        currentId(state) {
            return state.currentId
        },
        packageInfo(state) {
            return state.packageInfo
        },
        video(state) {
            return state.video
        },
        price(state) {
            return state.price
        },
        payOrder(state) {
            return state.payOrder
        },
        paySuccess(state) {
            return state.paySuccess
        },
    },
    mutations: {
        config(state, data) {
            state.config = data
        },
        SHOWLOADING(state) {
            state.showLoading = true
        },
        HIDELOADING(state) {
            state.showLoading = false
        },
        loginInfo(state, data) {
            let {
                remainPrice = 0,
                ownList = [],
            } = data
            state.loginInfo.remainPrice = remainPrice
            state.loginInfo.ownList = ownList
        },
        currentId(state, data) {
            state.currentId = data
        },
        packageInfo(state, data) {
            state.packageInfo = data
        },
        video(state, data) {
            state.video = data
        },
        price(state, data) {
            state.price = data
        },
        payOrder(state, data) {
            state.payOrder = data
        },
        paySuccess(state, data) {
            state.paySuccess = data
        },
    },
    actions: {
        login(context, data) {
            let token = getQueryString('token')
            let platform = getQueryString('platform')
            let args = {
                "serviceModule": "BS-Service",
                "serviceNumber": "getBuyedExam",
                "token": token,
                "args": {
                    "token": token,
                    "packageId": data.id,
                    "platform": platform,
                },
                "TerminalType": "A"
            }
            Vue.axios.post(context.state.config.busUrl, encodeURIComponent(JSON.stringify(args)))
                .then(res => {
                    let result = JSON.parse(decodeURIComponent(res.data.replace(/\+/g, '%20')));
                    if (!result["opFlag"] || result["opFlag"] === "false") {
                        if (result["errorMessage"].indexOf("E012-") >= 0) {
                            WebCallApp("UserLogout", {logoutType: "E012"});
                        } else {
                            console.log(result)
                        }
                    } else {
                        //登录成功，保存当前用户信息到 state 里面，以便其他组建获取
                        let resultObj = JSON.parse(result["serviceResult"]);
                        if (resultObj['flag'] === 'true') {
                            context.commit('loginInfo', resultObj.result);
                        } else {
                            console.log(resultObj['error'])
                        }
                        return resultObj;
                    }
                }).catch(res => {
                context.commit('loginInfo', {});
            })
        },
        packageInfo(context, data) {
            Vue.axios.get(`${context.state.config.storeUrl}/ui/phone/data/info/${data.id}.json`)
                .then(res => {
                    context.commit('packageInfo', res.data);
                    return res.data;
                })
                .catch(res => {
                    context.commit('packageInfo', {
                        "title": "临床执业医师考试通关包实践技能考试",
                        "introduce": "贴近新版考试大纲，资深专家进行编著，重点难点深入剖析，解决考生学习痛点。内含：专家导读+操作视频+精品题库。",
                        "time": "2018-6-1",
                        "people": "1196",
                        "banner": {
                            "cover": "http://mvw-imed3-mall.oss-cn-beijing.aliyuncs.com/upload/coverImages/694f3ccfa986fe612ddfe4f961318779.png",
                            "video": {
                                "id": "z000032",
                                "name": "综合导学"
                            },
                            "enable": true
                        },
                        "subTitle": "实践技能考试",
                        "list": [
                            {
                                "id": "40288810624e037d01624e03979d0358",
                                "isbn": "2e9d5ed40fa94f9aaa714dcfa832cf27",
                                "cover": "http://mvw-imed3-mall.oss-cn-beijing.aliyuncs.com/upload/coverImages/8525f94a5affaa34eff2e172ea0603fc.png",
                                "title": "第一站 病史采集及病例分析",
                                "subTitle": "答题技巧和要点",
                                "price": "400",
                                "originPrice": "500",
                                "guide": {
                                    "video": {
                                        "id": "z000031",
                                        "name": "病史采集和病例分析导学"
                                    },
                                    "enable": true
                                },
                                "type": "examination",
                                "enable": false,
                                "buyable": false
                            },
                            {
                                "id": "40288810624e037d01624e03979d0359",
                                "isbn": "d0a07f9c5d5f4ec4a2d63e989590600f",
                                "cover": "http://mvw-imed3-mall.oss-cn-beijing.aliyuncs.com/upload/coverImages/e8cf0f8d00e60bb9df0f1c3377b35fe2.png",
                                "title": "第二站 体格检查与基本操作",
                                "subTitle": "高清示教视频操作",
                                "price": "624",
                                "originPrice": "780",
                                "type": "video",
                                "enable": true,
                                "buyable": false
                            },
                            {
                                "id": "40288810624e037d01624e03979d035a",
                                "isbn": "d8a76956f6b14263a8a04e332c2f3c08",
                                "cover": "http://mvw-imed3-mall.oss-cn-beijing.aliyuncs.com/upload/coverImages/64130fffd068155be47b49a902e26b02.png",
                                "title": "第三站 辅助检查",
                                "subTitle": "B超、CT、心电图、X线",
                                "price": "480",
                                "originPrice": "600",
                                "guide": {
                                    "video": {
                                        "id": "z000030",
                                        "name": "辅助检查导学"
                                    },
                                    "enable": true
                                },
                                "type": "examination",
                                "enable": false,
                                "buyable": false
                            }
                        ]
                    });
                })
        },
        video(context, data) {
            Vue.axios.get(`${context.state.config.storeUrl}/ui/phone/data/${data.id}.xml`)
                .then(res => {
                    context.commit('video', res.data);
                    return res.data;
                })
                .catch(res => {
                    context.commit('video', `<p>${data.name}</p>`);
                })
        },
        payOrder(context, data) {
            let token = getQueryString('token')
            let platform = getQueryString('platform')
            let args = {
                "serviceModule": "BS-Service",
                "serviceNumber": "0201100",
                "token": token,
                "args": {
                    "bookId": data.id,
                    "platform": platform,
                },
                "TerminalType": "A"
            }
            Vue.axios.post(context.state.config.busUrl, encodeURIComponent(JSON.stringify(args)))
                .then(res => {
                    let result = JSON.parse(decodeURIComponent(res.data.replace(/\+/g, '%20')));
                    let resultObj = JSON.parse(result["serviceResult"]);
                    if (resultObj.flag === "true") {
                        context.commit('payOrder', resultObj.result);
                    } else {
                        console.log(resultObj.error);
                    }
                    return resultObj
                })
        },
        paySuccess(context, data) {
            let token = getQueryString('token')
            let platform = getQueryString('platform')

            let args = {
                "serviceModule": "BS-Service",
                "serviceNumber": "0201210",
                "token": token,
                "args": {
                    "tradeNo": data.tradeNo,
                    "platform": platform,
                },
                "TerminalType": "A"
            }
            return Vue.axios.post(context.state.config.busUrl, encodeURIComponent(JSON.stringify(args)))
                .then(res => {
                    let result = JSON.parse(decodeURIComponent(res.data.replace(/\+/g, '%20')));
                    let resultObj = JSON.parse(result["serviceResult"]);
                    if (resultObj.flag === "true") {
                        context.commit('paySuccess', resultObj.result);
                    } else {
                        console.log(resultObj.error);
                    }
                    return resultObj.result
                })
        },
    }
})