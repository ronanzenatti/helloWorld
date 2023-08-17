import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VelasAromaticasPage } from './velas-aromaticas.page';

const routes: Routes = [
  {
    path: '',
    component: VelasAromaticasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VelasAromaticasPageRoutingModule {}
