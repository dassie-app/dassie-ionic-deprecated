import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

import { ApiService } from '../../app/api/api.service';

import { RoutePage } from '../route/route';

@IonicPage()
@Component({
  selector: 'page-crag',
  templateUrl: 'crag.html',
})
export class CragPage {

  cragId;
  crag;
  routes;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private apiService: ApiService,
    private actionSheetCtrl: ActionSheetController
  ){
    this.cragId = this.navParams.get('id');
    this.crag = this.apiService.getCragById(this.cragId);
    this.routes = this.apiService.getRoutesByCrag(this.cragId);
    this.routes.map(route=>{
      route.starArray = [];
      for (let i = 0; i < route.stars; i++){
        route.starArray.push(0);
      }
    })
  }

  goToRoute(id: number) {
     this.navCtrl.push(RoutePage, {
       id: id
    });
  }

  openActionSheet(){
    let actionSheet = this.actionSheetCtrl.create({
      title: "Order Routes by",
      buttons: [
        {
          text: 'Left to Right',
          handler: ()=>{

          }
        },
        {
          text: 'Right to Left',
          handler: ()=>{
            
          }
        },
        {
          text: 'Grade: Low to High',
          handler: ()=>{
            
          }
        },
        {
          text: 'Grade: High to Low',
          handler: ()=>{
            
          }
        },
        {
          text: 'Star Rating',
          handler: ()=>{
            
          }
        }
      ]
    });
    actionSheet.present();
  }

}
