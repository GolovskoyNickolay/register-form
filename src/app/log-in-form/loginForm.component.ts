import { Component } from '@angular/core';

@Component({
  selector: 'loginForm-component',
  templateUrl: './loginForm.component.html',
  styleUrls: ['../global.css']
})
export class LoginFormComponent {
  username: string = '';
  password: any = '';
  usernameError: boolean = false;
  passwordError: boolean = false;
  constructor(){
  }
  checkUsername(e){
    if(!localStorage.getItem(e.target.value)){
      this.usernameError = true;
    }else{
      this.usernameError = false;
      this.username = e.target.value;
    }
  }
  checkPassword(e){
    if(this.username && JSON.parse(localStorage.getItem(this.username)).password !== e.target.value){
      this.passwordError = true;
    }else{
      this.passwordError = false;
      this.password = e.target.value;
    }
  }
  logIn(){
    if(!this.password){
      this.passwordError = true;
    }
   if(!this.username){
     this.usernameError = true;
   }
  }
}
