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
                <div style="display: flex; justify-content: space-around;">
                    <b-img style="width: 3rem;" :src='require("../../assets/img/title-tip-left.svg")'/>
                    <span class="imed-title" v-text="item.title"></span>
                    <b-img style="width: 3rem;" :src='require("../../assets/img/title-tip-right.svg")'/>
                </div>
                <b-container class="imed-item-content">
                    <template v-for="it in item.list">
                        <b-row>
                            <b-col cols="4">
                                <b-img style="margin:.5rem" fluid :src='it.cover'/>
                            </b-col>
                            <b-col cols="4" class="imed-item-info">
                                <div class="imed-item-title" v-text="it.title"></div>
                                <div class="imed-item-sub-title">
                                    <span class="imed-price" v-text="it.price"></span> 阅点
                                    <s>
                                        <span class="imed-price" v-text="it.originPrice"></span> 阅点
                                    </s>
                                </div>
                            </b-col>
                            <b-col cols="4" class="imed-button-group">
                                <template v-if="it.type==='free'">
                                    <router-link to="/exam/123">
                                        <div class="imed-button">开始学习</div>
                                    </router-link>
                                </template>
                                <template v-else-if="it.type==='fee'">
                                    <router-link to="/exam/123">
                                        <div class="imed-button">购买</div>
                                    </router-link>
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
                        list: [
                            {
                                cover: require("../../assets/img/vedio-list.png"),
                                title: '实践技能',
                                price: '0',
                                originPrice: '2990',
                                type: 'free',
                            },
                            {
                                cover: require("../../assets/img/vedio-list.png"),
                                title: '综合笔试',
                                price: '6800',
                                originPrice: '8900',
                                type: 'fee',
                            }
                        ]
                    },
                    {
                        title: '临床执业助理医师通关包',
                        list: [
                            {
                                cover: require("../../assets/img/vedio-list.png"),
                                title: '实践技能',
                                price: '0',
                                originPrice: '2990',
                                type: 'free',
                            },
                            {
                                cover: require("../../assets/img/vedio-list.png"),
                                title: '综合笔试',
                                price: '6800',
                                originPrice: '8900',
                                type: 'fee',
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
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: -1rem;
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