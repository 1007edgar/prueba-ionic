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
  //usuRegistrado:any;
  logout:boolean;
  usuRegistrado:any = localStorage.getItem('usuario');
  constructor(public router:Router){}
  ngOnInit(){
    this.mostrarUsuario();
  }

  salirLogin(){
     //this.logout = false;
     localStorage.removeItem('usuario');
     this.router.navigate(["/login"]);
     this.usuRegistrado = '';
     //location.reload();
  }

  mostrarUsuario(): void{
    if(localStorage.getItem('usuario')){
      this.logout = true;
      this.usuRegistrado;
    }
    else{
      this.logout = false;
    }
    
  }
}
