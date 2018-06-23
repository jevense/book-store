<template>
    <imed-nav :title="$route.query.name">
        <div @click="operation">
            <transition name="fade">
                <b-progress v-show="loadedRatio < 1" :value="loadedRatio" :max="1" show-progress animated/>
            </transition>
            <pdf ref="pdf"
                 :src="src"
                 :page="page"
                 @progress="loadedRatio = $event"
                 @error="error"
                 @num-pages="numPages = $event"
                 @link-clicked="page = $event"/>
        </div>
        <b-form-input id="type-range" v-model.number="page" type="range" :min="page" :max="numPages"></b-form-input>
    </imed-nav>
</template>
<script>
    import pdf from 'vue-pdf'
    import ImedNav from '../../components/imed-nav'

    export default {
        components: {
            pdf,
            ImedNav,
        },
        data() {
            let src = `https://mall.imed.org.cn/ui/phone/zhiyikaoshi/${this.$route.params.iid}.pdf`
            return {
                src,
                loadedRatio: 0,
                page: 1,
                numPages: 0,
                halfScreen: screen.width / 2,
            }
        },
        methods: {
            error(err) {
                console.log(err);
            },
            operation(event) {
                if (event.screenX > this.halfScreen) {
                    this.page + 1 < this.numPages && this.page++
                } else {
                    this.page - 1 > 0 && this.page--
                }
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