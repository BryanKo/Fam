import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 36.9910;
  lng: number = -122.0490;
  zoom: number = 13;

  @Input()
  recosList: any;

  constructor() { }

  ngOnInit() {

  }

  markerClick(reco) {

  }

}
