import Vue from 'vue'
import Vuex from 'vuex'
import getQueryString from './common'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        config: {
            busUrl: 'http://developer.mvwchina.com:8080/bus/services',
            storeUrl: 'https://mvw-imed3-mall.oss-cn-beijing.aliyuncs.com',
            examUrl: 'https://examtest.mvwchina.com',
        },
        loginInfo: {
            remainPrice: 0,
            ownList: [],
        },//当前用户简要信息
        packageInfo: {
            list: [],
        },
        video: "",
        payOrder: {},
    },
    getters: {
        config(state) {
            return state.config
        },
        loginInfo(state) {
            return state.loginInfo
        },
        packageInfo(state) {
            return state.packageInfo
        },
        video(state) {
            return state.video
        },
        payOrder(state) {
            return state.payOrder
        },
    },
    mutations: {
        config(state, data) {
            state.config = data
        },
        loginInfo(state, data) {
            let {
                remainPrice = 0,
                ownList = [],
            } = data
            state.loginInfo.remainPrice = remainPrice
            state.loginInfo.ownList = ownList
        },
        packageInfo(state, data) {
            state.packageInfo = data
        },
        video(state, data) {
            state.video = data
        },
        payOrder(state, data) {
            state.payOrder = data
        },
    },
    actions: {
        config(context, data) {
            context.commit('config', data)
        },
        login(context, data) {
            let token = getQueryString('token')
            let platform = getQueryString('platform')
            let args = {
                "serviceModule": "BS-Service",
                "serviceNumber": "getBuyedExam",
                "token": token,
                "args": {
                    "token": token,
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
                        console.log(resultObj)
                        if (resultObj['flag'] === 'true') {
                            context.commit('loginInfo', resultObj.result);
                        } else {
                            console.log(resultObj['error'])
                        }
                        return resultObj;
                    }
                }).catch(res => {
                console.log(res)
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
                    context.commit('packageInfo', {});
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
                    console.log(resultObj)
                    if (resultObj.flag === "true") {
                        context.commit('payOrder', resultObj.result);
                    } else {
                        console.log(resultObj.error);
                    }
                    return resultObj
                })
        },
        paySuccess(){

        },
    }
})