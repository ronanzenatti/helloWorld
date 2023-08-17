import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MandalasPageRoutingModule } from './mandalas-routing.module';

import { MandalasPage } from './mandalas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MandalasPageRoutingModule
  ],
  declarations: [MandalasPage]
})
export class MandalasPageModule {}
