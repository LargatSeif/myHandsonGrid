import { Component, OnInit } from '@angular/core';
import * as moment_ from 'moment';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
@Component({
    selector: 'app-native',
    templateUrl: './native.component.html',
    styleUrls: ['./native.component.css']
})
export class NativeComponent implements OnInit {
    public currentMonth;
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
                    "date": "01-03-2018",
                    "value": 1
                },
                {
                    "date": "02-03-2018",
                    "value": 1 / 2
                },
                {
                    "date": "03-03-2018",
                    "value": 1 / 3
                },
                {
                    "date": "04-03-2018",
                    "value": 1 / 4
                }
            ],
            "joursT": 0,
        },
        {
            "client": "Talan SAS",
            "mission": "Other",
            "dateP": [
                {
                    "date": "09-03-2018",
                    "value": 1
                },
                {
                    "date": "12-03-2018",
                    "value": 1 / 2
                },
                {
                    "date": "13-03-2018",
                    "value": 1 / 3
                },
                {
                    "date": "20-03-2018",
                    "value": 1 / 4
                }
            ],
            "joursT": 0,
        }
    ];

    constructor() {


        let now = moment_(new Date());
        this.currentMonth = now.get('month') + 1;
        this.count = now.daysInMonth()
        let days = [];
        let daysN2 = [];
        let testData = [];

        for (let i = 1; i <= this.count; i++) {
            let current = moment_(i + "-" + this.currentMonth + "-" + now.year(), "DD-MM-YYYY");
            this.days.push({
                day: current.date(),
                month: current.month() + 1,
                year: current.year()
            });
        }

        for (let i = 1; i <= this.count; i++) {
            this.daysN.push(moment_(now.year() + "-" + now.get('month') + "-" + i + "").locale('fr').format("ddd")[0].toUpperCase());
        }

        console.log("today => " + now.format("DD-MM-YYYY"))
        console.log("currentMonth => " + this.currentMonth)
        console.log("we have => " + now.daysInMonth() + "day , in the current month")
        console.log("***********************************************************************")


    }

    ngOnInit() {
        this.formatData();
        console.log(this.projects)
    }




    formatData() {
        for (let i = 0; i < this.projects.length; i++) {

            const project = this.projects[i];
            const list = [];
            const list2 = [];
            let sum = 0;

            //calculating total of in-work hours of a day
            for (let k = 0; k < project.dateP.length; k++) {
                sum = project.dateP[k].value + sum;
            }
            project.joursT = sum;
            //end


            project.dateP.forEach(dateP => {
                list.push(moment_(dateP.date, "DD-MM-YYYY").toISOString().substring(0, 10));
            })

            project.dateP.forEach(dateP => {
                list2.push({ date: moment_(dateP.date, "DD-MM-YYYY").toISOString().substring(0, 10), value: dateP.value });
            })


            console.log(list2)

            this.days.forEach(D => {
                const myDate = "" + D.day + "-" + D.month + "-" + D.year + "";
                const thisDate = moment_(myDate, "DD-MM-YYYY").toISOString().substring(0, 10);
                const itemposition = list.indexOf(thisDate);

                if (itemposition > -1) {
                    console.log('OCCURENCE !!!')
                    //let newPos = 
                } else
                    if (itemposition == -1) {
                        let newDateP = moment_(thisDate).format("DD-MM-YYYY");
                        project.dateP.push({ date: newDateP, value: null })
                        console.log("NO OCCURENCE !!!")
                    }

            });

            for (let p = 0; p < list2.length; p++) {
                const element = list2[p];
                console.log(element.date)
            }


        }
    }



    toggleEdit(event) {
        this.isEdit = !this.isEdit;
    }

    change(project, i) {
        let sum = 0;
        //calculating total of in-work hours of a day                         
        sum = project.dateP[i].value + sum;
        project.joursT += sum;
        //let theProject = this.projects.indexOf()
        //console.log(data)
    }
}
