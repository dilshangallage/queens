webpackJsonp([1],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatementPageModule", function() { return TreatementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__treatement__ = __webpack_require__(415);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__treatement__["a" /* TreatementPage */]),
            ],
        })
    ], TreatementPageModule);
    return TreatementPageModule;
}());

//# sourceMappingURL=treatement.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatementPage; });
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
 * Generated class for the TreatementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TreatementPage = /** @class */ (function () {
    function TreatementPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.treatementList = [
            {
                'type': 'Hair Cut',
                'data': [
                    {
                        'title': 'Hair Cut - Baby Girl',
                        'cost': ' LKR 550.00',
                        'description': 'Hair wash blow dry'
                    },
                    {
                        'title': 'Hair Cut - Baby Girl',
                        'cost': ' LKR 321.00',
                        'description': 'Hair wash blow dry'
                    },
                    {
                        'title': 'Hair Cut - Baby Girl',
                        'cost': ' LKR 550.00',
                        'description': 'Hair wash blow dry'
                    },
                    {
                        'title': 'Hair Cut - Baby Girl',
                        'cost': ' LKR 550.00',
                        'description': 'Hair wash blow dry'
                    },
                    {
                        'title': 'Hair Cut - Baby Girl',
                        'cost': ' LKR 550.00',
                        'description': 'Hair wash blow dry'
                    }
                ]
            },
            {
                'type': 'Hair Color',
                'data': [
                    {
                        'title': 'Hair Color - Baby Girl',
                        'cost': ' LKR 1300.00',
                        'description': 'Hair wash blow dry'
                    },
                    {
                        'title': 'Hair Cut - Baby Girl',
                        'cost': ' LKR 321.00',
                        'description': 'Hair wash blow dry'
                    },
                    {
                        'title': 'Hair Cut - Baby Girl',
                        'cost': ' LKR 550.00',
                        'description': 'Hair wash blow dry'
                    },
                    {
                        'title': 'Hair Cut - Baby Girl',
                        'cost': ' LKR 550.00',
                        'description': 'Hair wash blow dry'
                    },
                    {
                        'title': 'Hair Cut - Baby Girl',
                        'cost': ' LKR 550.00',
                        'description': 'Hair wash blow dry'
                    }
                ]
            }
        ];
        this.beauticiansList = [
            {
                'name': 'Amal'
            },
            {
                'name': 'Nimak'
            },
            {
                'name': 'Kaml'
            },
            {
                'name': 'Dila'
            },
            {
                'name': 'Dala'
            },
            {
                'name': 'Sanduni'
            },
            {
                'name': 'Amaraweera'
            },
            {
                'name': 'Mapalagamage'
            }
        ];
    }
    TreatementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TreatementPage');
    };
    // select beautician //
    TreatementPage.prototype.activeBtn = function () {
        // this.beautiNm = nm;
    };
    // load next view //
    TreatementPage.prototype.nextView = function () {
        console.log('Beautician name', this.beautiNm);
        this.navCtrl.push('CustomerinfoPage', { 'data': { 'treatement': {
                    'title': 'Hair Cut - Baby Girl',
                    'cost': ' LKR 550.00',
                    'description': 'Hair wash blow dry'
                },
                'beautician': {
                    'name': 'Amal'
                } }, 'view': 'saloonView' });
    };
    TreatementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-treatement',template:/*ion-inline-start:"/home/dilshan/Documents/queens/src/pages/treatement/treatement.html"*/`<!--\n  Generated template for the TreatementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="app-hdr">\n  <ion-navbar>\n    <img src="assets/imgs/app-logo.png" class="hdr-logo">\n    <ion-buttons end>\n      <button ion-button class="menu-ioc"><ion-icon name="menu"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="app-page-bg">\n<ion-grid>\n  \n  <div class="pg-cnt-hdr">SELECT TREATEMENT</div>\n\n  <ion-slides class="app-card-1 app-card-pad">\n    <ion-slide *ngFor="let slide of treatementList">\n      \n      <ion-row *ngFor="let itm of slide.data" class="trt-row">\n        <div><input type="radio"></div>\n        <div class="flx-1 trt-info">\n          <div>{{itm?.title}}</div>\n          <div class="discript">{{itm?.description}}</div>\n        </div>\n        <div class="price">{{itm?.cost}}</div>\n      </ion-row>\n\n      <ion-row class="trt-type">\n        <ion-col no-padding>\n        {{slide.type}}\n        </ion-col>\n      </ion-row>\n\n    </ion-slide>\n  </ion-slides>\n\n  <ion-grid>\n    <div class="pg-cnt-hdr-2">SELECT BEAUTICIANS</div>\n    <ion-row class="slect-btn-set">\n      <ion-col *ngFor="let nms of beauticiansList">\n        <button ionic ion-button clear name="beautiNm" (click)="activeBtn()">\n          {{nms?.name}}\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-grid>\n</ion-content>\n\n<ion-footer class="pg-btm-btn-foot">\n  <ion-row>\n    <ion-col>\n      <button ion-button (click)="nextView()" class="brwn-grd-btn">\n        NEXT\n      </button>\n    </ion-col>\n    </ion-row>\n</ion-footer>\n`/*ion-inline-end:"/home/dilshan/Documents/queens/src/pages/treatement/treatement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TreatementPage);
    return TreatementPage;
}());

//# sourceMappingURL=treatement.js.map

/***/ })

});
//# sourceMappingURL=1.js.map