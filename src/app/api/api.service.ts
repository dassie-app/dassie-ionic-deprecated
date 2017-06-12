import { Injectable } from '@angular/core';
import { MockDataService } from './mock-data.service';

@Injectable()
export class ApiService {

  constructor(private mockData: MockDataService) { }


  getAreaById(id: number) {
    return this.mockData.getAreaById(id);
  }

  getCragById(id: number) {
    return this.mockData.getCragById(id);
  }

  getRouteById(id: number) {
    return this.mockData.getRouteById(id);
  }

  getAllAreas(){
    return this.mockData.getAllAreas();
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
