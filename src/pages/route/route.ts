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
  starArray;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiService: ApiService) {
    this.routeId = this.navParams.get('id');

    this.routeSubscription = this.apiService.getRouteById(this.routeId).subscribe((route) => {
      this.route = route;
      this.starArray = [];
      for (let i = 0; i < this.route.stars; i++) {
        this.starArray.push(0);
      }
      
      if (this.cragSubscription) {
        this.cragSubscription.unsubscribe();
      }

      this.cragSubscription = this.apiService.getCragById(this.route.crag).subscribe((crag) => {
        this.crag = crag;

        if (this.areaSubscription) {
          this.areaSubscription.unsubscribe();
        }

        this.areaSubscription = this.apiService.getAreaById(this.crag.area).subscribe((area) => {
          this.area = area;
        });

      });

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

  ngOnInit() {
    this.area = {};
  }

  ngOnDestroy() {
    this.cragSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
    this.areaSubscription.unsubscribe();
  }

}
