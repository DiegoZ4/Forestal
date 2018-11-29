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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(350);
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
    function InfoClientePage(navCtrl, navParams, _login, geolocation, camera, transfer, file, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._login = _login;
        this.geolocation = geolocation;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.pet = "pagos";
        this.id = 0;
        this.idVendedor = 0;
        this.ventas = [];
        this.suma = 0;
        this.comprados = [];
        this.noComprados = [];
        this.faltantes = [];
        this.geolocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            console.log('latitude : ', data.coords.latitude);
            console.log('longitude : ', data.coords.longitude);
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
        });
        console.log(this.navParams.get('id'));
        this.id = this.navParams.get('id');
        // let dataStorage =  JSON.parse(localStorage.getItem('userData'))
        // this.idVendedor = dataStorage.id;
        //
        this.formaInforme = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            instrumento_legal: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            nomenclatura_catastral: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            lote: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            guia: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            cuit_titular: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern('^[0-9\-\+]{11}$')]),
            cuit_obrajero: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern('^[0-9\-\+]{11}$')]),
            vol: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            rodal: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            tendida: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            rollo: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            especie: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            gps: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            foto: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            diametro_1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            diametro_2: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            largo: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            volumen: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            gps_transporte: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            foto_transporte: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
        });
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
        this._login.getCliente(this.id)
            .subscribe(function (resp) {
            console.log(resp[0].razon);
            _this.cliente = resp[0].razon;
        });
        this._login.getNotas(this.id)
            .subscribe(function (resp) {
            _this.ventas = resp;
            for (var _i = 0, _a = _this.ventas; _i < _a.length; _i++) {
                var venta = _a[_i];
                // console.log(venta.codmov)
                // console.log(parseInt(venta.codmov))
                parseInt(venta.codmov) >= 6 ? _this.suma = _this.suma + parseFloat(venta.importe) : _this.suma = _this.suma - parseFloat(venta.importe);
            }
        });
        this._login.getProveedoresComprados(this.id)
            .subscribe(function (resp) {
            console.log(resp);
            console.log(resp.length);
            if (resp.length > 0) {
                var _loop_1 = function () {
                    var proveedor_id = resp[0]["PROVE" + i];
                    var proveedor_cant = resp[0]["COMPR" + i];
                    var proveedor_name;
                    if (resp[0]["PROVE" + i] != 0) {
                        _this._login.getProveedor(resp[0]["PROVE" + i])
                            .subscribe(function (resp2) {
                            console.log(resp2);
                            console.log(resp2.length);
                            resp2.length ? proveedor_name = resp2[0].razon : proveedor_name = "Sin definir";
                            _this.comprados.push({
                                id: proveedor_id,
                                cant: proveedor_cant,
                                nombre: proveedor_name
                            });
                        });
                        var index = _this.noComprados.findIndex(function (x) { return x.id === proveedor_id; });
                        if (index > -1) {
                            _this.noComprados.splice(index, 1);
                        }
                    }
                };
                for (var i = 1; i < 51; i++) {
                    _loop_1();
                }
            }
            else {
                console.log("La query de comprados viene vacia");
                _this.comprados.push({
                    id: null,
                    cant: null,
                    nombre: 'No se encuentra registros'
                });
            }
        });
        this._login.getProveedoresFaltantes(this.id)
            .subscribe(function (resp) {
            console.log(resp);
            console.log(resp.length);
            if (resp.length > 0) {
                console.log("La query de faltantes viene llena");
                console.log(resp);
                var _loop_2 = function () {
                    console.log("entra al for");
                    var proveedor_id = resp[0]["PROVE" + i];
                    var proveedor_cant = resp[0]["CANT" + i];
                    var proveedor_name;
                    if (resp[0]["PROVE" + i] != 0) {
                        _this._login.getProveedor(resp[0]["PROVE" + i])
                            .subscribe(function (resp2) {
                            console.log(resp2);
                            console.log(resp2.length);
                            resp2.length ? proveedor_name = resp2[0].razon : proveedor_name = "Sin definir";
                            _this.faltantes.push({
                                id: proveedor_id,
                                cant: proveedor_cant,
                                nombre: proveedor_name
                            });
                        });
                    }
                };
                for (var i = 1; i < 51; i++) {
                    _loop_2();
                }
            }
            else {
                console.log("La query de faltantes viene vacia");
                _this.comprados.push({
                    id: null,
                    cant: null,
                    nombre: 'No se encuentra registros'
                });
            }
        });
    }
    InfoClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoClientePage');
    };
    InfoClientePage.prototype.takePhoto = function () {
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
            _this.myPhoto = imageData;
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
            fileName: "myImage_" + random + ".jpg",
            chunkedMode: false,
            httpMethod: 'post',
            mimeType: "image/jpeg",
            headers: {}
        };
        //file transfer action
        fileTransfer.upload(this.myPhoto, 'http://appsausol.com.ar.elserver.com/forestal/subeFoto.php', options)
            .then(function (data) {
            alert(data);
            alert("Success");
            loader.dismiss();
        }, function (err) {
            alert('error: ' + err);
            alert("Error");
            loader.dismiss();
        });
    };
    InfoClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info-cliente',template:/*ion-inline-start:"/home/diego/Documentos/Forestal/src/pages/info-cliente/info-cliente.html"*/'<ion-header>\n  <ion-navbar color=primary>\n    <ion-title>\n      Complete el siguiente Informe\n    </ion-title>\n  </ion-navbar>\n<!--\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="pagos">\n        Cuentas Corrientes\n      </ion-segment-button>\n      <ion-segment-button value="notas">\n        Prov/Compr\n      </ion-segment-button>\n      <ion-segment-button value="descargar">\n        Prov/NC\n      </ion-segment-button>\n      <ion-segment-button value="faltantes">\n        Prov/Falt\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar> -->\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <ion-card color=primary *ngIf="vta">\n    <ion-card-content>\n      Vta. Total actual: {{ vta }}\n    </ion-card-content>\n  </ion-card> -->\n\n  <ion-list>\n  <form [formGroup]="formaInforme">\n\n    <ion-item>\n      <ion-input type="text" formControlName="instrumento_legal" placeholder="Instrumento legal Nro."></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" formControlName="nomenclatura_catastral" placeholder="Nomenclatura catastral"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="number" formControlName="cuit_titular" placeholder="CUIT Titular"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" formControlName="lote" placeholder="Lote Nro"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" formControlName="cuit_obrajero" placeholder="CUIT Obrajero"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" formControlName="guia" placeholder="Guia Nro."></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" formControlName="vol" placeholder="Vol. m3"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" formControlName="rodal" placeholder="Rodal"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" formControlName="tendida" placeholder="Rollo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" formControlName="rollo" placeholder="Rollo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Especie</ion-label>\n      <ion-select formControlName="especie">\n        <ion-option value="nes">NES</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" formControlName="gps" placeholder="GPS Tocón"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" formControlName="foto" placeholder="Foto Tocón"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button full primary (click)="takePhoto()">Tomar Foto del Tocón</button>\n\n      <!-- <p> {{ myPhoto}}</p> -->\n      <p> <img src="{{ myPhoto}}" alt=""> </p>\n      <button ion-button full primary (click)="uploadPhoto()">Subir Imagen</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" formControlName="diametro_1" placeholder="Diametro 1"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" formControlName="diametro_2" placeholder="Diametro 2"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" formControlName="largo" placeholder="Largo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" formControlName="volumen" placeholder="Volumen"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" formControlName="gps_transporte" placeholder="GPS Transporte"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" formControlName="foto_transporte" placeholder="Foto Transporte"></ion-input>\n    </ion-item>\n\n  </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/diego/Documentos/Forestal/src/pages/info-cliente/info-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_login_services_login__["a" /* ServicesLoginProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], InfoClientePage);
    return InfoClientePage;
}());

//# sourceMappingURL=info-cliente.js.map

/***/ })

});
//# sourceMappingURL=0.js.map