webpackJsonp([3],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesettlePageModule", function() { return InvoicesettlePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoicesettle__ = __webpack_require__(422);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InvoicesettlePageModule = /** @class */ (function () {
    function InvoicesettlePageModule() {
    }
    InvoicesettlePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__invoicesettle__["a" /* InvoicesettlePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__invoicesettle__["a" /* InvoicesettlePage */]),
            ],
        })
    ], InvoicesettlePageModule);
    return InvoicesettlePageModule;
}());

//# sourceMappingURL=invoicesettle.module.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesettlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restcall_restcall__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InvoicesettlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InvoicesettlePage = /** @class */ (function () {
    function InvoicesettlePage(navCtrl, navParams, restCall, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restCall = restCall;
        this.alert = alert;
        this.invoiceId = this.navParams.get('conf');
        this.loadCustomerDetils(this.invoiceId);
        this.advanceView = false;
    }
    InvoicesettlePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvoicesettlePage');
    };
    // load customer details //
    InvoicesettlePage.prototype.loadCustomerDetils = function (invoice) {
        var _this = this;
        this.restCall.searchInvoiceHistory(invoice).then(function (res) {
            if (res['success']) {
                _this.data = res['data'];
                if (_this.data) {
                    if (_this.data['type'] = 'BD') {
                        _this.advanceView = true;
                    }
                }
            }
            else {
                _this.alertEmptyCustomer();
            }
        }, function (err) {
            _this.alertEmptyCustomer();
        });
    };
    // search suctomer //
    InvoicesettlePage.prototype.searchCustomer = function (id) {
        this.loadCustomerDetils(id);
    };
    // settle the payment in advance payment receipt //
    InvoicesettlePage.prototype.settlePayment = function (data) {
        data['invoiceType'] = 'BD';
        this.navCtrl.push('InvoicePage', { 'data': data });
    };
    // show error msg //
    InvoicesettlePage.prototype.alertEmptyCustomer = function () {
        var alt = this.alert.create({
            title: 'Failed!',
            subTitle: 'Search customer not valid'
        });
        alt.present();
    };
    InvoicesettlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invoicesettle',template:/*ion-inline-start:"/home/dilshan/Documents/queens/src/pages/invoicesettle/invoicesettle.html"*/`<!--\n  Generated template for the InvoicesettlePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="app-hdr">\n  <ion-navbar>\n    <img src="assets/imgs/app-logo.png" class="hdr-logo">\n    <ion-buttons end>\n      <button ion-button class="menu-ioc"><ion-icon name="menu"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="app-page-bg">\n  <ion-grid>\n  <div class="pg-cnt-hdr">INVOICE</div>\n  <ion-row class="search-fld">\n    <input [(ngModel)]="customerID" class="flx-1" placeholder="Search Payments and Customers"> <button ion-button (click)="searchCustomer(customerID)"> <ion-icon name="search"></ion-icon> </button>\n  </ion-row>\n\n    <!-- <ion-row>\n      <label>\n        BALANCE - LKR 1000.00\n      </label>\n    </ion-row>\n    <input placeholder="Receipt Amount">\n    <button ion-button (click)="settlePayment()">\n      Settle the Payment\n    </button> -->\n\n    <ion-row class="app-card-1 bacic-app-card invo-card">\n      \n      <ion-col no-padding col-12 class="top-sec invo-sec">\n      <ion-row>\n      <div class="flx-1">\n\n        <div class="cust-info-trt">\n          <div class="blance-txt">BALANCE - LKR {{data?.advance}}</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="brwn-txt">{{data?.invoiceNumber}}</div>\n          <div class="l2-txt">Invoice ID</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l1-txt">{{data?.createdDateTime |  date:\'MMM d, y, h:mm:ss a\'}}</div>\n          <div class="l2-txt">Advance invoice date and time</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l1-txt gren-txt">{{data?.eventDateTime |  date:\'MMM d, y, h:mm:ss a\'}}</div>\n          <div class="l2-txt ">Event date and time</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l1-txt">{{data?.beautician}}</div>\n          <div class="l2-txt">Beautician</div>\n        </div>\n      </div>\n\n      <div class="app-logo">\n        <img src="assets/imgs/quee-logo.png">\n        <div class="l3-txt">Salon Reg#:2395</div>\n      </div>\n      </ion-row>\n      </ion-col>\n\n      <ion-col no-padding col-12 class="mid-sec invo-sec">\n      <ion-row>\n        <div class="flx-1">\n        \n        <div class="cust-info-trt">\n          <div class="l1-txt">{{data?.treatment}}</div>\n          <div class="l2-txt">Hair wash blow dry</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l2-txt">Customer : <b>{{data?.customrtName}}</b></div>\n          <div class="l2-txt">Mobile : <b>{{data?.customrtMobile}}</b></div>\n        </div>\n      </div>\n\n      <div class="l1-txt">\n        LKR {{data?.advance + data?.balance}}\n      </div>\n      </ion-row>\n      </ion-col>\n\n      <ion-col no-padding col-12 class="total-sec invo-sec">\n      <ion-row class="marg-b-24" *ngIf="advanceView">\n        <div class="flx-1"></div>\n        <div class="l2-txt">ADVANCE</div>\n        <div class="l1-txt gray-txt">LKR {{data?.advance}}</div>\n      </ion-row>\n\n      <ion-row class="app-form-inpt-row" *ngIf="advanceView">\n        <div class="l1-txt gray-txt">LKR {{data?.balance}}</div>\n      </ion-row>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer class="pg-btm-btn-foot" *ngIf="advanceView">\n  <ion-row>\n    <ion-col>\n      <button class="gren-btn app-button" ion-button (click)="settlePayment(data)">Settle the Payment</button>\n      <!-- <button class="brwn-grd-btn app-button" ion-button>SUBMITt</button>\n      <button class="" ion-button >CLOSE</button> -->\n    </ion-col>\n    </ion-row>\n</ion-footer>\n`/*ion-inline-end:"/home/dilshan/Documents/queens/src/pages/invoicesettle/invoicesettle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_restcall_restcall__["a" /* RestcallProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], InvoicesettlePage);
    return InvoicesettlePage;
}());

//# sourceMappingURL=invoicesettle.js.map

/***/ })

});
//# sourceMappingURL=3.js.map