import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DeviceFeedback } from '@ionic-native/device-feedback';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AreaPage } from '../pages/area/area';
import { CragPage } from '../pages/crag/crag';
import { RoutePage } from '../pages/route/route';
import { TicklistPage} from '../pages/tick-list/tick-list';
import { SentRoutesPage} from '../pages/sent-routes/sent-routes';
import { SearchPage} from '../pages/search/search';
import { SearchAreasPage} from '../pages/search-areas/search-areas';
import { SearchCragsPage} from '../pages/search-crags/search-crags';
import { SearchRoutesPage} from '../pages/search-routes/search-routes';

import { MockDataService } from './api/mock-data.service';
import { MockAreasService } from './api/mock-areas.service';
import { MockCragsService } from './api/mock-crags.service';
import { MockRoutesService } from './api/mock-routes.service';
import { ApiService } from './api/api.service';

import { SortRoutesPipe } from '../pipes/sort-routes/sort-routes';
import { FilterRoutesPipe } from '../pipes/filter-routes/filter-routes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AreaPage,
    CragPage,
    RoutePage,
    TicklistPage,
    SentRoutesPage,
    SearchPage,
    SearchAreasPage,
    SearchCragsPage,
    SearchRoutesPage,
    SortRoutesPipe,
    FilterRoutesPipe
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
    SentRoutesPage,
    SearchPage,
    SearchAreasPage,
    SearchCragsPage,
    SearchRoutesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeviceFeedback,
    SQLite,
    ApiService,
    MockDataService,
    MockAreasService,
    MockCragsService,
    MockRoutesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
