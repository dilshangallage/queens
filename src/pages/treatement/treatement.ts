import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {RestcallProvider} from '../../providers/restcall/restcall';

/**
 * Generated class for the TreatementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-treatement',
  templateUrl: 'treatement.html',
})
export class TreatementPage {
  public treatementList: any;
  public beauticiansList: any;

  public beautiNm: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private restCall: RestcallProvider, private toastCtrl: ToastController) {
    this.treatementList = [
      {
        'type': 'Hair Cut',
        'data': [
          {
            'title': 'Hair Cut - Baby Girl',
            'cost': ' LKR 550.00',
            'description': 'Hair wash blow dry'
          },
          {
            'title': 'Hair Cut - Baby Girl',
            'cost': ' LKR 321.00',
            'description': 'Hair wash blow dry'
          },
          {
            'title': 'Hair Cut - Baby Girl',
            'cost': ' LKR 550.00',
            'description': 'Hair wash blow dry'
          },
          {
            'title': 'Hair Cut - Baby Girl',
            'cost': ' LKR 550.00',
            'description': 'Hair wash blow dry'
          },
          {
            'title': 'Hair Cut - Baby Girl',
            'cost': ' LKR 550.00',
            'description': 'Hair wash blow dry'
          }
        ]
      },
      {
        'type': 'Hair Color',
        'data': [
          {
            'title': 'Hair Color - Baby Girl',
            'cost': ' LKR 1300.00',
            'description': 'Hair wash blow dry'
          },
          {
            'title': 'Hair Cut - Baby Girl',
            'cost': ' LKR 321.00',
            'description': 'Hair wash blow dry'
          },
          {
            'title': 'Hair Cut - Baby Girl',
            'cost': ' LKR 550.00',
            'description': 'Hair wash blow dry'
          },
          {
            'title': 'Hair Cut - Baby Girl',
            'cost': ' LKR 550.00',
            'description': 'Hair wash blow dry'
          },
          {
            'title': 'Hair Cut - Baby Girl',
            'cost': ' LKR 550.00',
            'description': 'Hair wash blow dry'
          }
        ]
      }
    ];
    this.loadBeauticianse();
    this.loadTreatements();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreatementPage');
    // this.loadBeauticianse();
  }

  // select beautician //
  activeBtn() {
    // this.beautiNm = nm;
  }

  // get all beatuticians //
  loadBeaticians() {
    this.restCall.allBeatucianse().subscribe(function (res) {
      console.log('load beauticians');
    });
  }

  // load next view //
  nextView() {
    console.log('Beautician name', this.beautiNm);
    this.navCtrl.push('CustomerinfoPage',
      {'data':
          {'treatement': {
          'title': 'Hair Cut - Baby Girl',
          'cost': ' LKR 550.00',
          'description': 'Hair wash blow dry'
        },
            'beautician': {
          'name': 'Amal'
        }}, 'view' : 'saloonView'});
  }

  // load all beauticianse //
  loadBeauticianse() {
    this.restCall.allBeatucianse().subscribe(function (res) {
      if (res) {
        if (res['success']) {
          this.beauticiansList = res['data'];
        }
      }
    });
  }

  // load treatements //
  loadTreatements() {
    this.restCall.allTreatements().subscribe(function (res) {
      if (res) {
        if (res['success']) {
          let d = res['data'];
        } else {
          this.presentToast(res['error']['errorMessage']);
        }
      }
    });
  }

  // present toast //
  presentToast(msg: string) {
    let tst = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'middle'
    });
    tst.onDidDismiss(function () {

    });
    tst.present();
  }

}
