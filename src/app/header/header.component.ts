import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
      isLogin: boolean = false;
      constructor(){

      }

  logIn(){

  }
}
