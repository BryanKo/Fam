import { Component, OnInit, EventEmitter, Input } from '@angular/core'; // added EventEmitter
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
<<<<<<< HEAD
import { RecoService } from '../reco.service'; // from sidebar.component.ts
=======
import { RecoService } from '../reco.service';
>>>>>>> master

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  username: string;

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
    private authService: AuthService,
    private recoService: RecoService
  ) { }

  // Gets the list of all recos from MainComponent
  @Input()
  recosList: any;


  // untouched
  ngOnInit() {
    if(!localStorage.getItem('user')) {
      this.router.navigate(['/']);
    }

    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
