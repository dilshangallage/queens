import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, AlertController} from 'ionic-angular';
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
  public selecttreatement: any = {};
  public selectButician: any = {};
  public viewNm: string;
  public invType: string;

  public beautiNm: string;
  public buttonColor: any = 'active-btn-gren';

  constructor(public navCtrl: NavController, public navParams: NavParams, private restCall: RestcallProvider, private toastCtrl: ToastController, private alrt: AlertController) {
    this.viewNm = this.navParams.get('viewNm');
    this.invType = this.navParams.get('type');
    this.loadBeauticianse();
    this.loadTreatements();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreatementPage');
    // this.loadBeauticianse();
  }

  // select beautician //
  activeBtn(bt: string, ind: number) {
    // this.beautiNm = nm;
    if (this.beauticiansList.length > 0) {
      this.beauticiansList.forEach((dt, index) => {
        if (ind === index) {
          dt['class'] = 'active-btn-gren';
        } else {
          dt['class'] = 'deactive-btn-gren';
        }
      });
    }
    this.selectButician = bt;
  }

  // load next view //
  nextView() {
    console.log('Beautician name', this.beautiNm);
    if (JSON.stringify(this.selectButician) !== '{}' && JSON.stringify(this.selecttreatement) !== '{}') {
      this.navCtrl.push('CustomerinfoPage',
          {'data': {
              'treatement': this.selecttreatement,
              'beautician': this.selectButician,
          }, 'view': this.viewNm,
            'invType': this.invType
          });
    } else
    {
        this.emptyButicianse();
    }
  }

  // load all beauticianse //
  loadBeauticianse() {
    let _self = this;
    this.restCall.allBeatucianse().then(function (res) {
      if (res) {
        if (res['success']) {
          _self.beauticiansList = res['data'];
          if (_self.beauticiansList.length > 0) {
            _self.beauticiansList.forEach((dt, index) => {
              dt['class'] = 'deactive-btn-gren';
            });
          }
        }
      }
    });
  }

  // load treatements //
  loadTreatements() {
    let _self = this;
    this.restCall.allTreatements().then(function (res) {
      if (res) {
        if (res['success']) {
          _self.treatementList = res['data'];
        } else {
          _self.presentToast(res['error']['errorMessage']);
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

  // select buticiance are empty //
  emptyButicianse() {
        let empty = this.alrt.create(
            {
              title: 'Error',
              subTitle: 'Please select data'
            }
        );
    empty.present();
  }

  onChangeHandler(event) {
    console.log(event);
  }

}
