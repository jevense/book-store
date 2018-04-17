import Vue from 'vue'
import VueRouter from 'vue-router'
import BookList from './pages/book/book-list'
import BookItem from './pages/book/book-item'
import BookOrder from './pages/book/book-order'
import PaySuccess from './pages/book/pay-success'
import CourseMain from './pages/course/course-main'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/course'},
    {path: '/book', component: BookList},
    {path: '/book/:id', component: BookItem},
    {path: '/book/:id/order', component: BookOrder},
    {path: '/book/:id/order/pay-success', component: PaySuccess},
    {path: '/course', component: CourseMain},
]

export default new VueRouter({
    routes
})