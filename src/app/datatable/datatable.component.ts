import { Component, OnInit } from '@angular/core';
import * as moment_ from 'moment';

@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  public projects = [
    {
      "client": "Talan SAS",
      "mission": "Byblos",
      "dateP": [
        {
          "date": "01-03-2018",
          "value": "1"
        },
        {
          "date": "02-03-2018",
          "value": "1/2"
        },
        {
          "date": "03-03-2018",
          "value": "1/3"
        },
        {
          "date": "04-03-2018",
          "value": "1/4"
        }
      ]
    },
    {
      "client": "foulen1",
      "mission": "foulenia1",
      "dateP": [
        {
          "date": "01-03-2018",
          "value": "1"
        },
        {
          "date": "02-03-2018",
          "value": "1/2"
        },
        {
          "date": "03-03-2018",
          "value": "1/3"
        },
        {
          "date": "04-03-2018",
          "value": "1/4"
        }
      ]
    },
    {
      "client": "foulen2",
      "mission": "foulenia2",
      "dateP": [
        {
          "date": "01-03-2018",
          "value": "1"
        },
        {
          "date": "02-03-2018",
          "value": "1/2"
        },
        {
          "date": "03-03-2018",
          "value": "1/3"
        },
        {
          "date": "04-03-2018",
          "value": "1/4"
        }
      ]
    }
  ];

  public currentMonth;
  public days = [];
  public daysN = [];
  public count: number;

  public rows = [
    { prop: 'client' },
    { prop: 'mission' },
    { name: 'Gender' },
    { name: 'Company', sortable: false }
  ];
  public columns = [];



  constructor() {
    let now = moment_(new Date());
    let count = now.daysInMonth();
    this.currentMonth = now.get('month');
    console.log(this.currentMonth)
    let days = [];
    //let daysN = [];
    let daysN2 = [];
    let testData = [];

    for (let i = 1; i <= count; i++) {
      this.days.push(i);
    }
    this.columns = this.days;
    console.log(this.columns)
    for (let i = 1; i <= count; i++) {
      let myDay: string;

      myDay = now.year() + "-" + now.get('month') + "-" + i + "";
      daysN2.push(
        [
          moment_(myDay).locale('fr').format("ddd")[0].toUpperCase(),
          moment_(myDay).locale('fr')
        ]
      );
      this.daysN.push(
        [
          moment_(myDay).locale('fr').format("ddd")[0].toUpperCase()
        ]
      );
    }
    console.log(this.daysN)
  }

  ngOnInit() {
  }

}
