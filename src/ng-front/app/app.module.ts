import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {AppRoutingModule} from './app.routing';

import { SamplePage1Component } from './sample-page-1/sample-page-1.component';
import { SamplePage2Component } from './sample-page-2/sample-page-2.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SamplePage1Component,
    SamplePage2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
