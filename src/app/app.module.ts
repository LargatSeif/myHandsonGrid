import { BrowserModule } from '@angular/platform-browser';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';
//ng2-jsGrid
import { JsGridModule } from 'ng2-jsgrid';

/*
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
*/
import { MomentModule } from 'angular2-moment';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
//import { HotTableModule } from '@handsontable/angular';

import { AppComponent } from './app.component';
import { NativeComponent } from './native/native.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { DatatableComponent } from './datatable/datatable.component';
import { DataTableModule } from './datatable';
import { TimetableComponent } from './timetable/timetable.component';
import { DpDatePickerModule } from 'ng2-date-picker';
import { TableComponent } from './table/table.component';
import { TableXModule } from './table/table.module'; 
const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'timetable', component: TimetableComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NativeComponent,
    TimetableComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule, 
    DataTableModule,
    BsDropdownModule.forRoot(), 
    DpDatePickerModule,
    TableXModule,
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
