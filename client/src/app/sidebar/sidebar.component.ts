import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RecoService } from '../reco.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  name: String;
  loc: Number;
  lat: Number;
  lng: Number;
  star: Number;
  categ: String;
  desc: String;
  direct: String;

  constructor(
    private recoService: RecoService,
    private flashMessagesService: FlashMessagesService,
    private router: Router
  ) { }

  // Passes address from sidebar -> main -> map
  address: string;

  // Flag to toggle review form
  reviewBool: boolean;

  // Gets the list of all recos from MainComponent
  @Input()
  recosList: any;

  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();


  ngOnInit() {
    this.reviewBool = false;
  }

  onReview(){
  	this.reviewBool = true;
  }

  cancelReview() {
  	this.reviewBool = false;
  }

  submitReview() {
    // swapped name/name and loc/loc so that the name of the location is the adr while the title will be the name of the review
    const reviewLoc = {
      name: this.loc,
      loc: this.name,
      lat: this.lat,
      lng: this.lng,
      star: this.star,
      categ: this.categ,
      desc: this.desc,
      direct: this.direct,
    }

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
  }
}
