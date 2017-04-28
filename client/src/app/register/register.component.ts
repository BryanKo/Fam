import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;

  // These are injected from @Injectables
  constructor(
    private authService: AuthService,
    private flashMessagesService: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegister() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      loggedin: true
    }

    /*
    Front-end for user registeration. Always delegate data access to a supporting service class. In this case, auth.service takes care of data access.
    */
    this.authService.registerUser(user).subscribe(data => {
      if(data.success) {
        // this.flashMessagesService.show('You are now registered', {cssClass: 'alert-success', timeout: 3000});
        console.log(data.msg);
        this.router.navigate(['/map']);
      } else {
        // this.flashMessagesService.show('Invalid registeration', {cssClass: 'alert-danger', timeout: 3000});
        console.log(data.msg);
        this.router.navigate(['/register']);
      }
    });
  }

}
