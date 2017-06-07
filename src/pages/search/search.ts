import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

}
