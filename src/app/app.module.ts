import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';

//load calender
import { CalendarModule } from "ion2-calendar";
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { DatePickerModule } from 'ionic2-date-picker';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowErrorsComponent } from '../components/show-errors/show-errors';

//FontAwesome
import {FaIconComponent} from "../components/fa-icon/fa-icon.component";
import { SignaturePadModule } from 'angular2-signaturepad';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
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
import { LoginPage } from '../pages/login/login';
import { SplashPage } from '../pages/splash/splash';
import { DateFormatPipe } from '../providers/datepipe/datepipe';
import { DateTimeFormatPipe } from '../providers/datepipe/datepipe';
import { SignaturePage } from '../pages/signature/signature';
import { FormvalidationPage } from '../pages/formvalidation/formvalidation';

@NgModule({
  declarations: [
    MyApp,
    FaIconComponent,
    ShowErrorsComponent,

    HomePage,
    ListPage,
    SignupPage,
    AccountPage,
    InternetPage,
    WifiPage,
    DirectvPage,
    PackagesPage,
    SupportticketsPage,
    TickethistoryPage,
    TicketdetailsPage,
    SupporttopicsPage,
    CalenderPage,
    AccordionPage,
    PrfileconfirmationPage,
    CartsummaryPage,
    LoginPage,
    SplashPage,
    SignaturePage,
    FormvalidationPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CalendarModule,
    HttpClientModule,
    AutoCompleteModule,
    DatePickerModule,
    SignaturePadModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SignupPage,
    AccountPage,
    InternetPage,
    WifiPage,
    DirectvPage,
    PackagesPage,
    SupportticketsPage,
    TickethistoryPage,
    TicketdetailsPage,
    SupporttopicsPage,
    CalenderPage,
    AccordionPage,
    PrfileconfirmationPage,
    CartsummaryPage,
    LoginPage,
    SplashPage,
    SignaturePage,
    FormvalidationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DateFormatPipe,
    DateTimeFormatPipe,
    FileTransfer,
    FileTransferObject,
    File,
    Camera
  ]
})
export class AppModule {}
