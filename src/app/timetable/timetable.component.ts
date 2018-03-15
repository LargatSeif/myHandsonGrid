import { Component, OnInit } from '@angular/core';
import { CradataService } from '../services/cradata.service';
import { craData } from '../models/cradata.model';

import * as moment_ from 'moment';
declare var $: any;

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css'],
  providers: [CradataService]
})
export class TimetableComponent implements OnInit {

  public currentMonth: number = 3;
  public currentYear: number = 2017;
  public CraDataLoaded: Promise<boolean>;
  public currrentCra: craData;

  public days = [];
  public daysN = [];
  public count: number;
  public isEdit: boolean = false;
  public sum = [];
 
  constructor(private _craDataService: CradataService) {

  }

  ngOnInit() {
    this._craDataService.getCra().subscribe(
      (value: craData) => {
        console.log(value)

        this.currrentCra = value;
        this.currentMonth = value.mois;
        this.currentYear = value.annee;

        this.CraDataLoaded = Promise.resolve(true);
      },
      error => () => {
        console.log('failed to fetch cra data'); this.CraDataLoaded = Promise.resolve(false);
      });

      this.daysN = this.getDateDaysN(this.currentMonth,this.currentYear)
  }

  refreshDateData() {
    //this.days = this.getDateDays(this.currentMonth, this.currentYear);
    this.daysN = this.getDateDaysN(this.currentMonth, this.currentYear);
  }

  getDateDays(currentMonth, currentYear) {
    const now = moment_(currentMonth + "-01-" + currentYear, "MM-DD-YYYY");
    let days = [];
    for (let i = 1; i <= now.daysInMonth(); i++) {
      const current = moment_(currentMonth + "-" + i + "-" + currentYear, "MM-DD-YYYY");
      days.push({ day: current.date(), month: current.month() + 1, year: current.year() });
    }
    return days;
  }

  getDateDaysN(currentMonth, currentYear) {
    const now = moment_(currentMonth + "-01-" + currentYear, "MM-DD-YYYY");
    const count = now.daysInMonth();
    let daysN = [];
    for (let i = 1; i <= count; i++) {
      daysN.push(moment_(now.year() + "-" + currentMonth + "-" + i + "").locale('fr').format("ddd")[0].toUpperCase());
    }

    return daysN;
  }

  getCraByDate(craService: CradataService, month: number, year: number) {
    let data: craData;



    return data;
  }







  calcSum(data_array: any) {
    let sum = 0;
    for (let index = 0; index < data_array.length; index++) {
      const el = data_array[index]
      sum = el.value + sum;
    }
    return sum;
  }



  changeYear(currentYear) {
    this.currentYear = currentYear;
    this.refreshDateData();
  }

  changeMonth(currentMonth) {
    this.currentMonth = currentMonth;
    this.refreshDateData();
  }



  complete(project) {
    console.log("COMPLETE ACTION")
  }



  prevMonth() {
    this.currentMonth = this.currentMonth - 1;
    this.refreshDateData()
  }

  nextMonth() {
    this.currentMonth = this.currentMonth + 1;
    this.refreshDateData()
  }
}
