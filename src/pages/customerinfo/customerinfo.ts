import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestcallProvider} from '../../providers/restcall/restcall';

/**
 * Generated class for the CustomerinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customerinfo',
  templateUrl: 'customerinfo.html',
})
export class CustomerinfoPage {
  public selectedData: any;
  public treatement: any;
  public beautician: any;

  public sttlBll: boolean;
  public payAdvnc: boolean;

  public saloonView: boolean = false;
  public bridalView: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private restCall: RestcallProvider) {
    this.selectedData = this.navParams.get('data');
    let viewName = this.navParams.get('view');
    if (viewName && viewName === 'saloonView') {
      this.saloonView = true;
    } else if (viewName === 'bridalView') {
      this.bridalView = true;
    }

    if (this.selectedData) {
      this.treatement = this.selectedData.treatement;
      this.beautician = this.selectedData.beautician;
    }
    this.sttlBll = true;
    this.payAdvnc = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerinfoPage');
  }

  // settle bill //
  settleBill() {
    this.sttlBll = true;
    this.payAdvnc = false;
  }

  // pay advance //
  payAdvance() {
    this.sttlBll = false;
    this.payAdvnc = true;
  }

  // save customer details //
  saveCustomer(type: string, nm: string, contact: string, beautId: number, eventDt: string, customerId: number, treatId: number, advance: number, balance: number, total: number) {
    this.restCall.saveCustomerDetails(type, nm, contact, beautId, eventDt, customerId, treatId, advance, balance, total).subscribe(function (res) {
      console.log('save custmer detailse');
    });
  }

  // next view //
  nextView() {
    this.navCtrl.push('InvoicePage');
  }

}
