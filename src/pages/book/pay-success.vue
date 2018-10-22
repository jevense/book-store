<template>
    <div style="background-color: #F3F3F3">
        <header class="bar bar-nav" v-if="bar">
            <h1 class="title" v-text="title"></h1>
        </header>
        <div class="content">
            <div style="margin: 0.5rem 0">
                <div style="display: flex;background-color: white;padding: 0.5rem;">
                    <div style="min-width: 5rem;width: 5rem;">
                        <b-img fluid :src='paySuccess.cover'/>
                    </div>
                    <div style="font-size: 1rem;margin-left: .5rem">
                        <div style="font-size: .8em">{{paySuccess.name}}</div>
                        <div>
                            <div class="imed-item-sub-title">价格：{{paySuccess.price}}
                                阅点
                            </div>
                            <div class="imed-item-sub-title">作者：{{paySuccess.author}}</div>
                            <div class="imed-item-sub-title">类型：通关包</div>
                            <div class="imed-item-sub-title">出版机构：{{paySuccess.publishingAgency}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <span class="imed-title">本次购买共消费：{{paySuccess.consumePoint}} 阅点</span>
            </section>
            <section>
                <span class="imed-title">账户余额：{{paySuccess.balance}} 阅点</span>
            </section>
            <footer>
                <a @click="main()"
                   class="button button-fill button-big button-danger">
                    <span style="color: white">马上去学习</span>
                </a>
            </footer>
        </div>
    </div>
</template>

<script>
    import ImedNav from '../../components/imed-nav'
    import {mapState} from 'vuex'
    import getQueryString from "../../components/common"

    export default {
        name: "book-order",
        data() {
            return {
                title: '购买成功',
            }
        },
        components: {ImedNav},
        computed: {
            ...mapState({
                paySuccess: state => state.paySuccess,
                currentId: state => state.currentId,
                bar: state => state.bar,
            }),
        },
        methods: {
            main() {
                let address = getQueryString('address')
                if (address) {
                    location.assign(address)
                } else {
                    let {token, platform} = this.$route.query
                    this.$store.dispatch('login', {id: this.currentId, token, platform}).then(() => {
                        this.$router.push(`/exam/${this.currentId}`)
                    })
                }
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

    section {
        margin: .5rem 0;
        padding: .5rem 1rem;
        display: flex;
        justify-content: flex-end;
        background-color: white;
    }

    .imed-title {
        color: #666666;
        font-size: .8em;
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
