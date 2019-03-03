webpackJsonp([8],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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
 *  Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, restSrv, alrtCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restSrv = restSrv;
        this.alrtCtrl = alrtCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    // login for main dashboard //
    LoginPage.prototype.loginClick = function (unm, pwd) {
        var _this = this;
        this.restSrv.login(unm, pwd).subscribe(function (res) {
            _this.navCtrl.push('DashboardPage');
        }, function (err) {
            _this.navCtrl.push('DashboardPage');
            // this.wrongUserAlert();
        });
    };
    // credential are wrong alert //
    LoginPage.prototype.wrongUserAlert = function () {
        var alert = this.alrtCtrl.create({
            title: 'Error',
            subTitle: 'Login user password is incorrect'
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/dilshan/Documents/queens/src/pages/login/login.html"*/`<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="log_pg">\n\n<ion-grid>\n  \n  <div class="log_logo">\n      <img src="assets/imgs/quee-logo.png">\n  </div>\n\n    <div class="welcom-msg">\n          Welcome\n    </div>\n\n    <ion-row class="un-pw-input">\n      <ion-icon name="person"></ion-icon><input placeholder="Username">\n    </ion-row>\n\n    <ion-row class="un-pw-input">\n      <ion-icon name="key"></ion-icon><input type="password" placeholder="Password">\n    </ion-row>\n\n    <ion-row class="fgt-pw-link">\n      <div class="flx-1"></div><button ion-button>Forgot Password</button>\n    </ion-row>\n\n    <ion-row class="log-btn">\n      <button ion-button (click)="loginClick()">Login</button>\n    </ion-row>\n\n    <ion-row class="reg-link">\n      <div class="flx-1"></div>\n      <div>NOT A MEMBER ?</div> <button ion-button>REGISTER</button>\n      <div class="flx-1"></div>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer class="rights-txt">\n  <ion-row >\n      <ion-col no-padding>\n          Powerd by Smart Saloon Management System\n          <div>Queens Salon - Galle 2019 @ All rights reserved</div>\n      </ion-col>\n    </ion-row>\n</ion-footer>\n`/*ion-inline-end:"/home/dilshan/Documents/queens/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_restcall_restcall__["a" /* RestcallProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bankreceipt/bankreceipt.module": [
		278,
		6
	],
	"../pages/customerinfo/customerinfo.module": [
		279,
		5
	],
	"../pages/dashboard/dashboard.module": [
		280,
		0
	],
	"../pages/invoice/invoice.module": [
		281,
		4
	],
	"../pages/invoicesettle/invoicesettle.module": [
		282,
		3
	],
	"../pages/login/login.module": [
		283,
		7
	],
	"../pages/register/register.module": [
		284,
		2
	],
	"../pages/treatement/treatement.module": [
		285,
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_restcall_restcall__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(156);
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
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invoice/invoice.module#InvoicePageModule', name: 'InvoicePage', segment: 'invoice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invoicesettle/invoicesettle.module#InvoicesettlePageModule', name: 'InvoicesettlePage', segment: 'invoicesettle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/treatement/treatement.module#TreatementPageModule', name: 'TreatementPage', segment: 'treatement', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_7__providers_restcall_restcall__["a" /* RestcallProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(100);
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

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestcallProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(156);
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
    function RestcallProvider(http) {
        this.http = http;
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        console.log('Hello RestcallProvider Provider');
    }
    // login credentials verificcation //
    RestcallProvider.prototype.login = function (usnm, pwd) {
        try {
            var body = JSON.stringify({
                'userName': usnm,
                'password': pwd
            });
            var url = 'http://localhost:9000';
            // url = url.replace('$data_type', dataType);
            return this.http.post(url, body, this.httpOptions);
        }
        catch (e) {
            console.log('ERR:-', e);
        }
    };
    // loading invoices details //
    RestcallProvider.prototype.loadInvoicesDestails = function () {
        try {
            var body = JSON.stringify({});
            var url = 'http://localhost:9000';
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
            var body = JSON.stringify({
                'invoiceNumber': id
            });
            var url = 'http://localhost:9000';
            // url = url.replace('$data_type', dataType);
            return this.http.post(url, body, this.httpOptions);
        }
        catch (e) {
            console.log('ERR:-', e);
        }
    };
    // loading history daily data //
    RestcallProvider.prototype.dailyHistorycalData = function (type) {
        try {
            var body = JSON.stringify({
                'type': type
            });
            var url = 'http://localhost:9000';
            // url = url.replace('$data_type', dataType);
            return this.http.post(url, body, this.httpOptions);
        }
        catch (e) {
            console.log('ERR:-', e);
        }
    };
    // save bank receipt details //
    RestcallProvider.prototype.addReceipt = function (accRef, recpRef, amount) {
        try {
            var body = JSON.stringify({
                'bankAccountRef': accRef,
                'receiptRefNumber': recpRef,
                'receiptAmount': amount
            });
            var url = 'http://localhost:9000';
            // url = url.replace('$data_type', dataType);
            return this.http.post(url, body, this.httpOptions);
        }
        catch (e) {
            console.log('ERR:-', e);
        }
    };
    // load treatements //
    RestcallProvider.prototype.allTreatements = function () {
        try {
            var body = JSON.stringify({});
            var url = 'http://localhost:9000';
            // url = url.replace('$data_type', dataType);
            return this.http.post(url, body, this.httpOptions);
        }
        catch (e) {
            console.log('ERR:-', e);
        }
    };
    // load beauticianse //
    RestcallProvider.prototype.allBeatucianse = function () {
        try {
            var body = JSON.stringify({});
            var url = 'http://localhost:9000';
            // url = url.replace('$data_type', dataType);
            return this.http.post(url, body, this.httpOptions);
        }
        catch (e) {
            console.log('ERR:-', e);
        }
    };
    // save customer details //
    RestcallProvider.prototype.saveCustomerDetails = function (type, nm, contact, beautId, eventDt, customerId, treatId, advance, balance, total) {
        try {
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
                'total': total
            });
            var url = 'http://localhost:9000';
            // url = url.replace('$data_type', dataType);
            return this.http.post(url, body, this.httpOptions);
        }
        catch (e) {
            console.log('ERR:-', e);
        }
    };
    // load customer details using customer contact id //
    RestcallProvider.prototype.loadCustomer = function (customerId) {
        try {
            var body = JSON.stringify({
                'customerContactNumber': customerId
            });
            var url = 'http://localhost:9000';
            // url = url.replace('$data_type', dataType);
            return this.http.post(url, body, this.httpOptions);
        }
        catch (e) {
            console.log('ERR:-', e);
        }
    };
    var _a;
    RestcallProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" ? _a : Object])
    ], RestcallProvider);
    return RestcallProvider;
}());

//# sourceMappingURL=restcall.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map