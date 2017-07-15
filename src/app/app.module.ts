import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DeviceFeedback } from '@ionic-native/device-feedback';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AreaPage } from '../pages/area/area';
import { CragPage } from '../pages/crag/crag';
import { RoutePage } from '../pages/route/route';
import { SearchRoutesPage } from '../pages/search-routes/search-routes';

import { ApiService } from './api/api.service';

import { SortRoutesPipe } from '../pipes/sort-routes/sort-routes';
import { FilterRoutesPipe } from '../pipes/filter-routes/filter-routes';
import { RouteCardComponent } from '../components/route-card/route-card';

export const firebaseConfig = {
  apiKey: "AIzaSyAER4X8D21xgEAk3KJO2dvtkI249vIkw1w",
  authDomain: "boven-route-guide.firebaseapp.com",
  databaseURL: "https://boven-route-guide.firebaseio.com",
  projectId: "boven-route-guide",
  storageBucket: "boven-route-guide.appspot.com",
  messagingSenderId: "302341661659"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AreaPage,
    CragPage,
    RoutePage,
    SearchRoutesPage,
    SortRoutesPipe,
    FilterRoutesPipe,
    RouteCardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AreaPage,
    CragPage,
    RoutePage,
    SearchRoutesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeviceFeedback,
    AngularFireDatabase,
    ApiService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
