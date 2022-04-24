import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";

import { CidadesComponent } from './cidades.component';
import { CidadesRoutingModule } from './cidades-routing.module';

@NgModule({
  declarations: [ CidadesComponent],

  imports: [
    SharedModule,
    CidadesRoutingModule
  ]
})

export class CidadesModule { }
