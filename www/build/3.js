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
            selector: 'page-invoicesettle',template:/*ion-inline-start:"/home/dilshan/Documents/queens/src/pages/invoicesettle/invoicesettle.html"*/`<!--\n  Generated template for the InvoicesettlePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="app-hdr">\n  <ion-navbar>\n    <img src="assets/imgs/app-logo.png" class="hdr-logo">\n    <ion-buttons end>\n      <button ion-button class="menu-ioc"><ion-icon name="menu"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row class="search-fld">\n    <input class="flx-1" placeholder="Search Payments and Customers"> <button ion-button (click)="searchRef()"> <ion-icon name="search"></ion-icon> </button>\n  </ion-row>\n  <!-- bridal view in receipt with advanced payment-->\n  <ion-grid >\n    <ion-row>\n      <label>\n        BALANCE - LKR 1000.00\n      </label>\n    </ion-row>\n    <!-- invoice data-->\n    <input placeholder="Receipt Amount">\n    <button ion-button (click)="settlePayment()">\n      Settle the Payment\n    </button>\n  </ion-grid>\n\n  <!-- saloon view in receipt there is no advance payment things-->\n  <ion-grid >\n    <ion-row>\n      <label>\n        BALANCE - LKR 1000.00\n      </label>\n    </ion-row>\n    <!-- invoice data-->\n  </ion-grid>\n</ion-content>\n`/*ion-inline-end:"/home/dilshan/Documents/queens/src/pages/invoicesettle/invoicesettle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], InvoicesettlePage);
    return InvoicesettlePage;
}());

//# sourceMappingURL=invoicesettle.js.map

/***/ })

});
//# sourceMappingURL=3.js.map