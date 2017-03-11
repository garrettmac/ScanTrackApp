import { Component } from '@angular/core';
import { NavController, ModalController,AlertController,NavParams,Platform } from 'ionic-angular';
import {Shopify} from '../../providers/shopify';
import _ from 'lodash';
import { ScanModal } from '../scan-modal/scan-modal';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    name: string
    errorMessage: any
    // items:  Observable<Item>;
    // items:  Promise<any[]>
    items:  any[]
  newProduct={
    // id: "",
    "sku": "",
    "title": "my new product",
    "body_html": "<b>NEW!</b> this is a product description",
    "vendor": "Apple",
    "product_type": "Cell Phone",
    // handle: "",
    "inventory_quantity": 3,
    "price": "60.00",
    // update_at: "",
    // published_at: "",
    "published": true,
    "tags": "Mobile,Cell",
    "images": []
    // "images": [{
    //    "attachment": "R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\n"
    //  }]
  }

    constructor(
      public alert: AlertController,
      public Storage: Storage,
      public shopify: Shopify,
      public platform: Platform,
      public modal: ModalController,

      public navCtrl: NavController, public navParams: NavParams) {

      }
      goToCategory(item) {
        this.navCtrl.push(ScanModal, {
            item: item
        });
      }

  submit(data){
    console.log("data: ",data);

  }
  scan(){
  //   if(this.platform.is('cordova')){
  //   let barcodeData={cancelled: 0, text: "624CHZ0595", format: "CODE_128"}//serial no
  //   //barcodeData==={cancelled: 0, text: "CAH0762RM0", format: "CODE_128"}//tracking no
  //   //barcodeData==={cancelled: 0, text: "[)>0617V782051PM21URM9PW2ANS624CHZ0595", format: "DATA_MATRIX"}
  // this.newProduct.sku=barcodeData.text
  // let modal = this.modal.create(ScanModal,{item:this.newProduct});
  //  modal.present();
  // }else{
    BarcodeScanner.scan().then((barcodeData) => {
  console.log("barcodeData: ",barcodeData);
  this.newProduct.sku=barcodeData.text
  let modal = this.modal.create(ScanModal,{item:this.newProduct});
   modal.present();
  }, (err) => {
  console.log("err: ",err);
    // An error occurred
  });

  // }

  }
    ionViewDidLoad() {
      console.log('ionViewDidLoad ShopifyHomePage');
      this.getProducts()


    }
  doRefresh(refresher){
    this.getProducts()
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  getProducts(){
    this.shopify.getAllProducts()
    .subscribe((res) => {
      console.log("res.json().products: ",res.json().products);
      if(_.isArray(res.json().products)){
          this.items=res.json().products
      }else{
          this.items=[]
      }
    })

    // this.shopify.getAllProducts().then(data => {
    //     console.log("data.products: ",data);
    //     this.items=data
    //   });
  }
  postProduct(_data){
    // this.shopify.addProduct(_data).then(data => {
    //     console.log("posted: ",data);
    //   });
  }
  }
