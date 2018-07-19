<template>
    <div>
        <imed-table v-if="data.type==='table'" :data="data"/>
        <div v-else-if="data.type==='h1'" class="imed-h1" v-html="data.text"></div>
        <div v-else-if="data.type==='h2-pre'" class="imed-content" v-html="data.text"></div>
        <div v-else-if="data.type==='h2'" class="imed-h2">
            <strong v-html="data.text"></strong>
        </div>
        <div v-else-if="data.type==='h3'" class="imed-h3">
            <strong v-html="data.title"></strong>
            <span v-html="data.text"></span>
        </div>
        <div v-else-if="data.type==='h4'" class="imed-h3" v-html="data.text"></div>
        <div v-else-if="data.type==='common'" class="imed-content" v-html="data.text"></div>
        <div v-else-if="data.type==='keyPoint'" class="imed-key-point" v-html="data.text"></div>
        <div v-else class="imed-content" v-html="data.text"></div>
        <template v-if="data.content">
            <imed-content :key="uuid()" v-for="content in data.content" :data="content"/>
        </template>
    </div>
</template>

<script>
    import ImedTable from "./imed-table"
    import uuid from "uuid/v4"

    export default {
        name: "imed-content",
        props: ['data'],
        methods: {
            uuid: () => uuid()
        },
        components: {
            ImedTable
        },
    }
</script>

<style scoped>

    div {
        margin: .5rem 0;
    }

    .imed-h1 {
        font-size: .9rem;
        font-weight: bold;
    }

    .imed-h2 {
        font-size: .8rem;
    }

    .imed-h3 {
        font-size: .8rem;
    }

    .imed-content {
        text-indent: 2em;
        font-size: .8rem;
    }

    .imed-key-point {
        font-size: .8rem;
    }
</style>
