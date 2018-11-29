import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InfoClientePage } from '../info-cliente/info-cliente';

import { ServicesLoginProvider } from '../../providers/services-login/services-login';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  pet: string = "pagos";
  id:string;
  nombre:string;
  datosPagos = []
  datosNotas = []
  vta:number;

  constructor(
    public navCtrl: NavController,
    private _login:ServicesLoginProvider
  ) {
    let dataStorage =  JSON.parse(localStorage.getItem('userData'))
    this.id = dataStorage.id;
    this.nombre = dataStorage.nombre;
    console.log(this.id);

    if(this.id == '7' || this.id == '80'){
        this._login.getVta()
            .subscribe((respVta:any)=>{
              console.log(respVta)
              console.log(respVta[0])
              this.vta = respVta[0].vtatotal;
            })
    }

    // this._login.getPagos(this.id)
    //     .subscribe((resp:any)=>{
    //       console.log(resp);
    //       this.datosPagos = resp;
    //       console.log(this.datosPagos)
    //     })

  }

  goToMyPage(id) {
    // go to the MyPage component
    this.navCtrl.push('InfoClientePage', {
      'id': id
    });
  }

}
