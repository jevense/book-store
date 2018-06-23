<template>
    <div>
        <header class="imed-bar">
            <div @click="back">
                <div class="icon icon-left"></div>
            </div>
            <h1 v-text="title"></h1>
            <a class="icon" style="width: 0.8rem">&nbsp;</a>
        </header>
        <div class="content" style="margin:3rem 0 0 0;padding: 0.5rem">
            <template v-for="item in list">
                <div style="width: 95%; margin: 0 auto .5rem;">
                    <b-img fluid :src='item.cover'/>
                </div>
                <div class="imed-item-content">
                    <template v-for="it in item.list">
                        <div style="display: flex;padding: .1rem 0; border: 1px solid #e8e8e8;border-radius: 5px; background-color: #FFFFFF;">
                            <div style="width: 30%;padding: .5rem;">
                                <b-img fluid :src='it.cover'/>
                            </div>
                            <div style="width: 46%" class="imed-item-info">
                                <div class="imed-item-title" v-text="it.title"></div>
                                <div class="imed-item-sub-title">
                                    <span class="imed-price" v-text="it.price"></span>阅点&nbsp;
                                    <s>{{it.originPrice}}阅点</s>
                                </div>
                            </div>
                            <div style="width: 24%;padding: .5rem;" class="imed-button-group">
                                <template v-if="it.enable">
                                    <div @click="learn(it.id, it.price)">
                                        <div class="imed-button">
                                            {{text(it.type)}}
                                        </div>
                                    </div>
                                </template>
                                <template v-else>
                                    <div class="imed-button" style="color: lightgrey;border: 1px solid lightgrey;">
                                        {{text(it.type)}}
                                    </div>
                                </template>
                            </div>
                        </div>
                        <div style="height: .5rem;background-color: #F5F5F5"></div>
                    </template>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import ImedNav from '../../components/imed-nav'
    import {mapState} from 'vuex'

    export default {
        name: "exam-guide",
        created() {
            if (typeof Config !== 'undefined') {
                Config && this.$store.commit('config', Config)
            }
        },
        data() {
            return {
                title: '医师资格考试考前辅导',
                list: [
                    {
                        title: '临床执业医师考试通关包',
                        cover: require("../../assets/img/title-tip-1.png"),
                        list: [
                            {
                                id: '40288810624e037d01624e03979d0357',
                                cover: require("../../assets/img/exam-category-1.jpg"),
                                title: '实践技能考试',
                                price: '1316',
                                originPrice: '1880',
                                type: 'free',
                                enable: true,
                            },
                            {
                                id: '40288810624e037d01624e03979d035b',
                                cover: require("../../assets/img/exam-category-2.jpg"),
                                title: '综合笔试',
                                price: '6990',
                                originPrice: '9990',
                                type: 'fee',
                                enable: true,
                            }
                        ]
                    },
                    {
                        title: '临床执业助理医师通关包',
                        cover: require("../../assets/img/title-tip-2.png"),
                        list: [
                            {
                                id: '40288810624e037d01624e03979d035c',
                                cover: require("../../assets/img/exam-category-3.jpg"),
                                title: '实践技能考试',
                                price: '1316',
                                originPrice: '1880',
                                type: 'free',
                                enable: true,
                            },
                            {
                                id: '40288810624e037d01624e03979d035d',
                                cover: require("../../assets/img/exam-category-4.jpg"),
                                title: '综合笔试',
                                price: '6200',
                                originPrice: '8880',
                                type: 'fee',
                                enable: true,
                            }
                        ]
                    },
                ]
            }
        },
        components: {ImedNav},
        computed: {
            ...mapState({
                config: state => state.config,
            }),
        },
        methods: {
            search() {
                console.log('======')
            },
            back() {
                WebCallApp("CmdGoBack")
            },
            learn(id, price) {
                this.$store.commit('currentId', id)
                this.$store.commit('price', parseInt(price))
                let login = this.$store.dispatch('login', {id,})
                let pkg = this.$store.dispatch('packageInfo', {id,})
                Promise.all([login, pkg]).then(([loginInfo, packageInfo]) => {
                    this.$router.push({path: `/exam/${id}`, query: {price}})
                })
            },
            text(type) {
                // return type === 'free' ? '学习' : '购买'
                return '学习'
            }
        }
    }
</script>

<style scoped>

    div, span {
        color: black;
    }

    .imed-item-title {
        font-size: .75rem;
    }

    .imed-item-sub-title {
        margin-top: .5rem;
        font-size: .65rem;
        color: #868686;
    }

    .imed-price {
        color: red;
    }

    .imed-item-content {
        margin-bottom: .3rem;
    }

    .imed-item-info {
        margin-top: .5rem;
    }

    .imed-button {
        color: #D54443;
        border: 1px solid #D54443;
        padding: .2rem .18rem;
        text-align: center;
        border-radius: 20px;
        font-size: .665rem;
    }

    .imed-button-group {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }

    .content {
        background-color: #F5F5F5;
    }

</style>