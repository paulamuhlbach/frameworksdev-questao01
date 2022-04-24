import { Component, OnInit } from '@angular/core';
import { BaseResourceListComponent } from '../../shared/components/base-resource-list/base-resource-list.componet';

import { Produto } from './shared/produto';
import { ProdutoService } from './shared/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent extends BaseResourceListComponent<Produto> {

  constructor(private produtoService: ProdutoService) {
    super(produtoService)
   }

}
