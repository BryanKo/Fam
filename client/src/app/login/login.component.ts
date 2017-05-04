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
        //this.flashMessagesService.show('You are now registered', {cssClass: 'alert-success', timeout: 3000});
	alert(data.msg);
        this.router.navigate(['/map']);
      } else {
        //this.flashMessagesService.show('Invalid registeration', {cssClass: 'alert-danger', timeout: 3000});
	alert(data.msg);
        this.router.navigate(['/login']);
      }
    });
  }
}
