import { Component, OnInit } from '@angular/core';
import * as moment_ from 'moment';

import { CarService } from './car.service';
import { Car } from './car';
import { craData } from '../models/cradata.model';
import { CradataService } from '../services/cradata.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [CarService, CradataService]
})
export class TableComponent implements OnInit {


  header: any;

  loading: Promise<boolean>;

  selectedCar: Car;

  dialogVisible: boolean;

  data: craData;
  options = [];
  data2;
  daysN;
  selectedLine;
  constructor(private carService: CarService, private craService: CradataService) {

  }

  ngOnInit() {
    //this.carService.getCarsSmall().then(cars => this.cars = cars);

    this.craService.getCra().subscribe(
      data => {
        this.data = data;
        this.loading = Promise.resolve(true);
        data.celluleListe.forEach(item => {
          let op: option;
          op = new option(item, item);
          this.options.push(op);
        });


        this.header = this.getDateDaysN(this.data.mois, this.data.annee);

        console.log(this.data);
      }
    );

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

  complet(rowData) {
    console.log('complete')
  }
  
  delete(rowData,r) { 

      r.lignes.forEach(l=>{
      if(l === rowData){ 
        let index  = this.data.rubriques.indexOf(r);
        let index2 = r.lignes.indexOf(rowData);
        if(index2 >=0){
          this.data.rubriques[index].lignes.splice(index2,1)
        }
        
      }else{
        console.log('error')
      }
    }) 
 
  }

  clear(rowData) {
    rowData.jours.joursAffectation.forEach(aff => {
      aff.taux = 0;
    })
    rowData.jours.totale = 0
  }
  

}

export class option {
  public label: string;
  public value: string;
  constructor(label: string, value: string) {
    this.label = label;
    this.value = value;
  }
}