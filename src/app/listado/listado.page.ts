import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { WebserviceService } from '../webservice/webservice.service';
import { ModalController } from '@ionic/angular';
import { VisitasPage } from '../visitas/visitas.page';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  buscarList:any;
  listado:any [];
  items;
  visitas:number = 0;
  new_list:any = {};


  constructor(
    private http:HttpClient,
    private activaRoute:ActivatedRoute,
    public toastController: ToastController,
    public alertController:ToastController,
    public webservice:WebserviceService,
    private modalController:ModalController
  ) { }

  ngOnInit() {
    this.webservice.getObtenerDatos()
      .subscribe(res=>{
        console.log("respuesta", res);
        this.listado = res;
        console.log("listado", this.listado);
        this.buscarList = this.listado;
      });
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
  async mostrarModal(lists){
    console.log(lists);
    
    this.visitas = parseInt(lists.visits);
    this.visitas +=1;

    this.new_list = {
      item_id: lists.item_id,
      title: lists.title,
      value: lists.value,
      visits: this.visitas

    }
    console.log("nueva_list",this.new_list);
    //this.webservice.actualizarVisitas(this.new_list);
    const modal = this.modalController.create({
      component: VisitasPage,
      componentProps:   {item_id: lists.item_id, title: lists.title, value: lists.value, visits: this.visitas}
    });
    await (await modal).present();
  }

}
