import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RecoService } from '../reco.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  name: string;
  loc: string;
  // lat: number;
  // lng: number;
  star: number;
  categ: string;
  desc: string;
  direct: string;
  user: any;
  username: string;

  constructor(
    private recoService: RecoService,
    private flashMessagesService: FlashMessagesService,
    private router: Router,
    private authService: AuthService
  ) { }

  // Passes address from sidebar -> main -> map
  address: string;

  // Flag to toggle review form
  reviewBool: boolean;

  // Gets the list of all recos from MainComponent
  @Input()
  recosList: any;

  @Input()
  lat: number;

  @Input()
  lng: number;

  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.reviewBool = false;
    if(!localStorage.getItem('user')) {
      this.router.navigate(['/']);
    }

    this.user = JSON.parse(localStorage.getItem('user'));
    // console.log(this.user);
    alert("When submitting a review. Please enter the address first and submit a failed review. Then, proceed to submit your review. Thank you!");
  }

  // brings up the review form
  onReview(){
  	this.reviewBool = true;
  }

  // cancels review
  cancelReview() {
    if (confirm("Are you sure you want to cancel your review?")) {
      this.reviewBool = false;
      this.clear();
    } else {
      this.reviewBool = true;
    }
  }

  onSearch() {
    this.notify.emit(this.address);
    console.log(this.lat + ", " + this.lng + "\nThis is from sidebar.components.ts\nFrom search bar");
  }

  // submits review
  submitReview() {
    this.notify.emit(this.loc);

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

    // console.log("username: " + this.user.username);
    console.log(this.lat + ", " + this.lng + "\nThis is from sidebar.components.ts\nFrom review section");

    this.recoService.addReview(reviewLoc).subscribe(data => {
      if(data.success) {
        // this.flashMessagesService.show('Review added', {cssClass: 'alert-success', timeout: 3000});
        console.log(data.msg);
        this.router.navigate(['/map']);
      } else {
        // this.flashMessagesService.show('Review not added', {cssClass: 'alert-danger', timeout: 3000});
        console.log(data.msg);
        this.router.navigate(['/map']);
      }
    });
    this.clear();
    this.reviewBool = false;
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
