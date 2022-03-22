import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { WebserviceService } from '../webservice/webservice.service';
@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.page.html',
  styleUrls: ['./visitas.page.scss'],
})
export class VisitasPage implements OnInit {
  @Input() item_id:string;
   @Input() title:string; 
   @Input() value:string;
   @Input() visits:string;
   new_list:any = {};
  constructor(private modalController:ModalController,
    private activatedRoute:ActivatedRoute,
    public webservice:WebserviceService,
    ) { }

  ngOnInit() {
    console.log("id", this.item_id)
  }
  cerrarModal(){
    this.new_list = {
      item_id: this.item_id,
      title: this.title,
      value: this.value,
      visits: this.visits

    }
    this.modalController.dismiss();
    this.webservice.actualizarVisitas(this.item_id, this.new_list);
    
  }
}
