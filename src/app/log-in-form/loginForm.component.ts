import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'loginForm-component',
  templateUrl: './loginForm.component.html',
  styleUrls: ['../global.css']
})
export class LoginFormComponent {
  form: FormGroup;
  newUser: boolean = false;
  passwordError: boolean = false;
  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      username: ['',[Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  checkUsername(){
    if(!localStorage.getItem(this.form.controls['username']['_value'])){
      this.newUser = true;
    }else{
      this.newUser = false;
    }
  }
  checkPassword(){
    if(!this.newUser && localStorage.getItem(this.form.controls['username']['_value'])  !== this.form.controls['password']['_value']){
      this.passwordError = true;
    }else{
      this.passwordError = false;
    }
  }
  signUp(){
    localStorage.setItem(this.form.controls['username']['_value'], this.form.controls['password']['_value']);
  }
}
