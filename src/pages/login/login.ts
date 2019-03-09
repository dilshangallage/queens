import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, ToastController} from 'ionic-angular';
import {RestcallProvider} from "../../providers/restcall/restcall";
import {LOGINTEMPLATE} from './loginTemplate';

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
              private alrtCtrl: AlertController, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // login for main dashboard //
  loginClick() {
    this.navCtrl.push('DashboardPage');
    // if (this.nm && this.pwd) {
    //   this.navCtrl.push('DashboardPage');
    //   this.restSrv.login(this.nm, this.pwd).subscribe(res => {
    //         if (res) {
    //           if (!res['success']) {
    //             this.wrongUserAlert();
    //           } else {
    //             this.navCtrl.push('DashboardPage');
    //           }
    //         } else {
    //           this.wrongUserAlert();
    //         }
    //       },
    //       err => {
    //         this.connectionErr();
    //       });
    // } else {
    //   this.emptyFields();
    // }
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
  connectionErr() {
    let cnnErr = this.alrtCtrl.create({
      title: 'Error',
      subTitle: 'Network Error..'
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
