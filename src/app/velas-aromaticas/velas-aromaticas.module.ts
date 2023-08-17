import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VelasAromaticasPageRoutingModule } from './velas-aromaticas-routing.module';

import { VelasAromaticasPage } from './velas-aromaticas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VelasAromaticasPageRoutingModule
  ],
  declarations: [VelasAromaticasPage]
})
export class VelasAromaticasPageModule {}
