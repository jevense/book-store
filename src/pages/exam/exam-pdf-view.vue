<template>
    <imed-nav :title="$route.query.name">
        <pdf-viewer :url="src"/>
    </imed-nav>
</template>
<script>
    import ImedNav from '../../components/imed-nav'
    import PdfViewer from '../../components/PdfViewer'

    export default {
        components: {
            ImedNav,
            PdfViewer,
        },
        data() {
            let src = `https://mall.imed.org.cn/ui/phone/zhiyikaoshi/${this.$route.params.iid}.pdf`
            return {
                src,
            }
        },
        methods: {
            error(err) {
                console.log(err);
            },
            back() {
                this.$router.back()
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
</style>
