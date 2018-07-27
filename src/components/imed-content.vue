<template>
    <div>
        <imed-table v-if="data.type==='table'" :data="data"/>
        <div v-else-if="data.type==='h1'" class="imed-h1" v-html="data.text"></div>
        <div v-else-if="data.type==='h2-pre'" class="imed-content" v-html="data.text"></div>
        <div v-else-if="data.type==='h2'" class="imed-h2">
            <span v-html="data.text" :style="{fontWeight: data.content? 'bold': 'normal'}"></span>
        </div>
        <div v-else-if="data.type==='h3'" class="imed-h3">
            <strong v-if="data.title" v-html="data.title"></strong>
            <span v-html="data.text"></span>
        </div>
        <div v-else-if="data.type==='h4'" class="imed-h3" v-html="data.text"></div>
        <div v-else-if="data.type==='common'" class="imed-content"
             :style="{textAlign: data.alignment}">
            <span v-if="data.title" v-html="data.title"></span>
            <span v-if="data.text" v-html="data.text"></span>

        </div>
        <div v-else-if=" data.type==='keyPoint'" class="imed-key-point" v-html="data.text"></div>
        <div v-else class="imed-content" :style="{textAlign: data.alignment}">
            <span v-if="data.title" v-html="data.title"></span>
            <span v-if="data.text" v-html="data.text"></span>
        </div>

        <div v-if="data.picture">
            <img style="width: 100%" :src="config.storeUrl + '/ui/phone/data/images/' + data.picture"/>
        </div>
        <template v-if="data.content">
            <imed-content :key="uuid()" v-for="content in data.content" :data="content"/>
        </template>
    </div>
</template>

<script>
    import ImedTable from "./imed-table"
    import uuid from "uuid/v4"
    import {mapState} from 'vuex'

    export default {
        name: "imed-content",
        props: ['data'],
        methods: {
            uuid: () => uuid(),
            textAlign: ({align = 'left'}) => align
        },
        components: {
            ImedTable
        },
        computed: {
            ...mapState({
                config: state => state.config,
            }),
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
