import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CragPage } from '../pages/crag/crag';
import { RoutePage } from '../pages/route/route';
import { SearchRoutesPage } from '../pages/search-routes/search-routes';

import { ApiService } from './api/api.service';

import { SortRoutesPipe } from '../pipes/sort-routes/sort-routes';
import { FilterRoutesPipe } from '../pipes/filter-routes/filter-routes';
import { RouteCardComponent } from '../components/route-card/route-card';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CragPage,
    RoutePage,
    SearchRoutesPage,
    SortRoutesPipe,
    FilterRoutesPipe,
    RouteCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CragPage,
    RoutePage,
    SearchRoutesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
