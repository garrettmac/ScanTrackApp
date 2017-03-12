import { NgModule,enableProdMode, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductDetailPage } from '../pages/product/product';
import { CartPage } from '../pages/cart/cart';
import { ProductsPage } from '../pages/products/products';
import { InvoicePage } from '../pages/invoice/invoice';
import { ScanModal } from '../pages/scan-modal/scan-modal';
import { Shopify } from '../providers/shopify';
import { Invoice } from '../providers/invoice';

import { _Storage } from '../providers/storage';
let inProductionMode: boolean = window.hasOwnProperty('cordova');
console.log("inProductionMode: ",inProductionMode);
if(inProductionMode)enableProdMode();


@NgModule({
  declarations: [
    MyApp,
    // Page1,
    ProductDetailPage,
    CartPage,
    ProductsPage,
    HomePage,
    InvoicePage,
    ScanModal
    // Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InvoicePage
    // HomePage
  ],
  providers: [_Storage,Invoice,Shopify,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
