import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userArray : any[]= [];
  constructor() { }
  public getUser() : any[]{
    return this.userArray;
  }
  public saveUser(obj : any) : void{
    this.userArray.push(obj);
  }
  public deleteUser(id : number): void{
    for(let i = 0; i < this.userArray.length; i++){
      let user = this.userArray[i];
      if(user.profileId == id){
        this.userArray.splice(i, 1)
      }
    }
  }
}
