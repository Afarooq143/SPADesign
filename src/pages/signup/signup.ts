//package controllers imort
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
//import { Camera, CameraOptions } from '@ionic-native/camera';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ModalController } from 'ionic-angular';
import { DatePickerProvider } from 'ionic2-date-picker';

import { regexValidators } from '../validator/validator';

import { DateFormatPipe } from '../../providers/datepipe/datepipe';
import { DateTimeFormatPipe } from '../../providers/datepipe/datepipe';

//pages import
import { HomePage } from '../home/home';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  //declarations
  imageURI: any;
  imageFileName: any;
  responseData: any;
  loading: any;
  date_of_birth:any;
  apartmentActive = true;
  userData = { 
              "first_name" : "",
              "last_name" : "",
              "email_address" : "",
              "primary_phone" :"",
              "password" : "",
              "password_confirmation" : "",
              "location_type" : "",
              "street_number" :"",
              "street_name" : "",
              "city" : "",
              "state" : "",
              "country" : "",
              "zip" : "",
              "date_of_birth" : "",
              "cp_location_id" : "",
              "type_of_request" : "customer_on_board",
              "autoSearchValue":"", 
              "streetSearchValue": "", 
              "apartment_name" : "",
            };
  obj = '';
  value = '';
  autosearch =false;
  resultData: any;
  autoSearchValue = '';
  autocompleteData: any;
  autoSearch=false;
  apartmentSelected=false;
  streetSelected = false;
  signupForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private http: HttpClient,
    public modalCtrl: ModalController,
    private datePickerProvider: DatePickerProvider,
    // private transfer: FileTransfer,
    public dateFormat: DateFormatPipe
    // private camera: Camera
  ) {
    this.signupForm = this.fb.group({

      'first_name': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'last_name': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'email': [null, Validators.compose([Validators.required, Validators.pattern(regexValidators.email)])],
      'phone': [null, Validators.compose([Validators.required, Validators.minLength(10)])],
      'password': [null, Validators.compose([Validators.required])],
      'password_confirmation': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'location_type': [null, Validators.compose([Validators.required])],
      "date_of_birth":[null],      
      'apartment_name': [null],
      'autoSearchValue': [null],
      'streetSearchValue':[null],

    });
  }

  showCalendar() {
    const dateSelected = 
      this.datePickerProvider.showCalendar(this.modalCtrl);
    dateSelected.subscribe(date => 
      this.date_of_birth = this.dateFormat.transform(date)
    );
  }

  //signup function to use auth service
  onSignInOne() {
     console.log(this.userData);
  }
  onKey(value: string) {
    this.value += value + ' | ';
    console.log(this.value);
  }

  getCommunity(value: string) {
    this.value = value;
    console.log(this.value);
    if (value != '') {
      var data = {'name':'abc', 'email':'example@gmail.com'};
      // this.getConfig('https://myaccount-sbhattacharjee.spartan-net.com/api/handle_request').subscribe(
       this.getConfig('https://www-sbhattacharjee.spartan-net.com/process.html?search_type=get_fiber_internet&fuzzySearchTerms=fult').subscribe(
        res => {
          //this.utils.hideLoader();
          this.resultData = res;
        console.log(this.resultData);
          if(this.resultData!=''){
            this.autoSearch = true;
            console.log(this.resultData.locations);
            this.autocompleteData = this.resultData.locations;
          }
          console.log("Successfully Completed");
        }, error => {
          // alert('Not connected');
          console.log(error);
          //this.utils.presentToast('Server connection failed. Check internet connection and try again..',3000, 'middle');
        });
    }else{
      this.autoSearch=false;
    }
  }

  getStreet(){
    var data = {'name':'abc', 'email':'example@gmail.com'};
    this.getConfig('https://maps.googleapis.com/maps/api/place/js/AutocompletionService.GetPredictionsJson?1sne&4sen-GB&15e3&key=AIzaSyDtRqVNykEt3Yr6pqzbpEb50JA4G210g4w&callback=_xdc_._wnj536&token=121624').subscribe(
      res => {
        //this.utils.hideLoader();
        this.resultData = res;
       console.log(this.resultData);
      //   if(this.resultData!=''){
      //     this.autosearch = true;
      //     console.log(this.resultData.locations);
      //     this.autocompleteData = this.resultData.locations;
      //   }
        console.log("Successfully Completed");
      }, error => {
        // alert('Not connected');
        console.log(error);
        //this.utils.presentToast('Server connection failed. Check internet connection and try again..',3000, 'middle');
      });
  }

  setLocation(value:any){
    console.log(value);
    if(value == 'apartment'){
      this.streetSelected= false;      
      this.apartmentSelected= true;
    }
    
    if(value == 'house_owned' || value == 'house_rented' || value == 'condo'){
      this.apartmentSelected= false;
      this.streetSelected= true;
      
    }
  }

  selectData(data){
    console.log(data);
    this.autoSearchValue = data.community_name+' '+data.city+', '+data.state;
    this.autoSearch = false;
  }

  getConfig(url) {
    console.log(url);
    // now returns an Observable of Config
    return this.http.get(url);
  }

  //go to login if already have account
  goLogin() {
    // this.navCtrl.setRoot(LoginPage);
  }


  // getImage() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  //   }

  //   this.camera.getPicture(options).then((imageData) => {
  //     this.imageURI = imageData;
  //   }, (err) => {
  //     console.log(err);
  //     this.presentToast(err);
  //   });
  // }

  // uploadFile() {
  //   let loader = this.loadingCtrl.create({
  //     content: "Uploading..."
  //   });
  //   loader.present();
  //   const fileTransfer: FileTransferObject = this.transfer.create();

  //   let options: FileUploadOptions = {
  //     fileKey: 'ionicfile',
  //     fileName: 'ionicfile',
  //     chunkedMode: false,
  //     mimeType: "image/jpeg",
  //     headers: {}
  //   }

  //   fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
  //     .then((data) => {
  //       console.log(data + " Uploaded Successfully");
  //       this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
  //       loader.dismiss();
  //       this.presentToast("Image uploaded successfully");
  //     }, (err) => {
  //       console.log(err);
  //       loader.dismiss();
  //       this.presentToast(err);
  //     });
  // }

  goBack(){
    this.navCtrl.setRoot(HomePage, {}, { animate: true });
  }
}
