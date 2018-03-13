import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as moment_ from 'moment';
declare var $: any;
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
@Component({
    selector: 'app-native',
    templateUrl: './native.component.html',
    styleUrls: ['./native.component.css']
})
export class NativeComponent implements OnInit {
    public currentMonth;
    public currentYear;
    public days = [];
    public daysN = [];
    public count: number;

    public isEdit: boolean = false;
    public sum = [];
    public projects = [
        {
            "client": "Talan SAS",
            "mission": "Byblos",
            "dateP": [

                {
                    "date": "03-01-2018",
                    "value": 1
                },
                {
                    "date": "03-02-2018",
                    "value": 1 / 2
                },
                {
                    "date": "03-03-2018",
                    "value": 1 / 3
                },
                {
                    "date": "03-04-2018",
                    "value": 1 / 4
                }
            ],
            "joursT": 0
        },
        {
            "client": "Talan SAS",
            "mission": "Other",
            "dateP": [
                {
                    "date": "03-09-2018",
                    "value": 1
                },
                {
                    "date": "03-13-2018",
                    "value": 1 / 2
                },
                {
                    "date": "03-12-2018",
                    "value": 1 / 3
                },
                {
                    "date": "03-20-2018",
                    "value": 1 / 4
                }
            ],
            "joursT": 0
        }
    ];

    constructor() {
        this.initTimeTable();
    }

    initTimeTable(){
        let now = moment_(new Date());
        let days = [];
        this.currentMonth = now.get('month') + 1;
        this.currentYear = now.get('year');

        this.count = now.daysInMonth();
        this.days = this.getDateDays(this.currentMonth,this.currentYear);
        this.daysN = this.getDateDaysN(this.currentMonth,this.currentYear);
    }

    changeYear(currentYear){
        console.log(currentYear)
        this.currentYear = currentYear;

        this.days = this.getDateDays(this.currentMonth,this.currentYear);
        this.daysN = this.getDateDaysN(this.currentMonth,this.currentYear);
        
    }

    changeMonth(currentMonth){
        console.log(currentMonth)
        this.currentMonth = currentMonth;
        this.days = this.getDateDays(this.currentMonth,this.currentYear);
        this.daysN = this.getDateDaysN(this.currentMonth,this.currentYear);
        
    }

    getDateDays(currentMonth ,currentYear){
        let now = moment_(currentMonth+"-01-"+currentYear,"MM-DD-YYYY");
        let days = [];

        for (let i = 1; i <= now.daysInMonth(); i++) {
            let current = moment_(currentMonth + "-" + i + "-" + currentYear, "MM-DD-YYYY");
            days.push({
                day: current.date(),
                month: current.month() + 1,
                year: current.year()
            });
        }
        return days;

        
    }

    getDateDaysN(currentMonth ,currentYear){
        let now = moment_(currentMonth+"-01-"+currentYear,"MM-DD-YYYY");
        let daysN=[];
        for (let i = 1; i <= now.daysInMonth(); i++) {
            daysN.push(moment_(now.year() + "-" + now.get('month') + "-" + i + "").locale('fr').format("ddd")[0].toUpperCase());
        }
        return daysN;
    }

    ngOnInit() {
        this.projects.forEach(project => {
            project.dateP = this.realToApp(this.count, project, this.days);
            project.joursT = this.calcSum(project.dateP);
        })
    }

    placehold_it(array_length, arr) {
        let returnArr = [];
        for (let i = 0; i < array_length; i++) {
            let the_day = arr[i];
            let the_moment = moment_(the_day.year + "-" + the_day.month + "-" + the_day.day, 'YYYY-MM-DD').format("MM-DD-YYYY");
            const the_placeholder = { date: the_moment, value: null };
            returnArr.push(the_placeholder);
        }
        return returnArr;
    }

    realToApp(count: number, realData, days) {
        const fake_data = this.placehold_it(count, days);
        for (let index = 0; index < realData.dateP.length; index++) {
            const element = realData.dateP[index];
            for (let index2 = 0; index2 < count; index2++) {
                const element2 = fake_data[index2];
                if (element.date == element2.date) {
                    element2.value = element.value
                } else {
                    continue;
                }
            }
        }
        return fake_data;
    }

    calcSum(data_array: any) {
        let sum = 0;
        for (let index = 0; index < data_array.length; index++) {
            const el = data_array[index]
            sum = el.value + sum;
        }
        return sum;
    }

    change() {
        this.projects.forEach(project => {
            project.joursT = this.calcSum(project.dateP);
        })
    }
}
