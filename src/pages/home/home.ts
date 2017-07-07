import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiService } from '../../app/api/api.service';

import { AreaPage } from '../area/area';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  areas;

  constructor(public navCtrl: NavController, private apiService: ApiService) {
    apiService.areas.subscribe(areas =>{
      this.areas = areas;
    });
  }

  goToArea(id: number) {
     this.navCtrl.push(AreaPage, {
       id: id
    });
  }

}
