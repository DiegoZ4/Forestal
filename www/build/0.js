webpackJsonp([0],{

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoClientePageModule", function() { return InfoClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_cliente__ = __webpack_require__(682);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfoClientePageModule = /** @class */ (function () {
    function InfoClientePageModule() {
    }
    InfoClientePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__info_cliente__["a" /* InfoClientePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__info_cliente__["a" /* InfoClientePage */]),
            ],
        })
    ], InfoClientePageModule);
    return InfoClientePageModule;
}());

//# sourceMappingURL=info-cliente.module.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_login_services_login__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(156);
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
 * Generated class for the InfoClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoClientePage = /** @class */ (function () {
    function InfoClientePage(navCtrl, navParams, _login, geolocation, geolocation2, camera, transfer, file, loadingCtrl, toastCtrl) {
        // console.log(this.fechaActualParse);
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._login = _login;
        this.geolocation = geolocation;
        this.geolocation2 = geolocation2;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.id = 0;
        this.idVendedor = 0;
        this.ventas = [];
        this.suma = 0;
        this.comprados = [];
        this.noComprados = [];
        this.faltantes = [];
        this.requerimientos = [];
        this.pet = "puppies";
        this.fechaActual = new Date();
        this.day = this.fechaActual.getDate() < 10 ? "0" + this.fechaActual.getDate() : this.fechaActual.getDate();
        this.fechaActualParse = this.fechaActual.getFullYear() + "-" + (this.fechaActual.getMonth() + 1) + "-" + this.day;
        this.requerimientos = JSON.parse(localStorage.getItem('requerimientos'));
        this.informes = JSON.parse(localStorage.getItem('informes'));
        // if(this.informes){
        //   for(let informe of this.informes){
        //     console.log(informe)
        //     if(informe.especie_cat == 'A') {
        //       console.log("descuenta a: " + this.volumenA)
        //       this.volumenA = this.volumenA - informe.volumen;
        //     }else if(informe.especie_cat == 'B') {
        //       this.volumenB = this.volumenB - informe.volumen;
        //     }else if(informe.especie_cat == 'C') {
        //       this.volumenC = this.volumenC - informe.volumen;
        //     }
        //   }
        // }
        console.log(this.navParams.get('id'));
        this.id = this.navParams.get('id');
        this.formaInforme = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            nro_requerimiento: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](this.id, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            fecha: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](this.fechaActualParse, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            gps: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            foto: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            archivo: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            remito: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required)
        });
        if (this.encabezados = JSON.parse(localStorage.getItem('encabezados'))) {
            console.log(this.encabezados);
            this.encabezado = this.encabezados.find(function (x) { return x.nro_requerimiento === _this.id; });
            this.formaInforme.controls['fecha'].setValue(this.encabezado.fecha);
            this.formaInforme.controls['gps'].setValue(this.encabezado.gps);
            this.formaInforme.controls['remito'].setValue(this.encabezado.remito);
        }
        else {
            this.formaInforme.controls['fecha'].setValue(this.fechaActualParse);
        }
        this.formaLinea = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            nro_requerimiento: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](this.id, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            gps: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            foto: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            archivo: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            rodal: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            tendida: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            rollo: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            especie: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            diametro_1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            diametro_2: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            largo: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            volumen: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            codigo_rollo: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required)
        });
        this.requerimiento = this.requerimientos.find(function (x) { return x.id === _this.id; });
        console.log(this.requerimiento);
        if (!localStorage.getItem('informes')) {
            this.volumenA = this.requerimiento.volumen_A;
            this.volumenB = this.requerimiento.volumen_B;
            this.volumenC = this.requerimiento.volumen_C;
            var volumenes = {
                A: this.volumenA,
                B: this.volumenB,
                C: this.volumenC
            };
            localStorage.setItem('volumenes', JSON.stringify(volumenes));
        }
        else {
            var volSave = JSON.parse(localStorage.getItem('volumenes'));
            console.log(volSave);
            this.volumenA = volSave.A;
            this.volumenB = volSave.B;
            this.volumenC = volSave.C;
        }
        this._login.getProveedores()
            .subscribe(function (resp3) {
            console.log(resp3);
            for (var _i = 0, resp3_1 = resp3; _i < resp3_1.length; _i++) {
                var proveedor = resp3_1[_i];
                _this.noComprados.push({
                    id: proveedor.codigo,
                    cant: null,
                    nombre: proveedor.razon
                });
            }
            console.log(_this.noComprados);
        });
    }
    InfoClientePage.prototype.takeGPSCamion = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
            console.log(resp.coords);
            _this.formaInforme.controls['gps'].setValue(resp.coords.latitude + ' ' + resp.coords.longitude);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        // Clear watch
        // navigator.geolocation.clearWatch(watch);
    };
    InfoClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoClientePage');
    };
    InfoClientePage.prototype.takePhotoCamion = function () {
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
            _this._login.myPhoto = imageData;
            var imageName = imageData.split("/");
            _this.formaInforme.controls['foto'].setValue(imageName.pop());
            _this.formaInforme.controls['archivo'].setValue(imageData);
            _this._login.myPhotoName = imageName.pop();
        }, function (err) {
            // Handle error
        });
    };
    InfoClientePage.prototype.uploadPhoto = function () {
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
            fileName: this._login.myPhotoName,
            chunkedMode: false,
            httpMethod: 'post',
            mimeType: "image/jpeg",
            headers: {}
        };
        //file transfer action
        fileTransfer.upload(this._login.myPhoto, 'http://appsausol.com.ar.elserver.com/forestal/subeFoto.php', options)
            .then(function (data) {
            // alert(data);
            // alert("Success");
            loader.dismiss();
        }, function (err) {
            // alert('error: '+err);
            // alert("Error");
            loader.dismiss();
        });
    };
    InfoClientePage.prototype.saveLocal = function () {
        var _this = this;
        // this.requerimientos.push(this.formaInforme);
        // console.log(this.requerimientos);
        // console.log(this.requerimientos[0].instrumento_legal)
        var encabezados = [];
        encabezados = JSON.parse(localStorage.getItem('encabezados')) || [];
        if (encabezados.find(function (enc) { return enc.nro_requerimiento === _this.id; })) {
            console.log("ya hay un encabezado");
            encabezados.forEach(function (element, index) {
                if (element.nro_requerimiento === _this.id) {
                    encabezados[index] = _this.formaInforme.value;
                }
            });
        }
        else {
            console.log('no hay encabezado');
            encabezados.push(this.formaInforme.value);
        }
        console.log(JSON.parse(localStorage.getItem('encabezados')));
        console.log(this.formaInforme.value);
        console.log(encabezados);
        localStorage.setItem('encabezados', JSON.stringify(encabezados));
        var toast = this.toastCtrl.create({
            message: 'Encabezado agregado correctamente',
            duration: 3000
        });
        toast.present();
        this.formaLinea.reset();
        // this.goToInfo();
        console.log(encabezados);
    };
    InfoClientePage.prototype.goToMyPage = function (id, informe) {
        // go to the MyPage component
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__contact_contact__["a" /* ContactPage */], {
            'id': id,
            'nro_requerimiento': this.id,
            'informe': informe
        });
    };
    InfoClientePage.prototype.goToHome = function () {
        // go to the MyPage component
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__about_about__["a" /* AboutPage */], {});
    };
    InfoClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info-cliente',template:/*ion-inline-start:"/home/ivael/Documentos/ionic/Forestal/src/pages/info-cliente/info-cliente.html"*/'<ion-header>\n  <ion-navbar color=primary>\n    <ion-title>\n      Información del Requerimiento\n    </ion-title>\n    <ion-buttons end>\n      <button (click)="goToHome()"\n              ion-button icon-only color="royal">\n        <ion-icon name="home"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n<!--\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="pagos">\n        Cuentas Corrientes\n      </ion-segment-button>\n      <ion-segment-button value="notas">\n        Prov/Compr\n      </ion-segment-button>\n      <ion-segment-button value="descargar">\n        Prov/NC\n      </ion-segment-button>\n      <ion-segment-button value="faltantes">\n        Prov/Falt\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar> -->\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>\n          <div style="font-weight:600; font-size:13pt">Instrumento Legal</div>\n          <div  style="font-weight:400; font-size:12pt">{{requerimiento.instrumento_legal}}</div>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <div style="font-weight:600; font-size:13pt">Nomenclatura Catastral</div>\n          <div  style="font-weight:400; font-size:12pt">{{requerimiento.nomenclatura_catastral}}</div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>\n          <div style="font-weight:600; font-size:13pt">Cuit Titular</div>\n          <div  style="font-weight:400; font-size:12pt">{{requerimiento.cuit_titular}}</div>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <div style="font-weight:600; font-size:13pt">Lote Nro.</div>\n          <div  style="font-weight:400; font-size:12pt">{{requerimiento.lote_nro}}</div>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <div style="font-weight:600; font-size:13pt">Cuit Obrajero</div>\n          <div  style="font-weight:400; font-size:12pt">{{requerimiento.cuit_obrajero}}</div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>\n          <div style="font-weight:600; font-size:13pt">Guia Nro.</div>\n          <div  style="font-weight:400; font-size:12pt">{{requerimiento.guia_nro}}</div>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <div style="font-weight:600; font-size:13pt">Volumen A</div>\n          <div  style="font-weight:400; font-size:12pt">{{requerimiento.volumen_A}}</div>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <div style="font-weight:600; font-size:13pt">Volumen B</div>\n          <div  style="font-weight:400; font-size:12pt">{{requerimiento.volumen_B}}</div>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <div style="font-weight:600; font-size:13pt">Volumen C</div>\n          <div  style="font-weight:400; font-size:12pt">{{requerimiento.volumen_C}}</div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="puppies" style="max-width:200px">\n        REGISTRO DE CARGA\n      </ion-segment-button>\n      <ion-segment-button value="kittens" style="max-width:200px">\n        REGISTRO DE APEO\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'puppies\'">\n      <form [formGroup]="formaInforme">\n\n        <ion-item>\n          <ion-label floating>Fecha</ion-label>\n          <ion-input type="date" formControlName="fecha" placeholder=""></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Remito</ion-label>\n          <ion-input type="number" formControlName="remito" placeholder=""></ion-input>\n        </ion-item>\n\n        <!-- <pre>{{ formaInforme.value | json }}</pre> -->\n        <ion-item>\n          <ion-label floating>Coordenadas GPS de la planchada</ion-label>\n          <ion-input type="text" formControlName="gps" placeholder=""></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <button style="margin-bottom:20px; height:35px" (click)="takeGPSCamion()"\n                  color="light" ion-button full>Tomar Coordenadas GPS de la planchada</button>\n        </ion-item>\n\n        <ion-item>\n          <button style="margin-bottom:20px; height:35px" (click)="takePhotoCamion()"\n                  color="light" ion-button full>Sacar foto de la planchada</button>\n        </ion-item>\n\n        <ion-item>\n          <!-- <p>{{ _login.myPhoto }}</p> -->\n          <img src="{{ _login.myPhoto }}" alt="">\n        </ion-item>\n\n        <ion-item>\n          <button style="margin-bottom:20px; height:35px"\n                  ion-button full (click)="saveLocal()">Guardar Registro</button>\n        </ion-item>\n\n      </form>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'kittens\'">\n      <ion-card>\n        <ion-card-header>\n         <button ion-button full (click)="goToMyPage(\'nuevo\',\'\')">Generar nuevo registro de APEO</button>\n        </ion-card-header>\n\n        <ion-list>\n\n          <ion-item *ngFor="let informe of informes; let i = index">\n            <h2>Código Rollo: {{ informe.codigo_rollo}}</h2>\n            <p>Especie Cat.: {{ informe.especie_cat}} | Cortado: {{ informe.volumen }}</p>\n            <button ion-button clear item-end (click)="goToMyPage(informe.nro_requerimiento, i)">Ver </button>\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card>\n\n      <!--  -->\n    </ion-list>\n\n\n  </div>\n\n\n</ion-content>\n\n\n<ion-footer>\n\n  <div style="position:relative; bottom:0px; height:70px; font-size: 11pt; padding-top: 0px; background:#488aff">\n    <div style="float:left; color:#444; width:100%; font-size: 10pt; text-align: center; background:#e4e4e4; padding:8px 0px">\n      SALDO GUÍA\n    </div>\n    <div style="float:left; color:white; width:33%; padding-top: 10px; text-align:center">\n      A: {{volumenA}} m3\n    </div>\n    <div style="float:left; color:white; width:33%; padding-top: 10px; text-align:center">\n      B: {{volumenB}} m3\n    </div>\n    <div style="float:left; color:white; width:33%; padding-top: 10px; text-align:center">\n      C: {{volumenC}} m3\n    </div>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/home/ivael/Documentos/ionic/Forestal/src/pages/info-cliente/info-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_login_services_login__["a" /* ServicesLoginProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], InfoClientePage);
    return InfoClientePage;
}());

//# sourceMappingURL=info-cliente.js.map

/***/ })

});
//# sourceMappingURL=0.js.map