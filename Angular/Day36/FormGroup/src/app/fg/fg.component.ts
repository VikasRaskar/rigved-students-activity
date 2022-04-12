import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-fg',
  templateUrl: './fg.component.html',
  styleUrls: ['./fg.component.css']
})
export class FgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
username : FormControl = new FormControl('', Validators.required);
password : FormControl = new FormControl('', Validators.compose([
  Validators.minLength(4), Validators.maxLength(10), Validators.required
]));

handleSubmit() :void{
console.log(this.username.value);
console.log(this.password.value);

}
}
