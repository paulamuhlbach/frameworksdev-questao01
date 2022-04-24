import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path:'cidades',
    loadChildren: () => import('./pages/cidades/cidades.module').then(m => m.CidadesModule)
  },

  {
    path:'',
    redirectTo: '/cidades',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
