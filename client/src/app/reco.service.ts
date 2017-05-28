import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RecoService {

  constructor(
    private http: Http
  ) { }

  addReview(reviewLoc) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    /*
    this.http.post(url, body, option) returns an Observable. Think of an Observable as a stream of events published by some source. To listen for events in this stream, subscribe to the Observable. These subscriptions specify the actions to take when the web request produces a success event (with the hero data in the event payload) or a fail event (with the error in the payload).
    */
    return this.http.post('http://localhost:8080/recos/addReco', reviewLoc, {headers: headers})
    .map(res => res.json());
  }

  getRecos() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.get('http://localhost:8080/recos/getReco', {headers: headers})
    .map(res => res.json());
  }

}
