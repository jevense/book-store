<template>
    <div>
        <header class="imed-bar">
            <a class="item-content item-link" @click="back">
                <div class="icon icon-left"></div>
            </a>
            <h1 v-text="title"></h1>
            <a class="icon" style="width: 0.8rem">&nbsp;</a>
        </header>
        <div class="content" style="margin:3rem 0 0 0;">
            <div class="card demo-card-header-pic">
                <div valign="bottom" class="card-header color-white no-border no-padding">
                    <img class='card-cover'
                         src="https://mall.imed.org.cn/upload/ads/lADPBY0V4xCEKHzNAcjNBNo_1242_456.jpg_620x10000q90g.jpg"
                    >
                </div>
                <div class="card-content">
                    <div class="card-content-inner">
                        <p>执医医师考试综合理论鄙视通关包包含考试指南、模拟试卷、视频课程、考前精华、试卷答疑等...</p>
                    </div>
                </div>
                <div class="card-footer">
                    <a href="#" class="link">上线试卷：2018-6-2</a>
                    <a href="#" class="link">学习人数：405</a>
                </div>
            </div>
            <div class="list-block media-list">
                <ul>
                    <li>
                        <router-link to="/book/10" class="item-content">
                            <div class="item-media">
                                <img src="https://mall.imed.org.cn/upload/coverImages/imed-exam-2018-1.jpg">
                            </div>
                            <div class="item-inner">
                                <div class="imed-item-sub-title">考试指南<br>复习重点精讲</div>
                                <div class="imed-item-sub-title">
                                    <span>
                                        <span style="color: red">2990</span> 阅点
                                    </span>
                                    <router-link to="/book/10/order"
                                                 class="button button-fill button-warning">购买
                                    </router-link>
                                </div>
                            </div>
                            <div style="margin: .5rem">

                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/book/10" class="item-content">
                            <div class="item-media">
                                <img src="https://mall.imed.org.cn/upload/coverImages/imed-exam-2018-1.jpg">
                            </div>
                            <div class="item-inner">
                                <div class="imed-item-sub-title">视频课程<br>符合考试大纲的视频课程</div>
                                <div class="imed-item-sub-title">
                                    <span>
                                        <span style="color: red">2990</span> 阅点
                                    </span>
                                    <span style="display: flex;justify-content: space-between; width: 60%">
                                        <router-link to="/exam/123/preview"
                                                     class="button button-fill button-warning">试看</router-link>
                                        <router-link to="/exam/123/course"
                                                     class="button button-fill button-warning">购买</router-link>
                                    </span>
                                </div>
                            </div>
                            <div style="margin: .5rem">

                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/book/10" class="item-content">
                            <div class="item-media">
                                <img src="https://mall.imed.org.cn/upload/coverImages/imed-exam-2018-1.jpg">
                            </div>
                            <div class="item-inner">
                                <div class="imed-item-sub-title">模拟测试题<br>各专业练习题及2套模拟题</div>
                                <div class="imed-item-sub-title">
                                    <span>
                                        <span style="color: red">2990</span> 阅点
                                    </span>
                                    <router-link to="/exam/123/examination" class="button button-fill button-warning">开始考试
                                    </router-link>
                                </div>
                            </div>
                            <div style="margin: .5rem">

                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/book/10" class="item-content">
                            <div class="item-media">
                                <img src="https://mall.imed.org.cn/upload/coverImages/imed-exam-2018-1.jpg">
                            </div>
                            <div class="item-inner">
                                <div class="imed-item-sub-title">交流答疑<br>知识点及错题反馈</div>
                                <div class="imed-item-sub-title">
                                    <span>
                                        <span style="color: red">0</span> 阅点
                                    </span>
                                    <span>
                                         <a href="#"
                                            class="button button-fill button-warning">开始学习</a>
                                    </span>
                                </div>
                            </div>
                            <div style="margin: .5rem">

                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/book/10" class="item-content">
                            <div class="item-media">
                                <img src="https://mall.imed.org.cn/upload/coverImages/imed-exam-2018-1.jpg">
                            </div>
                            <div class="item-inner">
                                <div class="imed-item-sub-title">考前精讲<br>考前划重点和考点</div>
                                <div class="imed-item-sub-title">
                                    <span>
                                        <span style="color: red">2990</span> 阅点
                                    </span>
                                    <span>
                                         <a href="#"
                                            class="button button-fill button-warning">购买</a>
                                    </span>
                                </div>
                            </div>
                            <div style="margin: .5rem">

                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/book/10" class="item-content">
                            <div class="item-media">
                                <img src="https://mall.imed.org.cn/upload/coverImages/imed-exam-2018-1.jpg">
                            </div>
                            <div class="item-inner">
                                <div class="imed-item-sub-title">考试大纲<br>执医考试大纲</div>
                                <div class="imed-item-sub-title">
                                    <span>
                                        <span style="color: red">0</span> 阅点
                                    </span>
                                    <a href="#"
                                       class="button button-fill button-warning">开始学习</a>
                                </div>
                            </div>
                            <div style="margin: .5rem">

                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <footer>
                <router-link to="/book/10/order" class="button button-fill button-big button-danger">
                    全部购买（9990阅点）
                </router-link>
            </footer>
        </div>
    </div>
</template>

<script>
    import ImedNav from '../../components/imed-nav'

    export default {
        name: "book-list",
        data() {
            return {
                title: '执医考试通关包实践技能',
            }
        },
        components: {ImedNav},
        methods: {
            search() {
                console.log('======')
            },
            back() {
                let main = document.getElementById('main')
                let subContent = document.getElementById('sub')
                main.className = main.className.replace('page-from-center-to-left', 'page-from-left-to-center')
                subContent.className = subContent.className.replace('page-from-right-to-center', 'page-from-center-to-right')
            }
        }
    }
</script>

<style scoped>

    .imed-bar {
        height: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: red;
        background-color: #ffffff;
    }

    .imed-bar > a {
        color: red;
    }

    h1 {
        font-size: 1rem;
    }

    .icon {
        margin: 0.5rem;
    }

    .list-block {
        margin: 0.1rem 0 2rem;
    }

    .list-block .item-content {
        padding-left: 0.5rem;
    }

    .list-block.media-list .item-inner {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
    }

    .card {
        margin: 0;
    }

    .imed-item-sub-title {
        display: flex;
        width: 100%;
        justify-content: space-between;
        font-size: 0.8rem;
        color: #666;
    }

    .item-media > img {
        width: 5.5rem;
    }

    footer {
        position: fixed;
        width: 100%;
        bottom: 0;
    }

    .list-block .item-inner:after {
        width: 0;
    }

    .list-block ul:after {
        width: 0;
    }

</style>