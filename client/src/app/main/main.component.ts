import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import { RecoService } from '../reco.service';

declare var google: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // List of all recos in recos db
  recos: any;

  // Lat and lng to center the map
  lat: any;
  lng: any;

  constructor(
    private router: Router,
    private recoService: RecoService,
    private mapsApiLoader: MapsAPILoader
  ) { }

  ngOnInit() {
    if(!localStorage.getItem('user')) {
      this.router.navigate(['/']);
    }
    this.recoService.getRecos().subscribe(recos => {
      this.recos = recos;
    });
  }

  // returns the lat
  storeLat (latloc : number) {
    // alert(latloc);
    return latloc;
  }

  // returns the lng
  storeLng (lngloc : number) {
    // alert(latloc);
    return lngloc;
  }

  onNotify(address: string) {
    var ctx = this;
    this.mapsApiLoader.load().then(() => {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address': address}, (results, status) => {
        if(status == 'OK') {
          console.log(results[0].types);
          this.lat = results[0].geometry.location.lat();
          this.lng = results[0].geometry.location.lng();
          alert(this.lat + ", " + this.lng + "\nThis is from main.components.ts");
          ctx.storeLat(this.lat);
          ctx.storeLng(this.lng);
        }
      })
    })
  }
w
}
