import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as moment_ from 'moment';
declare var $: any;
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
            "mission": "Other",
            "supprimer":false,
            "vider":true,
            "completer":true,
            "lignes": [
                {
                    "date": "03-01-2018",
                    "value": 1
                },
                {
                    "date": "03-13-2018",
                    "value": 1 / 2
                },
                {
                    "date": "03-31-2018",
                    "value": 1 / 3
                },
                {
                    "date": "03-20-2018",
                    "value": 1 / 4
                }
            ],
            "joursT": 0
        },
        {
            "client": "Talan SAS",
            "mission": "Other",
            "supprimer":true,
            "vider":false,
            "completer":false,
            "lignes": [
                {
                    "date": "03-02-2018",
                    "value": 1
                },
                {
                    "date": "03-03-2018",
                    "value": 1 / 2
                },
                {
                    "date": "03-23-2018",
                    "value": 1 / 3
                },
                {
                    "date": "03-11-2018",
                    "value": 1 / 4
                }
            ],
            "joursT": 0
        },
        {
            "client": "Talan SAS",
            "mission": "Other",
            "supprimer":false,
            "vider":true,
            "completer":true,
            "lignes": [
                {
                    "date": "03-04-2018",
                    "value": 1
                },
                {
                    "date": "03-10-2018",
                    "value": 1 / 2
                },
                {
                    "date": "03-28-2018",
                    "value": 1 / 3
                },
                {
                    "date": "03-21-2018",
                    "value": 1 / 4
                }
            ],
            "joursT": 0
        },
        {
            "client": "Talan SAS",
            "mission": "Other",
            "supprimer":true,
            "vider":false,
            "completer":false,
            "lignes": [
                {
                    "date": "03-01-2018",
                    "value": 1
                },
                {
                    "date": "03-14-2018",
                    "value": 1 / 2
                },
                {
                    "date": "03-27-2018",
                    "value": 1 / 3
                },
                {
                    "date": "03-16-2018",
                    "value": 1 / 4
                }
            ],
            "joursT": 0
        }
    ];
    public projects2 = [
        {
            "client": "Talan SAS",
            "mission": "Other",
            "supprimer":false,
            "vider":true,
            "completer":true,
            "lignes": [
                {
                    "date": "03-01-2018",
                    "value": 1
                },
                {
                    "date": "03-13-2018",
                    "value": 1 / 2
                },
                {
                    "date": "03-31-2018",
                    "value": 1 / 3
                },
                {
                    "date": "03-20-2018",
                    "value": 1 / 4
                }
            ],
            "joursT": 0
        },
        {
            "client": "Talan SAS",
            "mission": "Other",
            "supprimer":true,
            "vider":false,
            "completer":false,
            "lignes": [
                {
                    "date": "03-02-2018",
                    "value": 1
                },
                {
                    "date": "03-03-2018",
                    "value": 1 / 2
                },
                {
                    "date": "03-23-2018",
                    "value": 1 / 3
                },
                {
                    "date": "03-11-2018",
                    "value": 1 / 4
                }
            ],
            "joursT": 0
        },
        {
            "client": "Talan SAS",
            "mission": "Other",
            "supprimer":false,
            "vider":true,
            "completer":true,
            "lignes": [
                {
                    "date": "03-04-2018",
                    "value": 1
                },
                {
                    "date": "03-10-2018",
                    "value": 1 / 2
                },
                {
                    "date": "03-28-2018",
                    "value": 1 / 3
                },
                {
                    "date": "03-21-2018",
                    "value": 1 / 4
                }
            ],
            "joursT": 0
        },
        {
            "client": "Talan SAS",
            "mission": "Other",
            "supprimer":true,
            "vider":false,
            "completer":false,
            "lignes": [
                {
                    "date": "03-01-2018",
                    "value": 1
                },
                {
                    "date": "03-14-2018",
                    "value": 1 / 2
                },
                {
                    "date": "03-27-2018",
                    "value": 1 / 3
                },
                {
                    "date": "03-16-2018",
                    "value": 1 / 4
                }
            ],
            "joursT": 0
        }
    ];

    constructor() {
        let now = moment_(new Date());
        let days = [];
        this.currentMonth = now.get('month') + 1;
        this.currentYear = now.get('year');
        this.count = now.daysInMonth();
        this.refreshDateData();

        this.projects.forEach(project => {
            project.lignes = this.transform(project, this.placehold_it(this.count, this.days), this.count);
            project.joursT = this.calcSum(project.lignes);
        });

        this.projects2.forEach(project => {
            project.lignes = this.transform(project, this.placehold_it(this.count, this.days), this.count);
            project.joursT = this.calcSum(project.lignes);
        });
    }
    
    placehold_it(array_length, arr) {
        let data = [];
        for (let i = 0; i < array_length; i++) {
            const
                the_day = arr[i],
                the_moment = moment_(the_day.year + "-" + the_day.month + "-" + the_day.day, 'YYYY-MM-DD').format("MM-DD-YYYY"),
                the_placeholder = { date: the_moment, value: null };
            data.push(the_placeholder);
        }
        return data;
    }

    transform(realData, fake_data, count) {
        for (let index = 0; index < realData.lignes.length; index++) {
            const element = realData.lignes[index];

            for (let index2 = 0; index2 < count; index2++) {
                const element2 = fake_data[index2];
                
                if (element.date == element2.date) element2.value = element.value
                else continue
            }
        }
        return fake_data;
    }

    initTimeTable() {
        let now = moment_(new Date());
        let days = [];
        this.currentMonth = now.get('month') + 1;
        this.currentYear = now.get('year');
        this.count = now.daysInMonth();

        this.refreshDateData();
        this.refreshProjectsData(this.projects);
        this.refreshProjectsData(this.projects2);         
    }

    refreshProjectsData(projects){
        projects.forEach(project => {
            project.lignes = this.transform(project, this.placehold_it(this.count, this.days), this.count);
            project.joursT = this.calcSum(project.lignes);
        })
    }

    refreshDateData() {
        this.days = this.getDateDays(this.currentMonth, this.currentYear);
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

    ngOnInit() {}

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
            project.joursT = this.calcSum(project.lignes);
        })
    }

    changeYear(currentYear) {
        this.currentYear = currentYear;
        this.refreshDateData();
    }

    changeMonth(currentMonth) {
        this.currentMonth = currentMonth;
        this.refreshDateData();
    }

    clear(project){
        project.lignes.forEach(element => {element.value = null;});
        this.refreshProjectsData(this.projects)
    }

    complete(project){
        console.log("COMPLETE ACTION")
    }

    delete(project){
        this.projects.splice(this.projects.indexOf(project),1 )
    }

    prevMonth(){
        this.currentMonth = this.currentMonth-1;
        this.refreshDateData()
    }

    nextMonth(){
        this.currentMonth = this.currentMonth+1;
        this.refreshDateData()
    }

    add(){
        this.projects2.push(
            {
                "client": "not defined",
                "mission": "not defined",
                "supprimer":true,
                "vider":false,
                "completer":false,
                "lignes": [
                    {
                        "date": "03-01-2018",
                        "value": null
                    },
                    {
                        "date": "03-14-2018",
                        "value": null
                    },
                    {
                        "date": "03-27-2018",
                        "value": null
                    },
                    {
                        "date": "03-16-2018",
                        "value": null
                    }
                ],
                "joursT": 0
            }
        );
        this.refreshProjectsData(this.projects2);
    }
}
