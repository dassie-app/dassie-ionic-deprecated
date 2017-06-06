import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiService } from '../../app/api/api.service';

@IonicPage()
@Component({
  selector: 'page-route',
  templateUrl: 'route.html',
})
export class RoutePage {

  routeId;
  route;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiService: ApiService) {
    this.routeId = this.navParams.get('id');
    this.route = this.apiService.getRouteById(this.routeId);
  }

}
