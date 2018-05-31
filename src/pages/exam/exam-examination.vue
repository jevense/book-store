<template>
    <div>
        <header class="imed-bar">
            <router-link to="/exam/123" class="item-content item-link">
                <div class="icon icon-left"></div>
            </router-link>
            <h1 v-text="title"></h1>
            <a class="icon" style="width: 0.8rem">&nbsp;</a>
        </header>
        <div class="content" style="margin:3rem 0 0 0;">
            <iframe style="width: 100%; height: 100%;border: 0"
                    src="http://47.94.206.185:3003/pc/student/student.html?token=59d931291a05463599661ff502018e9b&platform=ebook&newebook=1&paperId=4028882263b058430163b06c545d0001">
            </iframe>
            <!--<div class="content-block-title">模拟练习</div>-->
            <!--<div class="list-block">-->
            <!--<div>-->
            <!--<div>执业医师练习题</div>-->
            <!--<div>-->
            <!--<span>题数：300</span>-->
            <!--<span>学科：15个</span>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="content-block-title">模拟试卷</div>-->
            <!--<div class="list-block">-->
            <!--<div>-->
            <!--<div>特训试卷一</div>-->
            <!--<div>-->
            <!--<span>时长：05：00</span>-->
            <!--<span>总分：600分</span>-->
            <!--<span>合计：4个单元</span>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div>-->
            <!--<div>特训试卷二</div>-->
            <!--<div>-->
            <!--<span>时长：05：00</span>-->
            <!--<span>总分：600分</span>-->
            <!--<span>合计：4个单元</span>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "exam-examination",
        data() {
            return {
                title: '模拟试题',
            }
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