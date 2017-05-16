import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  reviewBool: boolean;

  @Input()
  recosList: any;

  constructor() { }

  ngOnInit() {
    this.reviewBool = false;
  }

  onReview(){
  	this.reviewBool = true;
  }

  cancelReview() {
  	this.reviewBool = false;
  }

}
