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

//import { HotTableModule } from '@handsontable/angular';

import { AppComponent } from './app.component';
import { NativeComponent } from './native/native.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { DatatableComponent } from './datatable/datatable.component';
import { DataTableModule } from './datatable';

const routes:Routes = [
  {path:'',component:NativeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NativeComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    BsDropdownModule.forRoot(),
    MultiselectDropdownModule,
    MomentModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    JsGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
