import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  object:any | undefined=undefined
  constructor(private fb : FormBuilder, private service : AuthService, private _router : Router) { }

  ngOnInit(): void {
  }

  PrId:FormControl=new FormControl('')
  

  InfoForm: FormGroup = this.fb.group({
    PrId:['',Validators.required],
    Name:['', Validators.required],
    Gender:['', Validators.required],
    PhNo:['',Validators.required],
    Email:['', Validators.required],
    Address:this.fb.group({
      State:['', Validators.required],
      City:['', Validators.required],
      Pin:['',Validators.required]
    })
  })

  setInfoValue(){
    this.InfoForm.controls['PrId'].setValue(this.object.PrId);
    this.InfoForm.controls['Name'].setValue(this.object.Name);
    this.InfoForm.controls['Gender'].setValue(this.object.Gender);
    this.InfoForm.controls['PhNo'].setValue(this.object.PhNo);
    this.InfoForm.controls['Email'].setValue(this.object.Email);
    this.InfoForm.controls['Address'].get('State')?.setValue(this.object.Address.State);
    this.InfoForm.controls['Address'].get('City')?.setValue(this.object.Address.City);
    this.InfoForm.controls['Address'].get('Pin')?.setValue(this.object.Address.Pin);
  }
  
  updateForm(){
    this.service.updateform(this.InfoForm.value);
    this._router.navigate(["userList"]);
    
  }

  getInfo(){
    this.object=this.service.update(this.PrId.value)
    console.log(this.object)
  }
}
