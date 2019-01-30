import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { ServicesLoginProvider } from '../../providers/services-login/services-login';
import { Validators, FormControl, FormGroup } from '@angular/forms';

import { Geolocation, GeolocationOptions, Geoposition } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';

import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';

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
  encabezado: any;
  encabezados: any;
  informes: any;
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


  requerimientos=[];

  pet: string = "puppies";


  options : GeolocationOptions;
  currentPos : Geoposition;

  fechaActual = new Date();
  day = this.fechaActual.getDate() < 10 ? "0"+this.fechaActual.getDate() : this.fechaActual.getDate();
  fechaActualParse = this.fechaActual.getFullYear() + "-" + (this.fechaActual.getMonth() + 1) + "-" + this.day;


  volumenA:number;
  volumenB:number;
  volumenC:number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _login:ServicesLoginProvider,
    private geolocation: Geolocation,
    private geolocation2: Geolocation,
    private camera: Camera,
    private transfer: FileTransfer,
    private file: File,
    private loadingCtrl:LoadingController,
    public toastCtrl: ToastController
  ) {
    // console.log(this.fechaActualParse);

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


    console.log( this.navParams.get('id'));
    this.id = this.navParams.get('id');

    this.formaInforme = new FormGroup({
      nro_requerimiento: new FormControl(this.id, Validators.required),
      fecha: new FormControl(this.fechaActualParse, Validators.required),
      gps: new FormControl('', Validators.required),
      foto: new FormControl('', Validators.required),
      archivo: new FormControl('', Validators.required),
      remito: new FormControl('', Validators.required)
    })

    if(this.encabezados = JSON.parse(localStorage.getItem('encabezados'))){
        console.log(this.encabezados)
        this.encabezado =  this.encabezados.find( x => x.nro_requerimiento === this.id );
        this.formaInforme.controls['fecha'].setValue(this.encabezado.fecha);
        this.formaInforme.controls['gps'].setValue(this.encabezado.gps);
        this.formaInforme.controls['remito'].setValue(this.encabezado.remito);
    }else{
      this.formaInforme.controls['fecha'].setValue(this.fechaActualParse);
    }

    this.formaLinea = new FormGroup({
      nro_requerimiento: new FormControl(this.id, Validators.required),
      gps: new FormControl('', Validators.required),
      foto: new FormControl('', Validators.required),
      archivo: new FormControl('', Validators.required),
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



    if(!localStorage.getItem('informes')){

      this.volumenA = this.requerimiento.volumen_A;
      this.volumenB = this.requerimiento.volumen_B;
      this.volumenC = this.requerimiento.volumen_C;

      let volumenes = {
        A:this.volumenA,
        B:this.volumenB,
        C:this.volumenC
      }

      localStorage.setItem('volumenes', JSON.stringify(volumenes));

    }else{

      let volSave = JSON.parse(localStorage.getItem('volumenes'));
      console.log(volSave)
      this.volumenA = volSave.A;
      this.volumenB = volSave.B;
      this.volumenC = volSave.C;

    }

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
    this.geolocation.getCurrentPosition().then((resp) => {
     // resp.coords.latitude
     // resp.coords.longitude
     console.log(resp.coords);
     this.formaInforme.controls['gps'].setValue(resp.coords.latitude+' '+resp.coords.longitude)
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    // Clear watch
    // navigator.geolocation.clearWatch(watch);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoClientePage');
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
     this._login.myPhoto = imageData;

     let imageName = imageData.split("/");
     this.formaInforme.controls['foto'].setValue(imageName.pop());
     this.formaInforme.controls['archivo'].setValue(imageData);

     this._login.myPhotoName = imageName.pop();

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
     fileName: this._login.myPhotoName,
     chunkedMode: false,
     httpMethod: 'post',
     mimeType: "image/jpeg",
     headers: {}
   }

   //file transfer action
   fileTransfer.upload(this._login.myPhoto, 'http://appsausol.com.ar.elserver.com/forestal/subeFoto.php', options)
     .then((data) => {
       // alert(data);
       // alert("Success");
       loader.dismiss();
     }, (err) => {
       // alert('error: '+err);
       // alert("Error");
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

    localStorage.setItem('encabezados', JSON.stringify(encabezados));

    const toast = this.toastCtrl.create({
        message: 'Encabezado agregado correctamente',
        duration: 3000
    });
    toast.present();

    this.formaLinea.reset()
    // this.goToInfo();

    console.log(encabezados);
  }



  goToMyPage(id,informe) {
    // go to the MyPage component
    this.navCtrl.push(ContactPage, {
      'id': id,
      'nro_requerimiento': this.id,
      'informe': informe
    });
  }

  goToHome() {
    // go to the MyPage component
    this.navCtrl.push(AboutPage, {});
  }

}
