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
                const fromDepth = from.path.split('/').length
                const toDepth = to.path.split('/').length
                this.transitionName = fromDepth < toDepth ? 'slide-left' : 'slide-right'
            }
        }
    }
</script>

<style lang="less" scoped>
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

</style>