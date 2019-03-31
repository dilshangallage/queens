import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {RestcallProvider} from '../../providers/restcall/restcall';

/**
 * Generated class for the BankreceiptPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bankreceipt',
  templateUrl: 'bankreceipt.html',
})
export class BankreceiptPage {

  public bankAccountRef: string;
  public receiptRefNumber: string;
  public receiptAmount: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private restCall: RestcallProvider, private alrt: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BankreceiptPage');
  }

  // save bank details //
  saveBankReceipt(accRef: string, recpRef: string, amounts: string) {
    try {
      if (accRef && recpRef && amounts) {
        let amount = parseInt(amounts);
        this.restCall.addReceipt(accRef, recpRef, amount).subscribe(function (res) {
          if (res['success']) {
            this.successAlert();
            this.close();
          } else {
            this.retryAlert();
          }
        }, err => {
          this.retryAlert();
        });
      } else {
        this.emptyFields();
      }
    } catch (e) {
      console.log(e);
    }
  }

  // success alert //
  successAlert() {
    let msg = this.alrt.create({
      title: 'Successfull',
      subTitle: 'Successfully added new receipt'
    });
    msg.present();
  }

  // retry alert //
  retryAlert() {
    let rty = this.alrt.create({
      title: 'Failed!',
      subTitle: 'Please try again'
    });
    rty.present();
  }

  // fill all fields //
  emptyFields() {
    let empty = this.alrt.create({
      title: 'Error!',
      subTitle: 'Please fill all fields'
    });
    empty.present();
  }

  // close invoice view //
  close() {
    this.navCtrl.push('DashboardPage');
  }
}
