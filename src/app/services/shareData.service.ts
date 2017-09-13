import { Injectable } from '@angular/core';



@Injectable()

export class ShareData {
  data:any = {};

  setData(data){
    this.data = Object.assign({}, this.data, data);
  }
  removeData(){
      this.data = {};
  }

  getData(){
    return this.data;
  }

}
