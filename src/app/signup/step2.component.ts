import {Component, OnInit,  Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { Validation } from '../validation.service';

@Component({
  selector: 'step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
  providers: [Validation],
})
export class Step2 implements OnInit{

    @Input() childData:any;

    hidden: boolean = false;
    form: FormGroup;
    completeData: any;
    hideSummary = false;
  constructor(private fb: FormBuilder,private validation: Validation){
  }


  ngOnInit() {
    this.form = this.fb.group(this.validation.step2Data());
    console.log(this.childData);
  }
  onChange(e){
    this.hidden = e == 'Employed';
  }
  finish(){
    this.completeData = Object.assign({}, this.form.value, this.childData);
    localStorage.setItem(this.completeData.username, JSON.stringify(this.completeData));
    this.hideSummary = true;
  }
  // changeDataFunc(){
  //   // this.changeData = this.childData;
  //   // console.log(this.changeData);
  //   console.log(this.childData);
  // }
}
