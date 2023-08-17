import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PulseirasPage } from './pulseiras.page';

const routes: Routes = [
  {
    path: '',
    component: PulseirasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PulseirasPageRoutingModule {}
