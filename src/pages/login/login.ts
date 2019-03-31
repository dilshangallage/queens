import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, ToastController} from 'ionic-angular';
import {RestcallProvider} from "../../providers/restcall/restcall";
import {LOGINTEMPLATE} from './loginTemplate';
import {TokenIDProvider} from '../../providers/token/token-id';

/**
 *  Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  template: LOGINTEMPLATE,
})
export class LoginPage {

  public nm: string = null;
  public pwd: string = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private restSrv: RestcallProvider,
              private alrtCtrl: AlertController,
              private toastCtrl: ToastController,
              private tokenSrv: TokenIDProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // login for main dashboard //
  loginClick() {
    // this.navCtrl.push('DashboardPage');
    if (this.nm && this.pwd) {
      // this.navCtrl.push('DashboardPage');
      this.restSrv.login(this.nm, this.pwd).subscribe(res => {
            if (res) {
              if (!res['success']) {
                this.tokenSrv.setCurrentToken(res);
                this.navCtrl.push('DashboardPage');
              } else {
                this.wrongUserAlert();
              }
            } else {
              this.wrongUserAlert();
            }
          },
          err => {
        if (err['error']['error']) {
          this.connectionErr(err['error']["error"]["errorMessage"]);
        } else {
          this.connectionErr('Network connection error..');
        }
          });
    } else {
      this.emptyFields();
    }
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

  // network error message //
  connectionErr(msg: string) {
    let cnnErr = this.alrtCtrl.create({
      title: 'Error',
      subTitle: msg
    })
    cnnErr.present();
  }

  // please fill the fields //
  emptyFields() {
    let ntErr = this.alrtCtrl.create({
      title: 'Error',
      subTitle: 'Please fill the fields'
    });
    ntErr.present();
  }
}
