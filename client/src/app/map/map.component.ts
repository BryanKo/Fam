import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecoService } from '../reco.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 36.9910;
  lng: number = -122.0490;
  zoom: number = 13;

  recos: any;

  constructor(
    private router: Router,
    private recoService: RecoService
  ) { }

  ngOnInit() {
    this.recoService.getRecos().subscribe(recos => {
      console.log(recos);
      this.recos = recos;
    });
  }

}
