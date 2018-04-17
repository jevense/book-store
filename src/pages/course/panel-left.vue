<template>
    <div class="content-block">
        <div class="list-block media-list">
            <ul>
                <li>
                    <router-link to="person" class="item-link item-content">
                        <div class="item-media person">
                            <img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg">
                        </div>
                        <div class="item-inner">
                            <div class="item-title-row">
                                <div class="item-title">卢杰文</div>
                            </div>
                            <div class="item-subtitle">15110080976</div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="list-block">
            <ul>
                <li class="item-content item-link">
                    <div class="item-media"><i class="icon icon-computer"></i></div>
                    <div class="item-inner">
                        <div class="item-title">阅点</div>
                        <div class="item-after">立即充值</div>
                    </div>
                </li>
                <li class="item-content item-link">
                    <div class="item-media"><i class="icon icon-clock"></i></div>
                    <div class="item-inner">
                        <div class="item-title">充值消费</div>
                    </div>
                </li>
                <li class="item-content item-link">
                    <div class="item-media"><i class="icon icon-gift"></i></div>
                    <div class="item-inner">
                        <div class="item-title">优惠券</div>
                    </div>
                </li>
                <li class="item-content item-link">
                    <div class="item-media"><i class="icon icon-message"></i></div>
                    <div class="item-inner">
                        <div class="item-title">验证码激活</div>
                    </div>
                </li>
                <li class="item-content item-link">
                    <div class="item-media"><i class="icon icon-browser"></i></div>
                    <div class="item-inner">
                        <div class="item-title">修改密码</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="list-block">
            <ul>
                <li class="item-content item-link">
                    <div class="item-media"><i class="icon icon-settings"></i></div>
                    <div class="item-inner">
                        <div class="item-title">设置</div>
                    </div>
                </li>
            </ul>
        </div>
        <p><a href="#" @click="hideMask">关闭</a></p>
    </div>
</template>

<script>
    export default {
        name: 'panel-left',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {
            hideMask() {
                this.$emit('change-show', false)
            }
        }
    }
</script>

<style scoped>
    .panel {
        background-color: white;
    }

    .person {
        width: 25%;
    }

    .person img {
        width: 100%;
        height: 3rem;
    }
</style>