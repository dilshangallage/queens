import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {RestcallProvider} from '../../providers/restcall/restcall';

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

  public customerID: string = '';
  public data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private restCall: RestcallProvider, private alert: AlertController) {
    this.customerID = this.navParams.get('conf');
    this.loadCustomerDetils(this.customerID);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicesettlePage');
  }

  // load customer details //
  loadCustomerDetils(invoice: string) {
    this.restCall.loadCustomer(invoice).subscribe(function (res) {
      if (res['success']) {
        this.data = res['data'];
      } else {
        this.alertEmptyCustomer();
      }
    }, err => {
      this.alertEmptyCustomer();
    });
  }

  // search suctomer //
  searchCustomer(id: string) {
    this.loadCustomerDetils(id);
  }

  // settle the payment in advance payment receipt //
  settlePayment() {
    this.navCtrl.push('InvoicePage')
  }

  // show error msg //
  alertEmptyCustomer() {
    let alt = this.alert.create({
      title: 'Failed!',
      subTitle: 'Search customer not valid'
    });
  }

}
