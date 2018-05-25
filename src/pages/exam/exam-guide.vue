<template>
    <div>
        <header class="imed-bar">
            <router-link to="/exam/123" class="item-content item-link">
                <div class="icon icon-left"></div>
            </router-link>
            <h1 v-text="title"></h1>
            <a class="icon" style="width: 0.8rem">&nbsp;</a>
        </header>
        <div class="content" style="margin:3rem 0 0 0;">
            <div class="list-block media-list">
                <ul>
                    <li>
                        <router-link to="/book/10" class="item-content item-link">
                            <div class="item-media">
                                <img src="https://mall.imed.org.cn/upload/coverImages/imed-exam-2018-1.jpg">
                            </div>
                            <div class="item-inner">
                                <div class="imed-item-sub-title">第一章消化系统</div>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/book/10" class="item-content item-link">
                            <div class="item-media">
                                <img src="https://mall.imed.org.cn/upload/coverImages/imed-exam-2018-1.jpg">
                            </div>
                            <div class="item-inner">
                                <div class="imed-item-sub-title">第二章心血管系统</div>
                            </div>
                        </router-link>
                    </li>
                </ul>
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
                title: '考试指南',
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

</style>