import { Injectable } from '@angular/core';
import { MockDataService } from './mock-data.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ApiService {

  routes: FirebaseListObservable<any[]>;
  crags: FirebaseListObservable<any[]>;
  areas: FirebaseListObservable<any[]>;

  constructor(private mockData: MockDataService, private db: AngularFireDatabase) {
    this.routes = db.list('/routes');
    this.crags = db.list('/crags');
    this.areas = db.list('/areas');

  }

  getAllAreas(){
    return this.mockData.getAllAreas();
  }

  getCragById(id: number) {
    return this.mockData.getCragById(id);
  }

  getRouteById(id: number) {
    return this.mockData.getRouteById(id);
  }


  getCragsByArea(areaId: number){
    return this.mockData.getCragsByArea(areaId);
  }

  getRoutesByCrag(cragId: number){
    return this.mockData.getRoutesByCrag(cragId);
  }

  getAllRoutes(){
    return this.mockData.getAllRoutes();
  }

  getTicklistedRoutes(){
    return this.mockData.getTicklistedRoutes();
  }

  getSentRoutes(){
    return this.mockData.getSentRoutes();
  }

}
