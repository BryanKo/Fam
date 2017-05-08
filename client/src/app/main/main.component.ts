import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecoService } from '../reco.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  recos: any;

  constructor(
    private router: Router,
    private recoService: RecoService
  ) { }

  ngOnInit() {
    this.recoService.getRecos().subscribe(recos => {
      this.recos = recos;
    });
  }

}
