<template>
    <imed-nav :title="$route.query.name">
        <transition name="fade">
            <video-player v-if="show"
                          class="video-player vjs-custom-skin"
                          ref="videoPlayer"
                          :playsinline="true"
                          :options="playerOptions"
                          @play="onPlayerPlay"
                          @pause="onPlayerPause"
            />
        </transition>
        <div class="buttons-tab">
            <div class="tab-link active button">讲义</div>
            <div href="#tab2" class="tab-link button"></div>
        </div>
        <div class="content-block">
            <div class="tabs">
                <div id="tab1" class="tab active">
                    <div class="content-block imed-content" style="overflow:scroll;" v-html="video">
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
    import {mapState} from 'vuex'
    import {videoPlayer} from 'vue-video-player/src'

    export default {
        name: "book-order",
        data() {
            let preUrl = 'https://mvw-imed3.oss-cn-beijing.aliyuncs.com/mvw_imed_book/zhiyikaoshi/'
            return {
                preUrl,
                show: false,
            }
        },
        components: {
            ImedNav,
            videoPlayer,
        },
        mounted() {
            this.show = true
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            },
            playerOptions() {
                return {
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
                        src: this.preUrl + this.$route.params.iid + '.mp4' //你的视频地址（必填）
                    }],
                    poster: this.preUrl + this.$route.params.iid + '.jpg', //你的封面地址
                    width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        // timeDivider: true,
                        // durationDisplay: true,
                        // remainingTimeDisplay: false,
                        fullscreenToggle: false,
                        //全屏按钮
                    }
                }

            },
            ...mapState([
                'video',
            ]),
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

<style lang="less" scoped>
    .content-block {
        margin: 0;
        height: 16rem;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

</style>

<style>
    .imed-content p {
        font-size: .75rem;
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
    }

    .imed-content table {
        width: 100%;
    }

    .imed-content td {
        font-size: .75rem;
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
        border: 1px solid gray;
        text-align: center;
    }

    .vjs-custom-skin > .video-js > .vjs-big-play-button {
        opacity: 0 !important;
    }
</style>
