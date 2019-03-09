import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import * as moment from 'moment'
import {RestcallProvider} from '../../providers/restcall/restcall';
import {DASHBOARDTEMPLATE} from './dashboardTemplate';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-dashboard',
    template: DASHBOARDTEMPLATE
})
export class DashboardPage {
    public salInvsCnt: number;
    public brdInvsCnt: number;
    public crntDate: any;

    public salIncome: string;
    public salDailyIncm: number;
    public brdlIncome: string;
    public brdlDailyIncm: number;

    public slnPymnt: any[];
    public brdPymnt: any[];

    public salView: boolean;
    public brdView: boolean;

    public saloonClz: any;
    public bridalClz: any;

    public payemntInvoice: string = null;

    constructor(public navCtrl: NavController, public navParams: NavParams, private restCall: RestcallProvider, private alrt: AlertController) {
        this.slnPymnt = [];
        this.brdPymnt = [];
        this.saloonClz = 'active-btn-gren';
        this.bridalClz = 'active-btn-brwn';
        // this.salInvsCnt = 999;
        // this.brdInvsCnt = 0;
        // this.salDailyIncm = 0
        // this.salIncome = 'LKR ' + 0;
        // this.brdlDailyIncm = 0
        // this.brdlIncome = 'LKR ' + 0;
        this.crntDate = moment().format("MMMM D");
        this.salView = true;
        this.brdView = false;
        this.loadSummary();
        this.loadHistory('BD');
        this.loadHistory('SA');
        console.log('constructor-call');
    }

    ngOnInit() {
        console.log('ionViewDidLoad DashboardPage');
    }

    // saloon payment history //
    saloonDailyPymntHstry() {
        this.salView = true;
        this.brdView = false;
        this.saloonClz = 'active-btn-gren';
        this.bridalClz = 'active-btn-brwn';
    }

    // bridal payment history //
    bridalDailyPymntHstry() {
        this.salView = false;
        this.brdView = true;
        this.saloonClz = 'active-btn-brwn';
        this.bridalClz = 'active-btn-gren';
    }

    // new saloon job //
    newsaloonJob() {
        this.navCtrl.push('TreatementPage', {'viewNm': 'saloonView', 'type': 'SA'});
    }

    // new bridal job //
    newBridalJob() {
        this.navCtrl.push('CustomerinfoPage', {'view': 'bridalView', 'type': 'BD', 'invType': 'BD'});
    }

    // bank receipt page //
    bankReceiptView() {
        this.navCtrl.push('BankreceiptPage');
        // this.navCtrl.push('TreatementPage');
    }

    // search receipt details by ref id //
    searchRef(invoice: string) {
        if (this.payemntInvoice) {
            this.navCtrl.push('InvoicesettlePage', {'conf': invoice});
        } else {
            this.emptySearchField();
        }
    }

    // load daily invoices counts and amounts //
    loadDailyInvoices() {
        this.restCall.loadInvoicesDestails().subscribe(function (res) {
            console.log('load invoice');
        });
    }

    // search invoice by id //
    searchInvoice(id: string) {
        this.restCall.searchInvoice(id).subscribe(function (res) {
            console.log('search invoice');
        });
    }

    // load history data //
    loadHistory(type: string) {
        try {
            this.restCall.dailyHistorycalData(type).then(res => {
                if(res['success']) {
                    console.log('load-history.....3');
                    if (type === 'BD') {
                        console.log('load-history.....BD');
                        this.brdPymnt = res['data'];
                        console.log('type ',type,  res['data']);
                    } else if (type === 'SA') {
                        console.log('load-history.....SA');
                        console.log('type ',type,  res['data']);
                        this.slnPymnt = res['data'];
                    }
                }
            }, err => {
                console.log(err);
            });
        } catch (e) {
            console.log(e);
        }
    }

    // load details daily summary //
    loadSummary() {
        console.log('load-summary.....1');
        this.restCall.getSummary().then(res =>{
            if (res) {
                console.log('load-summary.....3');
                if (res['success']) {
                    console.log('load-summary.....4');
                    let d = res['data'];
                    this.salInvsCnt = d['saloonInvoices'];
                    this.salDailyIncm = d['saloonDailyIncome'];
                    this.salIncome = 'LKR ' + this.salDailyIncm;
                    this.brdInvsCnt = d['bridalInvoices'];
                    this.brdlDailyIncm = d['bridalDailyIncome'];
                    this.brdlIncome = 'LKR ' + this.brdlDailyIncm;
                } else {

                }
            }
        });
    }

    // empty customer field //
    emptySearchField() {
        let emp = this.alrt.create({
            title: 'Error',
            subTitle: 'Please fill the field'
        });
        emp.present();
    }
}
