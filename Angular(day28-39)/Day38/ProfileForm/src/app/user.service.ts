import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userArray: any[] = [{PrId:100, Name : "Devid", Gender: "Male",PhNo:1256789520, Email: "devid@gmail.com", Address:{State :"Maharastra", City:"Mumbai", Pin:400002}},{PrId:200, Name : "Taler", Gender: "Male",PhNo:12575684520, Email: "taler@gmail.com", Address:{State :"Karnataka", City:"Banglur", Pin:750004}}];

  constructor() { }

  public getUsers(): any[] {
    return this.userArray;
  }
  public save(obj: any): void {
    let b = this.userArray.length;
    let a = b + 1
    let object = { PrId: a, Name: obj.Name, Gender: obj.Gender, PhNo: obj.PhNo, Email: obj.Email, Address: { State: obj.Address.State, City: obj.Address.City, Pin: obj.Address.Pin } };
    this.userArray.push(obj);
  }
  public delete(id: number): void {
    for (let i = 0; i < this.userArray.length; i++) {
      let user = this.userArray[i];
      if (user.PrId == id) {
        this.userArray.splice(i, 1);
      }
    }
  }

  public update(id: number): any {
    for (let i = 0; i < this.userArray.length; i++) {
      let user = this.userArray[i];
      if (user.PrId == id) {
        return this.userArray[i];
      }
    }
  }

  public updateform(obj: any): void {
    for (let i = 0; i < this.userArray.length; i++) {
      let user = this.userArray[i];
      if (user.PrId == obj.PrId) {
        user.Name = obj.Name;
        user.Gender = obj.Gender;
        user.PhNo = obj.PhNo;
        user.Email = obj.Email;
        user.Address.State = obj.Address.State;
        user.Address.City = obj.Address.City;
        user.Address.Pin = obj.Address.Pin;
        console.log('Updateing form')
      }
    }
  }
}
