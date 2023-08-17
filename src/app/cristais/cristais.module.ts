import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CristaisPageRoutingModule } from './cristais-routing.module';

import { CristaisPage } from './cristais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CristaisPageRoutingModule
  ],
  declarations: [CristaisPage]
})
export class CristaisPageModule {}
