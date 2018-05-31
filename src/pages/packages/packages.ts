import { Component, ViewChild, OnInit, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-packages',
  templateUrl: 'packages.html',
})
export class PackagesPage{
  accordianExpand = false;
  @ViewChild("cc") listContent: any;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public render: Renderer
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackagesPage');
  }

  

  ngOnInit(){
    console.log(this.listContent.nativeElement);
  }

  toggleAccordion(){
    if(this.accordianExpand){
      this.render.setElementStyle(this.listContent.nativeElement, "max-height", "0px");
    }else{
      this.render.setElementStyle(this.listContent.nativeElement, "max-height", "500px");
    }

    this.accordianExpand = !this.accordianExpand;
  }



}
