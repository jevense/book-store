<template>
    <div>
        <div class="content imed-margin-nav">
            <div class="imed-content">
                <div>
                    <b-img fluid :src="require('../../assets/img/v4.3.png')"/>
                </div>
                <div class="imed-tip">版权申明：视频内容非商业用途</div>
                <div class="imed-tip">如涉及著作人权益，请联系医视界 400-001-8080</div>
            </div>
            <div class="imed-content">
                <BulmaAccordion
                        :dropdown="false"
                        :icon="'caret'"
                >
                    <BulmaAccordionItem v-for="item in activities" :key="item.title" v-if="item.enable">
                        <div slot="title" v-text="item.title"></div>
                        <div slot="content">
                            <div v-if="item.timeLineMap">
                                <timeline>
                                    <div v-for="ite in item.timeLineMap" :key="ite.date">
                                        <timeline-title v-text="ite.date"></timeline-title>
                                        <timeline-item bg-color="#9dd8e0" v-for="it in ite.list" :key="it.video">
                                            <div v-text="it.time"></div>
                                            <div class="card meeting">
                                                <div class="meeting-name">
                                                    <div class="col-33 me-name" v-text="it.name"></div>
                                                    <div class="col-33" v-text="it.author"></div>
                                                </div>
                                                <div @click="redirect(it)">
                                                    <div :class="buttonStyle(it.enable)">点击观看</div>
                                                </div>
                                            </div>
                                        </timeline-item>
                                    </div>
                                </timeline>
                            </div>
                            <div v-else>
                                <div class="card meeting" v-for="it in item.list" :key="it.video">
                                    <div class="meeting-name">
                                        <div class="col-33" v-text="it.name"></div>
                                        <div class="col-33" v-text="it.author"></div>
                                    </div>
                                    <div @click="redirect(it)">
                                        <div :class="buttonStyle(it.enable)">点击观看</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div slot="footer">&nbsp;</div>
                    </BulmaAccordionItem>
                </BulmaAccordion>


            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import BulmaAccordion from '../../components/accordion/BulmaAccordion.vue'
    import BulmaAccordionItem from '../../components/accordion/BulmaAccordionItem.vue'
    import {Timeline, TimelineItem, TimelineTitle} from 'vue-cute-timeline'

    export default {
        name: 'activity-list',
        beforeCreate() {
            if (typeof Config !== 'undefined') {
                Config && this.$store.commit('config', Config)
            }
            this.axios.get(`https://statics.imed.org.cn/statics/activity/home`)
        },
        created() {
            this.$store.dispatch('activities', {id: "20180901"})
        },
        data() {
            return {}
        },
        components: {
            BulmaAccordion,
            BulmaAccordionItem,
            Timeline,
            TimelineItem,
            TimelineTitle,
        },
        computed: {
            ...mapState({
                activities: state => state.activities,
            }),
        },
        methods: {
            back() {
                WebCallApp("CmdGoBack")
            },
            redirect(item) {
                let {video, name, author, enable} = item
                if (!enable) return false
                this.$store.dispatch('video', {id: video, name, author}).then(() => {
                    this.$router.push({
                        path: `/exam/123/course/1/item/${video}`,
                        query: {name, author, category: true}
                    })
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

    .imed-margin-nav {
        /*margin: 3rem 0 0 0;*/
    }

    .imed-content {
        background-color: #FFFFFF;
        font-size: .8rem
    }

    .meeting {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .meeting .button {
        margin-right: 1rem;
    }

    .meeting-name {
        padding: .5rem;
    }

    .timeline-item {
        padding-bottom: 0;
    }

    .imed-tip {
        padding: .2rem .5rem;
        color: red;
        font-size: .5rem;
    }

    .timeline-title {
        font-size: 1rem;
        margin-top: 1rem;
    }

    .imed-button {
        color: #D54443;
        border: 1px solid #D54443;
        padding: .2rem .2rem;
        text-align: center;
        border-radius: 2px;
        font-size: .665rem;
        margin-right: .5rem;
    }

    .imed-button-disable {
        color: lightgrey;
        border: 1px solid lightgrey;
    }

    .me-name {
        width: 13em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }


</style>
