import Vue from 'vue'
import router from './router'
import App from './App'
import axios from 'axios'
import store from './components/Store'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import animate from 'animate.css'

// Vue.use(animate)
axios.defaults.baseURL = 'https://api.example.com'
// axios.interceptors.request.use(config => {
//     store.commit('SHOWLOADING')
//     return config
// }, function (err) {
//     console.log(err)
//     return Promise.reject(err)
// })
// axios.interceptors.response.use(response => {
//     store.commit('HIDELOADING')
//     return response
// }, function (err) {
//     console.log(err)
//     return Promise.reject(err)
// })
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)


new Vue({
    el: '#content',
    store,
    template: '<App/>',
    router,
    components: {App},
})


Elf.AppCallWeb = function (sn, data) {
    if (sn === 'MsgOpenSuccess') {	//支付宝、或微信时需通知一下
        let dataJson = JSON.parse(data);
        store.dispatch('paySuccess', {tradeNo: dataJson.tradeNo}).then(res => {
            router.push(`/book/${res.id}/order/pay-success`,)
        })
    }
}