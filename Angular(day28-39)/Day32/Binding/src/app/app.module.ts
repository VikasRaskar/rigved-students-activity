import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttBindingComponent } from './att-binding/att-binding.component';
import { Activity2Component } from './activity2/activity2.component';
import { Activity1Component } from './activity1/activity1.component';

@NgModule({
  declarations: [
    AppComponent,
    AttBindingComponent,
    Activity2Component,
    Activity1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
