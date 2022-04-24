import { Component } from '@angular/core';
import { BaseResourceListComponent } from '../../shared/components/base-resource-list/base-resource-list.componet';

import { TipoProduto } from './shared/tipo-produto';
import { TipoProdutoService } from './shared/tipo-produto.service';

@Component({
  selector: 'app-tipos-produtos',
  templateUrl: './tipos-produtos.component.html',
  styleUrls: ['./tipos-produtos.component.css']
})
export class TiposProdutosComponent extends BaseResourceListComponent<TipoProduto> {

  constructor(private tipoProdutoService: TipoProdutoService) {
    super(tipoProdutoService)
   }

}
