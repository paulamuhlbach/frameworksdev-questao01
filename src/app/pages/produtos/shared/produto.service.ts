import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../../shared/services/base-resource.service';

import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends BaseResourceService<Produto> {

  constructor(protected injector: Injector) {
    super("api/produtos", injector, Produto.fromJson)
  }


}
