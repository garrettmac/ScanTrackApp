import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// import { Page1 } from '../pages/page1/page1';
// import { Page2 } from '../pages/page2/page2';
import { HomePage } from '../pages/home/home';
import { ProductPage } from '../pages/product/product';
import { ScanModal } from '../pages/scan-modal/scan-modal';
import { ProductsPage } from '../pages/products/products';
import { ScanModal } from '../pages/scan-modal/scan-modal';
import { Shopify } from '../providers/shopify';
import { _Storage } from '../providers/storage';

@NgModule({
  declarations: [
    MyApp,
    // Page1,
    HomePage,
    ScanModal
    // Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [_Storage,Shopify,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
