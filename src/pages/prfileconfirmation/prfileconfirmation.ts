import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-prfileconfirmation',
  templateUrl: 'prfileconfirmation.html',
})
export class PrfileconfirmationPage {
  completed = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrfileconfirmationPage');
  }

}
