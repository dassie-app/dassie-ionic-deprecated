import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';


@Injectable()
export class ApiService {

  routesDB: FirebaseListObservable<any[]>;
  cragsDB: FirebaseListObservable<any[]>;
  areasDB: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase, private storage: Storage) {

    this.routesDB = db.list('/routes');
    this.cragsDB = db.list('/crags');
    this.areasDB = db.list('/areas');

    this.routesDB.subscribe((routes) => {
      this.storage.set('routes', routes);
    });
    
    this.cragsDB.subscribe((crags) => {
      this.storage.set('crags', crags);      
    });

    this.areasDB.subscribe((areas) => {
      this.storage.set('areas', areas);      
    });
  }

  getAllRoutes() {
    const allRoutes = Observable.create((observer: Observer<any>) => {
      this.storage.get('routes').then((routes) => {
        observer.next(routes);
      });
      this.routesDB.subscribe((routes) => {
        observer.next(routes);
      });
    });
    return allRoutes;
  }

  getRouteById(id: number): Observable<any> {
    const routeById = Observable.create((observer: Observer<any>) => {
      this.storage.get('routes').then((routes) => {
        let route = routes.filter((route)=>{return route.id == id})[0];
        observer.next(route);
      });
      this.routesDB.subscribe((routes) => {
        let route = routes.filter((route)=>{return route.id == id})[0];
        observer.next(route);
      });
    });
    return routeById;
  }

  getRoutesByCrag(cragId: number): Observable<any> {
    const routesByCrag = Observable.create((observer: Observer<any>) => {
      this.storage.get('routes').then((routes) => {
        let routesByCrag = routes.filter((route)=>{return route.crag == cragId});
        observer.next(routesByCrag);
      });
      this.routesDB.subscribe((routes) => {
        let routesByCrag = routes.filter((route)=>{return route.crag == cragId});
        observer.next(routesByCrag);
      });
    });
    return routesByCrag;
  }

  getCragsByArea(areaId: number): Observable<any> {
    const cragsByAreaObservable = Observable.create((observer: Observer<any>) => {
      this.storage.get('crags').then((crags) => {
        let cragsByArea = crags.filter((crag)=>{return crag.area == areaId});
        observer.next(cragsByArea);
      });
      this.cragsDB.subscribe((crags) => {
        let cragsByArea = crags.filter((crag)=>{return crag.area == areaId});
        observer.next(cragsByArea);
      });
    });
    return cragsByAreaObservable;
  }

  getCragById(id: number): Observable<any> {
    const cragById = Observable.create((observer: Observer<any>) => {
      this.storage.get('crags').then((crags) => {
        let crag = crags.filter((crag) => { return crag.id == id})[0];
        observer.next(crag);
      });
      this.cragsDB.subscribe((crags) => {
        let crag = crags.filter((crag) => { return crag.id == id})[0];
        observer.next(crag);
      });
    });

    return cragById;
  }

  getAllAreas() : Observable <any[]> {
    const allAreas = Observable.create((observer: Observer<any>) => {
      this.storage.get('areas').then((areas) => {
        observer.next(areas);
      });
      this.areasDB.subscribe((areas) => {
        observer.next(areas);
      });
    });
    return allAreas;
  }

  getAreaById(id): Observable<any> {
    const areaById = Observable.create((observer: Observer<any>) => {
      this.storage.get('areas').then((areas) => {
        let area = areas.filter((area)=>{return area.id == id})[0];
        observer.next(area);
      });
      this.areasDB.subscribe((areas) => {
        let area = areas.filter((area)=>{return area.id == id})[0];
        observer.next(area);
      });
    });
    return areaById;
  }

}
