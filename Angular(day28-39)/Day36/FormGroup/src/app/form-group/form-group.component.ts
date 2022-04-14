import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
profile : FormGroup = new FormGroup({
  firstname : new FormControl('', Validators.required),
  lastname : new FormControl('', Validators.required)
});
handleSubmit(){
  console.log(this.profile.value);
  this.profile.reset({})
}
}
