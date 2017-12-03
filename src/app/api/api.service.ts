import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiService {
  apiUrl = 'http://dassie.herokuapp.com/api/v1/';
  constructor(private http: Http, private storage: Storage) {

    this.http.get(this.apiUrl + 'routes').map((response) => {
      return response.json()
    }).subscribe((routes) => {
      console.log(routes);
      this.storage.set('routes', routes);
    });

    this.http.get(this.apiUrl + 'crags').map((response) => {
      return response.json()
    }).subscribe((crags) => {
      console.log(crags);
      this.storage.set('crags', crags);
    });

  }

  getAllRoutes() {
    const allRoutes = Observable.create((observer: Observer<any>) => {
      this.storage.get('routes').then((routes) => {
        observer.next(routes);
      });
    });
    return allRoutes;
  }

  getRouteById(id: string): Observable<any> {
    const routeById = Observable.create((observer: Observer<any>) => {
      this.storage.get('routes').then((routes) => {
        let route = routes.filter((route)=>{return route.id == id})[0];
        observer.next(route);
      });
    });
    return routeById;
  }

  getRoutesByCrag(cragId: string): Observable<any> {
    const routesByCrag = Observable.create((observer: Observer<any>) => {
      this.storage.get('routes').then((routes) => {
        let routesByCrag = routes.filter((route)=>{return route.parent_id == cragId});
        observer.next(routesByCrag);
      });
    });
    return routesByCrag;
  }

  getAllCrags() : Observable <any[]> {
    const allCrags = Observable.create((observer: Observer<any>) => {
      this.storage.get('crags').then((crags) => {
        observer.next(crags);
      });
    });
    return allCrags;
  }

  getCragById(id: string): Observable<any> {
    const cragById = Observable.create((observer: Observer<any>) => {
      this.storage.get('crags').then((crags) => {
        let crag = crags.filter((crag) => { return crag.id == id})[0];
        observer.next(crag);
      });
    });

    return cragById;
  }

}
