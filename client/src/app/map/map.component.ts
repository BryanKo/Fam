import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 36.9914;
  lng: number = -122.0609;
  zoom: number = 13;

  constructor() { }

  ngOnInit() {
    
  }


}
