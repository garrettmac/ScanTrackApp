import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import pdfMake  from 'pdfmake';
/*
  Generated class for the Invoice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Invoice {

  constructor(public http: Http) {
    console.log('Hello Invoice Provider');
  }

//
//        createPdf(invoice) {
//           return new Promise(function(resolve, reject) {
//               var dd = this.createDocumentDefinition(invoice);
//               var pdf = pdfMake.createPdf(dd);
// console.log("pdf: ",pdf);
//               pdf.getBase64(function (output) {
//                   console.log("output",output);
//                   // resolve("output",output);
//                   resolve(this.base64ToUint8Array(output));
//               });
//           });
//   }
//
//   base64ToUint8Array(base64) {
//       var raw = atob(base64);
//       var uint8Array = new Uint8Array(raw.length);
//       for (var i = 0; i < raw.length; i++) {
//       uint8Array[i] = raw.charCodeAt(i);
//       }
//       console.log("uint8Array: ",uint8Array);
//       return uint8Array;
//   }
//
//   createDocumentDefinition(invoice) {
//     console.log("invoice: ",invoice);
// return invoice
    // var items = invoice.Items.map(function(item) {
    //     return [item.Description, item.Quantity, item.Price];
    // });
    //
    // var dd = {
    //     content: [
    //         { text: 'INVOICE', style: 'header'},
    //         { text: invoice.Date, alignment: 'right'},
    //
    //         { text: 'From', style: 'subheader'},
    //         invoice.AddressFrom.Name,
    //         invoice.AddressFrom.Address,
    //         invoice.AddressFrom.Country,
    //
    //         { text: 'To', style: 'subheader'},
    //         invoice.AddressTo.Name,
    //         invoice.AddressTo.Address,
    //         invoice.AddressTo.Country,
    //
    //         { text: 'Items', style: 'subheader'},
    //         {
    //             style: 'itemsTable',
    //             table: {
    //                 widths: ['*', 75, 75],
    //                 body: [
    //                     [
    //                         { text: 'Description', style: 'itemsTableHeader' },
    //                         { text: 'Quantity', style: 'itemsTableHeader' },
    //                         { text: 'Price', style: 'itemsTableHeader' },
    //                     ]
    //                 ].concat(items)
    //             }
    //         },
    //         {
    //             style: 'totalsTable',
    //             table: {
    //                 widths: ['*', 75, 75],
    //                 body: [
    //                     [
    //                         '',
    //                         'Subtotal',
    //                         invoice.Subtotal,
    //                     ],
    //                     [
    //                         '',
    //                         'Shipping',
    //                         invoice.Shipping,
    //                     ],
    //                     [
    //                         '',
    //                         'Total',
    //                         invoice.Total,
    //                     ]
    //                 ]
    //             },
    //             layout: 'noBorders'
    //         },
    //     ],
    //     styles: {
    //         header: {
    //             fontSize: 20,
    //             bold: true,
    //             margin: [0, 0, 0, 10],
    //             alignment: 'right'
    //         },
    //         subheader: {
    //             fontSize: 16,
    //             bold: true,
    //             margin: [0, 20, 0, 5]
    //         },
    //         itemsTable: {
    //             margin: [0, 5, 0, 15]
    //         },
    //         itemsTableHeader: {
    //             bold: true,
    //             fontSize: 13,
    //             color: 'black'
    //         },
    //         totalsTable: {
    //             bold: true,
    //             margin: [0, 30, 0, 0]
    //         }
    //     },
    //     defaultStyle: {
    //     }
    // }
    //
    // return dd;
// }


}
