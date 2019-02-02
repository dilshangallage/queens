import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    this.beauticiansList = [
      {
        'name': 'Amal'
      },
      {
        'name': 'Nimak'
      },
      {
        'name': 'Kaml'
      },
      {
        'name': 'Dila'
      },
      {
        'name': 'Dala'
      },
      {
        'name': 'Sanduni'
      },
      {
        'name': 'Amaraweera'
      },
      {
        'name': 'Mapalagamage'
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreatementPage');
  }

  // select beautician //
  activeBtn() {
    // this.beautiNm = nm;
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
        }}});
  }

}
