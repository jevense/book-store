<template>
    <main>
        <header class="imed-bar">
            <a class="icon icon-left" @click="back"></a>
            <h1 v-text="title"></h1>
            <a v-if="rightText" class="icon" v-text="state?'分类':'确定'" @click="showMask"></a>
            <a v-else-if="status" class="icon icon-search"></a>
            <a v-else class="icon" style="width: 0.8rem">&nbsp;</a>
        </header>
        <slot name="search"></slot>
        <slot></slot>
    </main>
</template>

<script>
    export default {
        name: "imed-nav",
        props: ['title', 'rightText', 'status'],
        data() {
            return {
                state: true,
            }
        },
        methods: {
            back() {
                this.$router.back()
            },
            showMask() {
                this.state = !this.state
                this.$emit('change-show', this.state)
            }
        }
    }
</script>

<style>

</style>