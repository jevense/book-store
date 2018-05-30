<template>
    <imed-nav :title="title">
        <video style="width: 100%" src="http://www.w3school.com.cn/i/movie.ogg" controls="controls">
            your browser does not support the video tag
        </video>
        <div class="buttons-tab">
            <div class="tab-link active button">讲义</div>
            <div href="#tab2" class="tab-link button"></div>
        </div>
        <div class="content-block">
            <div class="tabs">
                <div id="tab1" class="tab active">
                    <div class="content-block">
                        <p>This is tab 1 content</p>
                    </div>
                </div>
            </div>
        </div>
    </imed-nav>
</template>

<script>
    import ImedNav from '../../components/imed-nav'

    export default {
        name: "book-order",
        data() {
            return {
                title: '第一课时：甲状腺腺叶切除术',
                own: false,
            }
        },
        components: {ImedNav}
    }
</script>

<style scoped>

    .list-block {
        margin: 0.5rem 0;
    }

    .list-block .item-content {
        padding-left: 0.5rem;
        background-color: white;
    }

    .list-block.media-list .item-inner {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;

    }

    .imed-item-title {
        font-size: 0.9rem;
    }

    .imed-item-sub-title {
        font-size: 0.8rem;
        color: #666;
    }

    .item-media > img {
        width: 5.5rem;
    }

    .imed-title {
        color: red;
    }

    section {
        padding: 0.5rem;
        background-color: white;
    }

    footer {
        position: fixed;
        width: 100%;
        bottom: 0;
    }

    .button {
        border-radius: 0;
    }
</style>