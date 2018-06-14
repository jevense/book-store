<template>
    <div>
        <header class="imed-bar">
            <router-link to="/exam" class="item-content item-link">
                <div class="icon icon-left"></div>
            </router-link>
            <h1 v-text="packageInfo.title"></h1>
            <a class="icon" style="width: 0.8rem">&nbsp;</a>
        </header>
        <div class="content imed-margin-nav"
             :style="{'margin-bottom': bought?'0':'2.4rem'}">
            <div class="imed-content">
                <div @click="courseItem(packageInfo.banner)" v-if="packageInfo.banner">
                    <b-img fluid :src='packageInfo.banner.cover'/>
                </div>
                <div style="padding: 0.7rem;" v-text="packageInfo.introduce"></div>
                <div class="imed-tips">
                    <div style=" border-right: 2px solid #F9F9F9;">
                        <div>
                            <b-img :src='require("../../assets/img/time.png")'/>
                        </div>
                        <div style="color: #868686;">上线时间：</div>
                        <div>{{packageInfo.time}}</div>
                    </div>
                    <div>
                        <div>
                            <b-img fluid :src='require("../../assets/img/people.png")'/>
                        </div>
                        <div style="color: #868686;">学习人数：</div>
                        <div>{{packageInfo.people}}</div>
                    </div>
                </div>
            </div>
            <div class="imed-content" style="margin-top: .5rem;">
                <div class="imed-title" v-text="packageInfo.subTitle"></div>
                <div class="imed-item-content">
                    <template v-for="item in packageInfo.list">
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
                                <div v-if="item.preview"
                                     @click="courseItem(item.preview)"
                                >
                                    <div :class="buttonStyle(item.preview.enable)">
                                        试看
                                    </div>
                                </div>
                                <template v-if="isContains(item.id)">
                                    <div v-if="item.guide"
                                         @click="courseItem(item.guide)"
                                    >
                                        <div :class="buttonStyle(item.guide.enable)">
                                            导学
                                        </div>
                                    </div>
                                    <div @click="redirect(item)">
                                        <div :class="buttonStyle(item.enable)">学习</div>
                                    </div>
                                </template>
                                <template v-else>
                                    <div @click="buy(item)">
                                        <div :class="buttonStyle(item.buyable)">购买</div>
                                    </div>
                                </template>
                            </div>
                        </div>
                        <hr>
                    </template>
                </div>
            </div>
        </div>
        <footer v-if="!bought">
            <div @click="buy({id:$route.params.eid,buyable:true})"
                 class="button button-fill button-big">
                全部购买（{{loginInfo.remainPrice}}阅点）
            </div>
        </footer>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import getQueryString from '../../components/common'

    export default {
        name: "book-list",
        data() {
            return {}
        },
        computed: {
            ...mapState({
                loginInfo: state => state.loginInfo,
                packageInfo: state => state.packageInfo,
                config: state => state.config,
                bought: state => state.packageInfo.list.every(item => state.loginInfo.ownList.includes(item.id))
            }),
        },
        methods: {
            search() {
                console.log('======');
            },
            redirect(item) {
                let {type, isbn, enable} = item
                if (!enable) return false
                if (type === 'examination') {
                    let token = getQueryString('token')
                    let url = `${this.config.examUrl}/pc/student/student.html?token=${token}&platforms=ebook&newebook=1&packageId=${isbn}`
                    WebCallApp("CmdOpenUrl", {url,})
                } else if (type === 'video') {
                    let {eid} = this.$route.params
                    this.$router.push(`/exam/${eid}/course`)
                }
            },
            isContains(id) {
                return this.loginInfo.ownList.includes(id)
            },
            courseItem(item) {
                let {video, enable} = item
                if (!enable) return false
                let {id, name} = video
                this.$store.dispatch('video', {id, name}).then(() => {
                    this.$router.push({path: `/exam/123/course/1/item/${id}`, query: {name,}})
                })
            },
            buy(item) {
                let {id, buyable: enable} = item
                if (!enable) return false
                this.$store.dispatch('payOrder', {id}).then(() => {
                    this.$router.push(`/book/${id}/order`)
                })
            },
            buttonStyle(status) {
                return {
                    'imed-button': true,
                    'imed-button-disable': !status
                }
            },
        }
    }
</script>

<style lang="less" scoped>

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
        padding: .2rem .2rem;
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

    .imed-button-disable {
        color: lightgrey;
        border: 1px solid lightgrey;
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

    .imed-margin-nav {
        margin: 3rem 0 0 0;
    }

</style>