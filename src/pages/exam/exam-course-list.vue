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
            <div v-for="item in list">
                <div style="border: 2px solid #F5F6F6; background-color:#FEFFFF;margin-bottom: .5rem;">
                    <router-link :to="`/exam/123/course/1/item/${item.courseId}`" class="link">
                        <b-img fluid :src='preUrl + item.cover'/>
                    </router-link>
                    <div style="margin: .75rem;">
                        <div v-text="item.name"></div>
                        <div style="font-size: .75rem;color: #868686" v-if="item.time">时长：{{item.time}}</div>
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
                title: '体格检查与基本操作',
                preUrl: 'http://mvw-imed3.oss-cn-beijing.aliyuncs.com/mvw_imed_book/zhiyikaoshi/',
                list: [
                    {
                        courseId: 'z000001',
                        cover: 'z000001-l.jpg',
                        name: '体格检查—一般检查',
                        time: '00:11:22',
                    },
                    {
                        courseId: 'z000002',
                        cover: 'z000002-l.jpg',
                        name: '体格检查—头颈部检查',
                        time: '00:11:22',
                    }, {
                        courseId: 'z000003',
                        cover: 'z000003-l.jpg',
                        name: '体格检查—胸部检查',
                        time: '00:11:22',
                    }, {
                        courseId: 'z000004',
                        cover: 'z000004-l.jpg',
                        name: '体格检查—腹部检查',
                        time: '00:11:22',
                    }, {
                        courseId: 'z000005',
                        cover: 'z000005-l.jpg',
                        name: '体格检查—脊柱、四肢、肛门检查',
                        time: '00:11:22',
                    }, {
                        courseId: 'z000006',
                        cover: 'z000006-l.jpg',
                        name: '体格检查—神经检查',
                        time: '00:11:22',
                    },
                ]
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

    .content {
        background-color: #F4F5F6;
    }
</style>