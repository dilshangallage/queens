import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import * as moment from 'moment'
import {RestcallProvider} from '../../providers/restcall/restcall';

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
    public crntDate: any;

    public salIncome: string;
    public salDailyIncm: number;
    public brdlIncome: string;
    public brdlDailyIncm: number;

    public slnPymnt: any;
    public brdPymnt: any;

    public salView: boolean;
    public brdView: boolean;

    public payemntInvoice: string = '';

    constructor(public navCtrl: NavController, public navParams: NavParams, private restCall: RestcallProvider) {
        this.salInvsCnt = 0;
        this.brdInvsCnt = 0;
        this.salDailyIncm = 0
        this.salIncome = 'LKR ' + 0;
        this.brdlDailyIncm = 0
        this.brdlIncome = 'LKR ' + 0;
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
        this.salView = true;
        this.brdView = false;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DashboardPage');
        this.loadSummary();
        this.loadHistory('BD');
        this.loadHistory('SA');

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
        this.navCtrl.push('CustomerinfoPage', {'view': 'bridalView'});
    }

    // bank receipt page //
    bankReceiptView() {
        this.navCtrl.push('BankreceiptPage');
        // this.navCtrl.push('TreatementPage');
    }

    // search receipt details by ref id //
    searchRef(invoice: string) {
        this.navCtrl.push('InvoicesettlePage', {'conf': invoice});
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
        this.restCall.dailyHistorycalData(type).subscribe(function (res) {
            if(res['success']) {
                if (type === 'BD') {
                    this.brdPymnt = res['data'];
                } else if (type === 'SA') {
                    this.slnPymnt = res['data'];
                }
            }
        });
    }

    // load details daily summary //
    loadSummary() {
        this.restCall.getSummary().subscribe(function (res) {
            if (res) {
                if (res['success']) {
                    let d = res['data'];
                    this.salIncome = d['saloonInvoices'];
                    this.salDailyIncm = d['saloonDailyIncome'];
                    this.brdlIncome = d['bridalInvoices'];
                    this.brdlDailyIncm = d['bridalDailyIncome'];
                } else {

                }
            }
        });
    }
}
