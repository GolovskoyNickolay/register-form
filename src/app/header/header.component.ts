import { Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['../global.css']
})
export class HeaderComponent {
      login: boolean = false;
      logout: boolean = false;
      constructor(private router:Router){
        router.events.subscribe(event => {
           if(event.url == '/step1' || event.url == '/step2'){
             this.login = true;
             this.logout = false;
           }
          if(event.url == '/summary'){
            this.login = false;
            this.logout = true;
          }
          if(event.url == '/login'){
            this.login = false;
            this.logout = false;
          }
        });
      }
}
