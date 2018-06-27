<template>
    <table class="imed-table-border">
        <tr v-for="nod in data.content" :rowspan="nod.rowSpan" :class="nod.class">
            <td v-for="no in nod.content" :colSpan="no.colSpan" :class="no.class" v-html="no.text"></td>
        </tr>
    </table>
</template>

<script>
    export default {
        name: "imed-table",
        props: ['data']
    }
</script>

<style scoped>
    .imed-table-border {
        width: 100%;
        border: 1px black solid;
    }

    .imed-table-border td {
        font-size: .8rem;
        border: 1px black solid;
    }
</style>
