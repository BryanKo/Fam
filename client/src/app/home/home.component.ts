import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { RecoService } from '../reco.service';

declare var google: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recos: any;
  lat: number;
  lng: number;
  zoom: number;
  address: string;
  starArr = new Array(5);

  constructor(
    private recoService: RecoService,
    private mapsApiLoader: MapsAPILoader,
  ) { }

  ngOnInit() {
    this.lat = 36.9910;
    this.lng = -122.0490;
    this.zoom = 13;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }

    this.recoService.getRecos().subscribe(recos => {
      this.recos = recos;
    });
  }

  onSearch() {
    // Angular2 wrapper for google maps API
    this.mapsApiLoader.load().then(() => {
      // Geocoding
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address': this.address}, (results, status) => {
        if(status == 'OK') {
          console.log(results[0].formatted_address);
          this.lat = results[0].geometry.location.lat();
          this.lng = results[0].geometry.location.lng();
        }
      })
    })

    // Scroll to map
    $('html,body').animate({
      scrollTop: $("#home-map").offset().top
    }, 'slow');
  }

}
