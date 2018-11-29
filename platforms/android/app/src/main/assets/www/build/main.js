webpackJsonp([1],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_login_services_login__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, _login) {
        this.navCtrl = navCtrl;
        this._login = _login;
        this.data = {};
        this.informes = [];
    }
    AboutPage.prototype.sincronizar = function () {
        var _this = this;
        this._login.getInformes()
            .subscribe(function (resp) {
            // console.log(resp)
            _this.informes = resp;
            localStorage.setItem('informes', JSON.stringify(_this.informes));
        });
    };
    AboutPage.prototype.goToMyPage = function (id) {
        // go to the MyPage component
        this.navCtrl.push('InfoClientePage', {
            'id': id
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/diego/Documentos/Forestal/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar color=primary>\n    <ion-title>\n      Informes\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-card-content color="primary">\n      No se encuentran informes. Sincronice la aplicación para comenzar a trabajar\n    </ion-card-content>\n\n  </ion-card>\n\n  <div padding>\n    <button ion-button icon-start block (click)="sincronizar()">\n      <ion-icon name="ios-cloud-download"></ion-icon>\n      Sincronizar\n    </button>\n  </div>\n\n  <ion-list>\n    <ion-item *ngFor="let informe of informes">\n     <h2>{{informe.lote}}</h2>\n     <p>{{informe.nomenclatura_catastral}}</p>\n     <button ion-button clear item-end (click)="goToMyPage(informe.id)">Ver informe</button>\n   </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/diego/Documentos/Forestal/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_login_services_login__["a" /* ServicesLoginProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/info-cliente/info-cliente.module": [
		681,
		0
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
webpackAsyncContext.id = 206;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/diego/Documentos/Forestal/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" ></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/diego/Documentos/Forestal/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_login_services_login__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, _login) {
        var _this = this;
        this.navCtrl = navCtrl;
        this._login = _login;
        this.pet = "pagos";
        this.datosPagos = [];
        this.datosNotas = [];
        var dataStorage = JSON.parse(localStorage.getItem('userData'));
        this.id = dataStorage.id;
        this.nombre = dataStorage.nombre;
        console.log(this.id);
        if (this.id == '7' || this.id == '80') {
            this._login.getVta()
                .subscribe(function (respVta) {
                console.log(respVta);
                console.log(respVta[0]);
                _this.vta = respVta[0].vtatotal;
            });
        }
        // this._login.getPagos(this.id)
        //     .subscribe((resp:any)=>{
        //       console.log(resp);
        //       this.datosPagos = resp;
        //       console.log(this.datosPagos)
        //     })
    }
    ContactPage.prototype.goToMyPage = function (id) {
        // go to the MyPage component
        this.navCtrl.push('InfoClientePage', {
            'id': id
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/diego/Documentos/Forestal/src/pages/contact/contact.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton color=primary>\n    <ion-title>\n      {{nombre}}\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      Lista de Clientes\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card color=primary *ngIf="vta">\n    <ion-card-content>\n      VENTA TOTAL ACTUAL: {{ vta }}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list>\n    <button ion-item *ngFor="let item of datosPagos" (click)="goToMyPage(item.id)">\n      <ion-icon name="ios-briefcase-outline" item-start></ion-icon>\n      {{item.razon}}\n    </button>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/diego/Documentos/Forestal/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_login_services_login__["a" /* ServicesLoginProvider */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_login_services_login__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Services

var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, _login, alertCtrl) {
        this.navCtrl = navCtrl;
        this._login = _login;
        this.alertCtrl = alertCtrl;
        this.usuarios = [];
        this.badLogin = false;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            user: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            pass: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
        });
    }
    HomePage.prototype.login = function () {
        var _this = this;
        console.log(this.loginForm);
        console.log(this.loginForm.value.user);
        console.log(this.loginForm.value.pass);
        var userLogin = this.loginForm.value.user;
        var passLogin = this.loginForm.value.pass;
        this._login.login(this.loginForm.value)
            .subscribe(function (resp) {
            console.log(resp.length);
            if (resp.length > 0) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
            }
            else {
                _this.showAlert();
            }
            // this.navCtrl.push(AboutPage)
            // this.badLogin = true;
        });
    };
    HomePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error!',
            subTitle: 'El usuario o la contraseña son incorrectos',
            buttons: ['Continuar']
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/diego/Documentos/Forestal/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Forestal</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding class="text-center">\n\n  <ion-card color=primary>\n    <ion-card-content>\n      Porfavor identifiquese con su usuario y contraseña\n    </ion-card-content>\n  </ion-card>\n\n\n\n  <form [formGroup]="loginForm">\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>ID</ion-label>\n      <ion-input formControlName="user" type="number"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Contraseña</ion-label>\n      <ion-input formControlName="pass" type="number"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button style="margin-bottom:20px" (click)="login()"\n            color="primary" ion-button block>Ingresar</button>\n\n    <button *ngIf="islogin" ion-button block color="danger">El usuario o la contraseña no existen</button>\n  </div>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/diego/Documentos/Forestal/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_login_services_login__["a" /* ServicesLoginProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(356);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_locales_es__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_services_login_services_login__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







Object(__WEBPACK_IMPORTED_MODULE_3__angular_common__["i" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_4__angular_common_locales_es__["a" /* default */]);











//Services

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/info-cliente/info-cliente.module#InfoClientePageModule', name: 'InfoClientePage', segment: 'info-cliente', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__["a" /* File */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_services_login_services_login__["a" /* ServicesLoginProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* LOCALE_ID */], useValue: 'es-ES' }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(254);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/diego/Documentos/Forestal/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/diego/Documentos/Forestal/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesLoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';


/*
  Generated class for the ServicesLoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServicesLoginProvider = /** @class */ (function () {
    function ServicesLoginProvider(http) {
        this.http = http;
        this.apiUrl = 'http://appsausol.com.ar.elserver.com/vendedores.php';
        this.apiLogin = 'http://appsausol.com.ar.elserver.com/forestal/login.php';
        this.apiUrlPass = 'http://appsausol.com.ar.elserver.com/saveNewPass.php';
        this.apiUrlInformes = 'http://appsausol.com.ar.elserver.com/forestal/informes.php';
        this.apiUrlEspecies = 'http://appsausol.com.ar.elserver.com/forestal/especies.php';
        this.apiUrlNotas = 'http://appsausol.com.ar.elserver.com/getCuentas.php';
        this.apiUrlCliente = 'http://appsausol.com.ar.elserver.com/getCliente.php';
        this.apiUrlProveedor = 'http://appsausol.com.ar.elserver.com/getProveedor.php';
        this.apiUrlProveedores = 'http://appsausol.com.ar.elserver.com/getProveedores.php';
        this.apiUrlProveedoresComprados = 'http://appsausol.com.ar.elserver.com/getProveedoresComprados.php';
        this.apiUrlProveedoresFaltantes = 'http://appsausol.com.ar.elserver.com/getProveedoresFaltantes.php';
        this.apiUrlVta = 'http://appsausol.com.ar.elserver.com/getVta7.php';
        console.log('Hello ServicesLoginProvider Provider');
    }
    ServicesLoginProvider.prototype.login = function (data) {
        console.log(data);
        var body = JSON.stringify(data);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
        return this.http.post(this.apiLogin, data, { headers: headers })
            .map(function (res) {
            return res;
        }, function (err) {
            console.log(err);
        });
    };
    ServicesLoginProvider.prototype.getInformes = function () {
        console.log();
        return this.http.get(this.apiUrlInformes)
            .map(function (res) {
            return res;
        }, function (err) {
            console.log(err);
        });
    };
    ServicesLoginProvider.prototype.getEspecies = function () {
        console.log();
        return this.http.get(this.apiUrlEspecies)
            .map(function (res) {
            return res;
        }, function (err) {
            console.log(err);
        });
    };
    ServicesLoginProvider.prototype.getNotas = function (id) {
        return this.http.get(this.apiUrlNotas + '?id=' + id)
            .map(function (res) {
            return res;
        }, function (err) {
            console.log(err);
        });
    };
    ServicesLoginProvider.prototype.getCliente = function (id) {
        return this.http.get(this.apiUrlCliente + '?id=' + id)
            .map(function (res) {
            return res;
        }, function (err) {
            console.log(err);
        });
    };
    ServicesLoginProvider.prototype.getProveedor = function (id) {
        return this.http.get(this.apiUrlProveedor + '?id=' + id)
            .map(function (res) {
            return res;
        }, function (err) {
            console.log(err);
        });
    };
    ServicesLoginProvider.prototype.getProveedores = function () {
        return this.http.get(this.apiUrlProveedores)
            .map(function (res) {
            return res;
        }, function (err) {
            console.log(err);
        });
    };
    ServicesLoginProvider.prototype.getProveedoresComprados = function (id) {
        return this.http.get(this.apiUrlProveedoresComprados + '?id=' + id)
            .map(function (res) {
            return res;
        }, function (err) {
            console.log(err);
        });
    };
    ServicesLoginProvider.prototype.getProveedoresFaltantes = function (id) {
        return this.http.get(this.apiUrlProveedoresFaltantes + '?id=' + id)
            .map(function (res) {
            return res;
        }, function (err) {
            console.log(err);
        });
    };
    ServicesLoginProvider.prototype.getVta = function () {
        return this.http.get(this.apiUrlVta)
            .map(function (res) {
            return res;
        }, function (err) {
            console.log(err);
        });
    };
    ServicesLoginProvider.prototype.getPagos = function () {
        //borraaaar
    };
    ServicesLoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServicesLoginProvider);
    return ServicesLoginProvider;
}());

//# sourceMappingURL=services-login.js.map

/***/ })

},[351]);
//# sourceMappingURL=main.js.map