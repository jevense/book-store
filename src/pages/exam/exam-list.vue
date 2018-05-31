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
            <div class="imed-content">
                <router-link :to="`/exam/1/course/1/item/${banner.videoId}`" v-if="banner">
                    <b-img fluid :src='banner.cover'/>
                </router-link>
                <div style="padding: 0.7rem;" v-text="introduce"></div>
                <div class="imed-tips">
                    <span style="border-right: 2px solid #F9F9F9;">
                        <b-img :src='require("../../assets/img/time.png")'/>
                        <span>上线试卷：</span>{{time}}
                    </span>
                    <span>
                        <b-img :src='require("../../assets/img/people.png")'/>
                        <span>学习人数：</span>{{people}}
                    </span>
                </div>
            </div>
            <div class="imed-content" style="margin-top: .5rem;">
                <div class="imed-title">综合理论笔试</div>
                <b-container class="imed-item-content">
                    <template v-for="item in list">
                        <b-row class="imed-group">
                            <b-col cols="3">
                                <img style="width: 5rem;" :src='item.cover'>
                            </b-col>
                            <b-col cols="6" class="imed-item-info">
                                <div class="imed-item-title" v-text="item.title"></div>
                                <div class="imed-item-sub-title" v-text="item.subTitle"></div>
                                <div class="imed-item-sub-title">
                                    <span class="imed-price" v-text="item.price"></span> 阅点
                                    <s>
                                        <span class="imed-price" v-text="item.originPrice"></span> 阅点
                                    </s>
                                </div>
                            </b-col>
                            <b-col cols="3" class="imed-button-group">
                                <router-link :to="`/exam/1/course/1/item/${item.guide.videoId}`" v-if="item.guide">
                                    <div class="imed-button">导学</div>
                                </router-link>

                                <template v-if="!item.buyStatus">
                                    <router-link to="/book/10/order">
                                        <div class="imed-button">购买</div>
                                    </router-link>
                                </template>
                                <template v-else>
                                    <router-link to="/exam/123/examination" v-if="item.type==='examination'">
                                        <div class="imed-button">学习</div>
                                    </router-link>
                                    <router-link to="/exam/123/course" v-if="item.type==='video'">
                                        <div class="imed-button">学习</div>
                                    </router-link>
                                </template>
                            </b-col>
                        </b-row>
                        <hr>
                    </template>
                </b-container>
            </div>
            <!--<footer>-->
                <!--<router-link to="/book/10/order" class="button button-fill button-big">-->
                    <!--全部购买（9990阅点）-->
                <!--</router-link>-->
            <!--</footer>-->
        </div>
    </div>
</template>

<script>
    import ImedNav from '../../components/imed-nav'

    export default {
        name: "book-list",
        data() {
            return {
                title: '临床执业医师资格考试实践技能通关包',
                introduce: '贴近新版考试大纲，资深专家进行编著，重点难点深入剖析，解决考生学习痛点。内含：专家导读+操作视频+精品题库。\n',
                time: '2018-6-1',
                people: '405',
                banner: {
                    cover: require("../../assets/img/bannerPic.png"),
                    videoId: 'z000032',
                },
                list: [
                    {
                        cover: require("../../assets/img/picKaoshi.png"),
                        title: '第一站 病史采集及病例分析',
                        subTitle: '答题技巧和要点',
                        price: '0',
                        originPrice: '500',
                        buyStatus: true,
                        guide: {videoId: 'z000031'},
                        type: 'examination',

                    },
                    {
                        cover: require("../../assets/img/picShipin.png"),
                        title: '第二站 体格检查与基本操作',
                        subTitle: '高清示教视频操作',
                        price: '0',
                        originPrice: '780',
                        buyStatus: true,
                        type: 'video',

                    },
                    {
                        cover: require("../../assets/img/picMuni.png"),
                        title: '第三站 辅助检查',
                        subTitle: 'B超、CT、心电图、X线',
                        price: '0',
                        originPrice: '600',
                        buyStatus: true,
                        guide: {videoId: 'z000030'},
                        type: 'examination',

                    }
                ],
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

    div, span {
        color: black;
    }

    .content {
        background-color: #F5F5F5;
    }

    .imed-content {
        background-color: #FFFFFF;
        font-size: .6175rem
    }

    .imed-tips {
        display: flex;
        border: 2px solid #F9F9F9;
    }

    .imed-tips > span {
        padding: .5rem 1.5rem;
    }

    .imed-tips img {
        width: .855rem;
        vertical-align: middle;
    }

    .imed-tips > span > span {
        color: #868686;
    }

    .imed-title {
        font-size: .665rem;
        padding: .5rem .7rem;
        border: 2px solid #F9F9F9;
    }

    .imed-item-title {
        font-size: .665rem;
    }

    .imed-item-sub-title {
        font-size: .5rem;
        color: #868686;
    }

    .imed-price {
        color: red;
    }

    .imed-item-content {
        padding: .5rem .7rem;
    }

    .imed-item-info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 1.5rem;
    }

    .imed-button {
        color: #D54443;
        border: 1px solid #D54443;
        padding: .2rem .7rem;
        text-align: center;
        border-radius: 20px;
        font-size: .665rem;
    }

    .imed-button-group {
        display: flex;
        justify-content: space-around;
        flex-direction: column
    }

    .imed-button-group div {
        margin: 2px;
    }

    footer {
        position: fixed;
        width: 100%;
        bottom: 0;
    }


</style>