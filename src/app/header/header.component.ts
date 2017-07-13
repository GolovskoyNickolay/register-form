import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['../global.css']
})
export class HeaderComponent {
      login: boolean = false;
      logout: boolean = false;
      signup: boolean = true;
      constructor(private router:Router){
        router.events.subscribe(event => {
           if(event.url == '/step1' || event.url == '/step2'){
             this.signup = false;
             this.login = true;
             this.logout = false;
           }
          if(event.url == '/summary'){
            this.signup = false;
            this.login = false;
            this.logout = true;
          }
          if(event.url == '/login'){
            this.signup = true;
            this.login = false;
            this.logout = false;
          }
        });
      }
}
