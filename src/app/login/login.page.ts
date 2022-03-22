import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //isSubmitted = false;
  formularioLogin:FormGroup;
  //usuarioRegistrado = localStorage.getItem("Usuario");

  constructor(
    private router: Router,
    public formulario:FormBuilder,
    public alertController:AlertController
  ) { 
    this.formularioLogin = this.formulario.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: [''],
    });
  }

  ngOnInit() {
  }

  
  async login(){
    
    var usuLogin = this.formularioLogin.value;
    console.log(this.formularioLogin.value);
    if (this.formularioLogin.invalid) {
      console.log("Datos incorrectos");
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

    var usuRegistrado = JSON.parse(localStorage.getItem('Usuario'));
    if (usuRegistrado.email == usuLogin.email && usuRegistrado.password == usuLogin.password) {
      console.log("usuario correcto");
      localStorage.setItem('activo','true');
      this.router.navigate(["/listado"]);//Redirecciona a la lista de items
    }

    else{//Si los datos son incorrectos
      console.log("Datos no válidos");
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Datos incorrectos',
        //subHeader: 'Subtitle',
        message: 'Revise sus datos',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }
    
  }
}
function elseif(arg0: boolean) {
  throw new Error('Function not implemented.');
}

