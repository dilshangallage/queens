import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvoicesettlePage } from './invoicesettle';

@NgModule({
  declarations: [
    InvoicesettlePage,
  ],
  imports: [
    IonicPageModule.forChild(InvoicesettlePage),
  ],
})
export class InvoicesettlePageModule {}
