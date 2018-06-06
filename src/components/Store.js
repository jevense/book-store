import Vue from 'vue'
import Vuex from 'vuex'
import getQueryString from './common'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        loginInfo: {
            remainPrice: 0,
            ownList: [],
        },//当前用户简要信息
        video: "",
    },
    getters: {
        loginInfo(state) {
            return state.loginInfo
        },
        video(state) {
            return state.video
        },
    },
    mutations: {
        loginInfo(state, data) {
            let {
                remainPrice = 0,
                ownList = [],
            } = data
            state.loginInfo.remainPrice = remainPrice
            state.loginInfo.ownList = ownList
        },
        video(state, data) {
            state.video = data
        }
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
                    "platform": platform,
                },
                "TerminalType": "A"
            }
            Vue.axios.post(Config.busUrl, encodeURIComponent(JSON.stringify(args))).then(res => {
                let result = JSON.parse(decodeURIComponent(res.data.replace(/\+/g, '%20')));
                if (result["opFlag"] == false) {
                    //alert(Elf.constants.E008 + result["errorMessage"]);
                    if (result["errorMessage"].indexOf("E012-") >= 0) {
                        WebCallApp("UserLogout", {logoutType: "E012"});
                    }
                } else {
                    //登录成功，保存当前用户信息到 state 里面，以便其他组建获取
                    context.commit('loginInfo', JSON.parse(result.serviceResult).result);
                    return res.data;
                }
            })
        },
        video(context, data) {
            Vue.axios.get(`https://mvw-imed3-mall.oss-cn-beijing.aliyuncs.com/ui/phone/data/${data.id}.xml`)
                .then(res => {
                    context.commit('video', res.data);
                    return res.data;
                })
                .catch(res => {
                    context.commit('video', `<p>${data.name}</p>`);
                })
        },
    }
})