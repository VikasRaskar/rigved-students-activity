import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  items : undefined |any[] =undefined;
  constructor(public service : AuthService) { }

  ngOnInit(): void {
    this.items = this.service.getUsers();
  }

}
