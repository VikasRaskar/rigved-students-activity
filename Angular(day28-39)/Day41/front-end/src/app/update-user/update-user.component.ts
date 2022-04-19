import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private _service: UserService) { }

  ngOnInit(): void {
  }


  updateData(value: any) {
    let body = {
      name: value.name,
      age: value.age
    }

    this._service.updateData(body, `622ca8c59f6c668226f74f52`)
      .subscribe(response => {
        console.log(response)
      })
  
}
}
