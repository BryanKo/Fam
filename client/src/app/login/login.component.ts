/* Controls navigation and console log messages */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem('user')) {
      this.router.navigate(['/map'])
    }
  }

  onSubmit() {
    const user = {
      username: this.username,
      password: this.password,
      loggedin: true
    }

    /*
    Front-end for user login. Always delegate data access to a supporting service class. In this case, auth.service takes care of data access.
    */
    this.authService.loginUser(user).subscribe(data => {
      if(data.success) {
        this.authService.storeUserInfo(JSON.stringify(data.user));
        this.router.navigate(['/map']);
      } else {
        alert("Invalid username or password. Please try again.");
        this.router.navigate(['/login']);
      }
    });
  }
}
