<template>
    <main>
        <header class="imed-bar" :class="{'imed-bar':true,'imed-bar-left':left}">
            <div v-if="left" @click="back" class="back">返回</div>
            <a v-else class="icon icon-left" @click="back"></a>
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
        props: ['title', 'rightText', 'status', 'left'],
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
