import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-store',
  templateUrl: './user-store.component.html',
  styleUrls: ['./user-store.component.css']
})
export class UserStoreComponent implements OnInit {

  constructor(private fb : FormBuilder, private service : UserService, private _router : Router) { }

  ngOnInit(): void {
  }
  userForm : FormGroup = this.fb.group({
    PrId :['', Validators.required,],
    Name :['',Validators.required],
    Gender :['',Validators.required],
    PhNo : ['',Validators.required],
    Email : ['', Validators.required],
    Address : this.fb.group({
      State : ['', Validators.required],
      City : ['', Validators.required],
      Pin : ['',Validators.compose([Validators.maxLength(6),Validators.required,Validators.minLength(6)])],
    })
  });
  saveForm(){

    this.service.save(this.userForm.value);
    this._router.navigate(["userList"]);

  }
}
