import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {FormGroup, FormControl } from '@angular/forms';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

//Services
import { ServicesLoginProvider } from '../../providers/services-login/services-login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loginForm:FormGroup;

  usuarios = [];

  badLogin:boolean = false;

  constructor(
    public navCtrl: NavController,
    public _login:ServicesLoginProvider,
    public alertCtrl: AlertController
  ) {
    this.loginForm = new FormGroup ({
        user: new FormControl(),
        pass: new FormControl(),
    });
  }

  login(){
    console.log(this.loginForm)
    console.log(this.loginForm.value.user);
    console.log(this.loginForm.value.pass);

    let userLogin = this.loginForm.value.user;
    let passLogin = this.loginForm.value.pass;


    this._login.login(this.loginForm.value)
    .subscribe((resp:any)=>{
      console.log(resp.length)
      console.log(resp[0].cuit)

      this._login.cuit = resp[0].cuit;
      if(resp.length > 0){
        let volumenes = {
          A:null,
          B:null,
          C:null
        }

        if(!localStorage.getItem('volumenes')){
            localStorage.setItem('volumenes', JSON.stringify(volumenes));
        }


        this.navCtrl.push(AboutPage)
      }else{
        this.showAlert();
      }
      // this.navCtrl.push(AboutPage)
      // this.badLogin = true;

    })
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'El usuario o la contraseña son incorrectos',
      buttons: ['Continuar']
    });
    alert.present();
  }

}
