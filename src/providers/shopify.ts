import {Injectable,Component} from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
// import 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { AlertController ,ModalController,NavParams} from 'ionic-angular';
import { InAppBrowser,BarcodeScanner } from 'ionic-native';
// import { ScanProductDetailPage } from './modal/scan-product-detail';
// import {_Storage} from '../storage';
// import {GoogleDrive} from '../google-drive/google-drive';
import _  from 'lodash';
const headers = new Headers({'Content-Type': 'application/json'});

@Component({
  template: `
  <ion-list>

  <ion-item>
    <ion-label floating>Username</ion-label>
    <ion-input type="text"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label floating>Password</ion-label>
    <ion-input type="password"></ion-input>
  </ion-item>

</ion-list>
  `
})
class Modal {
  keys: {
    "apiKey":"",
  "password":""
  };


  constructor(
    private alertController: AlertController,
    // private _storage: _Storage,
    public navParams: NavParams) {
      console.log("navParams: ",navParams);

    }

  submit(keys) {
    console.log(keys);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopifyHomePage');

  }

}


/*
  Generated class for the Shopify provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Shopify {
  data: any = null;
  shopifyUrl: string = '';
  shopifyProducts: any = null;
  apiKey: string
  url: string
  storeUrl: string=""
  password: string
  // auth={'myshopify':'usedradio-inventory-backup.myshopify.com','apikey':'23a2afa9a9a065c73ee37a6dbc9b84ff','password':'e1bfdd52147ac9b0eb2b937b819e26c5'}
  auth={'myshopify':'scantrackstore.myshopify.com','apikey':'1d5c8b58d1872b9167e411e942e69e61','password':'60dbf54a22301527a8a10dd73bfc60aba0cdc0f4bdb84a815ed6d62cd72b1250'}
  showAlertOn:boolean=false



  constructor(
    public http: Http,
    public modalCtrl: ModalController,
    // public Storage: Storage,
    public alert: AlertController) { }
  // Get data sheet tab
  scanProduct(){
    BarcodeScanner.scan().then((barcodeData) => {
      let barcodeModal = this.modalCtrl.create(Modal, { barcodeData: barcodeData });
       barcodeModal.present();
     // Success! Barcode data is here
    }, (err) => {
        // An error occurred
    });
  }
  openInBrowser() {
     let browser = new InAppBrowser(this.storeUrl, '_system');
     browser.show();
   }
  clear() {this.data=null}
  getStoreAccess() {
  let prompt = this.alert.create({
      title: 'Login',
      message: "Enter your Api Key and password",
      inputs: [
        {name: 'myshopify',value:'usedradio-inventory-backup.myshopify.com',placeholder: '[store-name].myshopify.com'},
        {name: 'ApiKey',value:'23a2afa9a9a065c73ee37a6dbc9b84ff',placeholder: '23a2afa9a9a065c73ee37a6dbc9b84ff'},
        {name: 'Password',value:'e1bfdd52147ac9b0eb2b937b819e26c5',placeholder: 'e1bfdd52147ac9b0eb2b937b819e26c5'}
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked',data);
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked',data);
            // this._storage.setItem('auth',data)
          }
        }
      ]
    });
    prompt.present();
  }
  load() {
    // if(!this.apiKey){this.getStoreAccess();return}
  // this._storage.getItem("auth").then(function(result) {
    // console.log('api result: ',result)
    // if(!result){
      // this.getStoreAccess();

// this._storage.setItem("auth",this.auth)

// }
  // }).then(function(auth) {
    // console.log('auth: ',auth)
  // })
return this.getAllProducts()
}
  // getAllProducts():Array<any> {
  // getAllProducts():any[]{
  // getAllProducts():Promise<any[]>{
  getAllProducts(){
  //  var url = `https://${this.auth.apikey}:${this.auth.password}@${this.auth.myshopify}/admin/products.json`
   var url = `https://1d5c8b58d1872b9167e411e942e69e61:60dbf54a22301527a8a10dd73bfc60aba0cdc0f4bdb84a815ed6d62cd72b1250@scantrackstore.myshopify.com/admin/products.json`

    // return new Promise(resolve => {
      return this.http.get(url)
        //  .map(res => res.json())
        // .subscribe(res => res.json().products)
        //  .then(products => {
        //  .subscribe(products => {
          //  resolve(products);
        //  });
    //  });
   }
   handleError(e){
     console.error("e: ",e);
   }
  addProduct(data){
    data.handle=_.kebabCase(data.title)
    if(!data.images)delete data.images
    // let temp={product:data}
  //  var url = `https://${this.auth.apikey}:${this.auth.password}@${this.auth.myshopify}/admin/products.json`
  var url = `https://${this.auth.apikey}:${this.auth.password}@${this.auth.myshopify}/admin/products.json`

    // return new Promise(resolve => {
    // return   this.http.post(url,JSON.stringify(temp),headers)
    return   this.http.post(url,data,headers)
      //  .then(res => res.json().data)
      //  .subscribe(res => res.json())
      //  .toPromise()
    //  .catch(this.handleError);
    //  });
   }


  getProductById(itemId) {
   var url = `https://${this.auth.apikey}:${this.auth.password}@${this.auth.myshopify}/admin/products/${itemId}.json`
   return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  getProductVariants(itemId) {
   var url = `https://${this.auth.apikey}:${this.auth.password}@${this.auth.myshopify}/admin/products/${itemId}/variants.json`
    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  getProductVariantById(itemId,variantId) {
   var url = `https://${this.auth.apikey}:${this.auth.password}@${this.auth.myshopify}/admin/products/${itemId}/variants/${variantId}.json`
    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  getProductByTag(categoryId) {
    return new Promise(resolve => {
      this.http.get(this.url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  showAlert(msg) {
    if(this.showAlertOn){
    let alert = this.alert.create({
      title: 'Woot Woot!',
      subTitle:"These Products Are The Actual..",
      buttons: [{text: 'Dismiss Alert Once',handler: data => {}},
             {text: 'Lets See it!',handler: data => {this.openInBrowser()}
             },{text: 'Always Dismiss',handler: data => {this.showAlertOn=false}}
           ]
    });
    alert.present();
  }
  }


}
