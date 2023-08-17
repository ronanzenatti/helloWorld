import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CristaisPage } from './cristais.page';

const routes: Routes = [
  {
    path: '',
    component: CristaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CristaisPageRoutingModule {}
