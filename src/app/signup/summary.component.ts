import { Component } from '@angular/core';
import { Validation } from '../validation.service';



@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  providers: [Validation]
})

export class Summary{
  constructor(){

  }

}
