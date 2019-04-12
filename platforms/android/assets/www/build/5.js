webpackJsonp([5],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerinfoPageModule", function() { return CustomerinfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customerinfo__ = __webpack_require__(418);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomerinfoPageModule = /** @class */ (function () {
    function CustomerinfoPageModule() {
    }
    CustomerinfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__customerinfo__["a" /* CustomerinfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__customerinfo__["a" /* CustomerinfoPage */]),
            ],
        })
    ], CustomerinfoPageModule);
    return CustomerinfoPageModule;
}());

//# sourceMappingURL=customerinfo.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restcall_restcall__ = __webpack_require__(100);
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
 * Generated class for the CustomerinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomerinfoPage = /** @class */ (function () {
    function CustomerinfoPage(navCtrl, navParams, restCall, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restCall = restCall;
        this.alert = alert;
        this.saloonView = false;
        this.bridalView = false;
        this.invoiceType = '';
        this.customerName = '';
        this.customerContactNumber = '';
        this.eventDate = '';
        this.customerId = 0;
        this.sttlBll = true;
        this.payAdvnc = false;
        this.selectedData = this.navParams.get('data');
        var viewName = this.navParams.get('view');
        this.invType = this.navParams.get('invType');
        if (viewName && viewName === 'saloonView') {
            this.saloonView = true;
        }
        else if (viewName === 'bridalView') {
            this.bridalView = true;
            this.sttlBll = false;
            this.payAdvnc = true;
        }
        if (this.selectedData) {
            this.treatement = this.selectedData.treatement;
            // this.treatement.needAdvance = true;
            if (this.treatement.needAdvance) {
                this.sttlBll = false;
                this.payAdvnc = true;
            }
            this.beautician = this.selectedData.beautician;
        }
    }
    CustomerinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerinfoPage');
    };
    // settle bill //
    CustomerinfoPage.prototype.settleBill = function () {
        this.sttlBll = true;
        this.payAdvnc = false;
    };
    // pay advance //
    CustomerinfoPage.prototype.payAdvance = function () {
        this.sttlBll = false;
        this.payAdvnc = true;
    };
    // save customer details //
    CustomerinfoPage.prototype.saveCustomer = function (type, nm, contact, beautId, eventDt, customerId, treatId, advance, balance, total) {
        this.restCall.saveCustomerDetails(this.invType, nm, contact, beautId, eventDt, customerId, treatId, advance, balance, total).subscribe(function (res) {
            console.log('save custmer detailse');
        });
    };
    // next view //
    CustomerinfoPage.prototype.nextView = function () {
        var data = new Object();
        data['invoiceType'] = this.invType;
        data['customrtName'] = this.customerName;
        data['customrtMobile'] = this.customerContactNumber;
        data['eventDateTime'] = (this.invType === 'BD') ? new Date(this.eventDate).getTime() : new Date().getMilliseconds();
        data['beautician'] = (this.invType === 'BD') ? null : this.beautician.id;
        data['beautician'] = (this.invType === 'BD') ? null : this.beautician.name;
        data['treatment'] = (this.invType === 'BD') ? null : this.treatement.description;
        data['treatmentId'] = (this.invType === 'BD') ? 5 : this.treatement.id;
        if (this.invType === 'BD') {
            data['advance'] = parseInt(this.advance);
            data['balance'] = parseInt(this.total) - parseInt(this.advance);
            data['total'] = parseInt(this.total);
        }
        else {
            data['advance'] = (!this.payAdvnc) ? this.treatement.price : parseInt(this.advance);
            data['balance'] = (!this.payAdvnc) ? 0 : this.treatement.price - parseInt(this.advance);
            data['total'] = this.treatement.price;
        }
        if (this.customerName && this.customerContactNumber && data['total'] > 0) {
            if (this.invType === 'BD') {
                if (data['advance']) {
                    data['createdDateTime'] = new Date().getTime();
                    this.navCtrl.push('InvoicePage', { 'data': data });
                }
                else {
                    this.emptyDataMsg();
                }
            }
            else {
                if (this.treatement.needAdvance) {
                    if (data['advance']) {
                        data['createdDateTime'] = new Date().getTime();
                        this.navCtrl.push('InvoicePage', { 'data': data });
                    }
                    else {
                        this.emptyDataMsg();
                    }
                }
                else {
                    data['createdDateTime'] = new Date().getTime();
                    this.navCtrl.push('InvoicePage', { 'data': data });
                }
            }
        }
        else {
            this.emptyDataMsg();
        }
    };
    // load customer details //
    CustomerinfoPage.prototype.loadCustomerDetails = function () {
        var _self = this;
        this.restCall.loadCustomer(this.customerContactNumber).then(function (res) {
            if (res['success']) {
                if (res['data']) {
                    var d = res['data'];
                    _self.customerId = d['id'];
                    _self.customerName = d['customerName'];
                }
                else {
                    _self.customerId = 0;
                    _self.customerName = '';
                }
            }
            else {
                _self.customerId = 0;
                _self.customerName = '';
            }
        }, function (err) {
            _self.customerId = 0;
            _self.customerName = '';
        });
    };
    // empty data in fields //
    CustomerinfoPage.prototype.emptyDataMsg = function () {
        var msg = this.alert.create({
            title: 'Error',
            subTitle: 'Please fill all fields'
        });
        msg.present();
    };
    CustomerinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-customerinfo',template:/*ion-inline-start:"/home/dilshan/Documents/queens/src/pages/customerinfo/customerinfo.html"*/`<!--\n  Generated template for the CustomerinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="app-hdr">\n  <ion-navbar>\n    <img src="assets/imgs/app-logo.png" class="hdr-logo">\n    <ion-buttons end>\n      <button ion-button class="menu-ioc"><ion-icon name="menu"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="app-page-bg">\n\n  <!-- customer details for saloon job-->\n  <ion-grid *ngIf="saloonView">\n\n    <div class="pg-cnt-hdr">CUSTOMER INFORMATION</div>\n\n    <ion-row class="app-card-1 bacic-app-card">\n      <div class="flx-1">\n\n        <div class="cust-info-trt">\n          <div class="l1-txt">{{treatement?.typeDescription}}</div>\n          <div class="l2-txt">{{treatement?.description}}</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l1-txt">{{beautician?.name}}</div>\n          <div class="l2-txt">Beautician</div>\n        </div>\n      </div>\n\n      <div class="l1-txt">\n        LKR {{treatement?.price}}\n      </div>\n    </ion-row>\n\n\n    <div class="pg-cnt-hdr">CUSTOMER INFORMATION</div>\n\n\n    <ion-row class="app-form-inpt-row">\n      <input (blur)="loadCustomerDetails()"  [(ngModel)]="customerContactNumber" placeholder="Contact number">\n    </ion-row>\n\n    <ion-row class="app-form-inpt-row">\n      <input [(ngModel)]="customerName" placeholder="Coustommer name">\n    </ion-row>\n\n    <div class="pg-cnt-hdr">PAYMENT OPTION</div>\n\n    <ion-row class="tab-btn-row" *ngIf="sttlBll">\n      <button class="btn-lft active-btn-gren" ion-button (click)="settleBill()">Settle the Bill</button>\n      <button [disabled]="true" class="btn-rgt active-btn-brwn" ion-button (click)="payAdvance()">Pay Advance</button>\n  </ion-row>\n      <ion-row class="tab-btn-row" *ngIf="payAdvnc">\n          <button [disabled]="true" class="btn-lft active-btn-brwn" ion-button (click)="settleBill()">Settle the Bill</button>\n          <button class="btn-rgt active-btn-gren" ion-button (click)="payAdvance()">Pay Advance</button>\n      </ion-row>\n\n    <ion-row *ngIf="sttlBll" class="app-pay-opt">\n        <ion-col no-padding>\n            <ion-row class="pay-opt-row">\n                <div><input name="payment" type="radio" value="cardPayment"></div>\n                <div class="flx-1"><img src="assets/imgs/visa.png"></div>\n            </ion-row>\n        </ion-col>\n\n        <ion-col no-padding>\n            <ion-row class="pay-opt-row">\n                <div><input name="payment" type="radio" value="cashPayment" checked></div>\n                <div class="opt-txt">Pay by Cash</div>\n            </ion-row>\n        </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="payAdvnc" class="app-pay-opt">\n\n    <ion-col no-padding col-12 class="app-form-inpt-row pay-dadv-input">\n        <input [(ngModel)]="advance" placeholder="Advance Amount">\n      </ion-col>\n\n      <ion-col no-padding>\n        <ion-row class="pay-opt-row">\n          <div><input name="payment" type="radio" value="cardPayment"></div>\n          <div class="flx-1"><img src="assets/imgs/visa.png"></div>\n        </ion-row>\n      </ion-col>\n\n      <ion-col no-padding>\n        <ion-row class="pay-opt-row">\n          <div><input name="payment" type="radio" value="cashPayment" checked></div>\n          <div class="opt-txt">Pay by Cash</div>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n  <!-- customer details for saloon job-->\n\n\n  <!-- customer details for bridal job-->\n  <ion-grid *ngIf="bridalView">\n\n    <div class="pg-cnt-hdr">CUSTOMER INFORMATION</div>\n\n      <ion-row class="app-form-inpt-row">\n          <input (blur)="loadCustomerDetails()" [(ngModel)]="customerContactNumber" placeholder="Contact number">\n      </ion-row>\n\n    <ion-row class="app-form-inpt-row">\n      <input [(ngModel)]="customerName" placeholder="Coustommer name">\n    </ion-row>\n\n    <ion-col no-padding col-12 class="app-form-inpt-row">\n        <ion-datetime [(ngModel)]="eventDate" placeholder="Event Date"></ion-datetime>\n    </ion-col>\n\n    <ion-col no-padding col-12 class="app-form-inpt-row">\n        <input [(ngModel)]="total" placeholder="Amount">\n      </ion-col>\n\n    <div class="pg-cnt-hdr marg-top-24">PAYMENT OPTION</div>\n\n    <ion-row class="tab-btn-row">\n      <button [disabled]="true" class="btn-lft active-btn-brwn" ion-button (click)="settleBill()">Settle the Bill</button>\n      <button class="btn-rgt active-btn-gren" ion-button (click)="payAdvance()">Pay Advance</button>\n  </ion-row>\n\n    <ion-row *ngIf="sttlBll" class="app-pay-opt">\n        <ion-col no-padding>\n            <ion-row class="pay-opt-row">\n                <div><input name="payment" type="radio" value="cardPayment"></div>\n                <div class="flx-1"><img src="assets/imgs/visa.png"></div>\n            </ion-row>\n        </ion-col>\n\n        <ion-col no-padding>\n            <ion-row class="pay-opt-row">\n                <div><input name="payment" type="radio" value="cashPayment" checked></div>\n                <div class="opt-txt">Pay by Cash</div>\n            </ion-row>\n        </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="payAdvnc" class="app-pay-opt">\n\n      <ion-col no-padding col-12 class="app-form-inpt-row pay-dadv-input">\n        <input [(ngModel)]="advance" placeholder="Advance Amount">\n      </ion-col>\n\n      <ion-col no-padding>\n        <ion-row class="pay-opt-row">\n          <div><input name="payment" type="radio" value="cardPayment"></div>\n          <div class="flx-1"><img src="assets/imgs/visa.png"></div>\n        </ion-row>\n      </ion-col>\n\n      <ion-col no-padding>\n        <ion-row class="pay-opt-row">\n          <div><input name="payment" type="radio" value="cashPayment" checked></div>\n          <div class="opt-txt">Pay by Cash</div>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n  <!-- customer details for bridal job-->\n\n  </ion-content>\n\n<ion-footer class="pg-btm-btn-foot">\n  <ion-row>\n    <ion-col>\n      <button ion-button (click)="nextView()" class="brwn-grd-btn">\n        NEXT\n      </button>\n    </ion-col>\n    </ion-row>\n</ion-footer>\n`/*ion-inline-end:"/home/dilshan/Documents/queens/src/pages/customerinfo/customerinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_restcall_restcall__["a" /* RestcallProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CustomerinfoPage);
    return CustomerinfoPage;
}());

//# sourceMappingURL=customerinfo.js.map

/***/ })

});
//# sourceMappingURL=5.js.map