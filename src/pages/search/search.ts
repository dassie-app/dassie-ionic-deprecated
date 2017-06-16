import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SearchAreasPage} from '../search-areas/search-areas';
import { SearchCragsPage} from '../search-crags/search-crags';
import { SearchRoutesPage} from '../search-routes/search-routes';
import { RoutePage } from '../route/route';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searches = [
    {
      text: "Search Routes",
      id: 1
    },
    {
      text: "Search Crags",
      id: 2
    },
    {
      text: "Search Areas",
      id: 3
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToRoute(id: number) {
     this.navCtrl.push(RoutePage, {
       id: id
    });
  }

  searchSelected(searchId: number){
    switch(searchId){
      case 1:
        this.navCtrl.push(SearchRoutesPage);
        break;
      case 2:
        this.navCtrl.push(SearchCragsPage);
        break;
      case 3:
        this.navCtrl.push(SearchAreasPage);
        break;
    }
  }


}
