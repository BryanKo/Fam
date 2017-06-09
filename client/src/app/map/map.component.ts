import { Component, OnInit, Input } from '@angular/core';
import { MouseEvent, MapsAPILoader } from '@agm/core';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  // Used just because ngFor only works with iterables instead of numbers
  starArr = new Array(5);

  zoom: number;
  reviewBool: boolean;

  @Input()
  lat: number;

  @Input()
  lng: number;

  @Input()
  recosList: any;


  constructor(
    private mapsApiLoader: MapsAPILoader,
  ) { }

  ngOnInit() {
    this.lat = 36.9910;
    this.lng = -122.0490;
    this.zoom = 13;
    this.reviewBool = false;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }


  mapClick($event: MouseEvent) {

  }

  markerClick($event: MouseEvent) {

  }

}
