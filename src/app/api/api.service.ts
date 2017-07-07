import { Injectable } from '@angular/core';
import { MockDataService } from './mock-data.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ApiService {

  routes = [];
  crags = [];
  areas = [];

  routesDB;
  cragsDB;
  areasDB;

  constructor(private mockData: MockDataService, private db: AngularFireDatabase) {
    this.routesDB = db.list('/routes').subscribe(routes =>{
      console.log('routes updated');
      this.routes = routes;
    });
    this.cragsDB = db.list('/crags').subscribe(crags =>{
      console.log('crags updated');
      this.crags = crags;
    });
    this.areasDB = db.list('/areas').subscribe(areas =>{
      console.log('areas updated');
      this.areas = areas;
    });

  }

  getAllAreas(){
    return this.areas;
  }

  getAreaById(id){
    return this.mockData.getAreaById(id);
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
    return this.routes;
  }

  getTicklistedRoutes(){
    return this.mockData.getTicklistedRoutes();
  }

  getSentRoutes(){
    return this.mockData.getSentRoutes();
  }

}
