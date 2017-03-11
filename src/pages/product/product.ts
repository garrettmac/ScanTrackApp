import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';


import { Storage } from './../../providers/storage-sync';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})

export class ProductPage {

  items: Array<any>;
  item: any;
  dataId: string;
  productName: string;

  constructor(public alertCtrl: AlertController,public Storage:Storage,public navCtrl: NavController, private navParams: NavParams,
) {
  // constructor(public Storage:Storage,public navCtrl: NavController, private navParams: NavParams, googleSheets: GoogleDrive ) {

    // Get item params
    this.item = navParams.get('item');
console.log("this.item: ",this.item);
  }

  addToCart(item) {
    // this._storage.addToCart(item).then(
    //   (info) => {
    //     this.showAlert("Success",item.name +" successfully added to cart!");
    //       this.navCtrl.push(CartPage,{item:item});
    //   },(err) => {this.showAlert("An Error Occured",err)},
    // // },(err) => {console.log("An Error Occured",err)},
    // );

  }
  showAlert(title,msg) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }


}
