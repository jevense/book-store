<template>
    <imed-nav :title="pdf.name">
        <div class="content" style="margin:3rem 0 0 0;">
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
                this.$store.dispatch('pdfDetail', {id,}).then(() => {
                    this.$router.push(`/exam/${eid}/pdf/${cid}/item/${id}`)
                })
                // let platform = getQueryString('platform')
                // if (platform === "1") {
                //     let book = {
                //         "id": id,
                //         "cover": cover,
                //         "coverBase": cover,
                //         "isbn": isbn,
                //         "name": name,
                //         "s9id": isbn,
                //         "path": `https://mall.imed.org.cn/ui/phone/zhiyikaoshi/${isbn}`,
                //         "patchPath": `https://mall.imed.org.cn/ui/phone/zhiyikaoshi/${isbn}`,
                //         "size": "2",
                //         "textbook": "1",
                //         "textbookType": "0",
                //         "author": "",
                //         "bookDeadline": "",
                //         "bookSet": "1",
                //         "buyStatus": "1",
                //         "categoryId": "",
                //         "categoryName": "",
                //         "createDate": "",
                //         "day": "",
                //         "downloadPath": "",
                //         "downloadState": "0",
                //         "editor": "",
                //         "isExpired": "0",
                //         "isFree": "2",
                //         "isUpdate": "0",
                //         "nonWifi": "0",
                //         "patchVersion": "3.0",
                //         "sequence": "1",
                //         "downloaded": 0,
                //         "order": 0,
                //         "total": 0
                //     }
                //     if (this.downloadList.includes(isbn)) {
                //         WebCallApp("CmdOpenPDFBook", {isbn, static: "1", book: book})
                //     } else {
                //         this.$loading.show()
                //         WebCallApp("CmdDownloadBook", {
                //             "isbn": isbn,
                //             "book": book,
                //             "nonWifi": "0"
                //         })
                //     }
                // } else {
                //     this.$router.push({path: `/exam/${eid}/pdf/${cid}/item/${id}`, query: {name,}})
                // }

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
