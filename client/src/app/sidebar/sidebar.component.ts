import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // Passes address from sidebar -> main -> map
  address: string;

  // Flag to toggle review form
  reviewBool: boolean;

  // Gets the list of all recos from MainComponent
  @Input()
  recosList: any;

  // Used to pass data from child component to parent in Angular
  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();

  constructor(

  ) { }

  ngOnInit() {
    this.reviewBool = false;
  }

  onReview(){
  	this.reviewBool = true;
  }

  cancelReview() {
  	this.reviewBool = false;
  }

  onSearch() {
    this.notify.emit(this.address);
  }

}
