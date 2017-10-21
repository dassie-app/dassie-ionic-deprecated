import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiService } from '../../app/api/api.service';

import { CragPage } from '../crag/crag';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  crags;

  constructor(public navCtrl: NavController, private apiService: ApiService) {
    this.apiService.getAllCrags().subscribe((crags) => {
      this.crags = crags;
    })
  }

  goToCrag(id: number) {
     this.navCtrl.push(CragPage, {
       id: id
    });
  }

}
