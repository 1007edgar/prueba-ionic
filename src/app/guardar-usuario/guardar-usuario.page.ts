import { Component, OnInit } from '@angular/core';
import { Validators,FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-guardar-usuario',
  templateUrl: './guardar-usuario.page.html',
  styleUrls: ['./guardar-usuario.page.scss'],
})
export class GuardarUsuarioPage implements OnInit {

  formularioRegistro:FormGroup;
  usuario:any = {};

  constructor(public formulario:FormBuilder, private router: Router, public alertController:AlertController) { 
    this.formularioRegistro = this.formulario.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: [''],
    });
  }

  ngOnInit() {
  }

  async guardarUsuario(){
    this.usuario = this.formularioRegistro.value;
    console.log(this.formularioRegistro.value);
    if (this.formularioRegistro.invalid) {
      console.log("Datos incorrectos");
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Datos Incorrectos',
        //subHeader: 'Subtitle',
        message: 'Por favor! Asegurese de colocar datos son correctos',
        buttons: ['OK']
      });
  
      await alert.present();
      return;
    }

    console.log('usuarioNuevo', this.usuario);
    localStorage.setItem('Usuario', JSON.stringify(this.usuario));
    localStorage.setItem('activo','true');
    this.router.navigate(["/listado"]);
  }
}
