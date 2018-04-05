import { Component, OnInit } from '@angular/core';
import { craData } from '../models/cradata.model';
import { CradataService } from '../services/cradata.service';

@Component({
  selector: 'app-p-table',
  templateUrl: './p-table.component.html',
  styleUrls: ['./p-table.component.css']
})
export class PTableComponent implements OnInit {
   
  
  header:any;
  
  loading: Promise<boolean>;
 

  dialogVisible: boolean;

  data: craData;

  constructor( private craService: CradataService) {
    
  }

  ngOnInit() {
    //this.carService.getCarsSmall().then(cars => this.cars = cars);

    this.craService.getCra().subscribe(
      data => {
        this.data = data;
        this.loading = Promise.resolve(true);
        this.header = data.rubriques[0].lignes[0].jours.joursAffectation;

      }
    );
    
     
  }
/*
  showCar(car: Car) {
    this.selectedCar = car;
    this.dialogVisible = true;
  }
*/
}
