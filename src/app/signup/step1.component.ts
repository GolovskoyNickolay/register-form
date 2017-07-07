import { Component, OnInit , ViewChild, NgModule, ChangeDetectorRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { Validation } from '../validation.service';

@Component({
  selector: 'step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
  providers: [Validation],
})
export class Step1 implements OnInit {
  toChildData:any;
  form: FormGroup;
  hideStep2: boolean = true;
  userData1 :any;
  checkage :boolean = false;



  constructor(private fb: FormBuilder,private validation: Validation, private detect : ChangeDetectorRef){

this.userData1 = {
  name:'',
  surname:'',
  age:'',
  tel:'',
  address:'',
  city:'',
  street:'',
}
  }

  ngOnInit() {
    this.form = this.fb.group(this.validation.step1Data());
  }
  dateCheck(e){
    let today = new Date();
    let birthDate = new Date(e.target.value);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if(age < 18){
     this.checkage = true;
    }else{
      this.checkage = false;
    }
  }
  next(){
console.log(this.userData1)
      // this.toChildData = this.form.value;
      // this.hideStep2 = false;
  }

}
