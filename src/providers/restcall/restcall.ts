import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {ENVURL} from '../env/envVaribles';

/*
  Generated class for the RestcallProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestcallProvider {

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(public http: HttpClient) {
  }

  // login credentials verificcation //
  login(usnm: string, pwd: string) {
    try {
      let body = JSON.stringify({
        'userName': usnm,
        'password': pwd
      });
      let url: any = ENVURL + 'saloon-app/auth/login'

      return this.http.post(url, body, this.httpOptions);
    } catch (e) {
      console.log('ERR:-', e);
    }
  }

  // loading invoices details //
  loadInvoicesDestails() {
    try {
      let body = JSON.stringify({
      });
      let url: any = ENVURL + '';
      // url = url.replace('$data_type', dataType);

      return this.http.post(url, body, this.httpOptions);
    } catch (e) {
      console.log('ERR:-', e);
    }
  }

  // search invoice by id //
  searchInvoice(id: string) {
    try {
      let body = JSON.stringify({
        'invoiceNumber': id
      });
      let url: any = ENVURL + '';
      // url = url.replace('$data_type', dataType);

      return this.http.post(url, body, this.httpOptions);
    } catch (e) {
      console.log('ERR:-', e);
    }
  }

  // loading history daily data //
  dailyHistorycalData(type: string) {
    try {
      let body = JSON.stringify({
        'type': type
      });
      let url: any = ENVURL + 'saloon-app/get-history';
      // url = url.replace('$data_type', dataType);

      return this.http.post(url, body, this.httpOptions);
    } catch (e) {
      console.log('ERR:-', e);
    }
  }

  // save bank receipt details //
  addReceipt(accRef: string, recpRef: string, amount: number) {
    try {
      let body = JSON.stringify({
        'bankAccountRef': accRef,
        'receiptRefNumber': recpRef,
        'receiptAmount': amount

      });
      let url: any = ENVURL + 'saloon-app/add-bank-receipt';
      // url = url.replace('$data_type', dataType);

      return this.http.post(url, body, this.httpOptions);
    } catch (e) {
      console.log('ERR:-', e);
    }
  }

  // load treatements //
  allTreatements() {
    try {
      let url: any = ENVURL + 'saloon-app/get-treatments';
      // url = url.replace('$data_type', dataType);

      return this.http.get(url, this.httpOptions);
    } catch (e) {
      console.log('ERR:-', e);
    }
  }

  // load beauticianse //
  allBeatucianse() {
    try {
      let url: any = ENVURL + 'saloon-app/get-beauticians';
      // url = url.replace('$data_type', dataType);

      return this.http.get(url, this.httpOptions);
    } catch (e) {
      console.log('ERR:-', e);
    }
  }

  // save customer details //
  saveCustomerDetails(type: string, nm: string, contact: string, beautId: number, eventDt: string, customerId: number, treatId: number, advance: number, balance: number, total: number) {
    try {
      let body = JSON.stringify({
        'invoiceType': type,
        'customerName':nm,
        'customerContactNumber': contact,
        'beauticianId': beautId,
        'eventDate': eventDt,
        'customerId': customerId,
        'treatmentId': treatId,
        'advance': advance,
        'balance': balance,
        'total': total

      });
      let url: any = ENVURL + '';
      // url = url.replace('$data_type', dataType);

      return this.http.post(url, body, this.httpOptions);
    } catch (e) {
      console.log('ERR:-', e);
    }
  }

  // load customer details using customer contact id //
  loadCustomer(customerId: string) {
    try {
      let body = JSON.stringify({
        'customerContactNumber': customerId
      });
      let url: any = ENVURL + 'saloon-app/get-customer';
      // url = url.replace('$data_type', dataType);

      return this.http.post(url, body, this.httpOptions);
    } catch (e) {
      console.log('ERR:-', e);
    }
  }

  // get summary details //
  getSummary() {
    try {
      let url: any = ENVURL + 'saloon-app/get-summary-details';
      // url = url.replace('$data_type', dataType);

      return this.http.get(url, this.httpOptions);
    } catch (e) {
      console.log(e);
    }
  }

}
