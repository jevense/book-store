import Vue from 'vue'
import router from './router'
import App from './App'
// import animate from 'animate.css'

// Vue.use(animate)

new Vue({
    el: '#sub-content',
    template: '<App/>',
    router,
    components: {App},
})
