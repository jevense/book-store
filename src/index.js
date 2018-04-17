import Vue from 'vue'
import router from './router'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import animate from 'animate.css'

// Vue.use(animate)
// Vue.prototype.$http = axios
axios.defaults.baseURL = 'https://api.example.com'
Vue.use(VueAxios, axios)

new Vue({
    el: '#sub-content',
    template: '<App/>',
    router,
    components: {App},
})
