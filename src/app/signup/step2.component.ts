import {Component, OnInit,  Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { ShareData } from '../shareData.service';

@Component({
  selector: 'step2',
  templateUrl: './step2.component.html',
  styleUrls: ['../global.css']
})
export class Step2 implements OnInit{

    hidden: boolean = false;
    form: FormGroup;
    data:any;
  constructor(private fb: FormBuilder,public ShareData: ShareData){

  }

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
  ngOnInit() {
    console.log('Step 2 data',this.ShareData.getData());
    this.form = this.fb.group({
      username: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(15)] ],
      password: ['',[Validators.required,Validators.minLength(6),Validators.pattern('^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')] ],
      confirmPassword: ['',[Validators.required, this.confirmPassword]],
      employ: ['',Validators.required],
      work: ['',Validators.required],
      money: [''],
      sport: [''],
      terms: [false,Validators.pattern('true')]

    });
  }
  onChange(e){
    this.hidden = e == 'Employed';
    let control = this.form.get('work');
    this.hidden ? control.enable() : control.disable();
  }

  finish(){
    this.ShareData.setData(this.form.value);
    this.data = this.ShareData.getData();
    localStorage.setItem(this.data.username, JSON.stringify(this.data));
  }

}
