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

if (typeof Elf !== 'undefined') {
    Elf.AppCallWeb = function (sn, data) {
        if (sn === 'MsgOpenSuccess') {	//支付宝、或微信时需通知一下
            let dataJson = JSON.parse(data);
            store.dispatch('paySuccess', {tradeNo: dataJson.tradeNo}).then(res => {
                router.push(`/book/${res.id}/order/pay-success`,)
            })
        } else if (sn === 'MsgUpdateBookState') {
            data = decodeURIComponent(data);
            data = JSON.parse(data); //由JSON字符串转换为JSON对象
            BOOK.downloadState = data.downloadState;

            if (BOOK.buyStatus == '1' && BOOK.textbook == "1") {
                if (data.downloadState == '8') { //0:未下载 2:下载中 3:暂停   8:完成
                    BOOK.ui.downloadBtnTxt.btnTxt.innerHTML = "开始阅读";
                    //BOOK.bookIsbn = "";
                    Elf.xEvents.onXClick(BOOK.ui.downloadBtnTxt, function () {
                        if (BOOK.ui.downloadBtnTxt.btnTxt.innerHTML == "开始阅读") {
                            var args = {isbn: data.isbn};
                            WebCallApp("CmdOpenPDFBook", args);
                        }
                    });
                } else if (data.downloadState == '0') {
                    BOOK.ui.downloadBtnTxt.btnTxt.innerHTML = "立即下载";
                } else if (data.downloadState == '1') {
                    BOOK.ui.downloadBtnTxt.btnTxt.innerHTML = "等待";
                } else if (data.downloadState == '3') {
                    BOOK.ui.downloadBtnTxt.btnTxt.innerHTML = "暂停";
                } else if (data.downloadState == '2') {
                    BOOK.ui.downloadBtnTxt.btnTxt.innerHTML = "下载中";
                }
            }

        }
    }
}
