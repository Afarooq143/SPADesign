import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-supporttopics',
  templateUrl: 'supporttopics.html',
})
export class SupporttopicsPage {
  internet =  true;
  wifi =      false;
  tv =        false;
  myaccount = false;
  selected:   any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupporttopicsPage');
    this.isActive('internet');
  }

  menu(page) {
    this.selected = page;
   // console.log(page);
    switch (page) {
      case 'internet':
        this.internet = true;
        this.wifi = false;
        this.tv = false;
        this.myaccount = false;
        break;
      case 'wifi':
        this.internet = false;
        this.wifi = true;
        this.tv = false;
        this.myaccount = false;
        break;
      case 'tv':
        this.internet = false;
        this.wifi = false;
        this.tv = true;
        this.myaccount = false;
        break;
      case 'myaccount':
        this.internet = false;
        this.wifi = false;
        this.tv = false;
        this.myaccount = true;
        break;
      default:
        this.internet = true;
        this.wifi = false;
        this.tv = false;
        this.myaccount = false;
        break;
    }
  }

  isActive(item) {
    return this.selected === item;
  };

}
