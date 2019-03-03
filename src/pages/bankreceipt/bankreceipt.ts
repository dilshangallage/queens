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

  constructor(public navCtrl: NavController, public navParams: NavParams, private restCall: RestcallProvider, private alrt: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BankreceiptPage');
  }

  // save bank details //
  saveBankReceipt(accRef: string, recpRef: string, amount: number) {
    this.restCall.addReceipt(accRef, recpRef, amount).subscribe(function (res) {
      console.log('add bank details');
    });
  }

  // success alert //
  successAlert() {
    let msg = this.alrt.create({
      title: 'Successfull',
      subTitle: 'Successfully added new receipt'
    });
    msg.present();
  }
}
