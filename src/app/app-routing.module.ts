import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./promocoes/promocoes.module').then( m => m.PromocoesPageModule)
  },
  {
    path: 'velas-aromaticas',
    loadChildren: () => import('./velas-aromaticas/velas-aromaticas.module').then( m => m.VelasAromaticasPageModule)
  },
  {
    path: 'cristais',
    loadChildren: () => import('./cristais/cristais.module').then( m => m.CristaisPageModule)
  },
  {
    path: 'mandalas',
    loadChildren: () => import('./mandalas/mandalas.module').then( m => m.MandalasPageModule)
  },
  {
    path: 'pulseiras',
    loadChildren: () => import('./pulseiras/pulseiras.module').then( m => m.PulseirasPageModule)
  },  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
