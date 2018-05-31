import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
@Component({
  selector: 'page-formvalidation',
  templateUrl: 'formvalidation.html',
})
export class FormvalidationPage {
  sampleForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.sampleForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'age': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'address': new FormGroup({
        'country': new FormControl('', Validators.required),
        'city': new FormControl('', Validators.required)
      })
    }
   );
  }

  onSubmit(sampleForm: NgForm) {
    console.log('Form successful submit.');
    console.log(sampleForm.value);
  }
 
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormvalidationPage');
  }

}
