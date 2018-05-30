<template>
    <div>
        <header class="imed-bar">
            <router-link to="/exam/123/course" class="item-content item-link">
                <div class="icon icon-left"></div>
            </router-link>
            <h1 v-text="title"></h1>
            <a class="icon" style="width: 0.8rem">&nbsp;</a>
        </header>
        <div class="content" style="margin:3rem 0 0 0;">
            <div v-for="n in 10">
                <div style="border: 2px solid #F5F6F6; background-color:#FEFFFF;margin-bottom: .5rem;">
                    <router-link to="/exam/123/course/1/item/1" class="link">
                        <b-img fluid :src='require("../../assets/img/course-list.png")'/>
                    </router-link>
                    <div style="margin: .75rem;">
                        <div>第一课时：甲状腺腺叶切除术</div>
                        <div style="font-size: .75rem;color: #868686">时长：45分钟</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ImedNav from '../../components/imed-nav'

    export default {
        name: "exam-guide",
        data() {
            return {
                title: '视频课程',
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

    .content{
        background-color: #F4F5F6;
    }
</style>