import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-store',
  templateUrl: './user-store.component.html',
  styleUrls: ['./user-store.component.css']
})
export class UserStoreComponent implements OnInit {

  constructor(private fb : FormBuilder, private service : UserService) { }

  ngOnInit(): void {
  }
  userForm : FormGroup = this.fb.group({
    PrId :['', Validators.required,Validators.pattern('[0-9]*')],
    Name :['',Validators.required],
    Gender :['',Validators.required],
    PhNo : ['', Validators.required, Validators.pattern('[0-9]*')],
    Email : ['', Validators.required, Validators.email],
    Address : this.fb.group({
      State : ['', Validators.required],
      City : ['', Validators.required],
      Pin : ['', Validators.required]
    })
  });
  saveForm(){

    this.service.save(this.userForm.value);
  }
}
