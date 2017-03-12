import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';


import { Shopify } from './../../providers/shopify';
import { _Storage } from './../../providers/storage';
import { CartPage } from '../cart/cart';

import _ from 'lodash';

import { BarcodeScanner,Camera } from 'ionic-native';

declare var window: Window;


@Component({
  selector: 'page-scan-modal',
  templateUrl: 'scan-modal.html'
})
export class ScanModal {

  // items: Array<any>;
  item: any
  _= _
  images=[]
  imageOptions= {
    targetHeight:500,
    targetWidth:500,
    quality:100,
    saveToPhotoAlbum:true
  };
  // dataId: string;
  // productName: string;

  constructor(
    public alert: AlertController,
    public shopify: Shopify,
    public _storage:_Storage,public navCtrl: NavController, private navParams: NavParams ) {

    // Get item params
    this.item = navParams.get('item');
// this.resetImages()
    // this.productName = this.item.name;
    console.log('this.item: ',this.item);

  }
addOne(data){
  return data.inventory_quantity+=1
}

removeOne(data){
  return data.inventory_quantity-=1

}
resetImages(data){
  data.images=[]
}
  changeCameraOptions(data) {
    let prompt = this.alert.create({
    title: 'Camera Options',
    message: "Update your Camera Settings",
    inputs: [
      {name: 'targetHeight',value:`${data.targetHeight}`,placeholder:"number of pixels tall"},
      {name: 'targetWidth',value:`${data.targetWidth}`,placeholder:"number of pixels wide"},
      {name: 'quality',value:`${data.quality}` ,placeholder:"number 1-100"},
      {name: 'saveToPhotoAlbum',value:`${data.saveToPhotoAlbum}` ,placeholder:"true or false"}
    ],
    buttons: [
      {text: 'Cancel',handler: data => {console.log('Cancel clicked',data);}},
      {text: 'Reset Images',handler: data => {this.resetImages(this.item)}},
      {text: 'Update',handler: data => {
        console.log('Saved clicked',data);
        this.imageOptions=data;
        }}
    ]
  });
  prompt.present();
  }
  addImage(data) {
    Camera.getPicture(this.imageOptions).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 // let base64Image = 'data:image/jpeg;base64,' + imageData;
 let base64Image = {attachment:'data:image/jpeg;base64,' + imageData}
 console.log("base64Image: ",base64Image);

 // this.images.push(base64Image)
 data.images.push(base64Image)
}, (err) => {
  console.log("err: ",err);
 // Handle error
});
  }
  addToStore(item) {
console.log("item: ",item);

this.shopify.addProduct(item).subscribe((data) => {
  console.log("data: ",data);
})
// .then(function(result) {console.log('result: ',result)})

  }



}
