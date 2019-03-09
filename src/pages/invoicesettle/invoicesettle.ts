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

  public invoiceId: number;
  public data: any;
  public amount: string;
  public advanceView: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private restCall: RestcallProvider, private alert: AlertController) {
    this.invoiceId = this.navParams.get('conf');
    this.loadCustomerDetils(this.invoiceId);
    this.advanceView = false;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicesettlePage');
  }

  // load customer details //
  loadCustomerDetils(invoice: number) {
    this.restCall.searchInvoiceHistory(invoice).then(res => {
      if (res['success']) {
        this.data = res['data'];
        if (this.data) {
          if (this.data['type'] === 'BD' && this.data['balance'] !== 0) {
            this.advanceView = true;
          }
        }
      } else {
        this.alertEmptyCustomer();
      }
    }, err =>{
      this.alertEmptyCustomer();
    });
  }

  // search suctomer //
  searchCustomer(id: number) {
    this.loadCustomerDetils(id);
  }

  // settle the payment in advance payment receipt //
  settlePayment(data: any) {
    data['invoiceType'] = 'BD';
    data['id'] = this.invoiceId;
    this.navCtrl.push('InvoicePage', {'data': data});
  }

  // show error msg //
  alertEmptyCustomer() {
    let alt = this.alert.create({
      title: 'Failed!',
      subTitle: 'Search customer not valid'
    });
    alt.present();
  }

}
