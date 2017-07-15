import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'route-card',
  templateUrl: 'route-card.html'
})
export class RouteCardComponent implements OnInit {

  @Input() route: any;
  starArray: number[];

  constructor() {
    this.starArray = []
  }

  ngOnInit(){
    for (let i = 0; i < this.route.stars; i++) {
      this.starArray.push(0);
    }
  }

}
