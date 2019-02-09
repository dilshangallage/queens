import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BankreceiptPage } from './bankreceipt';

@NgModule({
  declarations: [
    BankreceiptPage,
  ],
  imports: [
    IonicPageModule.forChild(BankreceiptPage),
  ],
})
export class BankreceiptPageModule {}
