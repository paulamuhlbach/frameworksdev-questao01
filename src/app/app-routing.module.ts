import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path:'cidades',
    loadChildren: './pages/cidades/cidades.module#CidadesModule'
  },

  {
    path:'',
    redirectTo: '/cidades',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
