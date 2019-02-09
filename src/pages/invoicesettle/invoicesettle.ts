import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InvoicesettlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invoicesettle',
  templateUrl: 'invoicesettle.html',
})
export class InvoicesettlePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicesettlePage');
  }

  // settle the payment in advance payment receipt //
  settlePayment() {
    this.navCtrl.push('InvoicePage')
  }

}
