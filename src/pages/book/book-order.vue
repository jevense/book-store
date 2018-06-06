<template>
    <imed-nav :title="title">
        <div class="list-block media-list">
            <div class="item-content">
                <div class="item-media">
                    <img :src='require("../../assets/img/pic0531.jpg")'>
                </div>
                <div class="item-inner">
                    <div class="imed-item-title">临床执业医师考试通关包<br>实践技能考试</div>
                    <div class="imed-item-sub-title"><span style="color: red">0</span> 阅点</div>
                    <div class="imed-item-sub-title">作者：医视界</div>
                    <div class="imed-item-sub-title">图书类型：通关包</div>
                    <div class="imed-item-sub-title">大小：2M</div>
                    <div class="imed-item-sub-title">出版机构：医视界</div>
                </div>
            </div>
        </div>
        <section>
            <span class="imed-title">支付金额:0元</span>
        </section>
        <footer>
            <a @click="buy($route.params.id)" class="button button-fill button-big button-danger">
                <span style="color: white">确认付款</span>
            </a>
        </footer>
    </imed-nav>
</template>

<script>
    import ImedNav from '../../components/imed-nav'
    import getQueryString from '../../components/common'

    export default {
        name: "book-order",
        data() {
            return {
                title: '图书订单',
                own: false,
            }
        },
        components: {ImedNav},
        methods: {
            search() {
                console.log('======');
            },
            buy(cid) {
                let token = getQueryString('token')
                let args = {
                    "serviceModule": "BS-Service",
                    "serviceNumber": "0301500",
                    "token": token,
                    "args": {
                        "token": token,
                        "bookId": cid,
                        "platform": getQueryString('platform'),
                        "discountId": ""
                    },
                    "TerminalType": "A"
                }

                this.$http.post(Config.busUrl, encodeURIComponent(JSON.stringify(args))).then(res => {
                    let result = JSON.parse(decodeURIComponent(res.data.replace(/\+/g, '%20')));
                    if (result["opFlag"] == false) {
                        //alert(Elf.constants.E008 + result["errorMessage"]);
                        if (result["errorMessage"].indexOf("E012-") >= 0) {
                            WebCallApp("UserLogout", {logoutType: "E012"});
                        }
                    } else {
                        this.$router.push(`/book/${this.$route.params.id}/order/pay-success`)
                    }
                })
            },
        }
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
        font-size: 80%;
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