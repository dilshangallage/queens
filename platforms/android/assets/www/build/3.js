webpackJsonp([3],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesettlePageModule", function() { return InvoicesettlePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoicesettle__ = __webpack_require__(413);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__invoicesettle__["a" /* InvoicesettlePage */]),
            ],
        })
    ], InvoicesettlePageModule);
    return InvoicesettlePageModule;
}());

//# sourceMappingURL=invoicesettle.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesettlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
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
    function InvoicesettlePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InvoicesettlePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvoicesettlePage');
    };
    // settle the payment in advance payment receipt //
    InvoicesettlePage.prototype.settlePayment = function () {
        this.navCtrl.push('InvoicePage');
    };
    InvoicesettlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invoicesettle',template:/*ion-inline-start:"/home/dilshan/Documents/queens/src/pages/invoicesettle/invoicesettle.html"*/`<!--\n  Generated template for the InvoicesettlePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="app-hdr">\n  <ion-navbar>\n    <img src="assets/imgs/app-logo.png" class="hdr-logo">\n    <ion-buttons end>\n      <button ion-button class="menu-ioc"><ion-icon name="menu"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="app-page-bg">\n  <ion-grid>\n  <div class="pg-cnt-hdr">INVOICE</div>\n  <ion-row class="search-fld">\n    <input class="flx-1" placeholder="Search Payments and Customers"> <button ion-button (click)="searchRef()"> <ion-icon name="search"></ion-icon> </button>\n  </ion-row>\n\n    <!-- <ion-row>\n      <label>\n        BALANCE - LKR 1000.00\n      </label>\n    </ion-row>\n    <input placeholder="Receipt Amount">\n    <button ion-button (click)="settlePayment()">\n      Settle the Payment\n    </button> -->\n\n    <ion-row class="app-card-1 bacic-app-card invo-card">\n      \n      <ion-col no-padding col-12 class="top-sec invo-sec">\n      <ion-row>\n      <div class="flx-1">\n\n        <div class="cust-info-trt">\n          <div class="blance-txt">BALANCE - LKR 1000.00</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="brwn-txt">QBR_00000771#</div>\n          <div class="l2-txt">Invoice ID</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l1-txt">28.11.2018  3:20PM</div>\n          <div class="l2-txt">Advance invoice date and time</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l1-txt gren-txt">21.12.2018  3:20PM</div>\n          <div class="l2-txt ">Event date and time</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l1-txt">Ashani Gunathilaka</div>\n          <div class="l2-txt">Beautician</div>\n        </div>\n      </div>\n\n      <div class="app-logo">\n        <img src="assets/imgs/quee-logo.png">\n        <div class="l3-txt">Salon Reg#:2395</div>\n      </div>\n      </ion-row>\n      </ion-col>\n\n      <ion-col no-padding col-12 class="mid-sec invo-sec">\n      <ion-row>\n        <div class="flx-1">\n        \n        <div class="cust-info-trt">\n          <div class="l1-txt">Hair Cut Baby Girl</div>\n          <div class="l2-txt">Hair wash blow dry</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l2-txt">Customer : <b>Dhanushka Balasuriya</b></div>\n          <div class="l2-txt">Mobile : <b>071 225 2258</b></div>\n        </div>\n      </div>\n\n      <div class="l1-txt">\n        LKR 2500.00\n      </div>\n      </ion-row>\n      </ion-col>\n\n      <ion-col no-padding col-12 class="total-sec invo-sec">\n      <ion-row class="marg-b-24">\n        <div class="flx-1"></div>\n        <div class="l2-txt">ADVANCE</div>\n        <div class="l1-txt gray-txt">LKR 1500.00</div>\n      </ion-row>\n\n      <ion-row class="app-form-inpt-row">\n        <input placeholder="Receipt amount">\n      </ion-row>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer class="pg-btm-btn-foot">\n  <ion-row>\n    <ion-col>\n      <button class="gren-btn app-button" ion-button (click)="settlePayment()">Settle the Payment</button>\n      <!-- <button class="brwn-grd-btn app-button" ion-button>SUBMITt</button>\n      <button class="" ion-button >CLOSE</button> -->\n    </ion-col>\n    </ion-row>\n</ion-footer>\n`/*ion-inline-end:"/home/dilshan/Documents/queens/src/pages/invoicesettle/invoicesettle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], InvoicesettlePage);
    return InvoicesettlePage;
}());

//# sourceMappingURL=invoicesettle.js.map

/***/ })

});
//# sourceMappingURL=3.js.map