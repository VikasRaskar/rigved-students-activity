import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {



  constructor(private builder : FormBuilder) { }

  ngOnInit(): void {
  }
profile : FormGroup = this.builder.group({
  firstname :[''],
  lastname : ['']
});
handleSubmit(){
  console.log(this.profile.value);
  this.profile.reset({});

}
}
