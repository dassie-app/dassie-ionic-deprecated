import { Component } from '@angular/core';
import { IonicPage, NavController, ActionSheetController } from 'ionic-angular';

import { DeviceFeedback } from '@ionic-native/device-feedback';

import { ApiService } from '../../app/api/api.service';

import { RoutePage } from '../route/route';

@Component({
  selector: 'page-search-routes',
  templateUrl: 'search-routes.html',
})
export class SearchRoutesPage {

  routes;
  selectedGrade: any = 'any';
  grades: any[] = ['any', 8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];

  constructor(
    public navCtrl: NavController,
    private apiService: ApiService,
    private actionSheetCtrl: ActionSheetController,
    private deviceFeedback: DeviceFeedback
  ){
    this.routes = this.apiService.getAllRoutes();
    this.routes.map(route=>{
      route.starArray = [];
      for (let i = 0; i < route.stars; i++){
        route.starArray.push(0);
      }
    });

    console.log(this.routes);
  }

  goToRoute(id: number) {
     this.navCtrl.push(RoutePage, {
       id: id
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchRoutesPage');
  }

}
