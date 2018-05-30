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
            <b-container class="imed-item-content">
                <template v-for="n in 10">
                    <b-row class="imed-group">
                        <b-col cols="4">
                            <b-img fluid :src='require("../../assets/img/vedio-list.png")' />
                        </b-col>
                        <b-col cols="4" class="imed-item-info">
                            <div class="imed-item-title">消化系统</div>
                            <div class="imed-item-sub-title">名师：刘老师</div>
                            <div class="imed-item-sub-title">时长：28学时</div>
                        </b-col>
                        <b-col cols="4" class="imed-button-group">
                            <router-link to="/exam/123/course/1">
                                <div class="imed-button">开始学习</div>
                            </router-link>
                        </b-col>
                    </b-row>
                    <hr>
                </template>
            </b-container>
        </div>
    </div>
</template>

<script>
    import ImedNav from '../../components/imed-nav'

    export default {
        name: "exam-guide",
        data() {
            return {
                title: '视频课程',
            }
        },
        components: {ImedNav},
        methods: {
            search() {
                console.log('======')
            },
        }
    }
</script>

<style scoped>

    div, span {
        color: black;
    }

    .imed-item-title {
        font-size: .75rem;
    }

    .imed-item-sub-title {
        font-size: .65rem;
        color: #868686;
    }

    .imed-item-content {
        padding: .5rem .7rem;
    }

    .imed-item-info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: -1rem;
    }

    .imed-button {
        color: #D54443;
        border: 1px solid #D54443;
        padding: .2rem .2rem;
        text-align: center;
        border-radius: 20px;
        font-size: .665rem;
    }

    .imed-button-group {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }

</style>