import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  recos: any;

  constructor() { }

  ngOnInit() {

  }

  listMap(recoList) {
    this.recos = recoList.recos;
  }

}
