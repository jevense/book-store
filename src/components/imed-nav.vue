<template>
    <main>
        <header class="bar bar-nav" v-if="bar">
            <button class="button pull-left" @click="back">
                <span v-if="left" style="color:#D86467">返回</span>
                <span v-else class="icon icon-left"></span>
            </button>
            <h1 class="title" v-text="title"></h1>
            <a v-if="rightText" class="icon" v-text="state?'分类':'确定'" @click="showMask"></a>
            <a v-else-if="status" class="icon icon-search"></a>
            <a v-else class="icon" style="width: 0.8rem">&nbsp;</a>
        </header>
        <slot name="search"></slot>
        <slot></slot>
    </main>
</template>

<script>

    import {mapState} from 'vuex'

    export default {
        name: "imed-nav",
        props: ['title', 'rightText', 'status', 'left'],
        data() {
            return {
                state: true,
            }
        },
        computed: {
            ...mapState({
                bar: state => state.bar,
            }),
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

<style scoped>
    .imed-bar-left {
        height: 2rem;
    }

    h1 {
        text-align: center;
        width: 20em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .back {
        font-size: .7rem;
        padding: .5rem;
        width: 4em;

        margin-bottom: 0.5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.2;
        color: inherit;
    }


</style>
