import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { CartsummaryPage } from '../cartsummary/cartsummary';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  main_content = true;
  statusBar = true;
  order = true;
  internet = false;
  directv = false;
  install = false;
  viewDetail = false;
  activeClass: any;
  selected: any;

  orderDone = true;
  internetDone = true;
  directvDone = false;
  installDone = false;

  //splash
  splash = true;

  public show: boolean = false;
  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public viewCtrl: ViewController
  ) {

  }



  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(CartsummaryPage);
    popover.present({
      ev: myEvent
    });
  }

  close() {
    this.viewCtrl.dismiss();
  }

  isActive(item) {
    console.log(item);
    return this.selected === item;
  };

  changeStatus(section) {
    this.viewDetail = false;
    this.main_content = true;
    this.statusBar = true;
    switch (section) {
      case 'order':
        this.order = false;
        break;
      case 'internet':
        this.order = false;
        break;
      case 'directv':
        this.order = false;
        break;
      case 'install':
        this.order = false;
        break;
    }
  }
    menu(page) {
      this.selected = page;
      // console.log(page);
      this.viewDetail = true;
      switch (page) {
        case 'order':
          this.order = true;
          this.internet = false;
          this.directv = false;
          this.install = false;
          this.main_content = false;
          this.statusBar = false;
          break;
        case 'internet':
          this.order = false;
          this.internet = true;
          this.directv = false;
          this.install = false;
          this.main_content = false;
          this.statusBar = false;
          break;
        case 'directv':
          this.order = false;
          this.internet = false;
          this.directv = true;
          this.install = false;
          this.main_content = false;
          this.statusBar = false;
          break;
        case 'install':
          this.order = false;
          this.internet = false;
          this.directv = false;
          this.install = true;
          this.main_content = false;
          this.statusBar = false;
          break;
        default:
          this.order = true;
          this.internet = false;
          this.directv = false;
          this.install = false;
          this.main_content = true;
          this.statusBar = false;
          break;
      }
    }

    toggle(activeClass: any) {
      this.show = !this.show;

      // CHANGE THE NAME OF THE BUTTON.
      if (this.show)
        this.activeClass = activeClass;
      else
        this.activeClass = 0;
    }


  }
