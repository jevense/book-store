import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginInfo: {
            remainPrice: 0,
            ownList: ['40288810624e037d01624e03979d0358', '40288810624e037d01624e03979d0359', '40288810624e037d01624e03979d035a'],
        },//当前用户简要信息
    },
    getters: {
        loginInfo(state) {
            return state.loginInfo
        },
    },
    mutations: {
        loginInfo(state, data) {
            state.loginInfo = data
        }
    },
    actions: {
        login(context, data) {
            if (typeof BOOK === 'undefined') {
                context.commit('loginInfo', {
                    remainPrice: 0,
                    ownList: ['40288810624e037d01624e03979d0358'],
                });
                return
            }
            let args = {
                "serviceModule": "BS-Service",
                "serviceNumber": "getBuyedExam",
                "token": BOOK.token,
                "args": {
                    "token": BOOK.token,
                    "platform": BOOK.platform,
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
                    return res;
                }
            })
        },
    }
})