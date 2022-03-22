import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Listado', url: '/listado', icon: 'list' },
    //{ title: 'Usuario Nuevo', url: '/guardar-usuario', icon: 'list' },
    
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  email:any;
  usuRegistrado = JSON.parse(localStorage.getItem('Usuario'));
  logout:boolean;
  constructor(public router:Router){}
  ngOnInit(){
    if (this.usuRegistrado) {
      this.router.navigate(["/login"]);
      this.logout = true;
      this.usuRegistrado.email;
      console.log("usuario",this.email);    
    }

  }

  salirLogin(){
    this.logout = false;
    localStorage.removeItem('Usuario');
    localStorage.removeItem('activo');
    this.router.navigate(["/login"]);
  }
}
