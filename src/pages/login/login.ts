import { Component } from '@angular/core';
import { NavController , LoadingController } from 'ionic-angular';



import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {

// app.getRootNav();

// app.isScrolling(true);


  }

  // Loading Get Started
  presentGetStarted() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();

      // Go to Home Page
      this.navCtrl.setRoot(HomePage);

    }, 2000);
  }

}
