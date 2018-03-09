import { Component, OnInit } from '@angular/core';

import { HotTableRegisterer } from '@handsontable/angular';
import * as Handsontable from 'handsontable';
import * as moment_ from 'moment';
@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit {
  instance: string = 'hot';

  //data: any[] = Handsontable.helper.createSpreadsheetData(10, 10);

  public days = [];
  public daysN = [];
  public count: number;
  public settingsObj: Handsontable.GridSettings;

  constructor(private _hotRegisterer: HotTableRegisterer) {
    let now = moment_(new Date());
    let count = now.daysInMonth();
    let days = [];
    let daysN = [];
    let daysN2 = [];
    let testData = [];
    let colsOpts = []
    const hotInstance = this._hotRegisterer.getInstance(this.instance);

    for (let i = 1; i <= count; i++) {
      days.push(i);
      testData.push('1', '1/2', '1/3', '1/4')
      colsOpts.push(
        {
          editor: 'select',
          selectOptions: ['1', '1/2', '1/3', '1/4']
        }
      );
    }

    for (let i = 1; i <= count; i++) {
      let myDay: string;

      myDay = now.year() + "-" + now.get('month') + "-" + i + "";
      daysN2.push(
        [
          moment_(myDay).locale('fr').format("ddd")[0].toUpperCase(),
          moment_(myDay).locale('fr')
        ]
      );
      daysN.push(
        [
          moment_(myDay).locale('fr').format("ddd")[0].toUpperCase()
        ]
      );
    }

    this.settingsObj = {
      data: [testData],
      colHeaders: [[daysN],[days] ],
      fixedRowsTop: 2,
      rowHeaders: false,
      columns: colsOpts
    };
  }
  selection: string = '';

  onAfterSelection($event) {
    let [sRow, sCol, eRow, eCol] = $event.hotInstance.getSelected();
    sCol = Handsontable.helper.spreadsheetColumnLabel(sCol);
    eCol = Handsontable.helper.spreadsheetColumnLabel(eCol);

    let text = `${sCol}${sRow + 1}`;
    let textEnd = `${eCol}${eRow + 1}`;

    if (text !== textEnd) {
      text = `${text}:${textEnd}`
    }

    this.selection = text;
  }

  onAfterDeselect() {
    this.selection = '';
  }

  click() {
    console.log(this._hotRegisterer.getInstance(this.instance).getCell(2, 0).textContent);
  }

  ngOnInit() {
  }

}
