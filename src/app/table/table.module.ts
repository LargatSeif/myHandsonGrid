import { BrowserModule } from '@angular/platform-browser';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table.component';
import { DataTableModule } from 'primeng/datatable';
@NgModule({
    declarations: [
        TableComponent,
    ],
    imports: [
        BrowserModule,
        DataTableModule
    ],
    providers: []
})
export class TableModule { }
