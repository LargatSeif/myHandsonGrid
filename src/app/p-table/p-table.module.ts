import { BrowserModule } from '@angular/platform-browser';


import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { TableModule  } from 'primeng/table';
import { DialogModule } from 'primeng/primeng';
import { PTableComponent } from './p-table.component';

@NgModule({
    declarations: [
        PTableComponent
    ],
    imports: [
        BrowserModule,
        DialogModule,    
        TableModule 
    ],
    providers: []
})
export class PTableModule { }
