import { Component, OnInit } from '@angular/core';
import { HotTableRegisterer } from '@handsontable/angular';
import * as Handsontable from 'handsontable';

@Component({
  selector: 'app-app3',
  templateUrl: './app3.component.html',
  styleUrls: ['./app3.component.css']
})
export class App3Component implements OnInit {

  instance: string = 'hot';
  dataset: any;
  fetched: boolean = false;
  error: boolean = false;
  public settingsObj: Handsontable.GridSettings;

  columns: any[] = [
    { data: 'name', title: 'Name' },
    { data: 'age', title: 'Age', type: 'numeric' },
    { data: 'balance', title: 'Balance' },
    { data: 'company', title: 'Company' },
    { data: 'gender', title: 'Gender', type: 'dropdown', source: ['male', 'female'] },
    { data: 'phone', title: 'Phone' },
    { data: 'registered', title: 'Registered' },
    { data: 'isActive', title: 'Is active?', type: 'checkbox' },
    {
      data: 'about',
      title: 'About',
      renderer(hotInstance, td, row, column, prop, value, cellProperties) {
        const limit = 50;
        
        if (!value) {
          value = '';
        }

        value = value.length > limit ? `${value.substr(0, limit - 3)}...` : value;

        Handsontable.renderers.TextRenderer.apply(this, [hotInstance, td, row, column, prop, value, cellProperties]);
      }
    },
  ];

  constructor() { 
    this.settingsObj = {
      data: Handsontable.helper.createSpreadsheetData(5,10),
      fixedRowsTop: 1,
      rowHeaders: false,
      columns: this.columns
    };
  }

  ngOnInit() {
  }

}
