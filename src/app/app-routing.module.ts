import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SesionActivaGuard } from './guards-ionic/sesion-activa.guard';
import { SesionNoActivaGuard } from './guards-ionic/sesion-no-activa.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canActivate: [SesionNoActivaGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [SesionNoActivaGuard]
  },
  {
    path: 'listado',
    loadChildren: () => import('./listado/listado.module').then( m => m.ListadoPageModule,),
    canActivate: [SesionActivaGuard]
  },
  {
    path: 'guardar-usuario',
    loadChildren: () => import('./guardar-usuario/guardar-usuario.module').then( m => m.GuardarUsuarioPageModule),
    canActivate: [SesionNoActivaGuard]
  },
  {
    path: 'visitas',
    loadChildren: () => import('./visitas/visitas.module').then( m => m.VisitasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
