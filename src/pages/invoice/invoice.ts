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
  public customerName: string = '';
  public customerContactNumber: string = '';
  public eventDate: string = '';
  public advanceDate: string = '';
  public beauticianId: number;
  public treatmentId: number;
  public advance: number;
  public balance: number;
  public total: number;

  public customerId: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, private restCall: RestcallProvider, private alt: AlertController) {
    this.pageView =this.navParams.get('data');
    if (this.pageView) {
    this.invoiceType =this.pageView['invoiceType'];
    this.customerName =this.pageView['customerName'];
    this.customerContactNumber =this.pageView['customerContactNumber'];
    this.eventDate =this.pageView['eventDate'];
    this.beauticianId =this.pageView['beauticianId'];
    this.treatmentId =this.pageView['treatmentId'];
    this.advance =this.pageView['advance'];
    this.balance =this.pageView['balance'];
    this.total =this.pageView['total'];
    this.advanceDate =this.pageView['advanceDate'];
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicePage');
  }

  // submit the data in to backend //
  submit() {
    this.submitInvoice();
    this.invoiceView = false;
    this.successView = true;
  }

  // close invoice view //
  close() {
    this.navCtrl.push('DashboardPage');
  }

  // submit invoice //
  submitInvoice() {
    this.restCall.saveCustomerDetails(this.invoiceType, this.customerName, this.customerContactNumber, this.beauticianId,
        this.eventDate, this.customerId, this.treatmentId, this.advance, this.balance,  this.total).subscribe(function (res) {
          if (res['success']) {

          } else {
            this.submitAlert();
          }
      console.log('save custmer detailse');
    }, err => {
          this.networkErr();
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
