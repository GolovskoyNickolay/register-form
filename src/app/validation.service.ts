import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class Validation{
  step1 : any;
  step2 : any;

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

  confirmPassword(c: FormControl){
    if(c.parent){
      if(c.parent.controls['password'].value == c.parent.controls['confirmPassword'].value){
        return null
      }else{
        return {confirmPassword: {
          valid: false}};
      }
    }
  }

  constructor(){
    this.step1= {
      name: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(15)] ],
      surname: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      age: ['', [Validators.required,this.validateDate]],
      tel: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      street: ['']
    };
    this.step2 = {
      username: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(15)] ],
      password: ['',[Validators.required,Validators.minLength(6),Validators.pattern('^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')] ],
      confirmPassword: ['',[Validators.required, this.confirmPassword]],
      employ: ['',Validators.required],
      work: ['',Validators.required],
      money: [''],
      sport: [''],
      terms: [false,Validators.pattern('true')]

    };
  }
    step1Data(){
      return this.step1;
    }
    step2Data(){
      return this.step2;
    }


}
