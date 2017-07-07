import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, FabContainer } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { SearchRoutesPage} from '../pages/search-routes/search-routes';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  @ViewChild('mainNav') nav: NavController;
  @ViewChild('fabContainer') fabContainer: FabContainer;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goHome(){
    this.nav.push(HomePage).then(
      ()=>{this.nav.setRoot(HomePage)}
    );
    this.fabContainer.close();
  }

  goToSearch(){
    this.nav.push(SearchRoutesPage);
    this.fabContainer.close();
  }
}

