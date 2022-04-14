import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-store',
  templateUrl: './user-store.component.html',
  styleUrls: ['./user-store.component.css']
})
export class UserStoreComponent implements OnInit {

  constructor(private fb : FormBuilder, private service : UserService) { }

  ngOnInit(): void {
  }
UserForm : FormGroup = this.fb.group({
  userId :[''],
  name:[''],
  dob:['']
});

saveForm(){
  this.service.save(this.UserForm.value);
}
}
