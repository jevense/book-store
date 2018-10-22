import Vue from 'vue'
import Vuex from 'vuex'
import getQueryString from './common'
import {WebCallApp} from "../global"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        config: {
            // busUrl: 'https://services2t.mvwchina.com/services',
            busUrl: 'http://192.168.8.143:5005/bus2/services',
            storeUrl: 'https://mall.imed.org.cn',
            storeApi: 'http://192.168.2.3:8082',
            // storeUrl: 'http://192.168.2.3:8080/data',
            // storeUrl: 'http://192.168.2.3:8080/data',
            examUrl: 'https://exam.mvwchina.com',
        },
        bar: true,
        currentId: "",
        loginInfo: {
            remainPrice: 0,
            ownList: [
                // 'cd1f6bb3f63b43f08dde6f5f20529805',
                // '79faef1724df464da3d9ec278a27e0cd',
                // 'a1c1a723cd2e465a8fb8ce88f150e5f9',
                // '724a3da5da73406d8333820e8ff0170d',
            ],
        },//当前用户简要信息
        packageInfo: {
            list: [],
        },
        video: "",
        videos: [],
        pdf: {},
        pdfDetail: {},
        downloadList: [],
        payOrder: {},
        paySuccess: {},
        product: {},
        productInfo: {},
        activities: [],
        appVersion: {token: '', platform: ''},
    },
    getters: {
        config(state) {
            return state.config
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
        videos(state) {
            return state.videos
        },
        pdf(state) {
            return state.pdf
        },
        pdfDetail(state) {
            return state.pdfDetail
        },
        payOrder(state) {
            return state.payOrder
        },
        paySuccess(state) {
            return state.paySuccess
        },
        product(state) {
            return state.product
        },
        productInfo(state) {
            return state.productInfo
        },
        activities(state) {
            return state.activities
        },
        appVersion(state) {
            return state.appVersion
        },
    },
    mutations: {
        config(state, data) {
            state.config = data
        },
        bar(state, data) {
            state.bar = data
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
        videos(state, data) {
            state.videos = data
        },
        pdf(state, data) {
            state.pdf = data
        },
        pdfDetail(state, data) {
            state.pdfDetail = data
        },
        addDownloadList(state, data) {
            state.downloadList.push(data)
        },
        payOrder(state, data) {
            state.payOrder = data
        },
        paySuccess(state, data) {
            state.paySuccess = data
        },
        product(state, data) {
            state.product = data
        },
        productInfo(state, data) {
            state.productInfo = data
        },
        activities(state, data) {
            state.activities = data
        },
        appVersion(state, data) {
            state.appVersion = data
        },
    },
    actions: {
        login(context, data) {
            let args = {
                "serviceModule": "BS-Service",
                "serviceNumber": "getBuyedExam",
                "token": data.token,
                "args": {
                    "token": data.token,
                    "packageId": data.id,
                    "platform": data.platform,
                },
                "TerminalType": "A"
            }

            Vue.axios.post(context.state.config.busUrl, JSON.stringify(args))
                .then(res => {
                    let result = JSON.parse(decodeURIComponent(res.data));
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
                            console.log(resultObj.result)
                            context.commit('loginInfo', resultObj.result);
                        } else {
                            console.log(resultObj['error'])
                        }
                        return resultObj;
                    }
                }).catch(res => {
                // context.commit('loginInfo', {});
                console.log(res)
            })
        },
        packageInfo(context, data) {
            Vue.axios.get(`${context.state.config.storeUrl}/ui/phone/data/info/${data.id}.json?${Math.random()}`)
                .then(res => {
                    context.commit('packageInfo', res.data);
                    return res.data;
                })
                .catch(res => {
                    console.log(res)
                    // context.commit('packageInfo', {});
                })
        },
        video(context, data) {
            Vue.axios.get(`${context.state.config.storeUrl}/ui/phone/data/video/${data.id}.xml?${Math.random()}`)
                .then(res => {
                    context.commit('video', res.data);
                    return res.data;
                })
                .catch(res => {
                    context.commit('video', `<p>${data.name}</p>`);
                })
        },
        videos(context, data) {
            Vue.axios.get(`${context.state.config.storeUrl}/ui/phone/data/video/${data.id}.json?${Math.random()}`)
                .then(res => {
                    context.commit('videos', res.data);
                    return res.data;
                })
                .catch(res => {
                    context.commit('videos', []);
                })
        },
        pdf(context, data) {
            Vue.axios.get(`${context.state.config.storeUrl}/ui/phone/data/info/${data.id}.json?${Math.random()}`)
                .then(res => {
                    context.commit('pdf', res.data);
                    return res.data;
                })
                .catch(res => {
                    context.commit('pdf', {});
                })
        },
        pdfDetail(context, data) {
            Vue.axios.get(`${context.state.config.storeUrl}/ui/phone/data/article/${data.id}.json?${Math.random()}`)
                .then(res => {
                    context.commit('pdfDetail', res.data);
                    return res.data;
                })
                .catch(res => {
                    context.commit('pdfDetail', {});
                })
        },
        payOrder(context, data) {
            let {id, token, platform, type = 'id',} = data;
            console.log(data)
            //TODO 如果是匿名用户提示登录
            let args = {
                "serviceModule": "BS-Service",
                "serviceNumber": "0201101",
                "token": token,
                "args": {
                    "bookId": id,
                    "type": type,
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
                }).catch(res => {
                console.log(res)
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
        product(context, data) {

            let token = getQueryString('token')
            let platform = getQueryString('platform')
            let args = {
                "serviceModule": "BS-Service",
                "serviceNumber": "0201000",
                "token": token,
                "args": {
                    "id": data.id,
                },
                "TerminalType": "A"
            }
            Vue.axios.post(context.state.config.busUrl, encodeURIComponent(JSON.stringify(args)))
                .then(res => {
                    let result = JSON.parse(decodeURIComponent(res.data.replace(/\+/g, '%20')));
                    let resultObj = JSON.parse(result["serviceResult"]);
                    if (resultObj.flag === "true") {
                        context.commit('product', res.data);
                    } else {
                        console.log(resultObj.error);
                    }
                    return resultObj
                }).catch(res => {
                console.log(res)
                context.commit('product', {});
            })
        },
        productInfo(context, data) {

            Vue.axios.get(`${context.state.config.storeApi}/product?isbn=${data.isbn}`)
                .then(res => {
                    context.commit('productInfo', res.data);
                    return res.data;
                })
                .catch(res => {
                    console.log(res)
                    // context.commit('packageInfo', {});
                })
        },
        activities(context, data) {
            Vue.axios.get(`${context.state.config.storeUrl}/ui/phone/data/activities/${data.id}.json?${Math.random()}`)
                .then(res => {
                    context.commit('activities', res.data);
                    return res.data;
                })
                .catch(res => {
                    context.commit('activities', []);
                })
        },
    }
})
