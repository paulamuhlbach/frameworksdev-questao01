import { Component, OnInit } from '@angular/core';
import { BaseResourceListComponent } from '../../shared/components/base-resource-list/base-resource-list.componet';

import { ProdutoVenda } from './shared/produtoVenda';
import { ProdutoVendaService } from './shared/produtoVenda.service';

@Component({
  selector: 'app-produtos-venda',
  templateUrl: './produtos-venda.component.html',
  styleUrls: ['./produtos-venda.component.css']
})
export class ProdutosVendaComponent extends BaseResourceListComponent<ProdutoVenda> {

  constructor(private produtoVendaService: ProdutoVendaService) {
    super(produtoVendaService)
   }

}
