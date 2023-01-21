
//   function gerarpdf() {

//     var doc = new jsPDF()

//     doc.text("Olá mundo mais uma vez!", 10, 10)
//     doc.save("Meu PDF.pdf")

//   }


function gerarpdf() {

    var pdfMake = require('pdfmake/build/pdfmake.js');
    var pdfFonts = require('pdfmake/build/vfs_fonts.js');
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(docDefinition).download();


}

// function gerarpdf() {
//     var pdf = new jsPDF();

//     // alert('Olá mundo!')
//     var elementHTML = document.getElementById('content').innerHTML;
//     var specialElementHandlers = {
//         '#elementH': function (element, renderer) {
//             return true;
//         }
//     };
//     pdf.fromHTML(elementHTML, 15, 15, {
//         'width': 170,
//         'elementHandlers': specialElementHandlers
//     });
//     pdf.save('sample-file.pdf');
// }
