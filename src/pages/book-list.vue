<template>
    <imed-nav :title="title" :status="true">
        <div class="list-block media-list">
            <ul>
                <li v-for="i in 10">
                    <router-link to="/book/10" class="item-link item-content">
                        <div class="item-media">
                            <img src="https://mall.imed.org.cn/upload/coverImages/imed-exam-2018-1.jpg">
                        </div>
                        <div class="item-inner">
                            <div class="imed-item-title">中医科</div>
                            <div class="imed-item-sub-title"><span style="color: red">2990</span> 阅点</div>
                            <div class="imed-item-sub-title">作者：医视界</div>
                            <div class="imed-item-sub-title">图书类型：通关包</div>
                            <div class="imed-item-sub-title">大小：2M</div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </imed-nav>
</template>

<script>
    import ImedNav from '../components/imed-nav'

    export default {
        name: "book-list",
        data() {
            return {
                title: '通关包',
            }
        },
        components: {ImedNav},
    }
</script>

<style scoped>

    .list-block {
        margin: 0.5rem 0;
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

    .imed-item-title {
        font-size: 0.9rem;
    }

    .imed-item-sub-title {
        font-size: 0.8rem;
        color: #666;
    }

    .item-media > img {
        width: 5.5rem;
    }
</style>