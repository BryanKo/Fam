import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  user: any;

  constructor(
    private http: Http
  ) { }

  // Service for registering new user
  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    /*
    this.http.post(url, body, option) returns an Observable. Think of an Observable as a stream of events published by some source. To listen for events in this stream, subscribe to the Observable. These subscriptions specify the actions to take when the web request produces a success event (with the hero data in the event payload) or a fail event (with the error in the payload).
    */
    // connect to server with http://ec2-107-23-73-244.compute-1.amazonaws.com
    // connect ot server with http://localhost
    return this.http.post('http://localhost:8080/users/register', user, {headers: headers})
    .map(res => res.json());
  }

  // Service for logging in user
  loginUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:8080/users/authenticate', user, {headers: headers})
    .map(res => res.json());
  }

  // Service for displaying user profile
  getProfile() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.get('http://localhost:8080/users/profile', {headers: headers})
    .map(res => res.json());
  }

  // Store user loggedin user info in localStorage
  storeUserInfo(user) {
    localStorage.setItem('user', user);
    var myInt = setInterval(() => {
      if(!document.hasFocus()) {
        localStorage.clear();
        clearInterval(myInt);
      }
    }, 600000); // 10 minutes
  }

}
