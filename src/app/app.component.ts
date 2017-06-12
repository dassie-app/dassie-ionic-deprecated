import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goHome(){
    this.nav.push(HomePage).then(
      ()=>{this.nav.setRoot(HomePage)}
    );
  }

  goToTicklist(){
    this.nav.push(TicklistPage);
  }

  goToSentRoutes(){
    this.nav.push(SentRoutesPage);
  }

  goToSearch(){
    this.nav.push(SearchPage);
  }
}

