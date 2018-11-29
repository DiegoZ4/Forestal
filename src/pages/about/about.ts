import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormGroup, FormControl, Validators } from '@angular/forms';

import { ContactPage } from '../contact/contact';

import { ServicesLoginProvider } from '../../providers/services-login/services-login';

import 'rxjs';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  loginPass:FormGroup;
  data = {};

  requerimientos =[];

  sincronizado:boolean = false;

  constructor(public navCtrl: NavController,
              public _login:ServicesLoginProvider)
  {
    this.requerimientos = JSON.parse(localStorage.getItem('requerimientos'))
    console.log(this.requerimientos);
    // console.log(this.requerimientos.length)
    if(this.requerimientos){
      this.sincronizado = true;
    }
  }

  sincronizar() {
    this._login.getRequerimientos()
        .subscribe( (resp:any)=>{
          // console.log(resp)
          this.requerimientos = resp;
          localStorage.setItem('requerimientos', JSON.stringify(this.requerimientos))
          if(this.requerimientos){
            this.sincronizado = true;
          }
        })
  }

  sincronizarUp(){
    this._login.saveInforme(JSON.stringify(this.requerimientos))
        .subscribe( (resp:any)=>{
          console.log(resp.status)
          if(resp.status=='ok'){
            console.log('datos subidos');
          }else{

            console.log('error en subida de datos');
          }
        })
  }

  goToMyPage(id) {
    // go to the MyPage component
    this.navCtrl.push('InfoClientePage', {
      'id': id
    });
  }

}
