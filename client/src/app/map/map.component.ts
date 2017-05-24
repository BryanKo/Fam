import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  // Eventually use geolocation to set these values
  lat: number = 36.9910;
  lng: number = -122.0490;
  zoom: number = 13;
  reviewBool = false;


  // Used just because ngFor only works with iterables instead of numbers
  starArr = new Array(5);

  @Input()
  recosList: any;

  constructor() { }

  ngOnInit() {

  }

  markerClick(reco) {


  }

}