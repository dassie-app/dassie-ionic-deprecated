import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiService } from '../../app/api/api.service';

import { RoutePage } from '../route/route';

@IonicPage()
@Component({
  selector: 'page-crag',
  templateUrl: 'crag.html',
})
export class CragPage {

  cragId;
  crag;
  routes;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiService: ApiService) {
    this.cragId = this.navParams.get('id');
    this.crag = this.apiService.getCragById(this.cragId);
    this.routes = this.apiService.getRoutesByCrag(this.cragId);
  }

  goToRoute(id: number) {
     this.navCtrl.push(RoutePage, {
       id: id
    });
  }

}
