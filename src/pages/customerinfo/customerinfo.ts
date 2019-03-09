import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestcallProvider} from '../../providers/restcall/restcall';

/**
 * Generated class for the CustomerinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customerinfo',
  templateUrl: 'customerinfo.html',
})
export class CustomerinfoPage {
  public selectedData: any;
  public treatement: any;
  public beautician: any;

  public sttlBll: boolean;
  public payAdvnc: boolean;

  public saloonView: boolean = false;
  public bridalView: boolean = false;

  public invoiceType: string = '';
  public customerName: string = '';
  public customerContactNumber: string = '';
  public eventDate: string = '';
  public beauticianId: number;
  public treatmentId: number;
  public advance: number;
  public balance: number;
  public total: number;
  public customerId: number = 0;
  public invType: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private restCall: RestcallProvider) {
    this.selectedData = this.navParams.get('data');
    let viewName = this.navParams.get('view');
    this.invType = this.navParams.get('invType');
    if (viewName && viewName === 'saloonView') {
      this.saloonView = true;
    } else if (viewName === 'bridalView') {
      this.bridalView = true;
    }

    if (this.selectedData) {
      this.treatement = this.selectedData.treatement;
      this.beautician = this.selectedData.beautician;
    }
    this.sttlBll = true;
    this.payAdvnc = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerinfoPage');
  }

  // settle bill //
  settleBill() {
    this.sttlBll = true;
    this.payAdvnc = false;
  }

  // pay advance //
  payAdvance() {
    this.sttlBll = false;
    this.payAdvnc = true;
  }

  // save customer details //
  saveCustomer(type: string, nm: string, contact: string, beautId: number, eventDt: string, customerId: number, treatId: number, advance: number, balance: number, total: number) {
    this.restCall.saveCustomerDetails(this.invType, nm, contact, beautId, eventDt, customerId, treatId, advance, balance, total).subscribe(function (res) {
      console.log('save custmer detailse');
    });
  }

  // next view //
  nextView() {
    let data = new Object();
    data['invoiceType'] = this.invType;
    data['customrtName'] = this.customerName;
    data['customrtMobile'] = this.customerContactNumber;
    data['eventDateTime'] = (this.invType === 'BD')? new Date(this.eventDate).getTime(): new Date().getMilliseconds();
    data['beautician'] = (this.invType === 'BD')? null: this.beautician.id;
    data['beautician'] = (this.invType === 'BD')? null: this.beautician.name;
    data['treatment'] = (this.invType === 'BD')? null: this.treatement.description;
    data['treatmentId'] = (this.invType === 'BD')? 1000: this.treatement.id;
    data['advance'] = (this.invType === 'SA')? this.treatement.price: this.advance;
    data['balance'] = (this.invType === 'SA')? 0: this.balance;
    data['total'] = (this.invType === 'SA')? this.treatement.price: this.total;
    data['createdDateTime'] = new Date().getMilliseconds();
    this.navCtrl.push('InvoicePage', {'data': data});
  }

  // load customer details //
  loadCustomerDetails() {
    let _self = this;
    this.restCall.loadCustomer(this.customerContactNumber).then(function (res) {
      if (res['success']) {
        if (res['data']) {
          let d = res['data'];
          _self.customerId = d['id'];
          _self.customerName = d['customerName'];
        } else {
          _self.customerId = 0;
          _self.customerName = '';
        }
      } else {
        _self.customerId = 0;
        _self.customerName = '';
      }
    }, err => {
      _self.customerId = 0;
      _self.customerName = '';
    });
  }

}
