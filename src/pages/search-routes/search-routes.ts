import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

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
  selectedStars = 'any';
  grades: any[] = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
  stars : any[] = [1,2,3,4,5];
  searchTerm: string;
  sortProperty : string  = 'grade';
  sortAscending : boolean  = false;

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
  }

  goToRoute(id: number) {
     this.navCtrl.push(RoutePage, {
       id: id
    });
  }

  openOrderActionSheet(){
    this.deviceFeedback.haptic(1);
    let actionSheet = this.actionSheetCtrl.create({
      title: "Order Routes by",
      buttons: [
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
    route.ticklisted = true;
  }

  removeRouteFromTicklist(route) {
    this.deviceFeedback.haptic(1);
    route.ticklisted = false;
  }

}
