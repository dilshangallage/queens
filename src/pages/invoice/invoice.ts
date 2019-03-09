import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {RestcallProvider} from '../../providers/restcall/restcall';

/**
 * Generated class for the InvoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage {
  public invoiceView: boolean = true;
  public successView: boolean = false;
  public pageView: any;

  public invoiceType: string = '';
  public beautician: string = '';
  public treatment: string = '';
  public customerName: string = '';
  public customerContactNumber: string = '';
  public eventDate: string = '';
  public createdDateTime: string = '';
  public beauticianId: number;
  public treatmentId: number;
  public advance: number;
  public balance: number;
  public total: number;

  public invoiceID: any;

  public customerId: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, private restCall: RestcallProvider, private alt: AlertController) {
    this.pageView =this.navParams.get('data');
    if (this.pageView) {
    this.invoiceType =this.pageView['invoiceType'];
    this.customerName =this.pageView['customerName'];
    this.beautician =this.pageView['beautician'];
    this.treatment =this.pageView['treatment'];
    this.customerContactNumber =this.pageView['customrtMobile'];
    this.eventDate =this.pageView['eventDate'];
    this.beauticianId =this.pageView['beauticianId'];
    this.treatmentId =this.pageView['treatmentId'];
    this.advance =this.pageView['advance'];
    this.balance =this.pageView['balance'];
    this.total =this.pageView['total'];
    this.createdDateTime =this.pageView['createdDateTime'];
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicePage');
  }

  // submit the data in to backend //
  submit() {
    this.submitInvoice();
  }

  // close invoice view //
  close() {
    this.navCtrl.push('DashboardPage');
  }

  // submit invoice //
  submitInvoice() {
    let _self = this;
    this.restCall.saveCustomerDetails(this.pageView.invoiceType, this.pageView.customrtName, this.pageView.customrtMobile, 1,
        this.pageView.eventDateTime, 0, this.pageView.treatmentId, this.pageView.advance, this.pageView.balance,  this.pageView.advance + this.pageView.balance, this.pageView.invoiceNumber).subscribe(function (res) {
      if (res['success']) {
        if (res['data']) {
          _self.invoiceID = res['data']['invoiceId'];
        } else {
          if (this.pageView) {
            _self.invoiceID = this.pageView.invoiceNumber;
          }
        }
        _self.invoiceView = false;
        _self.successView = true;
      } else {
        _self.submitAlert();
      }
      console.log('save custmer detailse');
    }, err => {
      _self.networkErr();
    });
  }

  // submit error alert //
  submitAlert() {
    let msg = this.alt.create({
      title: 'Failed!',
      subTitle: 'Failed to submit'
    });
    msg.present();
  }

  // network error //
  networkErr() {
    let nterr = this.alt.create({
      title: 'Error!',
      subTitle: 'Network Error'
    });
    nterr.present();
  }
}
