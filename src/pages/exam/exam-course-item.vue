<template>
    <imed-nav :title="video.title">
        <video preload
               width="100%"
               @click="control"
               controls
               :poster="preUrl + video.cover"
               controls="controls">
            <source :src="preUrl + video.path"
                    type="video/mp4">
            your browser does not support the video tag
        </video>
        <div class="buttons-tab">
            <div class="tab-link active button">讲义</div>
            <div href="#tab2" class="tab-link button"></div>
        </div>
        <div class="content-block">
            <div class="tabs">
                <div id="tab1" class="tab active">
                    <div class="content-block" style="overflow:scroll;">
                        <p v-html="video.introduce"></p>
                    </div>
                </div>
            </div>
        </div>
    </imed-nav>
</template>

<script>
    import ImedNav from '../../components/imed-nav'

    export default {
        name: "book-order",
        data() {
            return {
                preUrl: 'http://mvw-imed3.oss-cn-beijing.aliyuncs.com/mvw_imed_book/zhiyikaoshi/',
                videos: {
                    'z000030': {
                        title: '辅助检查导学',
                        introduce: require('../../assets/z000030.htm'),
                        cover: 'z000030.jpg',
                        path: 'z000030.mp4',
                    },
                    'z000031': {
                        title: '病史采集和病例分析导学',
                        introduce: require('../../assets/z000031.htm'),
                        cover: 'z000031.jpg',
                        path: 'z000031.mp4',
                    },
                    'z000032': {
                        title: '综合导学',
                        introduce: require('../../assets/z000032.htm'),
                        cover: 'z000032.jpg',
                        path: 'z000032.mp4',
                    }
                }
            }
        },
        components: {
            ImedNav
        },
        computed: {
            video() {
                if (this.videos[this.$route.params.iid]) {
                    return this.videos[this.$route.params.iid]
                } else {
                    return {
                        title: '辅助检查导学',
                        introduce: require('../../assets/z000030.htm'),
                        cover: 'z000030.jpg',
                        path: 'z000030.mp4',
                    };
                }

            },
        },
        methods: {
            control(event) {
                if (event.target.paused) {
                    event.target.play();
                } else {
                    event.target.pause();
                }
            },
        }
    }
</script>

<style scoped>
    .content-block {
        margin: 0;
        height: 16rem;
    }
</style>