import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserStoreComponent } from './user-store/user-store.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

let route : Routes = [
  {path: "", component : UserListComponent},
  {path: "store", component: UserStoreComponent},
  {path: "userList", component: UserListComponent},
  {path: "delete", component: UserDeleteComponent},
  {path: "update", component: UserUpdateComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserStoreComponent,
    UserDeleteComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userArray: any[] = [];

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
