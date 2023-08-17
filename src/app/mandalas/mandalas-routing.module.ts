import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MandalasPage } from './mandalas.page';

const routes: Routes = [
  {
    path: '',
    component: MandalasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MandalasPageRoutingModule {}
