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
        // this.flashMessagesService.show('You are now registered', {cssClass: 'alert-success', timeout: 3000});
        console.log(data.msg); // can comment out after testing is complete
        this.router.navigate(['/map']);
      } else {
        // this.flashMessagesService.show('Invalid registration', {cssClass: 'alert-danger', timeout: 3000});
        // could technically comment this line out and not log anything to console. Only for testing purposes
        console.log(data.msg);
        alert("Invalid username or password. Please try again.");
        this.router.navigate(['/login']);
      }
    });
  }
}
