<template>
    <transition :name="transitionName">
        <router-view class="router-view"></router-view>
    </transition>
</template>

<script>
    export default {
        name: "app",
        data() {
            return {
                transitionName: 'slide-left'
            }
        },
        watch: {
            '$route'(to, from) {
                if (to.path === '/exam' || from.path.includes('pay-success')) {
                    this.transitionName = 'slide-right'
                } else {
                    const fromDepth = from.path.split('/').length
                    const toDepth = to.path.split('/').length
                    this.transitionName = fromDepth <= toDepth ? 'slide-left' : 'slide-right'
                }
            }
        }
    }
</script>

<style lang="less">
    .router-view {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .slide-left-enter, .slide-left-leave-to {
        transform: translateX(100%);
    }

    .slide-left-leave-to, .slide-right-enter {
        transform: translateX(-100%);
    }

    .slide-left-enter-active, .slide-right-leave-active {
        transition: all 0.5s ease;
    }

    .slide-left-leave-active, .slide-right-enter-active {
        transition: all 0.5s ease;
    }

    .imed-bar {
        height: 3.2rem;
        padding-top: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #D54443;
        background-color: #FFFFFF;
        border-bottom: 2px solid #F9F9F9;
    }

    .imed-bar > a {
        color: #D54443;
    }

    .imed-bar > h1 {
        font-size: .855rem;
    }

    .imed-bar .icon {
        margin-left: 0.575rem;
        margin-top: -0.7rem;
    }

    .icon-left:before {
        content: "\e614";
        font-size: 0.855rem;
    }

    .button.button-fill.button-big {
        background-color: #D54443;
    }

</style>