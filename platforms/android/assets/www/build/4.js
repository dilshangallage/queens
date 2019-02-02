webpackJsonp([4],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerinfoPageModule", function() { return CustomerinfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customerinfo__ = __webpack_require__(405);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__customerinfo__["a" /* CustomerinfoPage */]),
            ],
        })
    ], CustomerinfoPageModule);
    return CustomerinfoPageModule;
}());

//# sourceMappingURL=customerinfo.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerinfoPage; });
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
 * Generated class for the CustomerinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomerinfoPage = /** @class */ (function () {
    function CustomerinfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedData = this.navParams.get('data');
        if (this.selectedData) {
            this.treatement = this.selectedData.treatement;
            this.beautician = this.selectedData.beautician;
        }
        this.sttlBll = true;
        this.payAdvnc = false;
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
    // next view //
    CustomerinfoPage.prototype.nextView = function () {
        this.navCtrl.push('InvoicePage');
    };
    CustomerinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-customerinfo',template:/*ion-inline-start:"/home/dilshan/Documents/private/saloon/Queens/src/pages/customerinfo/customerinfo.html"*/`<!--\n  Generated template for the CustomerinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>customerinfo</ion-title>\n    <img src="assets/imgs/app%20logo.png">\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      CUSTOMER INFORMATION\n    </ion-row>\n    <ion-row>\n      <label>{{treatement?.title}}</label>\n      <label>{{treatement?.cost}}</label>\n      <label>{{treatement?.description}}</label>\n    </ion-row>\n    <ion-row>\n      <label>\n        {{beautician?.name}}\n      </label>\n      <label>\n        Beautician\n      </label>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <input placeholder="card no">\n    </ion-row>\n    <ion-row>\n      <input placeholder="customer name">\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      PAYMENT OPTION\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button (click)="settleBill()">\n          Settle the Bill\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button (click)="payAdvance()">\n          Pay Advance\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="sttlBll">\n      <ion-col>\n        <input type="radio">\n        <img src="assets/imgs/visa.png">\n      </ion-col>\n      <ion-col>\n        <input type="radio">\n        Pay by Cash\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="payAdvnc">\n      <ion-datetime placeholder="Event Date"></ion-datetime>\n      <input placeholder="Advance Amount">\n    </ion-row>\n  </ion-grid>\n  <ion-row>\n    <button ion-button (click)="nextView()">\n      NEXT\n    </button>\n  </ion-row>\n</ion-content>\n`/*ion-inline-end:"/home/dilshan/Documents/private/saloon/Queens/src/pages/customerinfo/customerinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CustomerinfoPage);
    return CustomerinfoPage;
}());

//# sourceMappingURL=customerinfo.js.map

/***/ })

});
//# sourceMappingURL=4.js.map