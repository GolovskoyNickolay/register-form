import {Component, OnInit,  Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'step2',
  templateUrl: './step2.component.html',
  styleUrls: ['../global.css']
})
export class Step2 implements OnInit{

    @Input() childData:any;

    hidden: boolean = false;
    form: FormGroup;
    completeData: any;
    hideSummary = false;
  constructor(private fb: FormBuilder){

  }

  confirmPassword(c: FormControl){
    if(c.parent){
      if(c.parent.controls['password'].value == c.parent.controls['confirmPassword'].value){
        return null
      }else{
        return {confirmPassword: {
          valid: false}};
      }
    }
  }
  ngOnInit() {
    this.form = this.fb.group({
      username: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(15)] ],
      password: ['',[Validators.required,Validators.minLength(6),Validators.pattern('^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')] ],
      confirmPassword: ['',[Validators.required, this.confirmPassword]],
      employ: ['',Validators.required],
      work: ['',Validators.required],
      money: [''],
      sport: [''],
      terms: [false,Validators.pattern('true')]

    });
  }
  onChange(e){
    this.hidden = e == 'Employed';
    let control = this.form.get('work');
    this.hidden ? control.enable() : control.disable();
  }

  finish(){
    this.completeData = Object.assign({}, this.form.value, this.childData);
    localStorage.setItem(this.completeData.username , JSON.stringify(this.completeData));
    this.hideSummary = true;
  }

}
