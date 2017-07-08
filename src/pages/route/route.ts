import { Component, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/subscription';

import { ApiService } from '../../app/api/api.service';

import { CragPage } from '../crag/crag';
import { AreaPage } from '../area/area';

@Component({
  selector: 'page-route',
  templateUrl: 'route.html',
})
export class RoutePage implements OnDestroy {

  routeSubscription: Subscription;
  cragSubscription: Subscription;
  areaSubscription: Subscription;

  routeId;
  route;
  crag;
  area;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiService: ApiService) {
    this.routeId = this.navParams.get('id');

    this.routeSubscription = this.apiService.getRouteById(this.routeId).subscribe((route) => {
      this.route = route;
      this.route.starArray = [];
      for (let i = 0; i < this.route.stars; i++) {
        this.route.starArray.push(0);
      }
    });

    this.cragSubscription = this.apiService.getCragById(this.route.crag).subscribe((crag) => {
      this.crag = crag;
    });

    this.areaSubscription = this.apiService.getAreaById(this.crag.area).subscribe((area) => {
      this.area = area;
    });
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

  ngOnDestroy() {
    this.cragSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
    this.areaSubscription.unsubscribe();
  }

}
