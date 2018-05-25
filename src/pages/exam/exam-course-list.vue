<template>
    <div>
        <header class="imed-bar">
            <router-link to="/exam/course" class="item-content item-link">
                <div class="icon icon-left"></div>
            </router-link>
            <h1 v-text="title"></h1>
            <a class="icon" style="width: 0.8rem">&nbsp;</a>
        </header>
        <div class="content" style="margin:3rem 0 0 0;">
            <div class="list-block media-list">
                <ul>
                    <li>
                        <div class="card demo-card-header-pic">
                            <div class="card-content-title">
                                第一课时：甲状腺切除术
                            </div>
                            <div valign="bottom" class="card-header color-white no-border no-padding">
                                <img class='card-cover'
                                     src="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg"
                                     alt="">
                            </div>
                            <div class="card-footer">
                                <a href="#" class="link">时长：45：00</a>
                                <router-link to="/exam/123/course/1/item/1" class="link">观看</router-link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card demo-card-header-pic">
                            <div class="card-content-title">
                                第二课时：甲状腺切除术
                            </div>
                            <div valign="bottom" class="card-header color-white no-border no-padding">
                                <img class='card-cover'
                                     src="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg"
                                     alt="">
                            </div>
                            <div class="card-footer">
                                <a href="#" class="link">时长：45：00</a>
                                <router-link to="/exam/123/course/1/item/2" class="link">观看</router-link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card demo-card-header-pic">
                            <div class="card-content-title">
                                第三课时：甲状腺切除术
                            </div>
                            <div valign="bottom" class="card-header color-white no-border no-padding">
                                <img class='card-cover'
                                     src="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg"
                                     alt="">
                            </div>
                            <div class="card-footer">
                                <a href="#" class="link">时长：45：00</a>
                                <router-link to="/exam/123/course/1/item/3" class="link">观看</router-link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card demo-card-header-pic">
                            <div class="card-content-title">
                                第四课时：甲状腺切除术
                            </div>
                            <div valign="bottom" class="card-header color-white no-border no-padding">
                                <img class='card-cover'
                                     src="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg"
                                     alt="">
                            </div>
                            <div class="card-footer">
                                <a href="#" class="link">时长：45：00</a>
                                <router-link to="/exam/123/course/1/item/4" class="link">观看</router-link>
                            </div>
                        </div>
                    </li>
                </ul>
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

    .list-block {
        margin: 0.1rem 0 2rem;
    }

    .list-block .item-content {
        padding-left: 0.5rem;
    }

    .list-block.media-list .item-inner {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
    }

    .imed-item-sub-title {
        display: flex;
        width: 100%;
        justify-content: space-between;
        font-size: 0.8rem;
        color: #666;
    }

    .item-media > img {
        width: 5.5rem;
    }

    .card-cover {
        width: 50%;
    }

    .card-header {
        justify-content: center;
    }

    footer {
        position: fixed;
        width: 100%;
        bottom: 0;
    }

    .list-block .item-inner:after {
        width: 0;
    }

    .list-block ul:after {
        width: 0;
    }

    .imed-bar {
        height: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: red;
        background-color: #ffffff;
    }

    .imed-bar > a {
        color: red;
    }

    h1 {
        font-size: 1rem;
    }

    .icon {
        margin: 0.5rem;
    }

    .card-content-title {
        padding: 0.5rem;
        text-align: center;
        font-size: 1.5em;
    }

</style>