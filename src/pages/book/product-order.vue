<template>
    <imed-nav :title="title" style="background-color: #F3F3F3">
        <div class="content">
            <div style="margin: 0.5rem 0">
                <div style="display: flex;background-color: white;padding: 0.5rem;">
                    <div style="min-width: 5rem;width: 5rem;">
                        <b-img fluid :src='payOrder.cover'/>
                    </div>
                    <div style="font-size: 1rem;margin-left: .5rem">
                        <div style="font-size: .8em">{{payOrder.name}}</div>
                        <div>
                            <div class="imed-item-sub-title">价格：<span style="color: red" v-text="payOrder.price"></span>
                                阅点
                            </div>
                            <div class="imed-item-sub-title">作者：{{payOrder.author}}</div>
                            <div class="imed-item-sub-title">类型：通关包</div>
                            <div class="imed-item-sub-title">出版机构：{{payOrder.publishingAgency}}</div>
                        </div>
                    </div>
                </div>
                <div v-if="payOrder.abstracts" style="font-size: .6em; padding: .5rem;background-color: white;"
                     v-html="payOrder.abstracts">
                </div>
            </div>
            <!--<section>-->
            <!--<span class="imed-title">优惠券</span>-->
            <!--</section>-->
            <section>
                <span class="imed-title">支付金额</span>
                <span class="imed-title"><span style="color: red" v-text="payOrder.actualPrice"></span> 阅点</span>
            </section>
            <section>
                <div class="imed-title-read-point">
                    <div>
                        <b-img style="width: 1.2rem;margin: 0 auto;" fluid
                               :src="require('../../assets/img/yuedian.png')"/>
                    </div>
                    <div style="margin-left: .5rem;">
                        <div style="font-size: .8rem;">使用阅点</div>
                        <div style="font-size: .7rem;color: #BABABA;">可用阅点
                            <span style="color: red;" v-text="payOrder.availablePoint"></span>
                        </div>
                    </div>
                </div>
                <div style="width: 1.5rem;">
                    <b-img fluid :src="require('../../assets/img/selected.png')"/>
                </div>
            </section>
            <template v-if="payOrder.isAppPay === '1' && platform()!=='0'">
                <section @click="changePayType('1')">
                    <div class="imed-title">
                        <b-img fluid :src="require('../../assets/img/zhifubao.png')"/>
                        <span>支付宝支付</span>
                    </div>
                    <div style="width: 1.5rem;">
                        <b-img v-if="payType==='1'" fluid :src="require('../../assets/img/selected.png')"/>
                        <b-img v-else fluid :src="require('../../assets/img/noselected.png')"/>
                    </div>
                </section>
                <section @click="changePayType('2')">
                    <div class="imed-title">
                        <b-img fluid :src="require('../../assets/img/weixin.png')"/>
                        <span> 微信支付</span>
                    </div>
                    <div style="width: 1.5rem;">
                        <b-img v-if="payType === '2'" fluid :src="require('../../assets/img/selected.png')"/>
                        <b-img v-else fluid :src="require('../../assets/img/noselected.png')"/>
                    </div>
                </section>
            </template>
            <section>
                <div class="imed-title">
                    友情提示：虚拟商品一经售出，无正当理由，概不退款
                </div>
            </section>
        </div>
        <footer>
            <a @click="buy($route.params.id)" class="button button-fill button-big button-danger"
               :class="{disabled:!status}">
                <span style="color: white">{{status?'确认付款':'付款中...'}}</span>
            </a>
        </footer>
    </imed-nav>
</template>

<script>
    import {mapState} from 'vuex'
    import ImedNav from '../../components/imed-nav'
    import getQueryString from '../../components/common'

    export default {
        name: "product-order",
        beforeCreate() {
            this.$store.dispatch('payOrder', {id: this.$route.params.id, type: this.$route.query.type})
        },
        data() {
            return {
                title: '订单',
                payType: '1',
                status: true,
            }
        },
        components: {ImedNav},
        computed: {
            ...mapState({
                payOrder: state => state.payOrder,
                config: state => state.config,
            }),
        },
        methods: {
            search() {
                console.log('======');
            },
            platform() {
                return getQueryString('platform')
            },
            buy(cid) {
                if (!this.status) return false
                let token = getQueryString('token')
                let platform = getQueryString('platform')
                if (this.payOrder.isAppPay === '0') {
                    this.status = false
                    let args = {
                        "serviceModule": "BS-Service",
                        "serviceNumber": "0301501",
                        "token": token,
                        "args": {
                            "token": token,
                            "bookId": cid,
                            "platform": platform,
                            "discountId": ""
                        },
                        "TerminalType": "A"
                    }

                    this.$http.post(this.config.busUrl, encodeURIComponent(JSON.stringify(args))).then(res => {
                        let result = JSON.parse(decodeURIComponent(res.data.replace(/\+/g, '%20')));
                        if (!result["opFlag"] || result["opFlag"] === false) {
                            if (result["errorMessage"].indexOf("E012-") >= 0) {
                                WebCallApp("UserLogout", {logoutType: "E012"});
                            }
                        } else {
                            let resultObj = JSON.parse(result["serviceResult"]);
                            if (resultObj['flag'] === 'true') {
                                this.$store.dispatch('paySuccess', resultObj['result']).then(() => {
                                    this.$router.push(`/product/${this.$route.params.id}/order/pay-success`,)
                                })
                            } else {
                                console.log(resultObj)
                            }
                        }
                    }).catch(e => {
                        this.status = true
                    })

                } else {
                    if (platform === "0") {
                        window.webkit.messageHandlers["WebCallApp"].postMessage(JSON.stringify({
                            command: "openRechargeView",
                            args: {}
                        }));
                    } else if (platform === "2") {
                        alert("对不起，暂不支持PC支付购买，请到手机端支付购买");
                    } else {
                        let appCallData = {
                            command: "payment",
                            args: {
                                payType: this.payType,
                                bookid: cid,
                                amount: `${this.payOrder.actualPaymentAmount}`,
                                uuid: '',
                                discountId: ''
                            }
                        };
                        Elf.WebCallApp(JSON.stringify(appCallData));
                    }

                }

            },
            changePayType(type) {
                //1：支付宝，2：微信
                this.payType = type
            },
        }
    }
</script>

<style scoped>

    footer {
        position: fixed;
        width: 100%;
        bottom: 0;
    }

    .button {
        border-radius: 0;
    }

    .imed-item-sub-title {
        font-size: .7em;
        margin: .3rem 0;
        color: #666666;
    }

    .imed-title {
        display: flex;
        flex-direction: row;
        font-size: .8em;
    }

    section {
        margin: .5rem 0;
        padding: .5rem 1rem;
        display: flex;
        justify-content: space-between;
        background-color: white;
    }

    .imed-title-read-point {
        display: flex;
        align-items: center;
    }

</style>
