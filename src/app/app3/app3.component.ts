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
  public settingsObj1: Handsontable.GridSettings;



  constructor(private _hotRegisterer: HotTableRegisterer) {
    const hotInstance = this._hotRegisterer.getInstance(this.instance);
    var nestedObjects = [
      ['1','2','3','4','5'],
      ['1','2','3','4','5'],
      ['1','2','3','4','5'],
      ['1','2','3','4','5'],
    ]
    this.settingsObj = {
      data: nestedObjects ,
      minSpareRows: 1,
      minSpareCols: 0,
      fixedRowsTop: 1,
      autoColumnSize: { useHeaders: true },
      colHeaders: false,
      rowHeaders: false,
      contextMenu: true
      //columns: this.columns
    };
    this.settingsObj1 = {
      data: [['Projects '],['Projet1'],['Projet2'],['Projet3']],
      minSpareRows: 0,
      minSpareCols: 0,
      fixedRowsTop: 1,
      autoColumnSize: { useHeaders: true },
      colHeaders: false,
      rowHeaders: false,
      contextMenu: true
      //columns: this.columns
    };


  }

  ngOnInit() {
  }

}
