<template>
    <imed-nav :title="pdf.name">
        <div class="content">
            <div>
                <div class="imed-category" v-for="item in pdf.list" @click="openPDF(item)">
                    <div>
                        <b-img fluid :src='item.cover'/>
                    </div>
                    <div style="margin-left: 1rem;">
                        <span v-text="item.name"></span>
                    </div>
                </div>
            </div>
        </div>
    </imed-nav>
</template>
<script>
    import {mapState} from 'vuex'
    import ImedNav from '../../components/imed-nav'

    export default {
        data() {
            return {}
        },
        components: {
            ImedNav,
        },
        computed: {
            ...mapState({
                pdf: state => state.pdf,
                downloadList: state => state.downloadList,
            }),
        },
        methods: {
            openPDF({id, name, isbn, cover}) {
                let {eid, cid} = this.$route.params
                this.$loading.show()
                this.$store.dispatch('pdfDetail', {id,}).then(() => {
                    setTimeout(() => {
                        this.$loading.hide()
                        this.$router.push(`/exam/${eid}/pdf/${cid}/item/${id}`)
                    }, 50)
                })
            },
        }
    }
</script>
<style lang="less">
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .imed-category {
        display: flex;
        padding: .5rem;
        border: 1px #c9c9ce solid;
        font-size: 0.8rem;
    }

    .imed-category img {
        width: 3rem;
        min-width: 3rem;
    }
</style>
