//import { HttpClient } from '@angular/common/http';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the ServicesLoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesLoginProvider {

  apiUrl = 'http://appsausol.com.ar.elserver.com/vendedores.php';
  apiLogin = 'http://appsausol.com.ar.elserver.com/forestal/login.php';
  apiUrlPass = 'http://appsausol.com.ar.elserver.com/saveNewPass.php';
  apiUrlInformes = 'http://appsausol.com.ar.elserver.com/forestal/informes.php';
  apiSaveInformes = 'http://appsausol.com.ar.elserver.com/forestal/saveInformes.php';
  apiSaveEncabezados = 'http://appsausol.com.ar.elserver.com/forestal/saveEncabezados.php';
  apiUrlEspecies = 'http://appsausol.com.ar.elserver.com/forestal/especies.php';
  apiUrlEspecie = 'http://appsausol.com.ar.elserver.com/forestal/especie.php';
  apiUrlRequerimientos = 'http://appsausol.com.ar.elserver.com/forestal/requerimientos.php';
  apiUrlRequerimiento = 'http://appsausol.com.ar.elserver.com/forestal/requerimiento.php';

  apiUrlNotas = 'http://appsausol.com.ar.elserver.com/getCuentas.php';
  apiUrlCliente = 'http://appsausol.com.ar.elserver.com/getCliente.php';
  apiUrlProveedor = 'http://appsausol.com.ar.elserver.com/getProveedor.php';
  apiUrlProveedores = 'http://appsausol.com.ar.elserver.com/getProveedores.php';
  apiUrlProveedoresComprados = 'http://appsausol.com.ar.elserver.com/getProveedoresComprados.php';
  apiUrlProveedoresFaltantes = 'http://appsausol.com.ar.elserver.com/getProveedoresFaltantes.php';
  apiUrlVta = 'http://appsausol.com.ar.elserver.com/getVta7.php';

  myPhoto:any;
  myPhoto2:any;
  myPhotoName:string;
  myPhoto2Name:string;

  cuit:number;

  constructor(public http: HttpClient) {
    console.log('Hello ServicesLoginProvider Provider');
  }


  login(data) {
    console.log(data)
    let body = JSON.stringify(data);
    console.log(body);

    let headers = new HttpHeaders({
       'Access-Control-Allow-Origin': '*',
       'Content-Type': 'application/json'
    });

    return this.http.post(this.apiLogin, data, { headers })
      .map(res => {
          return res;
        }, (err) => {
          console.log(err);
        });
  }



  getRequerimientos(cuit){
    console.log()

    return this.http.get(this.apiUrlRequerimiento+'?cuit='+cuit)
      .map(res => {
          return res;
        }, (err) => {
          console.log(err);
        });
  }

  getEspecies(){
    console.log()

    return this.http.get(this.apiUrlEspecies)
      .map(res => {
          return res;
        }, (err) => {
          console.log(err);
        });
  }

  getEspecie(id){
    console.log()

    return this.http.get(this.apiUrlEspecie+'?id='+id)
      .map(res => {
          return res;
        }, (err) => {
          console.log(err);
        });
  }

  getRequerimiento(id){
    return this.http.get(this.apiUrlRequerimiento+'?id='+id)
      .map(res => {
          return res;
        }, (err) => {
          console.log(err);
        });
  }

  getNotas(id){
    return this.http.get(this.apiUrlNotas+'?id='+id)
      .map(res => {
          return res;
        }, (err) => {
          console.log(err);
        });
  }

  getCliente(id){
    return this.http.get(this.apiUrlCliente+'?id='+id)
      .map(res => {
          return res;
        }, (err) => {
          console.log(err);
        });
  }

  getProveedor(id){
    return this.http.get(this.apiUrlProveedor+'?id='+id)
      .map(res => {
          return res;
        }, (err) => {
          console.log(err);
        });
  }

  getProveedores(){
    return this.http.get(this.apiUrlProveedores)
      .map(res => {
          return res;
        }, (err) => {
          console.log(err);
        });
  }

  getProveedoresComprados(id){
    return this.http.get(this.apiUrlProveedoresComprados+'?id='+id)
      .map(res => {
          return res;
        }, (err) => {
          console.log(err);
        });
  }

  getProveedoresFaltantes(id){
    return this.http.get(this.apiUrlProveedoresFaltantes+'?id='+id)
      .map(res => {
          return res;
        }, (err) => {
          console.log(err);
        });
  }

  getVta(){
    return this.http.get(this.apiUrlVta)
      .map(res => {
          return res;
        }, (err) => {
          console.log(err);
        });
  }

  getPagos(){
    //borraaaar
  }

  saveEncabezado(body){
    let headers = new HttpHeaders({
       'Access-Control-Allow-Origin': '*',
       'Content-Type': 'application/json'
    });

    return this.http.post(this.apiSaveEncabezados, body, {headers})
      .map(res => {
          return res;
        }, (err) => {
          console.log(err);
        });
  }

  saveInforme(body){
    let headers = new HttpHeaders({
       'Access-Control-Allow-Origin': '*',
       'Content-Type': 'application/json'
    });

    return this.http.post(this.apiSaveInformes, body, {headers})
      .map(res => {
          return res;
        }, (err) => {
          console.log(err);
        });
  }

}
