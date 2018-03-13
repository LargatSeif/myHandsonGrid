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
                    "value":1
                },
                {
                    "date": "03-02-2018",
                    "value":1/2
                },
                {
                    "date": "03-03-2018",
                    "value":1/3
                },
                {
                    "date": "03-04-2018",
                    "value":1/4
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
                    "value":1
                },
                {
                    "date": "03-13-2018",
                    "value":1/2
                },
                {
                    "date": "03-12-2018",
                    "value":1/3
                },
                {
                    "date": "03-20-2018",
                    "value":1/4
                }
            ],
            "joursT": 0
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
            let current = moment_(this.currentMonth + "-" + i + "-" + now.year(), "MM-DD-YYYY");
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
            let list = [];
            let list2 = [];
            let sum = 0;

            //calculating total of in-work hours of a day
            for (let k = 0; k < project.dateP.length; k++) {
                sum = project.dateP[k].value + sum;
            }
            project.joursT = sum;
            //end

            for (let index = 0; index < project.dateP.length; index++) {
                let element = project.dateP[index];
                let newD = element.date.split('-');
                console.log(newD)
                list.push(newD[2] + "-" + newD[0] + "-" + newD[1]);
            }
            console.log(list[0])
            console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
            
            this.days.forEach(D => {
                let thisDate = moment_(""+D.year+"-"+D.month+"-"+D.day+"", 'YYYY-MM-DD').toISOString().substr(0, 10)

                console.log(thisDate)

                let itemposition = list.indexOf(thisDate);

                if (itemposition > -1) {
                    //console.log(project.dateP[itemposition])// = {date: thisDate,value:list[itemposition].value};
                    console.log('OCCURENCE !!! ==> here ' + thisDate + " pos in List ==> " + itemposition)
                    //let newPos = 
                } else if (itemposition == -1) {
                    project.dateP.push({ date: moment_(thisDate).format("MM-DD-YYYY"), value: null })
                    console.log("NO OCCURENCE !!!")
                }
            });


            let  final =[];
            //final = ;
            console.log("-------------------------------------------------*/*/")
            //console.log(project.dateP);
            //console.log(list);
            console.log( this.reorder(project.dateP))//.sort(this.sortByDate))
            final =this.reorder(project.dateP);
            project.dateP.forEach((dp,cpt)=>{
                dp.date = final[cpt].format().substr(0,10);
                console.log(dp)
            })



        }
    }
    sortByDate(lhs, rhs) {        
        return lhs > rhs ? 1 : lhs < rhs ? -1 : 0;
    }

    reorder(datesToSort){
        let momentDates = [];
        let dates = [];



        for (var i in datesToSort) {

            momentDates.push(moment_(datesToSort[i].date,"MM-DD-YYYY"));
            dates.push(new Date(momentDates[i]));
        }

        momentDates.sort(this.sortByDate)
        return momentDates;
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
