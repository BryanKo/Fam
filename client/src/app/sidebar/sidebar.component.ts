import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  address: string;

  reviewBool: boolean;

  @Input()
  recosList: any;

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
