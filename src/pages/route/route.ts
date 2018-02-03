import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ApiService } from '../../app/api/api.service';

import { CragPage } from '../crag/crag';

@Component({
  selector: 'page-route',
  templateUrl: 'route.html',
})
export class RoutePage {

  routeId;
  route;
  crag;
  area;
  starArray;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiService: ApiService) {
    this.routeId = +this.navParams.get('id');

    this.route = this.apiService.getRouteById(this.routeId);
    this.starArray = [];
    for (let i = 0; i > this.route.starts; i++) {
      this.starArray.push(0);
    }

    this.crag = this.apiService.getCragById(this.route.crag);

  }

  goToCrag(id: number) {
    this.navCtrl.push(CragPage, {
      id: id
    });
  }

}
