<template>
    <div>
        <canvas @click="operation" ref="canvas" id="the-canvas"></canvas>
        <footer>
            <button @click="prevPage"
                    class="toolbarButton pageUp"
                    :class="{disabled: pdfReader.pageNo===1}">

            </button>

            <input type="number" id="pageNumber" class="toolbarField pageNumber" v-model.number="pdfReader.pageNo"
                   size="4" min="1" :max="pageCount">

            <button @click="nextPage"
                    class="toolbarButton pageDown"
                    :class="{disabled: pdfReader.pageNo===pageCount}">
            </button>
            <!--<button class="toolbarButton zoomOut" title="Zoom Out" id="zoomOut"></button>-->
            <!--<button class="toolbarButton zoomIn" title="Zoom In" id="zoomIn"></button>-->
        </footer>
    </div>
</template>

<script>

    import PdfReader from "./PdfReader"

    export default {
        name: "pdf-viewer",
        props: ['url'],
        data() {
            return {
                pdfReader: {pageNo: 1},
                halfScreen: screen.width / 2,
            }
        },
        mounted() {
            this.pdfReader = new PdfReader({
                canvas: this.$refs.canvas,
                url: this.url,
            })
        },
        computed: {
            pageCount() {
                return this.pdfReader.pageCount
            }
        },
        methods: {
            operation(event) {
                event.screenX > this.halfScreen ? this.nextPage() : this.prevPage()
            },
            prevPage() {
                this.pdfReader.onPrevPage()
            },
            nextPage() {
                this.pdfReader.onNextPage()
            }
        },
    }

</script>

<style scoped>
    footer {
        background-image: url(../assets/img/toolbar_background.png);
        height: 2rem;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        /*box-shadow: 0 -0.2rem 0.5rem rgba(50, 50, 50, 0.75);*/
    }

    .toolbarButton {
        display: block;
        padding: 0;
        margin: 0;
        border-width: 0;
        background: transparent no-repeat center center;
    }

    .toolbarButton.pageUp {
        position: absolute;
        width: 18%;
        height: 100%;
        left: 0;
        background-image: url(../assets/img/icon_previous_page.png);
    }

    .toolbarButton.pageDown {
        position: absolute;
        width: 18%;
        height: 100%;
        right: 0;
        background-image: url(../assets/img/icon_next_page.png);
    }

    #pageNumber {
        -moz-appearance: textfield; /* hides the spinner in moz */
        position: absolute;
        width: 28%;
        height: 100%;
        left: 36%;
        text-align: center;
        border: 0;
        background-color: transparent;
        font-size: 1.2rem;
        color: #FFF;
        background-image: url(../assets/img/div_line_left.png), url(../assets/img/div_line_right.png);
        background-repeat: no-repeat;
        background-position: left, right;
        background-size: 0.2rem, 0.2rem;
    }

    .toolbarButton.zoomOut {
        position: absolute;
        width: 18%;
        height: 100%;
        left: 64%;
        background-image: url(../assets/img/icon_zoom_out.png);
        background-size: 2.4rem;
    }

    .toolbarButton.zoomIn {
        position: absolute;
        width: 18%;
        height: 100%;
        left: 82%;
        background-image: url(../assets/img/icon_zoom_in.png);
        background-size: 2.4rem;
    }

    .disabled {
        opacity: .3;
    }
</style>
