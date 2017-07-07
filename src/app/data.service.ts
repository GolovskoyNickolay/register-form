import { Injectable } from '@angular/core';

@Injectable()
export class Data{

      usersArr: any;
      newUser:any;
      constructor(){
        this.usersArr = JSON.parse(localStorage.getItem('itemsArray')) || [];



//         var retrievedObject = localStorage.getItem('testObject');
//
//         console.log('retrievedObject: ', JSON.parse(retrievedObject));
      }
      setData(data){
        this.newUser = data;

        this.usersArr.push(this.newUser);

        localStorage.setItem('itemsArray', JSON.stringify(this.usersArr));
      }
      getData(){

      }


}
