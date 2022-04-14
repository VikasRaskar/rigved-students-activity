import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { customePipe } from './employee-data/employee.pipe.component';
import { AppComponent } from './app.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDataComponent,
    customePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
