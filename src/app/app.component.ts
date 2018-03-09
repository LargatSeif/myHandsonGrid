import { Component } from '@angular/core';
declare var $: any;
import { Http } from '@angular/http';
import { PageResponse, FilterModel, ODataController } from 'ng2-jsgrid';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
/*
  options: any;
  sourceApi: any;
  gridAction = new ODataController();

  constructor(private http: Http) {

  }

  ngOnInit(): void {

    this.gridAction.updateItem = (item) => {
      console.log(item);
      return new Promise(resolve => {
        resolve(item);
      });
    };

    this.gridAction.insertItem = (item) => {
      return new Promise(resolve => {
        resolve(item);
      });
    };

    this.sourceApi = (filter: FilterModel) => {
      console.log(filter);
      return new Promise(resolve => {
        this.http.get('https://jsonplaceholder.typicode.com/posts')
          .map(res => res.json())
          .subscribe(data => {
            const source: PageResponse = {
              data: data,
              itemsCount: data.length
            };
            resolve(source);
          });
      });
    };

    this.options = {
      fields: [
        { name: 'userId', type: 'text', width: 50 },
        { name: 'id', type: 'text', width: 50 },
        { name: 'title', type: 'text' },
        { name: 'body', type: 'text' },
        {
          name: 'title',
          type: 'select',
          items: [
            { Name: "1,25", Id: 0 },
            { Name: "1", Id: 1 },
            { Name: "1/2", Id: 2 },
            { Name: "1/3", Id: 3 },
            { Name: "1/4", Id: 4 }
          ],
          valueField: "Id",
          textField: "Name",
          width: 50
        },
      ],
      heading: true,
      filtering: false,
      inserting: false,
      editing: true,
      selecting: true,
      sorting: false,
      paging: true,
      pageLoading: true,
    };
  }
  */
}
