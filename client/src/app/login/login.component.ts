import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
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
    private router: Router,
    private flashMessagesService: FlashMessagesService
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
        this.flashMessagesService.show('Logged in', {cssClass: 'alert-success', timeout: 3000});
        this.authService.storeUserInfo(JSON.stringify(data.user));
        this.router.navigate(['/map']);
      } else {
        this.flashMessagesService.show('Login failed. Please try again', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/login']);
      }
    });
  }
}
