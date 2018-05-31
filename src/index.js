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
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)


new Vue({
    el: '#content',
    store,
    template: '<App/>',
    router,
    components: {App},
})
