import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedData = this.navParams.get('data');
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

  // next view //
  nextView() {
    this.navCtrl.push('InvoicePage');
  }

}
