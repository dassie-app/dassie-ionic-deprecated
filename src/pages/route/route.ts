import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { ApiService } from '../../app/api/api.service';

import { CragPage } from '../crag/crag';
import { AreaPage } from '../area/area';

@Component({
  selector: 'page-route',
  templateUrl: 'route.html',
})
export class RoutePage {

  routeId;
  route;
  crag;
  area;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiService: ApiService) {
    this.routeId = this.navParams.get('id');
    this.route = this.apiService.getRouteById(this.routeId);
    this.crag = this.apiService.getCragById(this.route.crag);
    this.area = this.apiService.getAreaById(this.crag.area);
    this.route.starArray = [];
    for (let i = 0; i < this.route.stars; i++){
      this.route.starArray.push(0);
    }
  }

  goToCrag(id: number) {
     this.navCtrl.push(CragPage, {
       id: id
    });
  }

  goToArea(id: number) {
     this.navCtrl.push(AreaPage, {
       id: id
    });
  }

}
