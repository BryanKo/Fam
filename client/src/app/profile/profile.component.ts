import { Component, OnInit, EventEmitter } from '@angular/core'; // added EventEmitter
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RecoService } from '../reco.service'; // from sidebar.component.ts

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;

  // from sidebar.component.ts
  name: string;
  loc: string;
  // lat: number;
  // lng: number;
  star: number;
  categ: string;
  desc: string;
  direct: string;

  constructor(
    private recoService: RecoService, // added from sidebar.component.ts
    private router: Router,
    private authService: AuthService
  ) { }

  // untouched
  ngOnInit() {
    if(!localStorage.getItem('user')) {
      this.router.navigate(['/']);
    }

    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
