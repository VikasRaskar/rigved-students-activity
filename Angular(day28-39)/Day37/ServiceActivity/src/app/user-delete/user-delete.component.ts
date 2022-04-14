import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  constructor(private service : UserService) { }

  ngOnInit(): void {
  }
id : FormControl = new FormControl('');
deleteUser(){
  this.service.delete(this.id.value);
}

}
