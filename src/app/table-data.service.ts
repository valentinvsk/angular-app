import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class TableDataService {

  constructor(private _http: Http) {}

  getData() {
    return this._http.get('assets/ajax/array.txt').map(
      (response: Response) => response.json()
    );
  }

}
