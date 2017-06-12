import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { DeviceFeedback } from '@ionic-native/device-feedback';

import { ApiService } from '../../app/api/api.service';
import { TicklistService } from '../../app/user-data/ticklist.service';

import { RoutePage } from '../route/route';
import { AreaPage } from '../area/area';

@Component({
  selector: 'page-crag',
  templateUrl: 'crag.html',
})
export class CragPage {

  cragId;
  crag;
  area;
  routes;
  sortProperty: string =  'order';
  sortAscending: boolean  = true;
  routeOrder = 'Left to Right';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private apiService: ApiService,
    private ticklist: TicklistService,
    private actionSheetCtrl: ActionSheetController,
    private deviceFeedback: DeviceFeedback
  ){
    this.cragId = this.navParams.get('id');
    this.crag = this.apiService.getCragById(this.cragId);
    this.area = this.apiService.getAreaById(this.crag.area);
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
  
  goToArea(id: number) {
     this.navCtrl.push(AreaPage, {
       id: id
    });
  }

  openOrderActionSheet(){
    this.deviceFeedback.haptic(1);
    let actionSheet = this.actionSheetCtrl.create({
      title: "Order Routes by",
      buttons: [
        {
          text: 'Left to Right',
          handler: ()=>{
            this.sortProperty = 'order';
            this.sortAscending = true;
          }
        },
        {
          text: 'Right to Left',
          handler: ()=>{
            this.sortProperty = 'order';
            this.sortAscending = false;
          }
        },
        {
          text: 'Grade - Low to High',
          handler: ()=>{
            this.sortProperty = 'grade';
            this.sortAscending = true;
          }
        },
        {
          text: 'Grade - High to Low',
          handler: ()=>{
           this.sortProperty = 'grade';
            this.sortAscending = false;
          }
        },
        {
          text: 'Star Rating',
          handler: ()=>{
            this.sortProperty = 'stars';
            this.sortAscending = false;
          }
        }
      ]
    });
    actionSheet.present();
  }

  openRouteActionSheet(route){
    this.deviceFeedback.haptic(3);
    let buttons = [];
    if (route.sent){
      buttons.push(
        {
          text: 'Mark as Not Sent',
          handler: ()=>{
            this.markRouteAsNotSent(route);
          }
        }
      );
    } else {
      buttons.push(
        {
          text: 'Mark as Sent',
          handler: ()=>{
            this.markRouteAsSent(route);
          }
        }
      );
    }
    if (route.ticklisted){
      buttons.push(
        {
          text: 'Remove from Ticklist',
          handler: ()=>{
            this.removeRouteFromTicklist(route);
          }
        }
      );
    } else {
      buttons.push(
        {
          text: 'Add to Ticklist',
          handler: ()=>{
            this.addRouteToTicklist(route);
          }
        }
      );
    }

    let actionSheet = this.actionSheetCtrl.create({
      title: "Route Actions",
      buttons: buttons
    });
    actionSheet.present();
  }

  markRouteAsSent(route) {
    this.deviceFeedback.haptic(1);
    route.sent = true;
    route.ticklisted = false;
  }

  markRouteAsNotSent(route) {
    this.deviceFeedback.haptic(1);
    route.sent = false;
  }

  addRouteToTicklist(route) {
    this.deviceFeedback.haptic(1);
    this.ticklist.addToTicklist(route.id)
  }

  removeRouteFromTicklist(route) {
    this.deviceFeedback.haptic(1);
    this.ticklist.removeFromTicklist(route.id);
  }

}
