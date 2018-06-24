import {getDocument, GlobalWorkerOptions} from 'pdfjs-dist/build/pdf'
import worker from 'pdfjs-dist/build/pdf.worker.entry'

GlobalWorkerOptions.workerSrc = worker

export default class PdfReader {


    constructor({canvas, url}) {

        this.pageNum = 1
        this.pageCount = 0
        this.pageRendering = false
        this.pageNumPending = 0

        this.canvas = canvas
        this.canvasContext = canvas.getContext('2d')
        getDocument(url).then(pdfDocument => {
            this.pdfDoc = pdfDocument;
            this.pageCount = pdfDocument.numPages;
            this.renderPage(this.pageNum);
        });

        this.canvas.height = screen.height
        this.canvas.width = screen.width
    }

    renderPage(num) {
        this.pageRendering = true;
        this.pdfDoc.getPage(num).then(page => {
            let initViewport = page.getViewport(1)

            let viewport = page.getViewport(screen.width / initViewport.width)

            page.render({
                viewport,
                canvasContext: this.canvasContext,
            }).promise.then(() => {
                this.pageRendering = false;
                if (this.pageNumPending !== 0) {
                    this.renderPage(this.pageNumPending);
                    this.pageNumPending = 0;
                }
            });
        });
    }

    queueRenderPage(num) {
        if (num > 0 && num <= this.pageCount) {
            this.pageNum = num
            this.pageRendering ? this.pageNumPending = num : this.renderPage(num)
        }
    }

    onPrevPage() {
        this.queueRenderPage(this.pageNum - 1)
    }

    onNextPage() {
        this.queueRenderPage(this.pageNum + 1)
    }

    get pageNo() {
        return this.pageNum
    }

    set pageNo(pageNo) {
        this.queueRenderPage(pageNo)
    }

}
