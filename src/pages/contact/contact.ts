import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { InfoClientePage } from '../info-cliente/info-cliente';
import { AboutPage } from '../about/about';

import { Geolocation, GeolocationOptions, Geoposition } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';

import { ServicesLoginProvider } from '../../providers/services-login/services-login';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  volumen: number;
  volumenA: number;
  volumenB: number;
  volumenC: number;

  pet: string = "pagos";
  id:string;
  nro_requerimiento: any;
  nombre:string;
  informe:string;
  datosPagos = []
  datosNotas = []
  vta:number;

  especies: any;
  informes: any;

  informesLocal = [];

  marca_rollo:string;

  formaLinea:FormGroup;

  constructor(
    public navCtrl: NavController,
    public _login:ServicesLoginProvider,
    public navParams: NavParams,
    public geolocation2: Geolocation,
    private camera: Camera,
    public toastCtrl: ToastController
  ) {

    console.log( this.navParams.get('id'));
    console.log( this.navParams.get('informe'));

    this.id = this.navParams.get('id');
    this.nro_requerimiento = this.navParams.get('nro_requerimiento');
    this.informe = this.navParams.get('informe');

    this._login.getEspecies()
        .subscribe( (resp:any)=>{
          this.especies = resp;
          console.log(this.especies)
        })

    this.formaLinea = new FormGroup({
          nro_requerimiento: new FormControl(this.nro_requerimiento, Validators.required),
          gps: new FormControl('', Validators.required),
          foto: new FormControl('', Validators.required),
          archivo: new FormControl('', Validators.required),
          rodal: new FormControl('', Validators.required),
          tendida: new FormControl('', Validators.required),
          rollo: new FormControl('', Validators.required),
          especie: new FormControl('', Validators.required),
          especie_cat: new FormControl('', Validators.required),
          diametro_1: new FormControl('', Validators.required),
          diametro_2: new FormControl('', Validators.required),
          largo: new FormControl('', Validators.required),
          volumen: new FormControl('', Validators.required),
          codigo_rollo: new FormControl('', Validators.required),
          marca_rollo: new FormControl('', Validators.required)
        })

    if(this.id != 'nuevo'){
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

      this.volumen = this.informesLocal[this.informe].volumen;
      this.marca_rollo = this.informesLocal[this.informe].marca_rollo



    }else{
      this.nombre = 'Generar un nuevo informe';
    }

  }

  goToMyPage(id) {
    // go to the MyPage component
    this.navCtrl.push('InfoClientePage', {
      'id': id
    });
  }

  goToInfo() {
    // go to the MyPage component
    this.navCtrl.push('InfoClientePage', {
      'id': this.nro_requerimiento
    });
  }

  goToHome() {
    // go to the MyPage component
    this.navCtrl.push(AboutPage, {});
  }

  takeGPS(){

    this.geolocation2.getCurrentPosition().then((resp) => {
     // resp.coords.latitude
     // resp.coords.longitude
     console.log(resp.coords);
     this.formaLinea.controls['gps'].setValue(resp.coords.latitude+' '+resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });


    // Clear watch
    // navigator.geolocation.clearWatch(watch);
  }

  setMR(){
    console.log("into setMR")
    this.marca_rollo = "R"+this.formaLinea.controls['rodal'].value+this.formaLinea.controls['tendida'].value+this.formaLinea.controls['rollo'].value;
  }

  setVolumen(categoria){
    
    

    this.volumen = (parseInt(this.formaLinea.controls['diametro_1'].value) * parseInt(this.formaLinea.controls['diametro_2'].value) * parseInt(this.formaLinea.controls['largo'].value)) * 0.7854;

    let volumenes = JSON.parse(localStorage.getItem('volumenes'));

    console.log(volumenes)

    if(categoria == "A"){
      volumenes.A = parseInt(volumenes.A) - this.volumen;
    } if(categoria == "B") {
      volumenes.B = parseInt(volumenes.B) - this.volumen;
    }else if(categoria == "C"){
      volumenes.C = parseInt(volumenes.C) - this.volumen;
    }

    console.log(volumenes)

    localStorage.setItem('volumenes',JSON.stringify(volumenes));
    this.formaLinea.controls['especie_cat'].setValue(categoria);
  }

  setVolumenInline(categoria){
    console.log(parseFloat(this.formaLinea.controls['diametro_1'].value))

    if(this.formaLinea.controls['diametro_1'].value && this.formaLinea.controls['diametro_2'].value && this.formaLinea.controls['largo'].value) {
      this.volumen = (parseFloat(this.formaLinea.controls['diametro_1'].value) * parseFloat(this.formaLinea.controls['diametro_2'].value) * parseFloat(this.formaLinea.controls['largo'].value)) * 0.7854;
    }

  }

  saveLocalInforme(){
    let informes = [];
    informes = JSON.parse(localStorage.getItem('informes')) || [];

    this.formaLinea.controls['volumen'].setValue(this.volumen);
    this.formaLinea.controls['marca_rollo'].setValue(this.marca_rollo);
    this.formaLinea.controls['codigo_rollo'].setValue(this.marca_rollo);

    this._login.getEspecie(this.formaLinea.controls['especie'].value)
        .subscribe( (resp:any)=>{
          console.log(resp);
          console.log(resp[0]);
          console.log(resp[0].categ);

          this.setVolumen(resp[0].categ);

          if(informes[this.informe]){
            informes[this.informe].gps = this.formaLinea.controls['gps'].value;
            informes[this.informe].rollo = this.formaLinea.controls['rollo'].value;
            informes[this.informe].tendida = this.formaLinea.controls['tendida'].value;
            informes[this.informe].rodal = this.formaLinea.controls['rodal'].value;
            informes[this.informe].especie = this.formaLinea.controls['especie'].value;
            informes[this.informe].especie_cat = this.formaLinea.controls['especie_cat'].value;
            informes[this.informe].diametro_1 = this.formaLinea.controls['diametro_1'].value;
            informes[this.informe].diametro_2 = this.formaLinea.controls['diametro_2'].value;
            informes[this.informe].largo = this.formaLinea.controls['largo'].value;
            informes[this.informe].volumen = this.volumen;
            informes[this.informe].codigo_rollo = this.marca_rollo;
          }else{
            informes.push(this.formaLinea.value);
          }

          console.log(JSON.parse(localStorage.getItem('informes')));
          console.log(this.formaLinea.value)
          console.log(informes)

          localStorage.setItem('informes', JSON.stringify(informes));

          const toast = this.toastCtrl.create({
              message: 'Informe agregado correctamente',
              duration: 3000
          });
          toast.present();

          this.formaLinea.reset()
          this.goToInfo();

          console.log(informes);

        })


  }

  takePhoto(){
    alert("intro function")
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    alert(options)
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     // this.myPhoto = 'data:image/jpeg;base64,' + imageData;
     alert(imageData)
     this._login.myPhoto2 = imageData;

     let imageName = imageData.split("/");
     this.formaLinea.controls['foto'].setValue(imageName.pop());
     this.formaLinea.controls['archivo'].setValue(imageData);

     this._login.myPhoto2Name = imageName.pop();

    }, (err) => {
     // Handle error
     alert(err)
    });
  }

}
