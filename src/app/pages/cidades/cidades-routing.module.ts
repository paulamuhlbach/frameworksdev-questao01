import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidadesComponent } from './cidades.component';

const routes: Routes = [
  {path: '', component: CidadesComponent},
  {path: 'new', component: CidadesComponent},
  {path: ':id/edit', component: CidadesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CidadesRoutingModule { }
