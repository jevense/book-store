<template>
    <div>
        <header class="imed-bar">
            <router-link to="/exam" class="item-content item-link">
                <div class="icon icon-left"></div>
            </router-link>
            <h1 v-text="title"></h1>
            <a class="icon" style="width: 0.8rem">&nbsp;</a>
        </header>
        <div class="content"
             :style="{margin: loginInfo.ownList.length==list.length?'3rem 0 0 0':'3rem 0 2.4rem 0'}">
            <div class="imed-content">
                <div @click="courseItem(banner.videoId,banner.videoName)" v-if="banner">
                    <b-img fluid :src='banner.cover'/>
                </div>
                <div style="padding: 0.7rem;" v-text="introduce"></div>
                <div class="imed-tips">
                    <div style=" border-right: 2px solid #F9F9F9;">
                        <div>
                            <b-img :src='require("../../assets/img/time.png")'/>
                        </div>
                        <div style="color: #868686;">上线时间：</div>
                        <div>{{time}}</div>
                    </div>
                    <div>
                        <div>
                            <b-img fluid :src='require("../../assets/img/people.png")'/>
                        </div>
                        <div style="color: #868686;">学习人数：</div>
                        <div>{{people}}</div>
                    </div>
                </div>
            </div>
            <div class="imed-content" style="margin-top: .5rem;">
                <div class="imed-title">实践技能考试</div>
                <div class="imed-item-content">
                    <template v-for="item in list">
                        <div class="imed-group">
                            <div style="width: 30%;padding: .25rem;">
                                <b-img fluid :src='item.cover'/>
                            </div>
                            <div style="width: 50%;" class="imed-item-info">
                                <div class="imed-item-title" v-text="item.title"></div>
                                <div class="imed-item-sub-title" v-text="item.subTitle"></div>
                                <div class="imed-item-sub-title">
                                    <span class="imed-price" v-text="item.price"></span> 阅点
                                    <s>
                                        <span class="imed-price" v-text="item.originPrice"></span> 阅点
                                    </s>
                                </div>
                            </div>
                            <div style="width: 20%;padding: .25rem;" class="imed-button-group">
                                <div @click="courseItem(item.guide.videoId,item.videoName)" v-if="item.guide">
                                    <div class="imed-button">导学</div>
                                </div>
                                <template v-if="isContains(item.id)">
                                    <template v-if="item.enable">
                                        <a v-if="item.type==='examination'" @click="examination(item.isbn)">
                                            <div class="imed-button">学习</div>
                                        </a>
                                        <router-link to="/exam/1/course" v-if="item.type==='video'">
                                            <div class="imed-button">学习</div>
                                        </router-link>
                                    </template>
                                    <template v-else>
                                        <div class="imed-button" style="color: lightgrey;border: 1px solid lightgrey;">
                                            学习
                                        </div>
                                    </template>
                                </template>
                                <template v-else>
                                    <!--<template v-if="item.enable">-->
                                    <!--<router-link :to="`/book/${item.id}/order`">-->
                                    <!--<div class="imed-button">购买</div>-->
                                    <!--</router-link>-->
                                    <!--</template>-->
                                    <!--<template v-else>-->
                                    <!--<div class="imed-button" style="color: lightgrey;border: 1px solid lightgrey;">-->
                                    <!--购买-->
                                    <!--</div>-->
                                    <!--</template>-->
                                    <div class="imed-button" style="color: lightgrey;border: 1px solid lightgrey;">
                                        购买
                                    </div>
                                </template>
                            </div>
                        </div>
                        <hr>
                    </template>
                </div>
            </div>
        </div>
        <footer v-if="loginInfo.ownList.length!==list.length">
            <router-link :to="`/book/${$route.params.eid}/order`" class="button button-fill button-big">
                全部购买（{{$store.state.loginInfo.remainPrice}}阅点）
            </router-link>
        </footer>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "book-list",
        data() {
            return {
                title: '临床执业医师考试通关包实践技能考试',
                introduce: '贴近新版考试大纲，资深专家进行编著，重点难点深入剖析，解决考生学习痛点。内含：专家导读+操作视频+精品题库。\n',
                time: '2018-6-1',
                people: '405',
                banner: {
                    cover: require("../../assets/img/bannerPic.png"),
                    videoId: 'z000032',
                    videoName: '综合导学',
                },
                list: [
                    {
                        id: "40288810624e037d01624e03979d0358",
                        isbn: "6ca818bb0804442992c06d190895720c",
                        cover: require("../../assets/img/picKaoshi.png"),
                        title: '第一站 病史采集及病例分析',
                        subTitle: '答题技巧和要点',
                        videoName: '病史采集和病例分析导学',
                        price: '0',
                        originPrice: '500',
                        buyStatus: true,
                        guide: {videoId: 'z000031'},
                        type: 'examination',
                        enable: true,

                    },
                    {
                        id: "40288810624e037d01624e03979d0359",
                        isbn: "d0a07f9c5d5f4ec4a2d63e989590600f",
                        cover: require("../../assets/img/picShipin.png"),
                        title: '第二站 体格检查与基本操作',
                        subTitle: '高清示教视频操作',
                        price: '0',
                        originPrice: '780',
                        buyStatus: true,
                        type: 'video',
                        enable: true,

                    },
                    {
                        id: "40288810624e037d01624e03979d035a",
                        isbn: "d8a76956f6b14263a8a04e332c2f3c08",
                        cover: require("../../assets/img/picMuni.png"),
                        title: '第三站 辅助检查',
                        subTitle: 'B超、CT、心电图、X线',
                        videoName: '辅助检查导学',
                        price: '0',
                        originPrice: '600',
                        buyStatus: true,
                        guide: {videoId: 'z000030'},
                        type: 'examination',
                        enable: true,
                    }
                ],
            }
        },
        computed: {
            ...mapState([
                'loginInfo'
            ])
        },
        methods: {
            search() {
                console.log('======');
            },
            examination(cid) {
                if (typeof BOOK !== 'undefined') {
                    let url = `https://exam.mvwchina.com/pc/student/student.html?token=${BOOK.token}&platforms=ebook&newebook=1&packageId=${cid}`
                    WebCallApp("CmdOpenUrl", {url,})
                }
            },
            isContains(id) {
                return this.$store.getters.loginInfo.ownList.includes(id)
            },
            courseItem(courseId, name) {
                this.$store.dispatch('video', {id: courseId, name}).then(() => {
                    this.$router.push({path: `/exam/123/course/1/item/${courseId}`, query: {name,}})
                })
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
        border: 2px solid #F9F9F9;
        display: flex;
    }

    .imed-tips > div {
        padding: .5rem;
        display: flex;
        flex-direction: row;
        text-align: center;
    }

    .imed-tips img {
        width: .855rem;
        vertical-align: middle;
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
        background-color: #FFFFFF;
    }

    .imed-group {
        display: flex;
    }

    .imed-item-info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
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

    hr {
        margin: 0;
        border: 2px solid #F9F9F9;
    }

</style>