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
