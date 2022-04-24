import { Component, OnInit } from '@angular/core';
import { BaseResourceListComponent } from '../../shared/components/base-resource-list/base-resource-list.componet';

import { Venda } from './shared/venda';
import { VendaService } from './shared/venda.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent extends BaseResourceListComponent<Venda> {

  constructor(private vendaService: VendaService) {
    super(vendaService)
   }

}
