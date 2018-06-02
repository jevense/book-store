<template>
    <imed-nav :title="title">
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

    export default {
        name: "exam-guide",
        data() {
            return {
                title: '体格检查与基本操作',
                preUrl: 'http://mvw-imed3.oss-cn-beijing.aliyuncs.com/mvw_imed_book/zhiyikaoshi/',
                videos: {
                    "1": [
                        {
                            courseId: 'z000001',
                            cover: 'z000001-l.jpg',
                            name: '一般检查',
                            time: '00:14:08',
                        },
                        {
                            courseId: 'z000002',
                            cover: 'z000002-l.jpg',
                            name: '头颈部检查',
                            time: '00:03:32',
                        }, {
                            courseId: 'z000003',
                            cover: 'z000003-l.jpg',
                            name: '胸部检查',
                            time: '00:18:39',
                        }, {
                            courseId: 'z000004',
                            cover: 'z000004-l.jpg',
                            name: '腹部检查',
                            time: '00:07:17',
                        }, {
                            courseId: 'z000005',
                            cover: 'z000005-l.jpg',
                            name: '脊柱、四肢、肛门检查',
                            time: '00:05:10',
                        }, {
                            courseId: 'z000006',
                            cover: 'z000006-l.jpg',
                            name: '神经检查',
                            time: '00:02:52',
                        },
                    ],
                    "2": [
                        {
                            courseId: 'z000007',
                            cover: 'z000007-l.jpg',
                            name: '手术区消毒、铺巾',
                            time: '00:04:37',
                        },
                        {
                            courseId: 'z000008',
                            cover: 'z000008-l.jpg',
                            name: '手术刷手法',
                            time: '00:04:37',
                        }, {
                            courseId: 'z000009',
                            cover: 'z000009-l.jpg',
                            name: '穿手术衣、戴无菌手套',
                            time: '00:01:34',
                        }, {
                            courseId: 'z000010',
                            cover: 'z000010-l.jpg',
                            name: '手术基本操作',
                            time: '00:04:02',
                        }, {
                            courseId: 'z000011',
                            cover: 'z000011-l.jpg',
                            name: '清创术',
                            time: '00:02:42',
                        }, {
                            courseId: 'z000012',
                            cover: 'z000012-l.jpg',
                            name: '开放性伤口的止血包扎',
                            time: '00:01:01',
                        }, {
                            courseId: 'z000013',
                            cover: 'z000013-l.jpg',
                            name: '脓肿切开术',
                            time: '00:01:44',
                        },
                        {
                            courseId: 'z000014',
                            cover: 'z000014-l.jpg',
                            name: '换药与拆线',
                            time: '00:02:24',
                        }, {
                            courseId: 'z000015',
                            cover: 'z000015-l.jpg',
                            name: '吸氧术',
                            time: '00:08:35',
                        }, {
                            courseId: 'z000016',
                            cover: 'z000016-l.jpg',
                            name: '吸痰术',
                            time: '00:01:37',
                        }, {
                            courseId: 'z000017',
                            cover: 'z000017-l.jpg',
                            name: '胃管置入术',
                            time: '00:03:38',
                        }, {
                            courseId: 'z000018',
                            cover: 'z000018-l.jpg',
                            name: '三腔二囊管止血法',
                            time: '00:03:07',
                        }, {
                            courseId: 'z000019',
                            cover: 'z000019-l.jpg',
                            name: '导尿术',
                            time: '00:13:03',
                        },
                        {
                            courseId: 'z000020',
                            cover: 'z000020-l.jpg',
                            name: '动、静脉穿刺术',
                            time: '00:04:46',
                        }, {
                            courseId: 'z000021',
                            cover: 'z000021-l.jpg',
                            name: '胸腔穿刺术',
                            time: '00:04:33',
                        }, {
                            courseId: 'z000022',
                            cover: 'z000022-l.jpg',
                            name: '腹腔穿刺术',
                            time: '00:01:05',
                        }, {
                            courseId: 'z000023',
                            cover: 'z000023-l.jpg',
                            name: '腰椎穿刺术',
                            time: '00:04:53',
                        }, {
                            courseId: 'z000024',
                            cover: 'z000024-l.jpg',
                            name: '骨髓穿刺术',
                            time: '00:07:02',
                        }, {
                            courseId: 'z000025',
                            cover: 'z000025-l.jpg',
                            name: '脊柱损伤的搬运',
                            time: '00:06:41',
                        },
                        {
                            courseId: 'z000026',
                            cover: 'z000026-l.jpg',
                            name: '四肢骨折现场急救外固定技术',
                            time: '00:03:28',
                        }, {
                            courseId: 'z000027',
                            cover: 'z000027-l.jpg',
                            name: '心肺复苏',
                            time: '00:06:39',
                        }, {
                            courseId: 'z000028',
                            cover: 'z000028-l.jpg',
                            name: '简易呼吸器的应用',
                            time: '00:01:53',
                        }, {
                            courseId: 'z000029',
                            cover: 'z000029-l.jpg',
                            name: '穿、脱隔离衣',
                            time: '00:03:15',
                        },
                    ]
                }
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
            list() {
                return this.videos[this.$route.params.cid]
            },
        },
    }
</script>

<style scoped>

    .content {
        background-color: #F4F5F6;
    }

</style>