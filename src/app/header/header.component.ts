import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['../global.css']
})
export class HeaderComponent {
      login: boolean = false;
      logout: boolean = false;
      signup: boolean = true;
      constructor(){

      }

  showSignUp(){
    this.signup = false;
    this.login= true;
  }
  logIn(){
    this.signup = true;
    this.login= false;
  }
}
