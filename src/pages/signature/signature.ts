import { Component, ViewChild } from '@angular/core';
import { NavController} from 'ionic-angular';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';

import {AccordionPage} from '../accordion/accordion';


@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html',
})
export class SignaturePage {
  @ViewChild(SignaturePad) public signaturePad : SignaturePad;

  public signaturePadOptions : Object = {
    'minWidth': 0.5,
    'canvasWidth': 340,
    'canvasHeight': 200
  };
  public signatureImage : string;

  constructor(public navCtrl: NavController) {
  }

   //Other Functions

  drawCancel() {
    this.navCtrl.push(AccordionPage);
  }

   drawComplete() {
    this.signatureImage = this.signaturePad.toDataURL();
    this.navCtrl.setRoot(AccordionPage, {signatureImage: this.signatureImage});
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

ngAfterViewInit() {
      this.signaturePad.clear();
      this.canvasResize();
}
}
