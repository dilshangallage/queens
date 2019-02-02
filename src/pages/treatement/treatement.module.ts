import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TreatementPage } from './treatement';

@NgModule({
  declarations: [
    TreatementPage,
  ],
  imports: [
    IonicPageModule.forChild(TreatementPage),
  ],
})
export class TreatementPageModule {}
