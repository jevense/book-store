<template>
    <div>
        <header class="bar bar-nav" v-if="bar">
            <router-link to="/exam/123" class="item-content item-link">
                <button class="button pull-left">
                    <span class="icon icon-left"></span>
                </button>
            </router-link>

            <h1 class="title" v-text="title"></h1>
            <a class="icon" style="width: 0.8rem">&nbsp;</a>
        </header>
        <div class="content">
            <iframe style="width: 100%; height: 100%;border: 0"
                    src="https://exam.mvwchina.com/pc/student/student.html?token=e5860323ec3044fcb9f2bfea59446efe&platform=ebook&newebook=1&paperId=4028882263b058430163b06c545d0001">
            </iframe>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "exam-examination",
        data() {
            return {
                title: '模拟试题',
            }
        },
        computed: {
            ...mapState({
                bar: state => state.bar,
            }),
        },
    }
</script>

<style scoped>
    .list-block {
        margin: 0.1rem 0 2rem;
    }

    .list-block .item-content {
        padding-left: 0.5rem;
    }

    .list-block.media-list .item-inner {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
    }

    .card {
        margin: 0;
    }

    .imed-item-sub-title {
        display: flex;
        width: 100%;
        justify-content: space-between;
        font-size: 0.8rem;
        color: #666;
    }

    .item-media > img {
        width: 5.5rem;
    }

    footer {
        position: fixed;
        width: 100%;
        bottom: 0;
    }

    .list-block .item-inner:after {
        width: 0;
    }

    .list-block ul:after {
        width: 0;
    }
</style>
