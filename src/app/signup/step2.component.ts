import {Component, OnInit,  Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { Validation } from '../validation.service';
import { Data } from '../data.service';

@Component({
  selector: 'step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
  providers: [Validation, Data],
})
export class Step2 implements OnInit{

    @Input() title:string;
    hidden: boolean = false;
   userData ='qweqweqwe';



  form: FormGroup;
  constructor(private fb: FormBuilder,private validation: Validation,private data: Data){
    console.log(this.title);
  }


  ngOnInit() {
    this.form = this.fb.group(this.validation.step2Data());
  }
  onChange(e){
    this.hidden = e == 'Employed';
  }
  finish(){
    console.log(this.data.getData());
    this.data.setData(this.form.value);
    console.log(this.data.getData());
  }
}
