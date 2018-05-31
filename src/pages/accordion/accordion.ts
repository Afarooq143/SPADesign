import { Component, ViewChild, OnInit, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

//import {SignaturePage} from '../signature/signature';

@Component({
  selector: 'page-accordion',
  templateUrl: 'accordion.html',
})
export class AccordionPage {
  progMenu = 'prog1'
  eventSource = [];
  selectedDay = new Date();
  checkout = true;
  public signatureImage: any;

  //display status for package menus 
  package = false;
  menu_package = false;

  receiver = true;
  menu_receiver = true;

  programming = false;
  menu_programming = false;

  premiums = false;
  menu_premiums = false;

  internationals = false;
  menu_internationals = false;

  store = false;
  menu_store = false;

  completed = false;
  selected: any;

  //display status for programming menus
  entertainment = true;
  choice = false;
  xtra = false;
  ultimate = false;
  premier = false;


  //display status for programming menus
  hbo = true;
  starz = false;
  cinemax = false;
  showtime = false;
  sports = false;

  //display status for international menus
  chinese = true;
  korean = false;
  indian = false;
  filipino = false;
  russian = false;
  brazil = false;

  //display status for store menus
  extreme = true;
  spartan = false;
  hare = false;
  tortoise = false;
  azul = false;
  ethernet = false;

  channels = [{
    "name": "Channels",
    "children": [
      {
        "image": "AWE_HD.gif",
        "name": "HD",
        "channels": "265"
      },
      {
        "image": "CSP1_SD.gif",
        "name": "HD",
        "channels": "165"
      },
      {
        "image": "DIY_HD.gif",
        "name": "HD",
        "channels": "205"
      },
      {
        "image": "FXHD_HD.gif",
        "name": "HD",
        "channels": "365"
      },
      {
        "image": "MTV2_SD.gif",
        "name": "HD",
        "channels": "265"
      },
      {
        "image": "SECESPN.gif",
        "name": "",
        "channels": "265"
      },
      {
        "image": "TNTH_HD.gif",
        "name": "HD",
        "channels": "265"
      }
    ]
  }];


  public buttonClicked: boolean = false;

  // accordianExpand = false;
  // @ViewChild("cc") listContent: any;

  signatureSection = false;
  @ViewChild(SignaturePad) public signaturePad: SignaturePad;

  public signaturePadOptions: Object = {
    'minWidth': 0.5,
    'canvasWidth': 340,
    'canvasHeight': 200
  };
  //public signatureImage : string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public render: Renderer,
  ) {
    // this.signatureImage = navParams.get('signatureImage');;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccordionPage');
    this.isActive('package');
  }

  ngOnInit() {
    for (let item of this.channels) {
      console.log(item.name);

    }
    //console.log(this.listContent.nativeElement);
  }

  receive_menu(indx){
    console.log(indx);
    if(indx !== 0){
      this.progMenu = 'prog'+indx;
    }
  }

  toggleSection() {
    this.buttonClicked = !this.buttonClicked;
  }

  // toggleItem(i, j) {
  //   this.channels[i].children[j].open = !this.channels[i].children[j].open;
  // }
  menu(page) {
    this.selected = page;
    console.log(page);
    switch (page) {
      case 'package':
        this.package = false;
        this.menu_package = false;

        this.receiver = true;
        this.menu_receiver = true;

        this.programming = false;
        this.menu_programming = false;

        this.premiums = false;
        this.menu_premiums = false;

        this.internationals = false;
        this.menu_internationals = false;

        this.store = false;
        this.menu_store = false;

        this.completed = false;
        break;
      case 'receiver':
        this.package = false;
        this.menu_package = false;

        this.receiver = true;
        this.menu_receiver = true;

        this.programming = false;
        this.menu_programming = false;

        this.premiums = false;
        this.menu_premiums = false;

        this.internationals = false;
        this.menu_internationals = false;

        this.store = false;
        this.menu_store = false;

        this.completed = false;
        break;
      case 'programming':
        this.package = false;
        this.menu_package = false;

        this.receiver = false;
        this.menu_receiver = false;

        this.programming = true;
        this.menu_programming = true;

        this.premiums = false;
        this.menu_premiums = false;

        this.internationals = false;
        this.menu_internationals = false;

        this.store = false;
        this.menu_store = false;

        this.completed = false;
        break;
      case 'premiums':
        this.package = false;
        this.menu_package = false;

        this.receiver = false;
        this.menu_receiver = false;

        this.programming = false;
        this.menu_programming = false;

        this.premiums = true;
        this.menu_premiums = true;

        this.internationals = false;
        this.menu_internationals = false;

        this.store = false;
        this.menu_store = false;

        this.completed = false;
        break;
      case 'internationals':
        this.package = false;
        this.menu_package = false;

        this.receiver = false;
        this.menu_receiver = false;

        this.programming = false;
        this.menu_programming = false;

        this.premiums = false;
        this.menu_premiums = false;

        this.internationals = true;
        this.menu_internationals = true;

        this.store = false;
        this.menu_store = false;

        this.completed = false;
        break;
      case 'store':
        this.package = false;
        this.menu_package = false;

        this.receiver = false;
        this.menu_receiver = false;

        this.programming = false;
        this.menu_programming = false;

        this.premiums = false;
        this.menu_premiums = false;

        this.internationals = false;
        this.menu_internationals = false;

        this.store = false;
        this.menu_store = false;

        this.completed = false;
        break;
      default:
        this.package = true;
        this.menu_package = true;

        this.receiver = false;
        this.menu_receiver = false;

        this.programming = false;
        this.menu_programming = false;

        this.premiums = false;
        this.menu_premiums = false;

        this.internationals = false;
        this.menu_internationals = false;

        this.store = false;
        this.menu_store = false;

        this.completed = false;
        break;
    }
  }

  isActive(item) {
    //console.log(item);
    return this.selected === item;
  };

  allmenus() {
    this.menu_package = true;
    this.menu_receiver = true;
    this.menu_programming = true;
    this.menu_premiums = true;
    this.menu_internationals = true;
    this.menu_store = true;
  }


  //programming menus
  programming_menu(section) {
    this.selected = section;
    console.log(section);
    switch (section) {
      case 'entertainment':
        this.entertainment = true;
        this.choice = false;
        this.xtra = false;
        this.ultimate = false;
        this.premier = false;
        break;
      case 'choice':
        this.entertainment = false;
        this.choice = true;
        this.xtra = false;
        this.ultimate = false;
        this.premier = false;
        break;
      case 'xtra':
        this.entertainment = false;
        this.choice = false;
        this.xtra = true;
        this.ultimate = false;
        this.premier = false;
        break;
      case 'ultimate':
        this.entertainment = false;
        this.choice = false;
        this.xtra = false;
        this.ultimate = true;
        this.premier = false;
        break;
      case 'premier':
        this.entertainment = false;
        this.choice = false;
        this.xtra = false;
        this.ultimate = false;
        this.premier = true;
        break;
    }
  }


  //programming menus
  premium_menu(section) {
    this.selected = section;
    console.log(section);
    switch (section) {
      case 'hbo':
        this.hbo = true;
        this.starz = false;
        this.cinemax = false;
        this.showtime = false;
        this.sports = false;
        break;
      case 'starz':
        this.hbo = false;
        this.starz = true;
        this.cinemax = false;
        this.showtime = false;
        this.sports = false;
        break;
      case 'cinemax':
        this.hbo = false;
        this.starz = false;
        this.cinemax = true;
        this.showtime = false;
        this.sports = false;
        break;
      case 'showtime':
        this.hbo = false;
        this.starz = false;
        this.cinemax = false;
        this.showtime = true;
        this.sports = false;
        break;
      case 'sports':
        this.hbo = false;
        this.starz = false;
        this.cinemax = false;
        this.showtime = false;
        this.sports = true;
        break;
    }
  }


  international_menu(region) {
    this.selected = region;
    console.log(region);
    switch (region) {
      case 'chinese':
        this.chinese = true;
        this.korean = false;
        this.indian = false;
        this.filipino = false;
        this.russian = false;
        this.brazil = false;
        break;
      case 'korean':
        this.chinese = false;
        this.korean = true;
        this.indian = false;
        this.filipino = false;
        this.russian = false;
        this.brazil = false;
        break;
      case 'indian':
        this.chinese = false;
        this.korean = false;
        this.indian = true;
        this.filipino = false;
        this.russian = false;
        this.brazil = false;
        break;
      case 'filipino':
        this.chinese = false;
        this.korean = false;
        this.indian = false;
        this.filipino = true;
        this.russian = false;
        this.brazil = false;
        break;
      case 'russian':
        this.chinese = false;
        this.korean = false;
        this.indian = false;
        this.filipino = false;
        this.russian = true;
        this.brazil = false;
        break;
      case 'brazil':
        this.chinese = false;
        this.korean = false;
        this.indian = false;
        this.filipino = false;
        this.russian = false;
        this.brazil = true;
        break;
    }
  }

  store_menu(device) {
    this.selected = device;
    console.log(device);
    switch (device) {
      case 'extreme':
        this.extreme = true;
        this.spartan = false;
        this.hare = false;
        this.tortoise = false;
        this.azul = false;
        this.ethernet = false;
        break;
      case 'spartan':
        this.extreme = false;
        this.spartan = true;
        this.hare = false;
        this.tortoise = false;
        this.azul = false;
        this.ethernet = false;
        break;
      case 'hare':
        this.extreme = false;
        this.spartan = false;
        this.hare = true;
        this.tortoise = false;
        this.azul = false;
        this.ethernet = false;
        break;
      case 'tortoise':
        this.extreme = false;
        this.spartan = false;
        this.hare = false;
        this.tortoise = true;
        this.azul = false;
        this.ethernet = false;
        break;
      case 'azul':
        this.extreme = false;
        this.spartan = false;
        this.hare = false;
        this.tortoise = false;
        this.azul = true;
        this.ethernet = false;
        break;
      case 'ethernet':
        this.extreme = false;
        this.spartan = false;
        this.hare = false;
        this.tortoise = false;
        this.azul = false;
        this.ethernet = true;
        break;
    }
  }

  openSignatureModel() {
    setTimeout(() => {
      this.signatureSection = true;
    }, 300);
  }


  drawCancel() {
    this.signatureSection = false;
  }

  drawComplete() {
    this.signatureImage = this.signaturePad.toDataURL();
    this.signatureSection = false;
    //this.navCtrl.setRoot(AccordionPage, {signatureImage: this.signatureImage});
  }

  drawClear() {
    this.signaturePad.clear();
  }

  canvasResize() {
    let canvas = document.querySelector('canvas');
    this.signaturePad.set('minWidth', 1);
    this.signaturePad.set('canvasWidth', canvas.offsetWidth);
    this.signaturePad.set('canvasHeight', canvas.offsetHeight);
  }

  // ngAfterViewInit() {
  //   this.signaturePad.clear();
  //   this.canvasResize();
  // }
}
