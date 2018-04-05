import { BrowserModule } from '@angular/platform-browser';


import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/primeng';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {DropdownModule} from 'primeng/dropdown';
@NgModule({
    declarations: [
        TableComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        DialogModule,
        DropdownModule,
        TableModule,
        TooltipModule.forRoot()
    ],
    providers: []
})
export class TableXModule { }
