import jsPDF from "jspdf";

const SaveToPDF = () => {
    const doc = new jsPDF("p", "pt", "a4")
    doc.html(document.querySelector("#pdf-content") as HTMLElement, {
        callback: function (pdf) {
            const pageCount = doc.internal.pages.length;
            doc.setFontSize(42)
            pdf.deletePage(pageCount)
            pdf.save('record.pdf')
            window.open(pdf.output('bloburl'));
        },
        x: 0,
        y: 0,
        html2canvas: { scale: 0.5 }
    })
}

export default SaveToPDF;