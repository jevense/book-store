<template>
    <main>
        <header class="imed-bar">
            <a class="icon icon-left" @click="back"></a>
            <h1 v-text="title"></h1>
            <a v-if="status" class="icon icon-search"></a>
            <a v-else class="icon" style="width: 0.8rem">&nbsp;</a>
        </header>
        <div class="content" style="margin:3.1rem 0 0 0;">
            <slot></slot>
        </div>
    </main>
</template>

<script>
    export default {
        name: "imed-nav",
        props: ['title', 'status'],
        methods: {
            back() {
                this.$router.back()
            }
        }
    }
</script>

<style scoped>

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
</style>