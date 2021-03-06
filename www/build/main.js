webpackJsonp([8],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestcallProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__env_envVaribles__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__token_token_id__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the RestcallProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
var RestcallProvider = /** @class */ (function () {
    function RestcallProvider(http, tokenSrv) {
        this.http = http;
        this.tokenSrv = tokenSrv;
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            })
        };
    }
    // set token into options //
    RestcallProvider.prototype.setOptionsToken = function () {
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'token': this.tokenSrv.getCurrentToken()
            })
        };
    };
    // login credentials verificcation //
    RestcallProvider.prototype.login = function (usnm, pwd) {
        try {
            var body = JSON.stringify({
                'userName': usnm,
                'password': pwd
            });
            var url = __WEBPACK_IMPORTED_MODULE_2__env_envVaribles__["a" /* ENVURL */] + 'saloon-app/login';
            return this.http.post(url, body, this.httpOptions);
        }
        catch (e) {
            console.log('ERR:-', e);
        }
    };
    // loading invoices details //
    RestcallProvider.prototype.loadInvoicesDestails = function () {
        try {
            this.setOptionsToken();
            var body = JSON.stringify({
                'token': this.tokenSrv.getCurrentToken()
            });
            var url = __WEBPACK_IMPORTED_MODULE_2__env_envVaribles__["a" /* ENVURL */] + '';
            // url = url.replace('$data_type', dataType);
            return this.http.post(url, body, this.httpOptions);
        }
        catch (e) {
            console.log('ERR:-', e);
        }
    };
    // search invoice by id //
    RestcallProvider.prototype.searchInvoice = function (id) {
        try {
            this.setOptionsToken();
            var body = JSON.stringify({
                'invoiceNumber': id,
                'token': this.tokenSrv.getCurrentToken()
            });
            var url = __WEBPACK_IMPORTED_MODULE_2__env_envVaribles__["a" /* ENVURL */] + '';
            // url = url.replace('$data_type', dataType);
            return this.http.post(url, body, this.httpOptions);
        }
        catch (e) {
            console.log('ERR:-', e);
        }
    };
    // loading history daily data //
    RestcallProvider.prototype.dailyHistorycalData = function (type) {
        var _this = this;
        try {
            return new Promise(function (resolve, reject) {
                _this.setOptionsToken();
                var body = JSON.stringify({
                    'type': type,
                    'token': _this.tokenSrv.getCurrentToken()
                });
                var url = __WEBPACK_IMPORTED_MODULE_2__env_envVaribles__["a" /* ENVURL */] + 'saloon-app/get-history';
                // url = url.replace('$data_type', dataType);
                _this.http.post(url, body, _this.httpOptions).subscribe(function (res) {
                    if (res['success']) {
                        resolve(res);
                    }
                    else {
                        reject(null);
                    }
                }, function (err) {
                    reject(err);
                });
            });
        }
        catch (e) {
            console.log('ERR:-', e);
        }
    };
    // save bank receipt details //
    RestcallProvider.prototype.addReceipt = function (accRef, recpRef, amount) {
        try {
            this.setOptionsToken();
            var body = JSON.stringify({
                'bankAccountRef': accRef,
                'receiptRefNumber': recpRef,
                'receiptAmount': amount,
                'token': this.tokenSrv.getCurrentToken()
            });
            var url = __WEBPACK_IMPORTED_MODULE_2__env_envVaribles__["a" /* ENVURL */] + 'saloon-app/add-bank-receipt';
            // url = url.replace('$data_type', dataType);
            return this.http.post(url, body, this.httpOptions);
        }
        catch (e) {
            console.log('ERR:-', e);
        }
    };
    // load treatements //
    RestcallProvider.prototype.allTreatements = function () {
        var _this = this;
        try {
            return new Promise(function (resolve, reject) {
                _this.setOptionsToken();
                var body = JSON.stringify({
                    'Type': 'SA',
                    'token': _this.tokenSrv.getCurrentToken()
                });
                var url = __WEBPACK_IMPORTED_MODULE_2__env_envVaribles__["a" /* ENVURL */] + 'saloon-app/get-treatments';
                // url = url.replace('$data_type', dataType);
                _this.http.post(url, body, _this.httpOptions).subscribe(function (res) {
                    if (res['success']) {
                        resolve(res);
                    }
                    else {
                        reject(null);
                    }
                }, function (err) {
                    reject(err);
                });
            });
        }
        catch (e) {
            console.log('ERR:-', e);
        }
    };
    // load beauticianse //
    RestcallProvider.prototype.allBeatucianse = function () {
        var _this = this;
        try {
            return new Promise(function (resolve, reject) {
                _this.setOptionsToken();
                var url = __WEBPACK_IMPORTED_MODULE_2__env_envVaribles__["a" /* ENVURL */] + 'saloon-app/get-beauticians';
                // url = url.replace('$data_type', dataType);
                _this.http.get(url, _this.httpOptions).subscribe(function (res) {
                    if (res['success']) {
                        resolve(res);
                    }
                    else {
                        reject(null);
                    }
                }, function (err) {
                    reject(err);
                });
            });
        }
        catch (e) {
            console.log('ERR:-', e);
        }
    };
    // save customer details //
    RestcallProvider.prototype.saveCustomerDetails = function (type, nm, contact, beautId, eventDt, customerId, treatId, advance, balance, total, id) {
        try {
            this.setOptionsToken();
            var body = JSON.stringify({
                'invoiceType': type,
                'customerName': nm,
                'customerContactNumber': contact,
                'beauticianId': beautId,
                'eventDate': eventDt,
                'customerId': customerId,
                'treatmentId': treatId,
                'advance': advance,
                'balance': balance,
                'total': total,
                'id': id,
                'token': this.tokenSrv.getCurrentToken()
            });
            var url = __WEBPACK_IMPORTED_MODULE_2__env_envVaribles__["a" /* ENVURL */] + 'saloon-app/add-customer-invoice';
            // url = url.replace('$data_type', dataType);
            return this.http.post(url, body, this.httpOptions);
        }
        catch (e) {
            console.log('ERR:-', e);
        }
    };
    // load customer details using customer contact id //
    RestcallProvider.prototype.loadCustomer = function (customerId) {
        var _this = this;
        try {
            return new Promise(function (resolve, reject) {
                _this.setOptionsToken();
                var body = JSON.stringify({
                    'customerContactNumber': customerId,
                    'token': _this.tokenSrv.getCurrentToken()
                });
                var url = __WEBPACK_IMPORTED_MODULE_2__env_envVaribles__["a" /* ENVURL */] + 'saloon-app/get-customer';
                // url = url.replace('$data_type', dataType);
                _this.http.post(url, body, _this.httpOptions).subscribe(function (res) {
                    if (res['success']) {
                        resolve(res);
                    }
                    else {
                        reject(null);
                    }
                }, function (err) {
                    reject(err);
                });
            });
        }
        catch (e) {
            console.log('ERR:-', e);
        }
    };
    // get summary details //
    RestcallProvider.prototype.getSummary = function () {
        var _this = this;
        try {
            return new Promise(function (resolve, reject) {
                _this.setOptionsToken();
                var url = __WEBPACK_IMPORTED_MODULE_2__env_envVaribles__["a" /* ENVURL */] + 'saloon-app/get-summary-details';
                var body = JSON.stringify({
                    'token': _this.tokenSrv.getCurrentToken()
                });
                _this.http.post(url, body, _this.httpOptions).subscribe(function (res) {
                    if (res['success']) {
                        resolve(res);
                    }
                    else {
                        reject(null);
                    }
                }, function (err) {
                    reject(err);
                });
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    // search invoice history //
    RestcallProvider.prototype.searchInvoiceHistory = function (invoiceID) {
        var _this = this;
        try {
            return new Promise(function (resolve, reject) {
                _this.setOptionsToken();
                var body = JSON.stringify({
                    'invoiceNumber': invoiceID,
                    'token': _this.tokenSrv.getCurrentToken()
                });
                var url = __WEBPACK_IMPORTED_MODULE_2__env_envVaribles__["a" /* ENVURL */] + 'saloon-app/search-history';
                // url = url.replace('$data_type', dataType);
                return _this.http.post(url, body, _this.httpOptions).subscribe(function (res) {
                    if (res['success']) {
                        resolve(res);
                    }
                    else {
                        reject(null);
                    }
                }, function (err) {
                    reject(err);
                });
            });
        }
        catch (e) {
            console.log('ERR:-', e);
        }
    };
    // set token for body //
    RestcallProvider.prototype.setBodyToken = function (body) {
        body['token'] = this.tokenSrv.getCurrentToken();
        return body;
    };
    RestcallProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__token_token_id__["a" /* TokenIDProvider */]])
    ], RestcallProvider);
    return RestcallProvider;
}());

//# sourceMappingURL=restcall.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restcall_restcall__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loginTemplate__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_token_token_id__ = __webpack_require__(77);
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
 *  Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, restSrv, alrtCtrl, toastCtrl, tokenSrv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restSrv = restSrv;
        this.alrtCtrl = alrtCtrl;
        this.toastCtrl = toastCtrl;
        this.tokenSrv = tokenSrv;
        this.nm = null;
        this.pwd = null;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    // login for main dashboard //
    LoginPage.prototype.loginClick = function () {
        var _this = this;
        // this.navCtrl.push('DashboardPage');
        if (this.nm && this.pwd) {
            // this.navCtrl.push('DashboardPage');
            this.restSrv.login(this.nm, this.pwd).subscribe(function (res) {
                if (res) {
                    if (!res['success']) {
                        _this.tokenSrv.setCurrentToken(res);
                        _this.navCtrl.push('DashboardPage');
                    }
                    else {
                        _this.wrongUserAlert();
                    }
                }
                else {
                    _this.wrongUserAlert();
                }
            }, function (err) {
                if (err['error']['error']) {
                    _this.connectionErr(err['error']["error"]["errorMessage"]);
                }
                else {
                    _this.connectionErr('Network connection error..');
                }
            });
        }
        else {
            this.emptyFields();
        }
    };
    // credential are wrong alert //
    LoginPage.prototype.wrongUserAlert = function () {
        var alert = this.alrtCtrl.create({
            title: 'Login Failed!',
            subTitle: 'Please check your credentials...'
        });
        alert.present();
    };
    // create toast //
    LoginPage.prototype.unsuccessToast = function () {
        var tst = this.toastCtrl.create({
            message: 'Wrong Credentials',
            duration: 3000,
            position: 'middle'
        });
        tst.onDidDismiss(function () {
        });
        tst.present();
    };
    // network error message //
    LoginPage.prototype.connectionErr = function (msg) {
        var cnnErr = this.alrtCtrl.create({
            title: 'Error',
            subTitle: msg
        });
        cnnErr.present();
    };
    // please fill the fields //
    LoginPage.prototype.emptyFields = function () {
        var ntErr = this.alrtCtrl.create({
            title: 'Error',
            subTitle: 'Please fill the fields'
        });
        ntErr.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',
            template: __WEBPACK_IMPORTED_MODULE_3__loginTemplate__["a" /* LOGINTEMPLATE */],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_restcall_restcall__["a" /* RestcallProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_token_token_id__["a" /* TokenIDProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bankreceipt/bankreceipt.module": [
		281,
		6
	],
	"../pages/customerinfo/customerinfo.module": [
		282,
		5
	],
	"../pages/dashboard/dashboard.module": [
		284,
		0
	],
	"../pages/invoice/invoice.module": [
		283,
		4
	],
	"../pages/invoicesettle/invoicesettle.module": [
		285,
		3
	],
	"../pages/login/login.module": [
		286,
		7
	],
	"../pages/register/register.module": [
		288,
		2
	],
	"../pages/treatement/treatement.module": [
		287,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_restcall_restcall__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_token_token_id__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bankreceipt/bankreceipt.module#BankreceiptPageModule', name: 'BankreceiptPage', segment: 'bankreceipt', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customerinfo/customerinfo.module#CustomerinfoPageModule', name: 'CustomerinfoPage', segment: 'customerinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invoice/invoice.module#InvoicePageModule', name: 'InvoicePage', segment: 'invoice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invoicesettle/invoicesettle.module#InvoicesettlePageModule', name: 'InvoicesettlePage', segment: 'invoicesettle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/treatement/treatement.module#TreatementPageModule', name: 'TreatementPage', segment: 'treatement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_restcall_restcall__["a" /* RestcallProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_token_token_id__["a" /* TokenIDProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENVURL; });
/**
 * Created by dilshan on 3/5/19.
 */
var ENVURL = 'http://68.183.227.253:8080/';
//# sourceMappingURL=envVaribles.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGINTEMPLATE; });
/**
 * Created by dilshan on 3/8/19.
 */
var LOGINTEMPLATE = "\n<ion-content padding class=\"log_pg\">\n\n<ion-grid>\n  \n  <div class=\"log_logo\">\n      <img src=\"assets/imgs/quee-logo.png\">\n  </div>\n\n    <div class=\"welcom-msg\">\n          Welcome\n    </div>\n\n    <ion-row class=\"un-pw-input\">\n      <ion-icon name=\"person\"></ion-icon><input [(ngModel)]=\"nm\" ngModel=\"unm\" placeholder=\"Username\">\n    </ion-row>\n\n    <ion-row class=\"un-pw-input\">\n      <ion-icon name=\"key\"></ion-icon><input [(ngModel)]=\"pwd\" ngModel=\"pwd\" type=\"password\" placeholder=\"Password\">\n    </ion-row>\n\n    <ion-row class=\"fgt-pw-link\">\n      <div class=\"flx-1\"></div><button ion-button>Forgot Password</button>\n    </ion-row>\n\n    <ion-row class=\"log-btn\">\n      <button ion-button (click)=\"loginClick()\">Login</button>\n    </ion-row>\n\n    <ion-row class=\"reg-link\">\n      <div class=\"flx-1\"></div>\n      <div>NOT A MEMBER ?</div> <button ion-button>REGISTER</button>\n      <div class=\"flx-1\"></div>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer class=\"rights-txt\">\n  <ion-row >\n      <ion-col no-padding>\n          Powerd by Smart Saloon Management System\n          <div>Queens Salon - Galle 2019 @ All rights reserved</div>\n      </ion-col>\n    </ion-row>\n</ion-footer>\n";
//# sourceMappingURL=loginTemplate.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Hello Ionic', component: __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/dilshan/Documents/queens/src/app/app.html"*/`<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n`/*ion-inline-end:"/home/dilshan/Documents/queens/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenIDProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Created by dilshan on 3/31/19.
 */

var TokenIDProvider = /** @class */ (function () {
    function TokenIDProvider() {
        this.token = '';
    }
    // set current token //
    TokenIDProvider.prototype.setCurrentToken = function (obj) {
        if (obj) {
            if (obj['token']) {
                this.token = obj['token'];
            }
        }
    };
    // get current token //
    TokenIDProvider.prototype.getCurrentToken = function () {
        return this.token;
    };
    TokenIDProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TokenIDProvider);
    return TokenIDProvider;
}());

//# sourceMappingURL=token-id.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map