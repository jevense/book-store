<template>
    <div v-if="data.type">
        <div v-if="data.type==='table'">
            <imed-table :data="data"/>
        </div>
        <div v-else-if="data.type==='h1'" class="imed-h1" v-text="data.text"></div>
        <div v-else-if="data.type==='h2-pre'" class="imed-content" v-text="data.text"></div>
        <div v-else-if="data.type==='h2'" class="imed-h2" v-text="data.text"></div>
        <div v-else-if="data.type==='h3'" class="imed-content" v-text="data.text"></div>
        <div v-else-if="data.type==='h4'" class="imed-content" v-text="data.text"></div>
        <div v-else-if="data.type==='common'" class="imed-content" v-text="data.text"></div>
        <div v-else-if="data.type==='keyPoint'" class="imed-key-point" v-text="data.text"></div>
        <div v-else class="imed-content" v-text="data.text"></div>
        <imed-content v-for="content in data.content" :data="content"/>
    </div>
</template>

<script>
    import ImedTable from "./imed-table"

    export default {
        name: "imed-content",
        props: ['data'],
        components: {
            ImedTable
        },
    }
</script>

<style scoped>

    .imed-h1 {
        font-size: .9rem;
        font-weight: bold;
    }

    .imed-h2 {
        font-size: .8rem;
        font-weight: bold;
    }

    .imed-content {
        text-indent: 2em;
        font-size: .8rem;
    }

    .imed-key-point{
        font-size: .8rem;
    }
</style>
