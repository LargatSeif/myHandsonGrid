import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DatatableComponent } from './datatable.component';

@NgModule({
    declarations: [
        DatatableComponent
    ],
    imports: [
        BrowserModule,
        NgxDatatableModule
    ],
    providers: []
})
export class DataTableModule { }
