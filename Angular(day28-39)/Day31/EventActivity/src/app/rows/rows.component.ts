import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rows',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.css']
})
export class RowsComponent implements OnInit {

  userForm: FormGroup;
  listData: any;
  constructor(private fb: FormBuilder) {
    
    this.listData =[];
    this.userForm =this.fb.group ({
      FirstName :['', Validators.required],
      LastName :['', Validators.required]
    })
    
  }
  public addItem() : void{
    this.listData.push(this.userForm.value);
    
  }
  ngOnInit(): void {
  }

}
