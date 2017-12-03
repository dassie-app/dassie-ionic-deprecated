import { Component, OnDestroy } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';

import { ApiService } from '../../app/api/api.service';

import { RoutePage } from '../route/route';

import { Crag } from '../../types/crag';

@Component({
  selector: 'page-crag',
  templateUrl: 'crag.html',
})
export class CragPage implements OnDestroy {

  cragSubscription: Subscription;
  routesSubscription: Subscription;
  areaSubscription: Subscription;

  cragId;
  crag;
  area;
  routes;
  sortProperty: string = 'order';
  sortAscending: boolean = true;
  routeOrder = 'Left to Right';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private apiService: ApiService,
    private actionSheetCtrl: ActionSheetController,
  ) {
    this.cragId = this.navParams.get('id');

    this.cragSubscription = this.apiService.getCragById(this.cragId).subscribe((crag) => {
      this.crag = crag;

    });

    this.routesSubscription = this.apiService.getRoutesByCrag(this.cragId).subscribe((routes) => {
      this.routes = routes;
    });
  }

  goToRoute(id: number) {
    this.navCtrl.push(RoutePage, {
      id: id
    });
  }

  openOrderActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: "Order Routes by",
      buttons: [
        {
          text: 'Left to Right',
          handler: () => {
            this.sortProperty = 'order';
            this.sortAscending = true;
          }
        },
        {
          text: 'Right to Left',
          handler: () => {
            this.sortProperty = 'order';
            this.sortAscending = false;
          }
        },
        {
          text: 'Grade - Low to High',
          handler: () => {
            this.sortProperty = 'grade';
            this.sortAscending = true;
          }
        },
        {
          text: 'Grade - High to Low',
          handler: () => {
            this.sortProperty = 'grade';
            this.sortAscending = false;
          }
        },
        {
          text: 'Star Rating',
          handler: () => {
            this.sortProperty = 'stars';
            this.sortAscending = false;
          }
        }
      ]
    });
    actionSheet.present();
  }

  ngOnDestroy() {
    this.cragSubscription.unsubscribe();
    this.routesSubscription.unsubscribe();
  }
}
