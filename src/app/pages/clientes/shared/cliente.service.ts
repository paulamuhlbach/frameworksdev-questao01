import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../../shared/services/base-resource.service';

import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends BaseResourceService<Cliente> {

  constructor(protected injector: Injector) {
    super("api/clientes", injector, Cliente.fromJson)
  }


}
