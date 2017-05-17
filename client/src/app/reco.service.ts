import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RecoService {

  constructor(
    private http: Http
  ) { }

  getRecos() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.get('http://localhost:8080/recos/getReco', {headers: headers})
    .map(res => res.json());
  }

}
