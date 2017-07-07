import { Component, OnInit , ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { Validation } from '../validation.service';
import { Data } from '../data.service';
import { Step2} from './step2.component';

@Component({
  selector: 'step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
  providers: [Validation,Data],
})
export class Step1 implements OnInit {
  @ViewChild(Step2) step2: Step2;
  childTitle:string = 'This text is passed to child';

  form: FormGroup;



  constructor(private fb: FormBuilder,private validation: Validation,private data: Data){


  }
  ngAfterViewInit() {
    // After the view is initialized, this.userProfile will be available
    this.update();
  }
  update() {
    // console.log(this.step2.userData);
  }
  ngOnInit() {
    this.form = this.fb.group(this.validation.step1Data());
  }
  next(){
    this.data.setData(this.form.value);
    console.log(this.data.getData());
  }
}
