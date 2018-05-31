<template>
    <div>
        <header class="imed-bar">
            <a @click="back">
                <div class="icon icon-left"></div>
            </a>
            <h1 v-text="title"></h1>
            <a class="icon" style="width: 0.8rem">&nbsp;</a>
        </header>
        <div class="content" style="margin:3rem 0 0 0;">
            <div class="imed-content">
                <b-img fluid :src='require("../../assets/img/banner.png")'/>
                <div style="padding: 0.7rem;">
                    执医医师考试综合理论鄙视通关包包含考试指南、模拟试卷、视频课程、考前精华、试卷答疑等...
                </div>
                <div class="imed-tips">
                    <span style="border-right: 2px solid #F9F9F9;">
                        <b-img :src='require("../../assets/img/time.png")'/>
                        <span>上线试卷：</span>2018-6-2
                    </span>
                    <span>
                        <b-img :src='require("../../assets/img/people.png")'/>
                        <span>学习人数：</span>405
                    </span>
                </div>
            </div>
            <div class="imed-content" style="margin-top: .5rem;">
                <div class="imed-title">综合理论笔试</div>
                <b-container class="imed-item-content">
                    <b-row class="imed-group">
                        <b-col cols="3">
                            <img style="width: 5rem;" :src='require("../../assets/img/exam-cover.png")'>
                        </b-col>
                        <b-col cols="6" class="imed-item-info">
                            <div class="imed-item-title">考试指南</div>
                            <div class="imed-item-sub-title">复习重点精讲</div>
                            <div class="imed-item-sub-title">
                                <span class="imed-price">2990</span> 阅点
                                <s>
                                    <span class="imed-price">2990</span> 阅点
                                </s>
                            </div>
                        </b-col>
                        <b-col cols="3" class="imed-button-group">
                            <router-link to="/book/10/order">
                                <div class="imed-button">购买</div>
                            </router-link>
                        </b-col>
                    </b-row>
                    <hr>
                    <b-row class="imed-group">
                        <b-col cols="3">
                            <img style="width: 5rem;" :src='require("../../assets/img/exam-cover.png")'>
                        </b-col>
                        <b-col cols="6" class="imed-item-info">
                            <div class="imed-item-title">视频课程</div>
                            <div class="imed-item-sub-title">符合考试大纲的视频课程</div>
                            <div class="imed-item-sub-title">
                                <span class="imed-price">2990</span> 阅点
                                <s>
                                    <span class="imed-price">2990</span> 阅点
                                </s>
                            </div>
                        </b-col>
                        <b-col cols="3" class="imed-button-group">
                            <router-link to="/exam/123/preview">
                                <div class="imed-button">试看</div>
                            </router-link>
                            <router-link to="/exam/123/course">
                                <div class="imed-button">购买</div>
                            </router-link>
                        </b-col>
                    </b-row>
                    <hr>
                    <b-row class="imed-group">
                        <b-col cols="3">
                            <img style="width: 5rem;" :src='require("../../assets/img/exam-cover.png")'>
                        </b-col>
                        <b-col cols="6" class="imed-item-info">
                            <div class="imed-item-title">模拟测试题</div>
                            <div class="imed-item-sub-title">各专业练习题及2套模拟题</div>
                            <div class="imed-item-sub-title">
                                <span class="imed-price">2990</span> 阅点
                                <s>
                                    <span class="imed-price">2990</span> 阅点
                                </s>
                            </div>
                        </b-col>
                        <b-col cols="3" class="imed-button-group">
                            <router-link to="/exam/123/examination">
                                <div class="imed-button">购买</div>
                            </router-link>
                        </b-col>
                    </b-row>
                    <hr>
                    <b-row class="imed-group">
                        <b-col cols="3">
                            <img style="width: 5rem;" :src='require("../../assets/img/exam-cover.png")'>
                        </b-col>
                        <b-col cols="6" class="imed-item-info">
                            <div class="imed-item-title">交流答疑</div>
                            <div class="imed-item-sub-title">知识点及错题反馈</div>
                            <div class="imed-item-sub-title">
                                <span class="imed-price">2990</span> 阅点
                                <s>
                                    <span class="imed-price">2990</span> 阅点
                                </s>
                            </div>
                        </b-col>
                        <b-col cols="3" class="imed-button-group">
                            <router-link to="/exam/123/examination">
                                <div class="imed-button">购买</div>
                            </router-link>
                        </b-col>
                    </b-row>
                    <hr>
                    <b-row class="imed-group">
                        <b-col cols="3">
                            <img style="width: 5rem;" :src='require("../../assets/img/exam-cover.png")'>
                        </b-col>
                        <b-col cols="6" class="imed-item-info">
                            <div class="imed-item-title">考前精讲</div>
                            <div class="imed-item-sub-title">考前划重点和考点</div>
                            <div class="imed-item-sub-title">
                                <span class="imed-price">2990</span> 阅点
                                <s>
                                    <span class="imed-price">2990</span> 阅点
                                </s>
                            </div>
                        </b-col>
                        <b-col cols="3" class="imed-button-group">
                            <router-link to="/exam/123/examination">
                                <div class="imed-button">购买</div>
                            </router-link>
                        </b-col>
                    </b-row>
                    <hr>
                    <b-row class="imed-group">
                        <b-col cols="3">
                            <img style="width: 5rem;" :src='require("../../assets/img/exam-cover.png")'>
                        </b-col>
                        <b-col cols="6" class="imed-item-info">
                            <div class="imed-item-title">考试大纲</div>
                            <div class="imed-item-sub-title">执医考试大纲</div>
                            <div class="imed-item-sub-title">
                                <span class="imed-price">2990</span> 阅点
                                <s>
                                    <span class="imed-price">2990</span> 阅点
                                </s>
                            </div>
                        </b-col>
                        <b-col cols="3" class="imed-button-group">
                            <router-link to="/exam/123/examination">
                                <div class="imed-button">购买</div>
                            </router-link>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
            <footer>
                <router-link to="/book/10/order" class="button button-fill button-big">
                    全部购买（9990阅点）
                </router-link>
            </footer>
        </div>
    </div>
</template>

<script>
    import ImedNav from '../../components/imed-nav'

    export default {
        name: "book-list",
        data() {
            return {
                title: '执业医师考试综合理论笔试通关包',
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

    .imed-button-group div{
        margin: 2px;
    }

    footer {
        position: fixed;
        width: 100%;
        bottom: 0;
    }


</style>