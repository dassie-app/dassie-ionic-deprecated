import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';


@Injectable()
export class ApiService {

  routesDB: FirebaseListObservable<any[]>;
  cragsDB: FirebaseListObservable<any[]>;
  areasDB: FirebaseListObservable<any[]>;

  routes : any[] = [];
  crags : any[] = [];
  areas : any[] = [];

  constructor(private db: AngularFireDatabase) {

    this.routesDB = db.list('/routes');
    this.cragsDB = db.list('/crags');
    this.areasDB = db.list('/areas');

    this.routesDB.subscribe((routes) => {
      this.routes = routes;
    })
    
    this.cragsDB.subscribe((crags) => {
      this.crags = crags;
    })

    this.areasDB.subscribe((areas) => {
      this.areas = areas;
    })
  }

  getAllRoutes() {
    return this.routesDB;
  }

  getRouteById(id: number): Observable<any> {
    const routeById = Observable.create((observer: Observer<any>) => {
      this.routesDB.subscribe((routes) => {
        let route = routes.filter((route)=>{return route.id == id})[0];
        observer.next(route);
      })
    })
    return routeById;
  }

  getRoutesByCrag(cragId: number): Observable<any> {
    //return this.routes.filter((route)=>{return route.crag == cragId});
    const routesByCrag = Observable.create((observer: Observer<any>) => {
      this.routesDB.subscribe((routes) => {
        let routesByCrag = routes.filter((route)=>{return route.crag == cragId});
        observer.next(routesByCrag);
      })
    })
    return routesByCrag;
  }

  getCragsByArea(areaId: number): Observable<any> {
    //return this.crags.filter((crag)=>{return crag.area == areaId});
    const cragsByArea = Observable.create((observer: Observer<any>) => {
      this.cragsDB.subscribe((crags) => {
        let cragsByArea = crags.filter((crag)=>{return crag.area == areaId});
        observer.next(cragsByArea);
      })
    })
    return cragsByArea;
  }

  getCragById(id: number): Observable<any> {
    const cragById = Observable.create((observer: Observer<any>) => {
      this.cragsDB.subscribe((crags) => {
        let crag = crags.filter((crag) => { return crag.id == id})[0];
        observer.next(crag);
      })
    });

    return cragById;
  }

  getAllAreas() : Observable <any[]> {
    return this.areasDB;
  }

  getAreaById(id): Observable<any> {
    const areaById = Observable.create((observer: Observer<any>) => {
      this.areasDB.subscribe((areas) => {
        let area = areas.filter((area)=>{return area.id == id})[0];
        observer.next(area);
      })
    })
    return areaById;
  }







}
