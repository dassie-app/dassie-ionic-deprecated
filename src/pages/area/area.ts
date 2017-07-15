import { Component, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';

import { ApiService } from '../../app/api/api.service';

import { CragPage } from '../crag/crag';

import {Area} from '../../types/area';

@Component({
  selector: 'page-area',
  templateUrl: 'area.html',
})
export class AreaPage implements OnDestroy {
  areaSubscription : Subscription;
  cragsSubscription: Subscription;
  areaId;
  area;
  crags;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiService: ApiService) {

    this.areaId = parseInt(this.navParams.get('id'));

    this.areaSubscription =  this.apiService.getAreaById(this.areaId).subscribe((area) => {
      this.area = area;
    });

    this.cragsSubscription = this.apiService.getCragsByArea(this.areaId).subscribe((crags) => {
      this.crags = crags;
    })
  }

  goToCrag(id: number) {
     this.navCtrl.push(CragPage, {
       id: id
    });
  }

  ngOnDestroy(){
    this.areaSubscription.unsubscribe();
    this.cragsSubscription.unsubscribe();
  }

}
