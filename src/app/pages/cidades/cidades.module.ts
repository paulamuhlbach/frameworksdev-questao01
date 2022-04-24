import { NgModule } from '@angular/core';

import { CidadesComponent } from './cidades.component';
import { CidadesRoutingModule } from './cidades-routing.module';

@NgModule({
  declarations: [ CidadesComponent],

  imports: [
    CidadesRoutingModule
  ]
})

export class CidadesModule { }
