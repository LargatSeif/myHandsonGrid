import { BrowserModule } from '@angular/platform-browser';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
//ng2-jsGrid
import { JsGridModule } from 'ng2-jsgrid';

/*
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
*/
import { MomentModule } from 'angular2-moment';
import { App2Component } from './app2/app2.component';

import { HotTableModule } from '@handsontable/angular';
import { HotTableRegisterer } from '@handsontable/angular';
import { AppComponent } from './app.component';
import { App3Component } from './app3/app3.component';

const routes:Routes = [
  {path:'',component:App2Component},
]

@NgModule({
  declarations: [
    AppComponent,
    App2Component,
    App3Component
  ],
  imports: [
    BrowserModule,
    HotTableModule,
    MomentModule,
    RouterModule,
    FormsModule,
    HttpModule,
    JsGridModule
  ],
  providers: [ HotTableRegisterer ],
  bootstrap: [AppComponent]
})
export class AppModule { }
