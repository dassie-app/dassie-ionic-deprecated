import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { ApiService } from '../../app/api/api.service';

import { RoutePage } from '../route/route';

@Component({
  selector: 'page-tick-list',
  templateUrl: 'tick-list.html',
})
export class TicklistPage {
  routes;

  constructor(public navCtrl: NavController, private apiService: ApiService) {
    this.routes = this.apiService.getTicklistedRoutes();
  }


}
