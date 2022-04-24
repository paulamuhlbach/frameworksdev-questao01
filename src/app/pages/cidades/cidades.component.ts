import { Component } from '@angular/core';
import { BaseResourceListComponent } from '../../shared/components/base-resource-list/base-resource-list.componet';

import { Cidade } from './shared/cidade';
import { CidadeService } from './shared/cidade.service';


@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent extends BaseResourceListComponent<Cidade> {

  constructor(private cidadeService: CidadeService) {
    super(cidadeService)
   }
}
