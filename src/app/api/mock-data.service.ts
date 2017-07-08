import { Injectable } from '@angular/core';

import { MockAreasService } from "./mock-areas.service";
import { MockCragsService } from "./mock-crags.service";
import { MockRoutesService } from "./mock-routes.service";


@Injectable()
export class MockDataService {

  mockData;

  constructor(private areasService : MockAreasService, private cragsService : MockCragsService, private routesService : MockRoutesService) {
    this.mockData = {
      areas: this.areasService.areas,
      crags: this.cragsService.crags,
      routes: this.routesService.routes
    }
   }

  getAllAreas(){
    return this.mockData.areas;
  }

  getAreaById(areaId: number) {
    return this.mockData.areas.filter((area)=>{return area.id == areaId})[0];
  }

  getCragById(id: number) {
    return this.mockData.crags.filter((crag)=> {return crag.id == id})[0];
  }

  getRouteById(id: number) {
    return this.mockData.routes.filter((route)=>{return route.id == id})[0];
  }

  getCragsByArea(areaId: number){
    return this.mockData.crags.filter((crag)=>{return crag.area == areaId})
  }

  getRoutesByCrag(cragId: number){
    return this.mockData.routes.filter((route)=>{return route.crag == cragId})
  }

  getAllRoutes(){
    return this.mockData.routes;
  }

}
