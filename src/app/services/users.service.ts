import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  message:string="";

  constructor() { }

  setMessage(data:any){
    this.message=data;
  }

  getMessage(){
    return this.message;
  }

}
