import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, FabContainer } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { HomePage } from '../pages/home/home';
import { TicklistPage} from '../pages/tick-list/tick-list';
import { SentRoutesPage} from '../pages/sent-routes/sent-routes';
import { SearchPage} from '../pages/search/search';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  @ViewChild('mainNav') nav: NavController;
  @ViewChild('fabContainer') fabContainer: FabContainer;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private sqlite: SQLite) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      this.sqlite.create({
        name: 'boven.db',
        location: 'default'
      }).then((db: SQLiteObject)=>{
        db.executeSql('create table if not exists sends(routeId INT)', {});
      });
    });
  }

  goHome(){
    this.nav.push(HomePage).then(
      ()=>{this.nav.setRoot(HomePage)}
    );
    this.fabContainer.close();
  }

  goToTicklist(){
    this.nav.push(TicklistPage);
    this.fabContainer.close();
  }

  goToSentRoutes(){
    this.nav.push(SentRoutesPage);
    this.fabContainer.close();
  }

  goToSearch(){
    this.nav.push(SearchPage);
    this.fabContainer.close();
  }
}

