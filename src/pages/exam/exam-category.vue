<template>
    <div>
        <header class="imed-bar">
            <a @click="back()">
                <div class="icon icon-left"></div>
            </a>
            <h1 v-text="title"></h1>
            <a class="icon" style="width: 0.8rem">&nbsp;</a>
        </header>
        <div class="content" style="margin:3rem 0 0 0;">
            <template v-for="item in list">
                <div style="width: 95%; margin: 1rem auto;">
                    <b-img fluid :src='item.cover'/>
                </div>
                <b-container class="imed-item-content">
                    <template v-for="it in item.list">
                        <b-row>
                            <b-col cols="4">
                                <b-img style="margin:.5rem" fluid :src='it.cover'/>
                            </b-col>
                            <b-col cols="5" class="imed-item-info">
                                <div class="imed-item-title" v-text="it.title"></div>
                                <div class="imed-item-sub-title">
                                    <span class="imed-price" v-text="it.price"></span> 阅点
                                    <s>
                                        <span class="imed-price" v-text="it.originPrice"></span> 阅点
                                    </s>
                                </div>
                            </b-col>
                            <b-col cols="3" class="imed-button-group">
                                <template v-if="it.type==='free'">
                                    <router-link :to="`/exam/${it.id}`">
                                        <div class="imed-button">学习</div>
                                    </router-link>
                                </template>
                                <template v-else-if="it.type==='fee'">
                                    <template v-if="it.enable">
                                        <router-link :to="`/book/${it.id}/order`">
                                            <div class="imed-button">购买</div>
                                        </router-link>
                                    </template>
                                    <template v-else="it.enable">
                                        <div class="imed-button" style="color: lightgrey;border: 1px solid lightgrey;">
                                            购买
                                        </div>
                                    </template>
                                </template>
                            </b-col>
                        </b-row>
                        <div style="height: .5rem;background-color: #F5F5F5"></div>
                    </template>
                </b-container>
            </template>
        </div>
    </div>
</template>

<script>
    import ImedNav from '../../components/imed-nav'

    export default {
        name: "exam-guide",
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
                                cover: require("../../assets/img/exam-category-1.png"),
                                title: '实践技能',
                                price: '0',
                                originPrice: '1880',
                                type: 'free',
                                enable: true,
                            },
                            {
                                id: '40288810624e037d01624e03979d0357',
                                cover: require("../../assets/img/exam-category-2.png"),
                                title: '综合笔试',
                                price: '5504',
                                originPrice: '6800',
                                type: 'fee',
                                enable: false,
                            }
                        ]
                    },
                    {
                        title: '临床执业助理医师通关包',
                        cover: require("../../assets/img/title-tip-2.png"),
                        list: [
                            {
                                id: '40288810624e037d01624e03979d0357',
                                cover: require("../../assets/img/exam-category-3.png"),
                                title: '实践技能',
                                price: '0',
                                originPrice: '1880',
                                type: 'free',
                                enable: true,
                            },
                            {
                                id: '40288810624e037d01624e03979d0357',
                                cover: require("../../assets/img/exam-category-4.png"),
                                title: '综合笔试',
                                price: '4700',
                                originPrice: '5880',
                                type: 'fee',
                                enable: false,
                            }
                        ]
                    },
                ]
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
        padding: 0;
        background-color: #FFFFFF;
    }

    .imed-item-info {
        margin-top: .5rem;
        margin-left: -.5rem;
    }

    .imed-button {
        color: #D54443;
        border: 1px solid #D54443;
        padding: .2rem .2rem;
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