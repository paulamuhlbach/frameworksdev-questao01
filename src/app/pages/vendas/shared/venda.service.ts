import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../../shared/services/base-resource.service';

import { Venda } from './venda';

@Injectable({
  providedIn: 'root'
})
export class VendaService extends BaseResourceService<Venda> {

  constructor(protected injector: Injector) {
    super("api/venda", injector, Venda.fromJson)
  }


}
