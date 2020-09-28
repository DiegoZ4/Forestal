import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import {FormGroup, FormControl, Validators } from '@angular/forms';

import { ContactPage } from '../contact/contact';

import { ServicesLoginProvider } from '../../providers/services-login/services-login';

import 'rxjs';

import { File } from '@ionic-native/file';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  encabezados: any;
  informes: any;

  loginPass:FormGroup;
  data = {};

  requerimientos =[];

  sincronizado:boolean = false;
  sincronizadoUp:boolean = false;

  errorFoto:boolean = null;
  especies: any;

  constructor(
              public navCtrl: NavController,
              public _login:ServicesLoginProvider,
              private transfer: FileTransfer,
              private file: File,
              private loadingCtrl:LoadingController,
              public toastCtrl: ToastController
            )
  {
    this.requerimientos = JSON.parse(localStorage.getItem('requerimientos'))
    this.informes = JSON.parse(localStorage.getItem('informes'))
    this.encabezados = JSON.parse(localStorage.getItem('encabezados'))

    console.log(this.requerimientos);
    console.log(this.informes);
    console.log(this.encabezados);

    // console.log(this.requerimientos.length)
    if(this.requerimientos){
      this.sincronizado = true;
    }
  }

  sincronizar() {
    this._login.getRequerimientos(this._login.cuit)
        .subscribe( (resp:any)=>{
          // console.log(resp)
          this.requerimientos = resp;
          localStorage.setItem('requerimientos', JSON.stringify(this.requerimientos))
          if(this.requerimientos){
            this._login.getEspecies()
              .subscribe( (resp:any)=>{
                this.especies = resp;
                console.log(this.especies)
                localStorage.setItem('especies', JSON.stringify(this.especies))
              })
              
              if(this.especies) {
                this.sincronizado = true;
              }
            
          }
        })
  }

  sincronizarUp(){
    this.requerimientos = JSON.parse(localStorage.getItem('requerimientos'))
    this.informes = JSON.parse(localStorage.getItem('informes'))
    this.encabezados = JSON.parse(localStorage.getItem('encabezados'))

    this._login.saveEncabezado(JSON.stringify(this.encabezados))
        .subscribe( (resp:any)=>{
          console.log(resp.status)
          if(resp.status=='ok'){
            console.log('datos subidos de encabezado');
            this._login.saveInforme(JSON.stringify(this.informes))
                .subscribe( (resp2:any)=>{
                  console.log(resp2.status)
                  if(resp2.status=='ok'){
                    console.log('datos subidos de informes');
                    alert('datos subidos de informes');
                    let errorUpload = false;

                    for(let informe of this.informes){
                      // alert(informe)
                      if(informe.foto){
                        alert(informe.foto)
                        alert(this.uploadPhoto(informe.foto, informe.archivo));

                        this.uploadPhoto(informe.foto, informe.archivo)
                      }


                      // if(!){
                      //   alert("Hubo un error al subir las fotos del informe");
                      //   errorUpload = true;
                      // }
                    }

                    for(let encabezado of this.encabezados){
                      if(encabezado.foto){
                          this.uploadPhoto(encabezado.foto, encabezado.archivo)
                      }

                      // if(!this.uploadPhoto(encabezado.foto, encabezado.archivo)){
                      //   alert("Hubo un error al subir las fotos del encabezado");
                      //   errorUpload = true;
                      // }
                    }

                    if(!this.errorFoto){
                      this.sincronizado=false;
                      localStorage.clear();
                      this.requerimientos = JSON.parse(localStorage.getItem('requerimientos'))

                      const toast = this.toastCtrl.create({
                          message: 'Datos subidos a la nube correctamente',
                          duration: 3000
                      });

                    }else if(this.errorFoto){
                      alert("Hubo un error al subir la foto")
                    }


                  }else{
                    console.log('error en subida de datos de informes');
                  }
                })
          }else{

            console.log('error en subida de datos de encabezado');
          }
        })
  }

  uploadPhoto(nombre, archivo){
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
     fileName: nombre,
     chunkedMode: false,
     httpMethod: 'post',
     mimeType: "image/jpeg",
     headers: {}
   }

   //file transfer action
   fileTransfer.upload(archivo, 'http://appsausol.com.ar.elserver.com/forestal/subeFoto.php', options)
     .then((data) => {
       alert(data);
       alert("Success foto");
       loader.dismiss();
       this.errorFoto = false;
     }, (err) => {
       alert('error: '+err);
       alert("Error");
       loader.dismiss();
       this.errorFoto = true;
     });
  }

  goToMyPage(id) {
    // go to the MyPage component
    this.navCtrl.push('InfoClientePage', {
      'id': id
    });
  }

}
