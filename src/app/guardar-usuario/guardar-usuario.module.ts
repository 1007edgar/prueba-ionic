import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardarUsuarioPageRoutingModule } from './guardar-usuario-routing.module';

import { GuardarUsuarioPage } from './guardar-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardarUsuarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GuardarUsuarioPage]
})
export class GuardarUsuarioPageModule {}
