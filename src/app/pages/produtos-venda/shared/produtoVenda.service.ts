import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../../shared/services/base-resource.service';

import { ProdutoVenda } from './produtoVenda';

@Injectable({
  providedIn: 'root'
})
export class ProdutoVendaService extends BaseResourceService<ProdutoVenda> {

  constructor(protected injector: Injector) {
    super("api/produtoVenda", injector, ProdutoVenda.fromJson)
  }


}
