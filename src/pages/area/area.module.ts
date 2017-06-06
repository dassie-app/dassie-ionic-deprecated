import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AreaPage } from './area';

@NgModule({
  declarations: [
    AreaPage,
  ],
  imports: [
    IonicPageModule.forChild(AreaPage),
  ],
  exports: [
    AreaPage
  ]
})
export class AreaPageModule {}
