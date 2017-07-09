import { Component, OnInit , ViewChild, NgModule, ChangeDetectorRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'step1',
  templateUrl: './step1.component.html',
  styleUrls: ['../global.css']
})
export class Step1 implements OnInit {
  toChildData:any;
  form: FormGroup;
  hideStep2: boolean = true;
  stepActive: boolean = true;

  constructor(private fb: FormBuilder, private detect : ChangeDetectorRef){


  }
  validateDate(c: FormControl) {
    let Date_REGEXP = new RegExp('^([0-2][0-9]||3[0-1])/(0[0-9]||1[0-2])/([0-9][0-9])?[0-9][0-9]$');

    let isValid = Date_REGEXP.test(c.value);
    if(isValid){
      let today = new Date();
      let birthDate = new Date(c.value);
      let age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if(age < 18){
        return {validateDate: {
          valid: false}};
      }else{
        return null;
      }
    }else{
      return {validateDate: {
        valid: false}};
    }
  };
  ngOnInit() {
    this.form = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(15)] ],
      surname: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      age: ['', [Validators.required,this.validateDate]],
      tel: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      street: ['']
    });
  }

  next(){
    this.stepActive = false;
    this.toChildData = this.form.value;
    this.hideStep2 = false;
}

}
