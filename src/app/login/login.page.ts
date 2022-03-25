import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { WebserviceService } from '../webservice/webservice.service';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin:FormGroup;
  result_login:any;

  constructor(
    private router: Router,
    public formulario:FormBuilder,
    public alertController:AlertController,
    public webservice:WebserviceService
  ) { 
    this.formularioLogin = this.formulario.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit() {
  }

  
  async login(){
    
    var usuLogin = this.formularioLogin.value;

    if (this.formularioLogin.invalid) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Datos Incorrectos',
        //subHeader: 'Subtitle',
        message: 'Asegurese de que sus datos son correctos',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    if(usuLogin){
      this.webservice.login(usuLogin).subscribe(async response => {
        this.result_login = response;
        console.log(this.result_login);
        //alert
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: '',
          //subHeader: 'Subtitle',
          message: this.result_login.message,
          buttons: ['OK']
        });
        await alert.present();
        if (this.result_login.error == 0) {
          this.router.navigate(["/listado"]);
          localStorage.setItem('usuario', this.result_login.data.name);
        }
      });
      
    }
    
  }
}
function elseif(arg0: boolean) {
  throw new Error('Function not implemented.');
}

