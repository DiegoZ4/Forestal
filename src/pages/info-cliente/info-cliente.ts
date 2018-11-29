import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ServicesLoginProvider } from '../../providers/services-login/services-login';
import { Validators, FormControl, FormGroup } from '@angular/forms';

import { Geolocation, GeolocationOptions, Geoposition } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';

import { File } from '@ionic-native/file';

/**
 * Generated class for the InfoClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-cliente',
  templateUrl: 'info-cliente.html',
})
export class InfoClientePage {
  requerimiento: any;

  id = 0;
  idVendedor = 0;
  ventas = [];
  suma = 0;
  cliente:string;

  vta:number;

  comprados = [];
  noComprados = [];
  faltantes = [];

  formaInforme:FormGroup;
  formaLinea:FormGroup;

  myPhoto:any;
  myPhoto2:any;

  requerimientos=[];

  pet: string = "puppies";


  options : GeolocationOptions;
  currentPos : Geoposition;

  fechaActual = new Date();
  fechaActualParse = this.fechaActual.getFullYear() + "-" + (this.fechaActual.getMonth() + 1) + "-" + this.fechaActual.getDate();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _login:ServicesLoginProvider,
    private geolocation: Geolocation,
    private camera: Camera,
    private transfer: FileTransfer,
    private file: File,
    private loadingCtrl:LoadingController
  ) {
    console.log(this.fechaActualParse);

    this.requerimientos = JSON.parse(localStorage.getItem('requerimientos'));

    this.geolocation.getCurrentPosition().then((resp) => {
     // resp.coords.latitude
     // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      console.log('latitude : ', data.coords.latitude);
      console.log('longitude : ', data.coords.longitude );


     // data can be a set of coordinates, or an error (if an error occurred).
     // data.coords.latitude
     // data.coords.longitude
    });

    console.log( this.navParams.get('id'));
    this.id = this.navParams.get('id');

    // let dataStorage =  JSON.parse(localStorage.getItem('userData'))
    // this.idVendedor = dataStorage.id;
    //

    this.formaInforme = new FormGroup({
      nro_requerimiento: new FormControl(this.id, Validators.required),
      fecha: new FormControl(this.fechaActualParse, Validators.required),
      gps: new FormControl('', Validators.required),
      foto: new FormControl('', Validators.required),
      remito: new FormControl('', Validators.required)
    })

    this.formaLinea = new FormGroup({
      nro_requerimiento: new FormControl(this.id, Validators.required),
      gps: new FormControl('', Validators.required),
      foto: new FormControl('', Validators.required),
      rodal: new FormControl('', Validators.required),
      tendida: new FormControl('', Validators.required),
      rollo: new FormControl('', Validators.required),
      especie: new FormControl('', Validators.required),
      diametro_1: new FormControl('', Validators.required),
      diametro_2: new FormControl('', Validators.required),
      largo: new FormControl('', Validators.required),
      volumen: new FormControl('', Validators.required),
      codigo_rollo: new FormControl('', Validators.required)
    })

    this.requerimiento =  this.requerimientos.find( x => x.id === this.id );
    console.log(this.requerimiento);

    this._login.getProveedores()
        .subscribe( (resp3:any)=>{
          console.log(resp3)
          for(let proveedor of resp3) {
            this.noComprados.push({
              id:proveedor.codigo,
              cant:null,
              nombre:proveedor.razon
            })
          }

          console.log(this.noComprados)
        })

  }

  takeGPSCamion(){
    this.options = {
        enableHighAccuracy : true
    };

    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

        this.currentPos = pos;
        console.log(pos);

        this.formaInforme.controls['gps'].setValue(pos.coords.latitude+' '+pos.coords.longitude)
    },(err : PositionError)=>{
        console.log("error : " + err.message);
    });
  }

  takeGPS(){
    this.options = {
        enableHighAccuracy : true
    };

    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

        this.currentPos = pos;
        console.log(pos);

        this.formaLinea.controls['gps'].setValue(pos.coords.latitude+' '+pos.coords.longitude)
    },(err : PositionError)=>{
        console.log("error : " + err.message);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoClientePage');
  }

  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     // this.myPhoto = 'data:image/jpeg;base64,' + imageData;
     alert(imageData)
     this.myPhoto2 = imageData;
    }, (err) => {
     // Handle error
    });
  }

  takePhotoCamion(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     // this.myPhoto = 'data:image/jpeg;base64,' + imageData;
     alert(imageData)
     this.myPhoto = imageData;
    }, (err) => {
     // Handle error
    });
  }

  uploadPhoto(){
    //Show loading
   let loader = this.loadingCtrl.create({
     content: "Uploading..."
   });
   loader.present();

   //create file transfer object
   const fileTransfer: FileTransferObject = this.transfer.create();

   //random int
   var random = Math.floor(Math.random() * 100);

   //option transfer
   let options: FileUploadOptions = {
     fileKey: 'photo',
     fileName: "myImage_" + random + ".jpg",
     chunkedMode: false,
     httpMethod: 'post',
     mimeType: "image/jpeg",
     headers: {}
   }

   //file transfer action
   fileTransfer.upload(this.myPhoto, 'http://appsausol.com.ar.elserver.com/forestal/subeFoto.php', options)
     .then((data) => {
       alert(data);
       alert("Success");
       loader.dismiss();
     }, (err) => {
       alert('error: '+err);
       alert("Error");
       loader.dismiss();
     });
  }

  saveLocal(){
    // this.requerimientos.push(this.formaInforme);
    // console.log(this.requerimientos);
    // console.log(this.requerimientos[0].instrumento_legal)
    let encabezados = [];
    encabezados = JSON.parse(localStorage.getItem('encabezados')) || [];

    if(encabezados.find( enc => enc.nro_requerimiento === this.id )){
      console.log("ya hay un encabezado");

      encabezados.forEach((element, index) => {
          if(element.nro_requerimiento === this.id) {
              encabezados[index] = this.formaInforme.value;
          }
      });
    }else{
      console.log('no hay encabezado')
      encabezados.push(this.formaInforme.value);
    }

    console.log(JSON.parse(localStorage.getItem('encabezados')));
    console.log(this.formaInforme.value)
    console.log(encabezados)

    localStorage.setItem('encabezados', JSON.stringify(encabezados))
    console.log(encabezados);
  }

}
