import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, ToastController} from 'ionic-angular';
import {RestcallProvider} from "../../providers/restcall/restcall";

/**
 *  Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private restSrv: RestcallProvider,
              private alrtCtrl: AlertController, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // login for main dashboard //
  loginClick(unm: string, pwd: string) {
    this.navCtrl.push('DashboardPage');
    this.restSrv.login(unm, pwd).subscribe(res => {
      if (res) {
        console.log('response', res);
        // if (res['success']) {
        //   this.navCtrl.push('DashboardPage');
        // } else {
        //   this.wrongUserAlert();
        // }
      } else {
        this.wrongUserAlert();
      }
    },
    err => {
      this.wrongUserAlert();
    });
  }

  // credential are wrong alert //
  wrongUserAlert() {
    let alert = this.alrtCtrl.create({
      title: 'Login Failed!',
      subTitle: 'Please check your credentials...'
    });
    alert.present();
  }

  // create toast //
  unsuccessToast() {
    let tst = this.toastCtrl.create({
      message: 'Wrong Credentials',
      duration: 3000,
      position: 'middle'
    });
    tst.onDidDismiss(function () {

    });
    tst.present();
  }

}
