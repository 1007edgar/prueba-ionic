import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  buscarList:any;
  listado:any [];


  constructor(
    private http:HttpClient,
    private activaRoute:ActivatedRoute,
    public toastController: ToastController,
    public alertController:ToastController
  ) { }

  ngOnInit() {
    this.getItems().subscribe(res=>{
      console.log("respuesta", res);
      this.listado = res;
      this.buscarList = this.listado;
    });
  }

  //extraemos el archivo json
  getItems(){
    return this.http
    .get("assets/listado-json/test.json").pipe(map((res:any) =>{
        return res.data;
      })
    )
  }

  buscadorItem(event){
    const text = event.target.value;
    this.buscarList = this.listado;
    if (text && text.trim() != '') {
      this.buscarList = this.buscarList.filter((lista:any)=>{
        ////toLower case -> lo devuelve en minúsculas 
        //de esta forma, te permite hacer la búsqyeda tanto
        //en mayúsculas cómo en minúsculas y va a ncontrar
        //todos los resultados, es decir, para que no sea case sensitive
        return (lista.title.toLowerCase().indexOf(text.toLowerCase()) > -1);
      });
    }
  }

  /**
   * Modal visitas
   */
   async presentAlert1(){
    const alert = await this.alertController.create({
      header: "Visitas",
      message: "",
      buttons: ["Ok"],
    });
    await alert.present();
    let result = await alert.onDidDismiss();//para que no se cierre automáticamente
    console.log(result);
  }
}
