<template>
    <div>
        <header class="imed-bar">
            <router-link to="/exam" class="item-content item-link">
                <div class="icon icon-left"></div>
            </router-link>
            <h1 v-text="title"></h1>
            <a class="icon" style="width: 0.8rem">&nbsp;</a>
        </header>
        <div class="content" style="margin:3rem 0 0 0;">
            <div class="list-block media-list">
                <ul>
                    <li>
                        <div class="item-content">
                            <div class="item-media">
                                <img src="https://mall.imed.org.cn/upload/coverImages/imed-exam-2018-1.jpg">
                            </div>
                            <div class="item-inner">
                                <div class="imed-item-title">消化系统</div>
                                <div class="imed-item-sub-title">时长：18学时</div>
                                <div class="imed-item-sub-title">名师：刘老师</div>
                            </div>
                            <router-link to="/exam/123/course/1"
                                         class="button button-fill button-warning">开始学习
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="item-content">
                            <div class="item-media">
                                <img src="https://mall.imed.org.cn/upload/coverImages/imed-exam-2018-1.jpg">
                            </div>
                            <div class="item-inner">
                                <div class="imed-item-title">女性生殖系统</div>
                                <div class="imed-item-sub-title">时长：18学时</div>
                                <div class="imed-item-sub-title">名师：刘老师</div>
                            </div>
                            <router-link to="/exam/123/course/2"
                                         class="button button-fill button-warning">开始学习
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="item-content">
                            <div class="item-media">
                                <img src="https://mall.imed.org.cn/upload/coverImages/imed-exam-2018-1.jpg">
                            </div>
                            <div class="item-inner">
                                <div class="imed-item-title">心血管系统</div>
                                <div class="imed-item-sub-title">时长：18学时</div>
                                <div class="imed-item-sub-title">名师：刘老师</div>
                            </div>
                            <router-link to="/exam/123/course/3"
                                         class="button button-fill button-warning">开始学习
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="item-content">
                            <div class="item-media">
                                <img src="https://mall.imed.org.cn/upload/coverImages/imed-exam-2018-1.jpg">
                            </div>
                            <div class="item-inner">
                                <div class="imed-item-title">儿科</div>
                                <div class="imed-item-sub-title">时长：18学时</div>
                                <div class="imed-item-sub-title">名师：刘老师</div>
                            </div>
                            <router-link to="/exam/123/course/4"
                                         class="button button-fill button-warning">开始学习
                            </router-link>
                        </div>
                    </li>
                </ul>
                <footer>
                    <router-link to="/book/10/order" class="button button-fill button-big button-danger">
                        全部购买（9990阅点）
                    </router-link>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    import ImedNav from '../../components/imed-nav'

    export default {
        name: "exam-guide",
        data() {
            return {
                title: '视频课程',
            }
        },
        components: {ImedNav},
        methods: {
            search() {
                console.log('======')
            },
        }
    }
</script>

<style scoped>

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

    .button.button-fill.button-warning {
        margin: 0 1rem 0 0;
    }

</style>