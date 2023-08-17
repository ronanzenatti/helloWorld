import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PulseirasPageRoutingModule } from './pulseiras-routing.module';

import { PulseirasPage } from './pulseiras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PulseirasPageRoutingModule
  ],
  declarations: [PulseirasPage]
})
export class PulseirasPageModule {}
