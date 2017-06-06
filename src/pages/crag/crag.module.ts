import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CragPage } from './crag';

@NgModule({
  declarations: [
    CragPage,
  ],
  imports: [
    IonicPageModule.forChild(CragPage),
  ],
  exports: [
    CragPage
  ]
})
export class CragPageModule {}
