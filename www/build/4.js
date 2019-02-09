webpackJsonp([4],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePageModule", function() { return InvoicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice__ = __webpack_require__(412);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__invoice__["a" /* InvoicePage */]),
            ],
        })
    ], InvoicePageModule);
    return InvoicePageModule;
}());

//# sourceMappingURL=invoice.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicePage; });
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
 * Generated class for the InvoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InvoicePage = /** @class */ (function () {
    function InvoicePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.invoiceView = true;
        this.successView = false;
    }
    InvoicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvoicePage');
    };
    // submit the data in to backend //
    InvoicePage.prototype.submit = function () {
        this.invoiceView = false;
        this.successView = true;
    };
    // close invoice view //
    InvoicePage.prototype.close = function () {
        this.navCtrl.push('DashboardPage');
    };
    InvoicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invoice',template:/*ion-inline-start:"/home/dilshan/Documents/queens/src/pages/invoice/invoice.html"*/`<!--\n  Generated template for the InvoicePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="app-hdr">\n  <ion-navbar>\n    <img src="assets/imgs/app-logo.png" class="hdr-logo">\n    <ion-buttons end>\n      <button ion-button class="menu-ioc"><ion-icon name="menu"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="app-page-bg">\n  <ion-grid *ngIf="invoiceView">\n<div class="pg-cnt-hdr">INVOICE</div>\n\n<ion-row class="app-card-1 bacic-app-card invo-card">\n      \n      <ion-col no-padding col-12 class="top-sec invo-sec">\n      <ion-row>\n      <div class="flx-1">\n\n        <div class="cust-info-trt">\n          <div class="brwn-txt">QBR_00000771#</div>\n          <div class="l2-txt">Invoice ID</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l1-txt">Ashani Gunathilaka</div>\n          <div class="l2-txt">Beautician</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l1-txt">28.11.2018  3:20PM</div>\n          <div class="l2-txt">Invoice date and time</div>\n        </div>\n      </div>\n\n      <div class="app-logo">\n        <img src="assets/imgs/quee-logo.png">\n        <div class="l3-txt">Salon Reg#:2395</div>\n      </div>\n      </ion-row>\n      </ion-col>\n\n      <ion-col no-padding col-12 class="mid-sec invo-sec">\n      <ion-row>\n        <div class="flx-1">\n        \n        <div class="cust-info-trt">\n          <div class="l1-txt">Hair Cut Baby Girl</div>\n          <div class="l2-txt">Hair wash blow dry</div>\n        </div>\n\n        <div class="cust-info-trt">\n          <div class="l2-txt">Customer : <b>Dhanushka Balasuriya</b></div>\n          <div class="l2-txt">Mobile : <b>071 225 2258</b></div>\n        </div>\n      </div>\n\n      <div class="l1-txt">\n        LKR 1500\n      </div>\n      </ion-row>\n      </ion-col>\n\n      <ion-col no-padding col-12 class="total-sec invo-sec">\n      <ion-row>\n        <div class="flx-1"></div>\n        <div class="l2-txt">TOTAL AMOUNT</div>\n        <div class="l-txt">LKR 123455.00</div>\n      </ion-row>\n      </ion-col>\n\n    </ion-row>\n\n    <!-- <ion-row>\n      <ion-col>\n        Invoice ID\n        <label>\n          QBR_000000771#\n        </label>\n      </ion-col>\n      <ion-col>\n        <img src="assets/imgs/Quees%20Salon%20logo.png">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      Beautician\n      <label>\n        Aisha Ramanayaka\n      </label>\n    </ion-row>\n    <ion-row>\n      Invoice Date and Time\n      <label>\n        29.11.2018 3:20 PM\n      </label>\n    </ion-row>\n    <hr>\n    <ion-row>\n      <ion-col>\n        Hair Cut Baby Girl\n      </ion-col>\n      <ion-col>\n        LKR 1250.00\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      Hair wash blow dry\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Customer\n      </ion-col>\n      <ion-col>\n        Dhanushka\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      Mobile\n      <label>\n        0723456281\n      </label>\n    </ion-row>\n    <hr>\n    <ion-row>\n      <ion-col>TOTAL AMOUNT</ion-col>\n      <ion-col>LKR 123455.00</ion-col>\n    </ion-row> -->\n  </ion-grid>\n\n    <ion-grid *ngIf="successView">\n        <ion-row>\n            PAYMENT SUCCESSFULL\n        </ion-row>\n    </ion-grid>\n</ion-content>\n\n<ion-footer class="pg-btm-btn-foot">\n  <ion-row *ngIf="invoiceView">\n    <ion-col>\n      <button ion-button (click)="submit()" class="brwn-grd-btn">\n        SUBMIT\n      </button>\n    </ion-col>\n    </ion-row>\n    <ion-row *ngIf="successView">\n        <ion-col>\n            <button ion-button (click)="close()">\n                CLOSE\n            </button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n`/*ion-inline-end:"/home/dilshan/Documents/queens/src/pages/invoice/invoice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], InvoicePage);
    return InvoicePage;
}());

//# sourceMappingURL=invoice.js.map

/***/ })

});
//# sourceMappingURL=4.js.map