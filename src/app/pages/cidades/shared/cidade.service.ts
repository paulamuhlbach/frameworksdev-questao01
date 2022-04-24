import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../../shared/services/base-resource.service';

import { Cidade } from './cidade';

@Injectable({
  providedIn: 'root'
})
export class CidadeService extends BaseResourceService<Cidade> {

  constructor(protected injector: Injector) {
    super("api/cidades", injector, Cidade.fromJson)
  }


}
