import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {ENVURL} from '../env/envVaribles';
import {TokenIDProvider} from '../token/token-id';

/*
 Generated class for the RestcallProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class RestcallProvider {

    public httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        })
    };

    constructor(public http: HttpClient,
                private tokenSrv: TokenIDProvider) {
    }

    // set token into options //
    setOptionsToken() {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'token': this.tokenSrv.getCurrentToken()
            })
        };
    }

    // login credentials verificcation //
    login(usnm: string, pwd: string) {
        try {
            let body = JSON.stringify({
                'userName': usnm,
                'password': pwd
            });
            let url: any = ENVURL + 'saloon-app/login';

            return this.http.post(url, body, this.httpOptions);
        } catch (e) {
            console.log('ERR:-', e);
        }
    }

    // loading invoices details //
    loadInvoicesDestails() {
        try {
            this.setOptionsToken();
            let body = JSON.stringify({
                'token': this.tokenSrv.getCurrentToken()
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
            this.setOptionsToken();
            let body = JSON.stringify({
                'invoiceNumber': id,
                'token': this.tokenSrv.getCurrentToken()
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
            return new Promise((resolve, reject) => {
                this.setOptionsToken();
                let body = JSON.stringify({
                    'type': type,
                    'token': this.tokenSrv.getCurrentToken()
                });
                let url: any = ENVURL + 'saloon-app/get-history';
                // url = url.replace('$data_type', dataType);

                this.http.post(url, body, this.httpOptions).subscribe(res => {
                    if (res['success']) {
                        resolve(res);
                    } else {
                        reject(null);
                    }
                }, (err) => {
                    reject(err);
                });
            });
        } catch (e) {
            console.log('ERR:-', e);
        }
    }

    // save bank receipt details //
    addReceipt(accRef: string, recpRef: string, amount: number) {
        try {
            this.setOptionsToken();
            let body = JSON.stringify({
                'bankAccountRef': accRef,
                'receiptRefNumber': recpRef,
                'receiptAmount': amount,
                'token': this.tokenSrv.getCurrentToken()

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
            return new Promise((resolve, reject) => {
                this.setOptionsToken();
                let body = JSON.stringify({
                    'Type': 'SA',
                    'token': this.tokenSrv.getCurrentToken()

                });
                let url: any = ENVURL + 'saloon-app/get-treatments';
                // url = url.replace('$data_type', dataType);

                this.http.post(url, body, this.httpOptions).subscribe(res => {
                    if (res['success']) {
                        resolve(res);
                    } else {
                        reject(null);
                    }
                }, (err) => {
                    reject(err);
                });
            });

        } catch (e) {
            console.log('ERR:-', e);
        }
    }

    // load beauticianse //
    allBeatucianse() {
        try {
            return new Promise((resolve, reject) => {
                this.setOptionsToken();
                let url: any = ENVURL + 'saloon-app/get-beauticians';
                // url = url.replace('$data_type', dataType);

                this.http.get(url, this.httpOptions).subscribe(res => {
                    if (res['success']) {
                        resolve(res);
                    } else {
                        reject(null);
                    }
                }, (err) => {
                    reject(err);
                });
            });

        } catch (e) {
            console.log('ERR:-', e);
        }
    }

    // save customer details //
    saveCustomerDetails(type: string, nm: string, contact: string, beautId: number, eventDt: string, customerId: number, treatId: number, advance: number, balance: number, total: number, id?: string) {
        try {
            this.setOptionsToken();
            let body = JSON.stringify({
                'invoiceType': type,
                'customerName': nm,
                'customerContactNumber': contact,
                'beauticianId': beautId,
                'eventDate': eventDt,
                'customerId': customerId,
                'treatmentId': treatId,
                'advance': advance,
                'balance': balance,
                'total': total,
                'id': id,
                'token': this.tokenSrv.getCurrentToken()

            });
            let url: any = ENVURL + 'saloon-app/add-customer-invoice';
            // url = url.replace('$data_type', dataType);

            return this.http.post(url, body, this.httpOptions);
        } catch (e) {
            console.log('ERR:-', e);
        }
    }

    // load customer details using customer contact id //
    loadCustomer(customerId: string) {
        try {
            return new Promise((resolve, reject) => {
                this.setOptionsToken();
                let body = JSON.stringify({
                    'customerContactNumber': customerId,
                    'token': this.tokenSrv.getCurrentToken()
                });
                let url: any = ENVURL + 'saloon-app/get-customer';
                // url = url.replace('$data_type', dataType);

                this.http.post(url, body, this.httpOptions).subscribe(res => {
                    if (res['success']) {
                        resolve(res);
                    } else {
                        reject(null);
                    }
                }, (err) => {
                    reject(err);
                });
            });

        } catch (e) {
            console.log('ERR:-', e);
        }
    }

    // get summary details //
    getSummary() {
        try {
            return new Promise((resolve, reject) => {
                this.setOptionsToken();
                let url: any = ENVURL + 'saloon-app/get-summary-details';
                let body = JSON.stringify({
                    'token': this.tokenSrv.getCurrentToken()
                });

                this.http.post(url, body, this.httpOptions).subscribe(res => {
                    if (res['success']) {
                        resolve(res);
                    } else {
                        reject(null);
                    }
                }, (err) => {
                    reject(err);
                });
            });
        } catch (e) {
            console.log(e);
        }
    }

    // search invoice history //
    searchInvoiceHistory(invoiceID: number) {
        try {
            return new Promise((resolve, reject) => {
                this.setOptionsToken();
                let body = JSON.stringify({
                    'invoiceNumber': invoiceID,
                    'token': this.tokenSrv.getCurrentToken()
                });
                let url: any = ENVURL + 'saloon-app/search-history';
                // url = url.replace('$data_type', dataType);

                return this.http.post(url, body, this.httpOptions).subscribe(res => {
                    if (res['success']) {
                        resolve(res);
                    } else {
                        reject(null);
                    }
                }, (err) => {
                    reject(err);
                });
            });
        } catch (e) {
            console.log('ERR:-', e);
        }
    }

    // set token for body //
    setBodyToken(body: any) {
        body['token'] = this.tokenSrv.getCurrentToken();
        return body;
    }

}
