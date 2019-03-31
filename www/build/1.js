webpackJsonp([1],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatementPageModule", function() { return TreatementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__treatement__ = __webpack_require__(426);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TreatementPageModule = /** @class */ (function () {
    function TreatementPageModule() {
    }
    TreatementPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__treatement__["a" /* TreatementPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__treatement__["a" /* TreatementPage */]),
            ],
        })
    ], TreatementPageModule);
    return TreatementPageModule;
}());

//# sourceMappingURL=treatement.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatementPage; });
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
 * Generated class for the TreatementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TreatementPage = /** @class */ (function () {
    function TreatementPage(navCtrl, navParams, restCall, toastCtrl, alrt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restCall = restCall;
        this.toastCtrl = toastCtrl;
        this.alrt = alrt;
        this.selecttreatement = {};
        this.selectButician = {};
        this.buttonColor = 'active-btn-gren';
        this.viewNm = this.navParams.get('viewNm');
        this.invType = this.navParams.get('type');
        this.loadBeauticianse();
        this.loadTreatements();
    }
    TreatementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TreatementPage');
        // this.loadBeauticianse();
    };
    // select beautician //
    TreatementPage.prototype.activeBtn = function (bt, ind) {
        // this.beautiNm = nm;
        if (this.beauticiansList.length > 0) {
            this.beauticiansList.forEach(function (dt, index) {
                if (ind === index) {
                    dt['class'] = 'active-btn-gren';
                }
                else {
                    dt['class'] = 'deactive-btn-gren';
                }
            });
        }
        this.selectButician = bt;
    };
    // load next view //
    TreatementPage.prototype.nextView = function () {
        console.log('Beautician name', this.beautiNm);
        if (JSON.stringify(this.selectButician) !== '{}' && JSON.stringify(this.selecttreatement) !== '{}') {
            this.navCtrl.push('CustomerinfoPage', { 'data': {
                    'treatement': this.selecttreatement,
                    'beautician': this.selectButician,
                }, 'view': this.viewNm,
                'invType': this.invType
            });
        }
        else {
            this.emptyButicianse();
        }
    };
    // load all beauticianse //
    TreatementPage.prototype.loadBeauticianse = function () {
        var _self = this;
        this.restCall.allBeatucianse().then(function (res) {
            if (res) {
                if (res['success']) {
                    _self.beauticiansList = res['data'];
                    if (_self.beauticiansList.length > 0) {
                        _self.beauticiansList.forEach(function (dt, index) {
                            dt['class'] = 'deactive-btn-gren';
                        });
                    }
                }
            }
        });
    };
    // load treatements //
    TreatementPage.prototype.loadTreatements = function () {
        var _self = this;
        this.restCall.allTreatements().then(function (res) {
            if (res) {
                if (res['success']) {
                    _self.treatementList = res['data'];
                }
                else {
                    _self.presentToast(res['error']['errorMessage']);
                }
            }
        });
    };
    // present toast //
    TreatementPage.prototype.presentToast = function (msg) {
        var tst = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        tst.onDidDismiss(function () {
        });
        tst.present();
    };
    // select buticiance are empty //
    TreatementPage.prototype.emptyButicianse = function () {
        var empty = this.alrt.create({
            title: 'Error',
            subTitle: 'Please select data'
        });
        empty.present();
    };
    TreatementPage.prototype.onChangeHandler = function (event) {
        console.log(event);
    };
    TreatementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-treatement',template:/*ion-inline-start:"/home/dilshan/Documents/queens/src/pages/treatement/treatement.html"*/`<!--\n  Generated template for the TreatementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="app-hdr">\n  <ion-navbar>\n    <img src="assets/imgs/app-logo.png" class="hdr-logo">\n    <ion-buttons end>\n      <button ion-button class="menu-ioc"><ion-icon name="menu"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="app-page-bg">\n<ion-grid>\n  \n  <div class="pg-cnt-hdr">SELECT TREATEMENT</div>\n\n  <ion-slides class="app-card-1 app-card-pad">\n    <ion-slide *ngFor="let slide of treatementList">\n      <ion-row *ngFor="let itm of slide.treatmentList" class="trt-row">\n        <div><input type="radio" [value]="itm" [(ngModel)]="selecttreatement" name="treatement"></div>\n        <div class="flx-1 trt-info">\n          <div>{{itm.title}}</div>\n          <div class="discript">{{itm.description}}</div>\n        </div>\n        <div class="price">LKR {{itm.price}}</div>\n      </ion-row>\n\n      <ion-row class="trt-type">\n        <ion-col no-padding>\n        {{slide.type}}\n        </ion-col>\n      </ion-row>\n\n    </ion-slide>\n  </ion-slides>\n\n  <ion-grid>\n    <div class="pg-cnt-hdr-2">SELECT BEAUTICIANS</div>\n    <ion-row class="slect-btn-set">\n      <ion-col *ngFor="let nms of beauticiansList; let i = index">\n        <button ionic ion-button name="beautiNm" (click)="activeBtn(nms, i)" [ngClass]="nms.class">\n          {{nms?.name}}\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-grid>\n</ion-content>\n\n<ion-footer class="pg-btm-btn-foot">\n  <ion-row>\n    <ion-col>\n      <button ion-button (click)="nextView()" class="brwn-grd-btn">\n        NEXT\n      </button>\n    </ion-col>\n    </ion-row>\n</ion-footer>\n`/*ion-inline-end:"/home/dilshan/Documents/queens/src/pages/treatement/treatement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_restcall_restcall__["a" /* RestcallProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TreatementPage);
    return TreatementPage;
}());

//# sourceMappingURL=treatement.js.map

/***/ })

});
//# sourceMappingURL=1.js.map