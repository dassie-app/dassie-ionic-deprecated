import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DeviceFeedback } from '@ionic-native/device-feedback';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AreaPage } from '../pages/area/area';
import { CragPage } from '../pages/crag/crag';
import { RoutePage } from '../pages/route/route';
import { TicklistPage} from '../pages/tick-list/tick-list';
import { SearchPage} from '../pages/search/search';
import { SearchAreasPage} from '../pages/search-areas/search-areas';
import { SearchCragsPage} from '../pages/search-crags/search-crags';
import { SearchRoutesPage} from '../pages/search-routes/search-routes';

import { MockDataService } from './api/mock-data.service';
import { ApiService } from './api/api.service';
import { SortRoutesPipe } from '../pipes/sort-routes/sort-routes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AreaPage,
    CragPage,
    RoutePage,
    TicklistPage,
    SearchPage,
    SearchAreasPage,
    SearchCragsPage,
    SearchRoutesPage,
    SortRoutesPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AreaPage,
    CragPage,
    RoutePage,
    TicklistPage,
    SearchPage,
    SearchAreasPage,
    SearchCragsPage,
    SearchRoutesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeviceFeedback,
    ApiService,
    MockDataService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
