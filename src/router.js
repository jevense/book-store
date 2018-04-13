import Vue from 'vue'
import VueRouter from 'vue-router'
import BookList from './pages/book-list'
import BookItem from './pages/book-item'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect:'/book'},
    {path: '/book', component: BookList},
    {path: '/book/:id', component: BookItem},
]

export default new VueRouter({
    routes
})