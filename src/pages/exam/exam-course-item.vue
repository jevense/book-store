<template>
    <imed-nav :title="video.title">
        <!--<video preload-->
        <!--width="100%"-->
        <!--@click="control"-->
        <!--controls-->
        <!--:poster="preUrl + video.cover"-->
        <!--controls="controls">-->
        <!--<source :src="preUrl + video.path"-->
        <!--type="video/mp4">-->
        <!--your browser does not support the video tag-->
        <!--</video>-->
        <video-player
                class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="playerOptions"
                @play="onPlayerPlay"
                @pause="onPlayerPause"
        >
        </video-player>
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
    import 'video.js/dist/video-js.css'
    // import 'vue-video-player/src/custom-theme.css'
    import {videoPlayer} from 'vue-video-player/src'

    export default {
        name: "book-order",
        data() {
            let videos = {
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
            let preUrl = 'http://mvw-imed3.oss-cn-beijing.aliyuncs.com/mvw_imed_book/zhiyikaoshi/'
            let video = videos[this.$route.params.iid]
            return {
                preUrl,
                videos,
                playerOptions: {
//        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "video/mp4",
                        src: preUrl + video.path //你的视频地址（必填）
                    }],
                    poster: preUrl + video.cover, //你的封面地址
                    width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
//        controlBar: {
//          timeDivider: true,
//          durationDisplay: true,
//          remainingTimeDisplay: false,
//          fullscreenToggle: true  //全屏按钮
//        }
                }
            }
        },
        components: {
            ImedNav,
            videoPlayer,
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
            player() {
                return this.$refs.videoPlayer.player
            }
        },
        methods: {
            onPlayerPlay(player) {
                // console.log(player)
                // alert("play");
            },
            onPlayerPause(player) {
                // console.log(player)
                // alert("pause");
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

<style>
    .vjs-custom-skin > .video-js > .vjs-big-play-button {
        opacity: 0 !important;
    }

    .vjs-fullscreen-control.vjs-control.vjs-button{
        display: none;
    }
</style>