import Vue from 'vue'
import router from './router'
import App from './App'
import axios from 'axios'
import store from './components/Store'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'wc-loading/style.css'
import Loading from 'wc-loading'
// import animate from 'animate.css'

// Vue.use(animate)
axios.defaults.baseURL = 'https://api.example.com'
// axios.interceptors.request.use(config => {
//     inst.$loading.show()
//     return config
// }, function (err) {
//     console.log(err)
//     return Promise.reject(err)
// })
// axios.interceptors.response.use(response => {
//     inst.$loading.hide()
//     return response
// }, function (err) {
//     console.log(err)
//     return Promise.reject(err)
// })
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(Loading)

let inst = new Vue({
    el: '#content',
    store,
    template: '<App/>',
    router,
    components: {App},
})

if (typeof Elf !== 'undefined') {
    Elf.AppCallWeb = function (sn, data) {
        if (sn === 'MsgOpenSuccess') {	//支付宝、或微信时需通知一下
            let dataJson = JSON.parse(data)
            store.dispatch('paySuccess', {tradeNo: dataJson.tradeNo}).then(res => {
                router.push(`/book/${res.id}/order/pay-success`,)
            })
        } else if (sn === 'MsgUpdateBookState') {
            data = decodeURIComponent(data)
            data = JSON.parse(data)
            console.log(data)
            store.commit('addDownloadList', data.isbn)
            WebCallApp("CmdOpenPDFBook", {isbn: data.isbn})
            inst.$loading.hide()
        } else {
            console.log(sn + data)
        }
    }
}
