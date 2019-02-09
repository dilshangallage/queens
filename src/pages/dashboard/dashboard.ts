import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment'

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  public salInvsCnt: number;
  public brdInvsCnt: number;
  public crntDate:any;

  public salIncome: string;
  public salDailyIncm: number;
  public brdlIncome: string;
  public brdlDailyIncm: number;

  public slnPymnt: any;
  public brdPymnt: any;

  public salView: boolean;
  public brdView: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.salInvsCnt =275;
    this.brdInvsCnt =75;
    this.salDailyIncm = 3800.00
    this.salIncome = 'LKR ' + this.salDailyIncm;
    this.brdlDailyIncm = 5800.00
    this.brdlIncome = 'LKR ' + this.brdlDailyIncm;
    this.crntDate = moment().format("MMMM D");
    this.slnPymnt = [{
      'name': 'Gayani Maddawaththa',
      'balance': 'LKR 1250.00',
    'invId': 'INV#11587',
    'job': 'Hair remove/Hair cut',
    'date': 'November 7'
    },
      {
        'name': 'Ama; Perera',
        'balance': 'LKR 6670.00',
        'invId': 'INV#11887',
        'job': 'Hair remove/Hair cut',
        'date': 'November 8'
      },
      {
        'name': 'Saman Lenin',
        'balance': 'LKR 3350.00',
        'invId': 'INV#11507',
        'job': 'Hair remove/Hair cut',
        'date': 'November 4'
      }
    ];
    this.brdPymnt = [{
      'name': 'ddddd Maddawaththa',
      'balance': 'LKR 1250.00',
    'invId': 'INV#11587',
    'job': 'Hair remove/Hair cut',
    'date': 'November 7'
    },
      {
        'name': 'fffff Perera',
        'balance': 'LKR 6670.00',
        'invId': 'INV#11887',
        'job': 'Hair remove/Hair cut',
        'date': 'November 8'
      },
      {
        'name': 'vvvvv Lenin',
        'balance': 'LKR 3350.00',
        'invId': 'INV#11507',
        'job': 'Hair remove/Hair cut',
        'date': 'November 4'
      }
    ];
    this.salView =true;
    this.brdView =false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  // saloon payment history //
  saloonDailyPymntHstry() {
    this.salView = true;
    this.brdView = false;
  }
  // bridal payment history //
  bridalDailyPymntHstry() {
    this.salView = false;
    this.brdView = true;
  }

  // new saloon job //
  newsaloonJob() {
    this.navCtrl.push('TreatementPage');
  }

  // new bridal job //
  newBridalJob() {
    this.navCtrl.push('CustomerinfoPage', {'view' : 'bridalView'});
  }

  // bank receipt page //
  bankReceiptView() {
    this.navCtrl.push('BankreceiptPage');
    // this.navCtrl.push('TreatementPage');
  }

  // search receipt details by ref id //
  searchRef() {
    this.navCtrl.push('InvoicesettlePage');
  }
}
