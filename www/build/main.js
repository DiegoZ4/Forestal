webpackJsonp([1],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_services_login_services_login__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(21);
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
    function ContactPage(navCtrl, _login, navParams, geolocation2, camera, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this._login = _login;
        this.navParams = navParams;
        this.geolocation2 = geolocation2;
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.pet = "pagos";
        this.datosPagos = [];
        this.datosNotas = [];
        this.informesLocal = [];
        console.log(this.navParams.get('id'));
        console.log(this.navParams.get('informe'));
        this.id = this.navParams.get('id');
        this.nro_requerimiento = this.navParams.get('nro_requerimiento');
        this.informe = this.navParams.get('informe');
        this._login.getEspecies()
            .subscribe(function (resp) {
            _this.especies = resp;
            console.log(_this.especies);
        });
        this.formaLinea = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormGroup */]({
            nro_requerimiento: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](this.nro_requerimiento, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            gps: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            foto: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            archivo: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            rodal: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            tendida: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            rollo: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            especie: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            diametro_1: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            diametro_2: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            largo: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            volumen: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            codigo_rollo: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required)
        });
        if (this.id != 'nuevo') {
            this.nombre = 'Editar informe';
            this.informesLocal = JSON.parse(localStorage.getItem('informes')) || [];
            this.formaLinea.controls['gps'].setValue(this.informesLocal[this.informe].gps);
            this.formaLinea.controls['rodal'].setValue(this.informesLocal[this.informe].rodal);
            this.formaLinea.controls['tendida'].setValue(this.informesLocal[this.informe].tendida);
            this.formaLinea.controls['rollo'].setValue(this.informesLocal[this.informe].rollo);
            this.formaLinea.controls['especie'].setValue(this.informesLocal[this.informe].especie);
            this.formaLinea.controls['diametro_1'].setValue(this.informesLocal[this.informe].diametro_1);
            this.formaLinea.controls['diametro_2'].setValue(this.informesLocal[this.informe].diametro_2);
            this.formaLinea.controls['volumen'].setValue(this.informesLocal[this.informe].volumen);
            this.formaLinea.controls['largo'].setValue(this.informesLocal[this.informe].largo);
            this.formaLinea.controls['codigo_rollo'].setValue(this.informesLocal[this.informe].codigo_rollo);
            this.formaLinea.controls['foto'].setValue(this.informesLocal[this.informe].foto);
            this.formaLinea.controls['archivo'].setValue(this.informesLocal[this.informe].codigo_rollo);
        }
        else {
            this.nombre = 'Generar un nuevo informe';
        }
    }
    ContactPage.prototype.goToMyPage = function (id) {
        // go to the MyPage component
        this.navCtrl.push('InfoClientePage', {
            'id': id
        });
    };
    ContactPage.prototype.goToInfo = function () {
        // go to the MyPage component
        this.navCtrl.push('InfoClientePage', {
            'id': this.nro_requerimiento
        });
    };
    ContactPage.prototype.goToHome = function () {
        // go to the MyPage component
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */], {});
    };
    ContactPage.prototype.takeGPS = function () {
        var _this = this;
        this.geolocation2.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
            console.log(resp.coords);
            _this.formaLinea.controls['gps'].setValue(resp.coords.latitude + ' ' + resp.coords.longitude);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        // Clear watch
        // navigator.geolocation.clearWatch(watch);
    };
    ContactPage.prototype.saveLocalInforme = function () {
        var informes = [];
        informes = JSON.parse(localStorage.getItem('informes')) || [];
        var volumen = (parseInt(this.formaLinea.controls['diametro_1'].value) * parseInt(this.formaLinea.controls['diametro_2'].value) * parseInt(this.formaLinea.controls['largo'].value)) * 0.7854;
        this.formaLinea.controls['volumen'].setValue(volumen);
        if (informes[this.informe]) {
            informes[this.informe].gps = this.formaLinea.controls['gps'].value;
            informes[this.informe].rollo = this.formaLinea.controls['rollo'].value;
            informes[this.informe].tendida = this.formaLinea.controls['tendida'].value;
            informes[this.informe].rodal = this.formaLinea.controls['rodal'].value;
            informes[this.informe].especie = this.formaLinea.controls['especie'].value;
            informes[this.informe].diametro_1 = this.formaLinea.controls['diametro_1'].value;
            informes[this.informe].diametro_2 = this.formaLinea.controls['diametro_2'].value;
            informes[this.informe].largo = this.formaLinea.controls['largo'].value;
            informes[this.informe].volumen = volumen;
            informes[this.informe].codigo_rollo = this.formaLinea.controls['codigo_rollo'].value;
        }
        else {
            informes.push(this.formaLinea.value);
        }
        console.log(JSON.parse(localStorage.getItem('informes')));
        console.log(this.formaLinea.value);
        console.log(informes);
        localStorage.setItem('informes', JSON.stringify(informes));
        var toast = this.toastCtrl.create({
            message: 'Informe agregado correctamente',
            duration: 3000
        });
        toast.present();
        this.formaLinea.reset();
        this.goToInfo();
        console.log(informes);
    };
    ContactPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            // this.myPhoto = 'data:image/jpeg;base64,' + imageData;
            alert(imageData);
            _this._login.myPhoto2 = imageData;
            var imageName = imageData.split("/");
            _this.formaLinea.controls['foto'].setValue(imageName.pop());
            _this.formaLinea.controls['archivo'].setValue(imageData);
            _this._login.myPhoto2Name = imageName.pop();
        }, function (err) {
            // Handle error
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/diego/Documentos/Forestal/src/pages/contact/contact.html"*/'<ion-header>\n\n  <ion-navbar color=primary>\n    <ion-title>\n      {{nombre}}\n    </ion-title>\n    <ion-buttons end>\n      <button (click)="goToHome()"\n              ion-button icon-only color="royal">\n        <ion-icon name="home"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <form [formGroup]="formaLinea">\n\n      <!-- <pre>{{ formaLinea.value | json }}</pre> -->\n\n      <ion-item>\n        <ion-label floating>Rodal</ion-label>\n        <ion-input type="text" formControlName="rodal" placeholder=""></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Tendida</ion-label>\n        <ion-input type="text" formControlName="tendida" placeholder=""></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Rollo</ion-label>\n        <ion-input type="text" formControlName="rollo" placeholder=""></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Especie</ion-label>\n        <ion-select formControlName="especie">\n          <ion-option *ngFor="let especie of especies"\n                      [value]="especie.id">{{ especie.nombre }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <p>{{ _login.myPhoto2 }}</p>\n        <img src="{{ _login.myPhoto2 }}" alt="">\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Coordenadas GPS</ion-label>\n        <ion-input type="text" formControlName="gps" placeholder=""></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <button style="margin-bottom:20px; height:35px" (click)="takeGPS()"\n                color="light" ion-button block>Tomar Coordenadas GPS</button>\n      </ion-item>\n\n      <ion-item>\n        <button style="margin-bottom:20px; height:35px" (click)="takePhoto()"\n                color="light" ion-button block>Sacar foto</button>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Diametro 1</ion-label>\n        <ion-input type="text" formControlName="diametro_1" placeholder=""></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Diametro 2</ion-label>\n        <ion-input type="text" formControlName="diametro_2" placeholder=""></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Largo</ion-label>\n        <ion-input type="text" formControlName="largo" placeholder=""></ion-input>\n      </ion-item>\n\n      <!-- <ion-item>\n        <ion-label floating>Volumen</ion-label>\n        <ion-input type="text" formControlName="volumen" placeholder=""></ion-input>\n      </ion-item> -->\n\n      <ion-item>\n        <ion-label floating>Código Rollo</ion-label>\n        <ion-input type="text" formControlName="codigo_rollo" placeholder=""></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <button style="margin-bottom:20px; height:35px"\n                ion-button full (click)="saveLocalInforme()">Guardar Informe</button>\n      </ion-item>\n\n    </form>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/diego/Documentos/Forestal/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_services_login_services_login__["a" /* ServicesLoginProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 167:
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
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 211:
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
webpackAsyncContext.id = 211;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(350);
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

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(64);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_locales_es__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(212);
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

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesLoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(212);
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
        this.apiSaveInformes = 'http://appsausol.com.ar.elserver.com/forestal/saveInformes.php';
        this.apiSaveEncabezados = 'http://appsausol.com.ar.elserver.com/forestal/saveEncabezados.php';
        this.apiUrlEspecies = 'http://appsausol.com.ar.elserver.com/forestal/especies.php';
        this.apiUrlRequerimientos = 'http://appsausol.com.ar.elserver.com/forestal/requerimientos.php';
        this.apiUrlRequerimiento = 'http://appsausol.com.ar.elserver.com/forestal/requerimiento.php';
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
    ServicesLoginProvider.prototype.getRequerimientos = function () {
        console.log();
        return this.http.get(this.apiUrlRequerimientos)
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
    ServicesLoginProvider.prototype.getRequerimiento = function (id) {
        return this.http.get(this.apiUrlRequerimiento + '?id=' + id)
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
    ServicesLoginProvider.prototype.saveEncabezado = function (body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
        return this.http.post(this.apiSaveEncabezados, body, { headers: headers })
            .map(function (res) {
            return res;
        }, function (err) {
            console.log(err);
        });
    };
    ServicesLoginProvider.prototype.saveInforme = function (body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
        return this.http.post(this.apiSaveInformes, body, { headers: headers })
            .map(function (res) {
            return res;
        }, function (err) {
            console.log(err);
        });
    };
    ServicesLoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServicesLoginProvider);
    return ServicesLoginProvider;
}());

//# sourceMappingURL=services-login.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_login_services_login__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(154);
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
    function AboutPage(navCtrl, _login, transfer, file, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this._login = _login;
        this.transfer = transfer;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.data = {};
        this.requerimientos = [];
        this.sincronizado = false;
        this.sincronizadoUp = false;
        this.errorFoto = null;
        this.requerimientos = JSON.parse(localStorage.getItem('requerimientos'));
        this.informes = JSON.parse(localStorage.getItem('informes'));
        this.encabezados = JSON.parse(localStorage.getItem('encabezados'));
        console.log(this.requerimientos);
        console.log(this.informes);
        console.log(this.encabezados);
        // console.log(this.requerimientos.length)
        if (this.requerimientos) {
            this.sincronizado = true;
        }
    }
    AboutPage.prototype.sincronizar = function () {
        var _this = this;
        this._login.getRequerimientos()
            .subscribe(function (resp) {
            // console.log(resp)
            _this.requerimientos = resp;
            localStorage.setItem('requerimientos', JSON.stringify(_this.requerimientos));
            if (_this.requerimientos) {
                _this.sincronizado = true;
            }
        });
    };
    AboutPage.prototype.sincronizarUp = function () {
        var _this = this;
        this.requerimientos = JSON.parse(localStorage.getItem('requerimientos'));
        this.informes = JSON.parse(localStorage.getItem('informes'));
        this.encabezados = JSON.parse(localStorage.getItem('encabezados'));
        this._login.saveEncabezado(JSON.stringify(this.encabezados))
            .subscribe(function (resp) {
            console.log(resp.status);
            if (resp.status == 'ok') {
                console.log('datos subidos de encabezado');
                _this._login.saveInforme(JSON.stringify(_this.informes))
                    .subscribe(function (resp2) {
                    console.log(resp2.status);
                    if (resp2.status == 'ok') {
                        console.log('datos subidos de informes');
                        alert('datos subidos de informes');
                        var errorUpload = false;
                        for (var _i = 0, _a = _this.informes; _i < _a.length; _i++) {
                            var informe = _a[_i];
                            // alert(informe)
                            if (informe.foto) {
                                alert(informe.foto);
                                alert(_this.uploadPhoto(informe.foto, informe.archivo));
                                _this.uploadPhoto(informe.foto, informe.archivo);
                            }
                            // if(!){
                            //   alert("Hubo un error al subir las fotos del informe");
                            //   errorUpload = true;
                            // }
                        }
                        for (var _b = 0, _c = _this.encabezados; _b < _c.length; _b++) {
                            var encabezado = _c[_b];
                            if (encabezado.foto) {
                                _this.uploadPhoto(encabezado.foto, encabezado.archivo);
                            }
                            // if(!this.uploadPhoto(encabezado.foto, encabezado.archivo)){
                            //   alert("Hubo un error al subir las fotos del encabezado");
                            //   errorUpload = true;
                            // }
                        }
                        if (!_this.errorFoto) {
                            _this.sincronizado = false;
                            localStorage.clear();
                            _this.requerimientos = JSON.parse(localStorage.getItem('requerimientos'));
                            var toast = _this.toastCtrl.create({
                                message: 'Datos subidos a la nube correctamente',
                                duration: 3000
                            });
                        }
                        else if (_this.errorFoto) {
                            alert("Hubo un error al subir la foto");
                        }
                    }
                    else {
                        console.log('error en subida de datos de informes');
                    }
                });
            }
            else {
                console.log('error en subida de datos de encabezado');
            }
        });
    };
    AboutPage.prototype.uploadPhoto = function (nombre, archivo) {
        var _this = this;
        //Show loading
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        //create file transfer object
        var fileTransfer = this.transfer.create();
        //random int
        var random = Math.floor(Math.random() * 100);
        //option transfer
        var options = {
            fileKey: 'photo',
            fileName: nombre,
            chunkedMode: false,
            httpMethod: 'post',
            mimeType: "image/jpeg",
            headers: {}
        };
        //file transfer action
        fileTransfer.upload(archivo, 'http://appsausol.com.ar.elserver.com/forestal/subeFoto.php', options)
            .then(function (data) {
            alert(data);
            alert("Success foto");
            loader.dismiss();
            _this.errorFoto = false;
        }, function (err) {
            alert('error: ' + err);
            alert("Error");
            loader.dismiss();
            _this.errorFoto = true;
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
            selector: 'page-about',template:/*ion-inline-start:"/home/diego/Documentos/Forestal/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar hideBackButton color=primary>\n    <ion-title>\n      Requerimientos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-card-content color="primary">\n      No se encuentran requerimientos. Sincronice la aplicación para comenzar a trabajar\n    </ion-card-content>\n\n  </ion-card>\n\n  <div padding *ngIf="!sincronizado">\n    <button ion-button icon-start block (click)="sincronizar()">\n      <ion-icon name="ios-cloud-download"></ion-icon>\n      Descargar información\n    </button>\n  </div>\n\n  <div padding *ngIf="sincronizado">\n    <button ion-button color="secondary" icon-start block (click)="sincronizarUp()">\n      <ion-icon name="ios-cloud-upload"></ion-icon>\n      Subir información\n    </button>\n  </div>\n\n  <ion-list>\n    <ion-item *ngFor="let requerimiento of requerimientos">\n     <h2>{{requerimiento.lote}}</h2>\n     <p>{{requerimiento.nomenclatura_catastral}}</p>\n     <button ion-button clear item-end (click)="goToMyPage(requerimiento.id)">Ver requerimiento</button>\n   </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/diego/Documentos/Forestal/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_login_services_login__["a" /* ServicesLoginProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(349);
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

/***/ })

},[351]);
//# sourceMappingURL=main.js.map