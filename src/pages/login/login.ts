import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private restSrv: RestcallProvider, private alrtCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // login for main dashboard //
  loginClick(unm: string, pwd: string) {
    this.restSrv.login(unm, pwd).subscribe(res => {
          this.navCtrl.push('DashboardPage');
    },
    err => {
      this.navCtrl.push('DashboardPage');
      // this.wrongUserAlert();
    });
  }

  // credential are wrong alert //
  wrongUserAlert() {
    let alert = this.alrtCtrl.create({
      title: 'Error',
      subTitle: 'Login user password is incorrect'
    });
    alert.present();
  }

}
