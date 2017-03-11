import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


/*
  Generated class for the Storage provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class _Storage {
public item:Array<any>=[]
  constructor(public storage: Storage) {
    console.log('Hello Storage Provider');

  }
  setItem(name:string,item) {
    // return new Promise((resolve, reject) => {
      // console.info("item: ", item)
    return  this.storage.set(name, item)
    //   .then(
    //     (item) => resolve(item),
    //     (error) => reject('Error storing item', error)
    //   );
    // })
  }
  getItem(name:string) {
    return new Promise((resolve, reject) => {
      this.storage.get(name).then(
        (info) => {
          // if(!info)reject("no info")
           resolve(info)
        }, (error) => reject("error getting item")
      );
    })
  }
  addToCart(product) {
    console.log(`adding product to cart: `,product);
    this.item.push(product)
   return new Promise((resolve, reject) => {
  //    console.info("product: ", product)
     this.storage.set('cart', this.item).then(
       (product) => resolve(product)
     );
   })
 }
  getCart() {
   return new Promise((resolve, reject) => {
    this.storage.get('cart').then(
      (product) => resolve(product)
    );
   })
 }
 //  removeItem(name:string) {
 //   return new Promise((resolve, reject) => {
 //     this.storage.remove(name).then(
 //       (info) => resolve(info),
 //       (error) => reject("error: ",error)
 //     );
 //   })
 // }
  clearStorage() {
  return new Promise((resolve, reject) => {
    this.storage.clear().then(
      (info) => resolve(info),
      error => reject("error loggin out")
    );
  })
}
}
