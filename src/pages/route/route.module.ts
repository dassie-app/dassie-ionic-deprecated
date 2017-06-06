import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoutePage } from './route';

@NgModule({
  declarations: [
    RoutePage,
  ],
  imports: [
    IonicPageModule.forChild(RoutePage),
  ],
  exports: [
    RoutePage
  ]
})
export class RoutePageModule {}
