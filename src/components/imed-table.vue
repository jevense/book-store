<template>
    <table class="imed-table-border">
        <tr v-for="nod in data.rows" :class="nod.class">
            <td v-for="no in nod.content"
                :colSpan="defaultSpan(no.colSpan)"
                :rowspan="defaultSpan(no.rowSpan)"
                :class="no.class"
                v-html="no.text"></td>
        </tr>
    </table>
</template>

<script>
    export default {
        name: "imed-table",
        props: ['data'],
        methods: {
            defaultSpan: item => item ? item : 1
        }
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

    table {
        margin: 1rem 0;
        table-layout: fixed;
    }

    table.imed-table-border td {
        font-size: .7rem;
    }

    table > tr > td:first-child {
        width: 6em;
        text-align: center;
    }
</style>
