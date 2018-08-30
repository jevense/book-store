import Vue from 'vue'
import VueRouter from 'vue-router'
import BookList from './pages/book/book-list'
import PaySuccess from './pages/book/pay-success'
import CourseMain from './pages/course/course-main'
import Exam from './pages/exam/exam-category'
import ExamList from './pages/exam/exam-list'
import ExamGuide from './pages/exam/exam-guide'
import ExamCourse from './pages/exam/exam-course'
import ExamCourseList from './pages/exam/exam-course-list'
import ExamCourseItem from './pages/exam/exam-course-item'
import ExamExamination from './pages/exam/exam-examination'
import ExamPDFCategory from './pages/exam/exam-pdf-list'
import Reader from './pages/reader/reader'
import ProductDetail from './pages/book/product-detail'
import ProductOrder from './pages/book/product-order'
import ActivityList from './pages/activity/activity-list'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/exam'},
    {path: '/book', component: BookList},
    {path: '/course', component: CourseMain},
    {path: '/exam', component: Exam},
    {path: '/exam/:eid', component: ExamList},
    {path: '/exam/:eid/guide', component: ExamGuide},
    {path: '/exam/:eid/course', component: ExamCourse},
    {path: '/exam/:eid/course/:cid', component: ExamCourseList},
    {path: '/exam/:eid/course/:cid/item/:iid', component: ExamCourseItem, name: 'video'},
    {path: '/exam/:eid/examination', component: ExamExamination},
    {path: '/exam/:eid/pdf/:cid', component: ExamPDFCategory},
    {path: '/exam/:eid/pdf/:cid/item/:iid', component: Reader},
    {path: '/product/:id', component: ProductDetail},
    {path: '/product/:id/order', component: ProductOrder},
    {path: '/product/:id/order/pay-success', component: PaySuccess, name: 'pay-success'},
    {path: '/activity/20180901', component: ActivityList},
]

export default new VueRouter({
    routes
})
