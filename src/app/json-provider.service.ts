import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class JsonProviderService {

  constructor(private _http: Http) { }

  getDataForChart() {
    return this._http.get('assets/ajax/array.json').map(
      (response: Response) => response.json()
    );
  }
}
