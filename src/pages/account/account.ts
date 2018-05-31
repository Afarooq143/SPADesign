import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
//import { Chart } from 'chart.js';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  segments: string = "profile";
  confirmation=true;
  profile = false;
  location = false;
  users = false;
  payment = false;
  completed = false;
  selected: any;
  month: string;
  year: number;
  imageURI:any;
  imageFileName: any;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private transfer: FileTransfer,
  private camera: Camera,
  public loadingCtrl : LoadingController,
    //public datePicker: DatePicker
  ) {
   

  }

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
  
    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      // this.presentToast(err);
    });
  }


  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();
  
    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }
  
    fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
      .then((data) => {
      console.log(data+" Uploaded Successfully");
      this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
      loader.dismiss();
      console.log("Image uploaded successfully");
    }, (err) => {
      console.log(err);
      loader.dismiss();
      console.log(err);
    });
  }


  ionViewDidLoad() {
    this.isActive('profile');
    // this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
    //   type: 'doughnut',
    //   data: {
    //     labels: ["Completed", "Incomplete",],
    //     datasets: [{
    //       label: '100 of Votes',
    //       data: [50, 50],
    //       backgroundColor: [          
    //         "#488aff",
    //         "#d1cfcf",
    //       ],
    //     }]
    //   }

    // });
  }

  // datepicker() {
  //   this.datePicker.show({
  //     date: new Date(),
  //     mode: 'date',
  //     androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
  //   }).then(
  //     date => console.log('Got date: ', date),
  //     err => console.log('Error occurred while getting date: ', err)
  //     );
  // }

  menu(page) {
    this.selected = page;
   // console.log(page);
    switch (page) {
      case 'profile':
        this.confirmation=false;
        this.profile = true;
        this.location = false;
        this.users = false;
        this.payment = false;
        this.completed = false;
        break;
      case 'location':
        this.confirmation=false;
        this.profile = false;
        this.location = true;
        this.users = false;
        this.payment = false;
        this.completed = false;
        break;
      case 'users':
        this.confirmation=false;
        this.profile = false;
        this.location = false;
        this.users = true;
        this.payment = false;
        this.completed = false;
        break;
      case 'payment':
        this.confirmation=false;
        this.profile = false;
        this.location = false;
        this.users = false;
        this.payment = true;
        this.completed = false;
        break;
      default:
        this.confirmation=true;
        this.profile = false;
        this.location = false;
        this.users = false;
        this.payment = false;
        this.completed = false;
        break;
    }
  }

  isActive(item) {
    console.log(item);
    return this.selected === item;
  };


}
