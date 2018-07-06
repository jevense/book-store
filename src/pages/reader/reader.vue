<template>
    <div class="imed-reader">
        <div class="imed-title" v-text="title + ' ' + text"></div>
        <div v-for="mod in content">
            <div v-if="mod.title" class="imed-title" v-text="mod.title + ' ' + mod.text"></div>
            <div v-for="mo in mod.content">
                <div v-for="item in mo.guide" style="padding: .5rem 0">
                    <div class="imed-title">【提纲挈领——章节指南】</div>
                    <p class="imed-content" v-text="item.text"></p>
                </div>
                <div v-for="item in mo.content">
                    <div class="imed-title">【图文并茂——章节解析】</div>
                    <div class="imed-chapter" v-text="item.title + ' ' + item.text"></div>
                    <imed-content :key="uuid()" v-for="content in item.content" :data="content"/>
                    <div class="imed-title">【临考必备——记忆点睛】</div>
                    <imed-content :key="uuid()" v-for="keyPoint in item.keyPoint" :data="keyPoint"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ImedContent from "../../components/imed-content"
    import uuid from "uuid/v4"

    export default {
        components: {
            ImedContent
        },
        name: "reader",
        methods: {
            uuid: () => uuid()
        },
        data() {
            return {}

        }
    }
</script>

<style scoped>
    .imed-reader {
        padding: 1rem;
    }

    .imed-title {
        font-size: 1rem;
        text-align: center;
        margin: 0.5rem 0;
    }

    .imed-chapter {
        margin: 0.5rem 0;
        font-size: .9rem;
        text-align: center;
    }

    .imed-content {
        font-size: .8rem;
    }
</style>
<style>
    body {
        overflow: scroll !important;
    }
</style>
