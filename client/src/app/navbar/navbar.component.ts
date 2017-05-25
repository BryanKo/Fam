import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedin: boolean;

  /*
  Dependency injection is a way to supply a new instance of a class with the fully-formed dependencies it requires. Most dependencies are services. Angular uses dependency injection to provide new components with the services they need. Angular can tell which services a component needs by looking at the types of its constructor parameters.
  */
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.loggedin = true;
  }

  onLogout() {
    this.loggedin = false;
  }

}
