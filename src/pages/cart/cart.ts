import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { ProductDetailPage } from '../product/product';
import { _Storage } from './../../providers/storage';
import { GoogleAnalytics } from 'ionic-native';


@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',

})
export class CartPage {

  carts: Array<any>;
  products: Array<any>;
  cartProducts: any;
  items: Array<any>;
  dataId: string;
  dataProductId: string;
  orderId: string="1";

  constructor(public _storage:_Storage,public navCtrl: NavController, private navParams: NavParams,

  ) {

    let returnArray: Array<any> = [];
this.getCartProducts()
}
  getCartProducts(){

      this._storage.getCart().then(
        (info) => {this.cartProducts=info;
        console.log(`cartProducts: `,this.cartProducts);}
      );

  }
getTotal(){
  // this._storage.getItem('cart').then(
  //   (info) => console.log(`info: ${info}`),
  //   (err) => console.error(`err: ${err}`),
  // );
return 30
}
  goToCheckout() {
    this.navCtrl.push(ProductDetailPage);
  }

}
