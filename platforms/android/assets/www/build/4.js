webpackJsonp([4],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePageModule", function() { return InvoicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice__ = __webpack_require__(419);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InvoicePageModule = /** @class */ (function () {
    function InvoicePageModule() {
    }
    InvoicePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__invoice__["a" /* InvoicePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__invoice__["a" /* InvoicePage */]),
            ],
        })
    ], InvoicePageModule);
    return InvoicePageModule;
}());

//# sourceMappingURL=invoice.module.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicePage; });
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
 * Generated class for the InvoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InvoicePage = /** @class */ (function () {
    function InvoicePage(navCtrl, navParams, restCall, alt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restCall = restCall;
        this.alt = alt;
        this.invoiceView = true;
        this.successView = false;
        this.invoiceType = '';
        this.beautician = '';
        this.treatment = '';
        this.customerName = '';
        this.customerContactNumber = '';
        this.eventDate = '';
        this.createdDateTime = '';
        this.customerId = 1;
        this.pageView = this.navParams.get('data');
        if (this.pageView) {
            this.invoiceType = this.pageView['invoiceType'];
            this.customerName = this.pageView['customerName'];
            this.beautician = this.pageView['beautician'];
            this.treatment = this.pageView['treatment'];
            this.customerContactNumber = this.pageView['customrtMobile'];
            this.eventDate = this.pageView['eventDate'];
            this.beauticianId = this.pageView['beauticianId'];
            this.treatmentId = this.pageView['treatmentId'];
            this.advance = this.pageView['advance'];
            this.balance = this.pageView['balance'];
            this.total = this.pageView['total'];
            this.createdDateTime = this.pageView['createdDateTime'];
        }
    }
    InvoicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvoicePage');
    };
    // submit the data in to backend //
    InvoicePage.prototype.submit = function () {
        this.submitInvoice();
    };
    // close invoice view //
    InvoicePage.prototype.close = function () {
        this.navCtrl.push('DashboardPage');
    };
    // submit invoice //
    InvoicePage.prototype.submitInvoice = function () {
        var _self = this;
        this.restCall.saveCustomerDetails(this.pageView.invoiceType, this.pageView.customrtName, this.pageView.customrtMobile, 1, this.pageView.eventDateTime, 0, this.pageView.treatmentId, this.pageView.advance, this.pageView.balance, this.pageView.advance + this.pageView.balance, this.pageView.invoiceNumber).subscribe(function (res) {
            if (res['success']) {
                if (res['data']) {
                    _self.invoiceID = res['data']['invoiceId'];
                }
                else {
                    if (this.pageView) {
                        _self.invoiceID = this.pageView.invoiceNumber;
                    }
                }
                _self.invoiceView = false;
                _self.successView = true;
            }
            else {
                _self.submitAlert();
            }
            console.log('save custmer detailse');
        }, function (err) {
            _self.networkErr();
        });
    };
    // submit error alert //
    InvoicePage.prototype.submitAlert = function () {
        var msg = this.alt.create({
            title: 'Failed!',
            subTitle: 'Failed to submit'
        });
        msg.present();
    };
    // network error //
    InvoicePage.prototype.networkErr = function () {
        var nterr = this.alt.create({
            title: 'Error!',
            subTitle: 'Network Error'
        });
        nterr.present();
    };
    InvoicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invoice',template:/*ion-inline-start:"/home/dilshan/Documents/queens/src/pages/invoice/invoice.html"*/`<!--\n  Generated template for the InvoicePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="app-hdr">\n  <ion-navbar>\n    <img src="assets/imgs/app-logo.png" class="hdr-logo">\n    <ion-buttons end>\n      <button ion-button class="menu-ioc"><ion-icon name="menu"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="app-page-bg">\n\n<!-- invoice search -->\n<ion-grid *ngIf="invoiceView">\n\n<ion-row class="app-card-1 bacic-app-card invo-card">\n      \n      <ion-col no-padding col-12 class="top-sec invo-sec">\n      <ion-row>\n      <div class="flx-1">\n\n        <div class="cust-info-trt">\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l1-txt">{{pageView?.createdDateTime |  date:\'MMM d, y, h:mm:ss a\'}}</div>\n          <div class="l2-txt">invoice date and time</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l1-txt gren-txt">{{pageView?.eventDateTime |  date:\'MMM d, y, h:mm:ss a\'}}</div>\n          <div class="l2-txt ">Event date and time</div>\n        </div>\n\n        <div class="cust-info-trt" *ngIf="pageView.beautician">\n          <div class="l1-txt">{{pageView?.beautician}}</div>\n          <div class="l2-txt">Beautician</div>\n        </div>\n\n      </div>\n\n      <div class="app-logo">\n        <img src="assets/imgs/quee-logo.png">\n        <div class="l3-txt">Salon Reg#:2395</div>\n      </div>\n      </ion-row>\n      </ion-col>\n\n      <ion-col no-padding col-12 class="mid-sec invo-sec">\n      <ion-row>\n        <div class="flx-1">\n        \n        <div class="cust-info-trt" *ngIf="pageView.treatment">\n          <div class="l1-txt">{{pageView?.treatment}}</div>\n          <div class="l2-txt">Hair wash blow dry</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l2-txt">Customer : <b>{{pageView?.customrtName}}</b></div>\n          <div class="l2-txt">Mobile : <b>{{pageView?.customrtMobile}}</b></div>\n        </div>\n      </div>\n\n      <div class="l1-txt">\n        LKR {{pageView?.advance + pageView?.balance}}\n      </div>\n      </ion-row>\n      </ion-col>\n\n      <ion-col no-padding col-12 class="total-sec invo-sec">\n      <ion-row class="marg-b-10">\n        <div class="flx-1"></div>\n        <div class="l2-txt">ADVANCE</div>\n        <div class="l1-txt gray-txt">LKR {{pageView?.advance}}</div>\n      </ion-row>\n\n      <ion-row class="marg-b-10">\n        <div class="flx-1"></div>\n        <div class="l2-txt">BALANCE</div>\n        <div class="l1-txt gray-txt">LKR {{pageView?.balance}}</div>\n      </ion-row>\n\n      <ion-row class="marg-b-10">\n        <div class="flx-1"></div>\n        <div class="l2-txt">TOTAL AMOUNT</div>\n        <div class="l-txt">LKR {{pageView?.advance + pageView?.balance}}</div>\n      </ion-row>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n  <!-- invoice search -->\n\n\n\n<!-- saloon service invoic -->\n<!-- <ion-grid *ngIf="invoiceView">\n<div class="pg-cnt-hdr">INVOICE</div>\n\n<ion-row class="app-card-1 bacic-app-card invo-card">\n      \n      <ion-col no-padding col-12 class="top-sec invo-sec">\n      <ion-row>\n      <div class="flx-1">\n\n        <div class="cust-info-trt">\n          <div class="brwn-txt">QBR_00000771#</div>\n          <div class="l2-txt">Invoice ID</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l1-txt">28.11.2018  3:20PM</div>\n          <div class="l2-txt">Invoice date and time</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l1-txt">Ashani Gunathilaka</div>\n          <div class="l2-txt">Beautician</div>\n        </div>\n\n      </div>\n\n      <div class="app-logo">\n        <img src="assets/imgs/quee-logo.png">\n        <div class="l3-txt">Salon Reg#:2395</div>\n      </div>\n      </ion-row>\n      </ion-col>\n\n      <ion-col no-padding col-12 class="mid-sec invo-sec">\n      <ion-row>\n        <div class="flx-1">\n        \n        <div class="cust-info-trt">\n          <div class="l1-txt">Hair Cut Baby Girl</div>\n          <div class="l2-txt">Hair wash blow dry</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l2-txt">Customer : <b>Dhanushka Balasuriya</b></div>\n          <div class="l2-txt">Mobile : <b>071 225 2258</b></div>\n        </div>\n      </div>\n\n      <div class="l1-txt">\n        LKR 1500\n      </div>\n      </ion-row>\n      </ion-col>\n\n      <ion-col no-padding col-12 class="total-sec invo-sec">\n\n      <ion-row class="marg-b-10">\n        <div class="flx-1"></div>\n        <div class="l2-txt">TOTAL AMOUNT</div>\n        <div class="l-txt">LKR 2500.00</div>\n      </ion-row>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid> -->\n  <!-- saloon service invoic -->\n\n\n\n  <!-- Bridel Job invoic -->\n<!--   <ion-grid *ngIf="invoiceView">\n\n    <ion-row class="app-card-1 bacic-app-card invo-card">\n        \n        <ion-col no-padding col-12 class="top-sec invo-sec">\n        <ion-row>\n        <div class="flx-1">\n\n          <div class="cust-info-trt">\n            <div class="brwn-txt">QBR_00000771#</div>\n            <div class="l2-txt">Invoice ID</div>\n          </div>\n\n          <div class="cust-info-trt">\n            <div class="l1-txt">28.11.2018  3:20PM</div>\n            <div class="l2-txt">Advance invoice date and time</div>\n          </div>\n\n          <div class="cust-info-trt">\n            <div class="l1-txt gren-txt">21.12.2018  3:20PM</div>\n            <div class="l2-txt ">Event date and time</div>\n          </div>\n\n          <div class="cust-info-trt">\n            <div class="l1-txt">Ashani Gunathilaka</div>\n            <div class="l2-txt">Beautician</div>\n          </div>\n\n        </div>\n\n        <div class="app-logo">\n          <img src="assets/imgs/quee-logo.png">\n          <div class="l3-txt">Salon Reg#:2395</div>\n        </div>\n        </ion-row>\n        </ion-col>\n\n        <ion-col no-padding col-12 class="mid-sec invo-sec">\n        <ion-row>\n          <div class="flx-1">\n          \n          <div class="cust-info-trt">\n            <div class="l1-txt">Hair Cut Baby Girl</div>\n            <div class="l2-txt">Hair wash blow dry</div>\n          </div>\n\n          <div class="cust-info-trt">\n            <div class="l2-txt">Customer : <b>Dhanushka Balasuriya</b></div>\n            <div class="l2-txt">Mobile : <b>071 225 2258</b></div>\n          </div>\n        </div>\n\n        <div class="l1-txt">\n          LKR 2500.00\n        </div>\n        </ion-row>\n        </ion-col>\n\n        <ion-col no-padding col-12 class="total-sec invo-sec">\n        <ion-row class="marg-b-10">\n          <div class="flx-1"></div>\n          <div class="l2-txt gren-txt">ADVANCE</div>\n          <div class="l1-txt gren-txt">LKR 1500.00</div>\n        </ion-row>\n\n        <ion-row class="marg-b-10">\n          <div class="flx-1"></div>\n          <div class="l2-txt red-txt">BALANCE</div>\n          <div class="l1-txt red-txt">LKR 1000.00</div>\n        </ion-row>\n\n        <ion-row class="marg-b-10">\n          <div class="flx-1"></div>\n          <div class="l2-txt">TOTAL AMOUNT</div>\n          <div class="l-txt">LKR 2500.00</div>\n        </ion-row>\n        </ion-col>\n\n      </ion-row>\n  </ion-grid> -->\n  <!-- Bridel Job invoic -->\n\n\n\n\n  <!-- invoice search successView-->\n<!--   <ion-grid *ngIf="successView">\n      <div class="pg-cnt-hdr gren-txt">PAYMENT SUCCESSFUL</div>\n      <ion-row class="app-card-1 bacic-app-card invo-card">\n      \n      <ion-col no-padding col-12 class="top-sec invo-sec">\n      <ion-row>\n      <div class="flx-1">\n\n        <div class="cust-info-trt">\n          <div class="brwn-txt">QBR_00000771#</div>\n          <div class="l2-txt">Invoice ID</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l1-txt">28.11.2018  3:20PM</div>\n          <div class="l2-txt">Advance invoice date and time</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l1-txt gren-txt">21.12.2018  3:20PM</div>\n          <div class="l2-txt ">Event date and time</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l1-txt">Ashani Gunathilaka</div>\n          <div class="l2-txt">Beautician</div>\n        </div>\n\n      </div>\n\n      <div class="app-logo">\n        <img src="assets/imgs/quee-logo.png">\n        <div class="l3-txt">Salon Reg#:2395</div>\n        <ion-icon name="checkmark-circle" class="success-ioc"></ion-icon>\n      </div>\n      </ion-row>\n      </ion-col>\n\n      <ion-col no-padding col-12 class="mid-sec invo-sec">\n      <ion-row>\n        <div class="flx-1">\n        \n        <div class="cust-info-trt">\n          <div class="l1-txt">Hair Cut Baby Girl</div>\n          <div class="l2-txt">Hair wash blow dry</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l2-txt">Customer : <b>Dhanushka Balasuriya</b></div>\n          <div class="l2-txt">Mobile : <b>071 225 2258</b></div>\n        </div>\n      </div>\n\n      <div class="l1-txt">\n        LKR 2500.00\n      </div>\n      </ion-row>\n      </ion-col>\n\n      <ion-col no-padding col-12 class="total-sec invo-sec">\n      <ion-row class="marg-b-10">\n        <div class="flx-1"></div>\n        <div class="l2-txt">ADVANCE</div>\n        <div class="l1-txt gray-txt">LKR 1500.00</div>\n      </ion-row>\n\n      <ion-row class="marg-b-10">\n        <div class="flx-1"></div>\n        <div class="l2-txt">BALANCE</div>\n        <div class="l1-txt gray-txt">LKR 1000.00</div>\n      </ion-row>\n\n      <ion-row class="marg-b-10">\n        <div class="flx-1"></div>\n        <div class="l2-txt">TOTAL AMOUNT</div>\n        <div class="l-txt">LKR 2500.00</div>\n      </ion-row>\n\n      </ion-col>\n\n      <ion-col class="gren-txt txt-alg-cent">Invoice printed _PBP_1258</ion-col>\n    </ion-row>\n\n  </ion-grid> -->\n  <!-- invoice search successView-->\n\n\n\n    <!-- saloon service successView-->\n  <ion-grid *ngIf="successView">\n      <div class="pg-cnt-hdr gren-txt">PAYMENT SUCCESSFUL</div>\n      <ion-row class="app-card-1 bacic-app-card invo-card">\n      \n      <ion-col no-padding col-12 class="top-sec invo-sec">\n      <ion-row>\n      <div class="flx-1">\n\n        <div class="cust-info-trt">\n          <div class="brwn-txt">{{invoiceID}}</div>\n          <div class="l2-txt">Invoice ID</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l1-txt">{{pageView?.createdDateTime |  date:\'MMM d, y, h:mm:ss a\'}}</div>\n          <div class="l2-txt">Invoice date and time</div>\n        </div>\n\n        <div class="cust-info-trt" *ngIf="pageView.beautician">\n          <div class="l1-txt">{{pageView?.beautician}}</div>\n          <div class="l2-txt">Beautician</div>\n        </div>\n\n      </div>\n\n      <div class="app-logo">\n        <img src="assets/imgs/quee-logo.png">\n        <div class="l3-txt">Salon Reg#:2395</div>\n        <ion-icon name="checkmark-circle" class="success-ioc"></ion-icon>\n      </div>\n      </ion-row>\n      </ion-col>\n\n      <ion-col no-padding col-12 class="mid-sec invo-sec">\n      <ion-row>\n        <div class="flx-1">\n        \n        <div class="cust-info-trt" *ngIf="pageView.treatment">\n          <div class="l1-txt">{{pageView?.treatment}}</div>\n          <div class="l2-txt">Hair wash blow dry</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l2-txt">Customer : <b>{{pageView?.customrtName}}</b></div>\n          <div class="l2-txt">Mobile : <b>{{pageView?.customrtMobile}}</b></div>\n        </div>\n      </div>\n\n      <div class="l1-txt">\n        LKR {{pageView?.advance + pageView?.balance}}\n      </div>\n      </ion-row>\n      </ion-col>\n\n      <ion-col no-padding col-12 class="total-sec invo-sec">\n      <ion-row class="marg-b-10">\n        <div class="flx-1"></div>\n        <div class="l2-txt">TOTAL AMOUNT</div>\n        <div class="l-txt">LKR {{pageView?.advance + pageView?.balance}}</div>\n      </ion-row>\n      </ion-col>\n\n      <ion-col class="gren-txt txt-alg-cent">Invoice printed _PBP_1258</ion-col>\n    </ion-row>\n\n  </ion-grid>\n  <!-- saloon service successView-->\n\n\n\n\n    <!-- Bridel Job successView-->\n  <!-- <ion-grid *ngIf="successView">\n      <div class="pg-cnt-hdr gren-txt">BRIDEL INFOMATIONS ADDED</div>\n      <ion-row class="app-card-1 bacic-app-card invo-card">\n      \n      <ion-col no-padding col-12 class="top-sec invo-sec">\n      <ion-row>\n      <div class="flx-1">\n\n        <div class="cust-info-trt">\n          <div class="brwn-txt">QBR_00000771#</div>\n          <div class="l2-txt">Invoice ID</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l1-txt">28.11.2018  3:20PM</div>\n          <div class="l2-txt">Advance invoice date and time</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l1-txt gren-txt">21.12.2018  3:20PM</div>\n          <div class="l2-txt ">Event date and time</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l1-txt">Ashani Gunathilaka</div>\n          <div class="l2-txt">Beautician</div>\n        </div>\n\n      </div>\n\n      <div class="app-logo">\n        <img src="assets/imgs/quee-logo.png">\n        <div class="l3-txt">Salon Reg#:2395</div>\n        <ion-icon name="checkmark-circle" class="success-ioc"></ion-icon>\n      </div>\n      </ion-row>\n      </ion-col>\n\n      <ion-col no-padding col-12 class="mid-sec invo-sec">\n      <ion-row>\n        <div class="flx-1">\n        \n        <div class="cust-info-trt">\n          <div class="l1-txt">Hair Cut Baby Girl</div>\n          <div class="l2-txt">Hair wash blow dry</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l2-txt">Customer : <b>Dhanushka Balasuriya</b></div>\n          <div class="l2-txt">Mobile : <b>071 225 2258</b></div>\n        </div>\n      </div>\n\n      <div class="l1-txt">\n        LKR 2500.00\n      </div>\n      </ion-row>\n      </ion-col>\n\n      <ion-col no-padding col-12 class="total-sec invo-sec">\n      <ion-row class="marg-b-10">\n        <div class="flx-1"></div>\n        <div class="l2-txt gren-txt">ADVANCE</div>\n        <div class="l1-txt gren-txt">LKR 1500.00</div>\n      </ion-row>\n\n      <ion-row class="marg-b-10">\n        <div class="flx-1"></div>\n        <div class="l2-txt red-txt">BALANCE</div>\n        <div class="l1-txt red-txt">LKR 1000.00</div>\n      </ion-row>\n\n      <ion-row class="marg-b-10">\n        <div class="flx-1"></div>\n        <div class="l2-txt">TOTAL AMOUNT</div>\n        <div class="l-txt">LKR 2500.00</div>\n      </ion-row>\n\n      </ion-col>\n\n      <ion-col class="gren-txt txt-alg-cent">Invoice printed _PBP_1258</ion-col>\n    </ion-row>\n\n  </ion-grid> -->\n  <!-- Bridel Job successView-->\n\n</ion-content>\n\n<ion-footer class="pg-btm-btn-foot">\n  <ion-row *ngIf="invoiceView">\n    \n    <ion-col>\n      <button ion-button (click)="submit()" class="brwn-grd-btn">\n        SUBMIT\n      </button>\n    </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="successView">\n        <ion-col>\n            <button ion-button (click)="close()" class="close-btn">\n                CLOSE\n            </button>\n        </ion-col>\n    </ion-row>\n\n</ion-footer>\n`/*ion-inline-end:"/home/dilshan/Documents/queens/src/pages/invoice/invoice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_restcall_restcall__["a" /* RestcallProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], InvoicePage);
    return InvoicePage;
}());

//# sourceMappingURL=invoice.js.map

/***/ })

});
//# sourceMappingURL=4.js.map