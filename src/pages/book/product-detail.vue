<template>
    <imed-nav :title="title">
        <div class="list-block media-list">
            <div class="item-content">
                <div class="item-media">
                    <img src="https://mall.imed.org.cn/upload/coverImages/imed-exam-2018-1.jpg">
                </div>
                <div class="item-inner">
                    <div class="imed-item-title" v-text="product.name"></div>
                    <div class="imed-item-sub-title"><span style="color: red" v-text="product.price"></span> 阅点</div>
                    <div class="imed-item-sub-title">作者：<span v-text="product.author"></span></div>
                    <div class="imed-item-sub-title">图书类型：<span v-text="product.type"></span></div>
                    <div class="imed-item-sub-title">出版机构：<span v-text="product.publisher"></span></div>
                </div>
            </div>
        </div>
        <section>
            <span class="imed-title">简介</span>
            <article v-html="product.briefIntroduction"></article>
        </section>
        <footer>
            <a v-if="own" class="button button-fill button-big button-danger">已购买，请到已获得图书列表查看</a>
            <a v-else @click="forward" class="button button-fill button-big button-danger">
                立即购买
            </a>
        </footer>
    </imed-nav>
</template>

<script>
    import ImedNav from '../../components/imed-nav'
    import {mapState} from 'vuex'

    export default {
        name: "product-detail",
        beforeCreate() {
            this.$store.dispatch('product', {id: this.$route.params.pid})
            let query = this.$route.query
            for (let key in query) {
                localStorage.setItem(`mvw-bs-${key}`, query[key])
            }
        },
        data() {
            return {
                title: '图书详情',
                own: false,
            }
        },
        computed: {
            ...mapState({
                product: state => state.product,
            }),
        },
        components: {ImedNav},
        methods: {
            forward() {
                this.$router.push(`/product/${this.$route.params['pid']}/order`)
            }
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
