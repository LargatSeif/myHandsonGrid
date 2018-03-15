import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { craData } from '../models/cradata.model';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CradataService {

  private url = "assets/data/cradata.json";

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private _http: Http) { }

  getCraById(idCRA: number): Observable<craData> {
    return this._http.get(this.url, this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  getCra() {
    return this._http.get(this.url, this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  
  errorHandler(error: Response) {
    return Observable.throw(error || "SERVER ERROR");
  }
}
