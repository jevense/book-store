<template>
    <div>
        <header class="imed-bar">
            <a style="width: 0.8rem">&nbsp;</a>
            <h1 v-text="title"></h1>
            <a class="icon" style="width: 0.8rem">&nbsp;</a>
        </header>
        <div style="margin: 0.5rem 0">
            <div style="display: flex;background-color: white;padding: 0.5rem;">
                <div style="width: 40%;">
                    <b-img fluid :src='payOrder.cover'/>
                </div>
                <div style="font-size: 1rem;margin-left: .5rem">
                    <div style="font-size: .8em">{{payOrder.name}}</div>
                    <div>
                        <div class="imed-item-sub-title">价格：<span style="color: red" v-text="payOrder.price"></span> 阅点
                        </div>
                        <div class="imed-item-sub-title">作者：{{payOrder.author}}</div>
                        <div class="imed-item-sub-title">图书类型：通关包</div>
                        <div class="imed-item-sub-title">出版机构：{{payOrder.publishingAgency}}</div>
                    </div>

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
                payOrder: {
                    cover:'',
                    name:'123',
                    price:'',
                    author:'',
                    publishingAgency:'',
                },
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

    .imed-item-sub-title {
        font-size: .7em;
        margin: .3rem 0;
        color: #666666;
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