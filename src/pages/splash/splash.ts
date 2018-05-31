import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {
   //splash
   splash = true;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad(){
    setTimeout(()=>{
      this.splash=false;
      this.navCtrl.setRoot(HomePage, {}, { animate: true });
    }, 6000);
  }

}
