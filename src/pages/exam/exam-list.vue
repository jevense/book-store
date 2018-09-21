<template>
    <div>
        <header class="bar bar-nav" v-if="bar">
            <router-link to="/exam" class="item-content item-link">
                <button class="button pull-left">
                    <span class="icon icon-left"></span>
                </button>
            </router-link>

            <h1 class="title" v-text="packageInfo.title"></h1>
            <a class="icon" style="width: 0.8rem">&nbsp;</a>
        </header>
        <div class="content imed-margin-nav">
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
                        <div style="color: #868686;">&nbsp;上线时间：</div>
                        <div>{{packageInfo.time}}</div>
                    </div>
                    <div>
                        <div>
                            <b-img fluid :src='require("../../assets/img/people.png")'/>
                        </div>
                        <div style="color: #868686;">&nbsp;学习人数：</div>
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
        <footer v-if="!bought" style="display: flex;">
            <div @click="buy({id:$route.params.eid, buyable:true})"
                 style="flex-grow:1"
                 class="button button-fill button-big">
                全部购买（{{remainPrice()}}阅点）
            </div>
            <div v-if="packageInfo.combine && !combineBought" @click="buyCombine"
                 class="button button-fill button-big"
                 style="flex-grow:1;background-color: #FB9437">
                指南+题库({{packageInfo.combine.price}}阅点)
            </div>
        </footer>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "book-list",
        beforeCreate() {
            let {eid: id} = this.$route.params
            this.$store.commit('currentId', id)
            let login = this.$store.dispatch('login', {id,})
            let pkg = this.$store.dispatch('packageInfo', {id,})
        },
        data() {
            return {}
        },
        computed: {
            ...mapState({
                loginInfo: state => state.loginInfo,
                packageInfo: state => state.packageInfo,
                config: state => state.config,
                currentId: state => state.currentId,
                bought: state => state.packageInfo.list.every(item => state.loginInfo.ownList.includes(item.id)),
                combineBought: state => state.packageInfo.combine.combineList.some(id => state.loginInfo.ownList.includes(id)),
                bar: state => state.bar,
            }),
        },
        methods: {
            search() {
                console.log('======');
            },
            remainPrice() {
                return this.packageInfo.list
                    .filter(info => !this.loginInfo.ownList.includes(info.id))
                    .reduce((prev, cur) => prev + parseInt(cur.price), 0)
            },
            redirect(item) {
                let {id, type, isbn, enable, skillbook, key1, direct, title} = item
                if (!enable) return false
                if (type === 'examination') {
                    // let token = getQueryString('token')
                    let token = this.$route.query['token']
                    let url = `${this.config.examUrl}/pc/student/student.html?token=${token}&platforms=ebook&newebook=1&packageId=${isbn}`
                    skillbook && (url += `&skillbook=1&key1=${key1}`)
                    WebCallApp("CmdOpenUrl", {url,})
                } else if (type === 'video') {
                    if (direct) {
                        this.$store.dispatch('videos', {id,}).then(() => {
                            this.$router.push({path: `/exam/123/course/${id}`, query: {name: title}})
                        })
                    } else {
                        let {eid} = this.$route.params
                        this.$router.push(`/exam/${eid}/course`)
                    }
                } else if (type === 'pdf') {
                    this.$store.dispatch('pdf', {id,}).then(() => {
                        this.$router.push(`/exam/${this.$route.params.eid}/pdf/${id}`)
                    })
                } else if (type === 'bbs') {

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
                    this.$router.push({path: `/exam/${this.$route.params.eid}/course/1/item/${id}`, query: {name,}})
                })
            },
            buy(item) {
                let {id, buyable: enable} = item
                if (!enable) return false
                this.$store.dispatch('payOrder', {id}).then(() => {
                    this.$router.push(`/product/${id}/order`)
                })
            },
            buyCombine() {
                let id = this.packageInfo.combine.id
                this.$store.dispatch('payOrder', {id,}).then(() => {
                    this.$router.push(`/product/${id}/order`)
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
        margin: 0 0 2.4rem 0;
    }

    .imed-combine {
        width: 100%;
    }

</style>
