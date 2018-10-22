<template>
    <div>
        <header class="bar bar-nav" v-if="bar">
            <button class="button pull-left" @click="back">
                <span class="icon icon-left"></span>
            </button>

            <h1 class="title">
                <div class="imed-nav-title" v-text="packageInfo.title"></div>
            </h1>

            <a class="icon" style="width: 0.8rem">&nbsp;</a>
        </header>
        <div class="content" :class="{'imed-margin-nav':!bought}">
            <div class="imed-content" style="margin-top: .5rem;">
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
                                <template v-if="isContains(item.id)">
                                    <div @click="courseItem(item)">
                                        <div :class="buttonStyle(item.enable)">学习</div>
                                    </div>
                                    <div @click="exam(item)">
                                        <div :class="buttonStyle(item.enable)">考试</div>
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
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {WebCallApp} from "../../global"

    export default {
        name: "video-list",
        beforeCreate() {
            if (typeof Config !== 'undefined') {
                Config && this.$store.commit('config', Config)
            }
            let {vid: id} = this.$route.params
            let {token, platform} = this.$route.query
            this.$store.commit('currentId', id)
            let login = this.$store.dispatch('login', {id, token, platform})
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
                bar: state => state.bar,
            }),
        },
        methods: {
            search() {
                console.log('======');
            },
            exam(item) {
                let {isbn, skillbook, key1} = item
                let token = this.$route.query['token']
                let url = `${this.config.examUrl}/pc/student/student.html?token=${token}&platforms=ebook&newebook=1&packageId=${isbn}`
                skillbook && (url += `&skillbook=1&key1=${key1}`)
                WebCallApp("CmdOpenUrl", {url,})
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
            buttonStyle(status) {
                return {
                    'imed-button': true,
                    'imed-button-disable': !status
                }
            },
            back() {
                WebCallApp("CmdGoBack")
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
        margin-bottom: 2.4rem;
    }

    .imed-combine {
        width: 100%;
    }

</style>
