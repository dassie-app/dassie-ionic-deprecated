import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiService } from '../../app/api/api.service';

import { RoutePage } from '../route/route';

@Component({
  selector: 'page-sent-routes',
  templateUrl: 'sent-routes.html',
})
export class SentRoutesPage {

  routes;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiService: ApiService) {
    this.routes = this.apiService.getSentRoutes();
  }

  goToRoute(id: number) {
     this.navCtrl.push(RoutePage, {
       id: id
    });
  }

}
