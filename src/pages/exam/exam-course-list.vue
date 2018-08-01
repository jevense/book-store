<template>
    <imed-nav :title="$route.query.name">
        <div class="content" style="margin:3rem 0 0 0;">
            <div v-for="item in list">
                <div style="border: 2px solid #F5F6F6; background-color:#FEFFFF;margin-bottom: .5rem;">
                    <div @click="courseItem(item.courseId,item.name)" class="link">
                        <b-img fluid :src='preUrl + item.cover'/>
                    </div>
                    <div style="margin: .75rem;">
                        <div style="font-size: .75rem;" v-text="item.name"></div>
                        <div style="font-size: .7rem;color: #868686" v-if="item.time">时长：{{item.time}}</div>
                    </div>
                </div>
            </div>
        </div>
    </imed-nav>
</template>

<script>
    import ImedNav from '../../components/imed-nav'
    import {mapState} from 'vuex'

    export default {
        name: "exam-guide",
        data() {
            return {
                preUrl: 'https://mvw-imed3.oss-cn-beijing.aliyuncs.com/mvw_imed_book/zhiyikaoshi/',
            }
        },
        components: {
            ImedNav
        },
        methods: {
            search() {
                console.log('======')
            },
            courseItem(courseId, name) {
                this.$store.dispatch('video', {id: courseId, name}).then(() => {
                    this.$router.push({path: `/exam/123/course/1/item/${courseId}`, query: {name,}})
                })
            }
        },
        computed: {
            ...mapState({
                list: state => state.videos,
            }),
        },
    }
</script>

<style scoped>

    .content {
        background-color: #F4F5F6;
    }

</style>
