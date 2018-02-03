import { Injectable } from '@angular/core';
import { allCrags } from './crags';
import { allRoutes } from './routes';


@Injectable()
export class ApiService {
  constructor() {
  }

  getAllRoutes() {
    return allRoutes;
  }

  getRouteById(id: number) {
    let route = allRoutes.filter((route)=>{return route.id == id})[0];
    return route;
  }

  getRoutesByCrag(cragId: number) {
    let routes = allRoutes.filter((route)=>{return route.crag == cragId});
    return routes;
  }

  getAllCrags() {
    return allCrags;
  }

  getCragById(id: number) {
    let crag = allCrags.filter((crag) => { return crag.id == id})[0];
    return crag;
  }

}
