import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-store',
  templateUrl: './user-store.component.html',
  styleUrls: ['./user-store.component.css']
})
export class UserStoreComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }
  myform : FormGroup = this.fb.group({
    profileId:[''];
    name: ['',Validators.required ],
    gender: ['',Validators.required],
    phNo: ['',Validators.required],
    email: ['',Validators.required],
    address: this.fb.group({
      city: ['', Validators.required],
      state: ['', Validators.required],
      pin: ['', Validators.required]
    })
  });
}
