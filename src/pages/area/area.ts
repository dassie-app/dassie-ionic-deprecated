import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ApiService } from '../../app/api/api.service';

import { CragPage } from '../crag/crag';

@Component({
  selector: 'page-area',
  templateUrl: 'area.html',
})
export class AreaPage {

  areaId;
  area;
  crags;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiService: ApiService) {
    this.areaId = this.navParams.get('id');
    this.area = this.apiService.getAreaById(this.areaId);
    this.crags = this.apiService.getCragsByArea(this.areaId);
  }

  goToCrag(id: number) {
     this.navCtrl.push(CragPage, {
       id: id
    });
  }

}
