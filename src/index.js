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
import "./global"
import VueRx from 'vue-rx';

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
Vue.use(VueRx);

global.inst = new Vue({
    el: '#content',
    store,
    template: '<App/>',
    router,
    components: {App},
})

if (typeof Config !== 'undefined') {
    Config && store.commit('config', Config)
}
if (top.location !== location) {
    store.commit('bar', false)
}
