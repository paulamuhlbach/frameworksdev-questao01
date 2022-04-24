import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../../shared/services/base-resource.service';

import { TipoProduto } from './tipo-produto';

@Injectable({
  providedIn: 'root'
})
export class TipoProdutoService extends BaseResourceService<TipoProduto> {

  constructor(protected injector: Injector) {
    super("api/tiposProdutos", injector, TipoProduto.fromJson)
  }


}
