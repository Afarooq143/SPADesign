import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CalendarComponentOptions } from 'ion2-calendar'


@Component({
  selector: 'page-calender',
  templateUrl: 'calender.html',
})
export class CalenderPage {

  dateRange: { from: string; to: string; };
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };

  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };

  date: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalenderPage');
  }

  onChange($event) {
    console.log($event._d);
    console.log(this.date);
  }

}
