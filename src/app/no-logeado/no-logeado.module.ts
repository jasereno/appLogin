import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoLogeadoPageRoutingModule } from './no-logeado-routing.module';

import { NoLogeadoPage } from './no-logeado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoLogeadoPageRoutingModule
  ],
  declarations: [NoLogeadoPage]
})
export class NoLogeadoPageModule {}
