import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../auth.service';
import { RecoService } from '../reco.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  name: string;
  loc: string;
  star: number;
  categ: string;
  desc: string;
  direct: string;
  user: any;
  username: string;

  // Passes address from sidebar -> main -> map
  address: string;

  // Flag to toggle review form
  reviewBool: boolean;

  // Get correct location
  currLocBool: boolean = false;
  currLocCnt: number = 0;

  // Gets the list of all recos from MainComponent
  @Input()
  recosList: any;

  @Input()
  lat: number;

  @Input()
  lng: number;

  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private recoService: RecoService,
    private flashMessagesService: FlashMessagesService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if(!localStorage.getItem('user')) {
      this.router.navigate(['/']);
    }
    this.reviewBool = false;
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  // Brings up the review form
  onReview(){
  	this.reviewBool = true;
  }

  // Cancels review
  cancelReview() {
    if (confirm("Are you sure you want to cancel your review?")) {
      this.reviewBool = false;
      this.clear();
    } else {
      this.reviewBool = true;
    }
  }

  // Submits review
  submitReview() {
    // this.notify.emit(this.loc);

    // swapped name/name and loc/loc so that the name of the location is the adr while the title will be the name of the review
    const reviewLoc = {
      username: this.user.username,
      name: this.loc,
      loc: this.name,
      lat: this.lat,
      lng: this.lng,
      star: this.star,
      categ: this.categ,
      desc: this.desc,
      direct: this.direct,
    }
    // console.log(this.currLocCnt + " " + this.currLocBool);
    // console.log("username: " + this.user.username);
    console.log(this.lat + ", " + this.lng + "\nThis is from sidebar.components.ts\nFrom review section #2");

    if (this.currLocBool == false) {
      alert("Please click 'Verify' under the Review Section");
    } else {
      this.recoService.addReview(reviewLoc).subscribe(data => {
        if(data.success) {
          this.flashMessagesService.show('Review added', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/map']);
        } else {
          this.flashMessagesService.show('Review not added', {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/map']);
        }
      });
      this.currLocCnt = 0;
      this.currLocBool = false;
      this.clear();
      this.reviewBool = false;
    }
  }

  // When addres is searched, pass this.address -> main -> map
  onSearch() {
    this.notify.emit(this.address);
  }

  currLoc() {
    this.notify.emit(this.loc);
    console.log(this.lat + ", " + this.lng + "\nThis is from sidebar.components.ts\nFrom review section");
    this.currLocCnt++;
    if (this.currLocCnt >= 2) this.currLocBool = true;
    console.log(this.currLocCnt + " " + this.currLocBool);
  }

  clear() {
    this.loc = '',
    this.name = '',
    this.star = null,
    this.categ = '',
    this.desc = '',
    this.direct = ''
  }
}
