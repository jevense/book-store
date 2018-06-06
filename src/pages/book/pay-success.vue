<template>
    <div>
        <header class="imed-bar">
            <a style="width: 0.8rem">&nbsp;</a>
            <h1 v-text="title"></h1>
            <a class="icon" style="width: 0.8rem">&nbsp;</a>
        </header>
        <div class="list-block media-list">
            <div class="item-content">
                <div class="item-media">
                    <img :src='require("../../assets/img/pic0531.jpg")'>
                </div>
                <div class="item-inner">
                    <div class="imed-item-title">临床执业医师考试通关包<br>实践技能考试</div>
                    <div class="imed-item-sub-title"><span style="color: red">0</span> 阅点</div>
                    <div class="imed-item-sub-title">作者：医视界</div>
                    <div class="imed-item-sub-title">图书类型：通关包</div>
                    <div class="imed-item-sub-title">大小：2M</div>
                    <div class="imed-item-sub-title">出版机构：医视界</div>
                </div>
            </div>
        </div>
        <footer>
            <a @click="main($route.params.id)"
               class="button button-fill button-big button-danger">
                <span style="color: white">马上去学习</span>
            </a>
        </footer>
    </div>
</template>

<script>
    import ImedNav from '../../components/imed-nav'

    export default {
        name: "book-order",
        data() {
            return {
                title: '购买成功',
                own: false,
            }
        },
        components: {ImedNav},
        methods: {
            main(eid) {
                this.$store.dispatch('login').then(() => {
                    this.$router.push(`/exam/${eid}`)
                })
            },
        }
    }
</script>

<style scoped>

    .list-block {
        margin: 0.5rem 0;
    }

    .list-block .item-content {
        padding-left: 0.5rem;
        background-color: white;
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

    .imed-title {
        color: red;
    }

    section {
        padding: 0.5rem;
        background-color: white;
    }

    footer {
        position: fixed;
        width: 100%;
        bottom: 0;
    }

    .button {
        border-radius: 0;
    }
</style>