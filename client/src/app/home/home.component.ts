import { Component, OnInit } from '@angular/core';
import { RecoService } from '../reco.service';

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

  constructor(
    private recoService: RecoService
  ) { }

  ngOnInit() {
    this.lat = 36.9910;
    this.lng = -122.0490;
    this.zoom = 13;

    this.recoService.getRecos().subscribe(recos => {
      this.recos = recos;
    });
  }

}
