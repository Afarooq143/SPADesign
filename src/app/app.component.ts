import { Component, ViewChild } from '@angular/core';
import { PopoverController } from 'ionic-angular';
//load calender
import { CalendarModule } from "ion2-calendar";
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { AccountPage } from '../pages/account/account';
import { InternetPage } from '../pages/internet/internet';
import { WifiPage } from '../pages/wifi/wifi';
import { DirectvPage } from '../pages/directv/directv';
import { PackagesPage } from '../pages/packages/packages';
import { SupportticketsPage } from '../pages/supporttickets/supporttickets';
import { TickethistoryPage } from '../pages/tickethistory/tickethistory';
import { TicketdetailsPage } from '../pages/ticketdetails/ticketdetails';
import { SupporttopicsPage } from '../pages/supporttopics/supporttopics';
import { CalenderPage } from '../pages/calender/calender';
import { AccordionPage } from '../pages/accordion/accordion';
import { PrfileconfirmationPage } from '../pages/prfileconfirmation/prfileconfirmation';
import { CartsummaryPage } from '../pages/cartsummary/cartsummary';
import { SplashPage } from '../pages/splash/splash';
import { SignaturePage } from '../pages/signature/signature';
import { FormvalidationPage } from '../pages/formvalidation/formvalidation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SignupPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public popoverCtrl: PopoverController
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home',                      component: HomePage },
      { title: 'Signup',                  component: SignupPage },
      { title: 'Account',                 component: AccountPage },
      { title: 'Internet',                component: InternetPage },
      { title: 'Wifi',                    component: WifiPage },
      { title: 'Directv',                 component: DirectvPage },
      { title: 'Create Support Tickets',  component: SupportticketsPage },
      { title: 'Support History',         component: TickethistoryPage },
      { title: 'Tech Guide',              component: TicketdetailsPage },
      { title: 'Support Topics',          component: SupporttopicsPage },
      { title: 'Calender',                component: CalenderPage },
      { title: 'Prfile Confirmation',     component: PrfileconfirmationPage },
      { title: 'Packages',               component: AccordionPage },
      
      
      
      
      
    ];

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(CartsummaryPage);
    popover.present({
      ev: myEvent
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
