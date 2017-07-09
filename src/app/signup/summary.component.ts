import { Component, OnInit , ViewChild, NgModule, ChangeDetectorRef, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';


@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['../global.css']
})

export class Summary implements OnInit{
    @Input() data:any;
  form: FormGroup;
  hidden:boolean = false;
  editMode:boolean = false;
  summaryData: any;
  constructor(private fb: FormBuilder){

  }


  ngOnInit(){
    console.log(this.data);
    this.form = this.fb.group({
      name: [this.data.name,[Validators.required,Validators.minLength(2),Validators.maxLength(15)] ],
      surname: [this.data.surname, [Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      age: [this.data.age, [Validators.required,this.validateDate]],
      tel: [this.data.tel, Validators.required],
      address: [this.data.address, Validators.required],
      city: [this.data.city, Validators.required],
      street: [this.data.street],
      username: [this.data.username,[Validators.required,Validators.minLength(2),Validators.maxLength(15)] ],
      password: [this.data.password,[Validators.required,Validators.minLength(6),Validators.pattern('^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')] ],
      employ: [this.data.employ,Validators.required],
      work: [this.data.work,Validators.required],
      money: [this.data.money],
      sport: [this.data.sport],
    });
    let control = this.form.get('work');
    this.hidden ? control.enable() : control.disable();
  }
  edit(){
    this.editMode = true;
    this.summaryData  = this.form.value;
  }
  saveEdit(){
    localStorage.removeItem(this.summaryData.username);
    localStorage.setItem(this.form.value.username, JSON.stringify(this.form.value));
    this.editMode = false;
  }
  onChange(e){
    this.hidden = e == 'Employed';
    let control = this.form.get('work');
    this.hidden ? control.enable() : control.disable();
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
}
