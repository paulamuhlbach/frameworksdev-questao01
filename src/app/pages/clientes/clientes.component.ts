import { Component, OnInit } from '@angular/core';
import { BaseResourceListComponent } from '../../shared/components/base-resource-list/base-resource-list.componet';

import { Cliente } from './shared/cliente';
import { ClienteService } from './shared/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent extends BaseResourceListComponent<Cliente> {

  constructor(private clienteService: ClienteService) {
    super(clienteService)
   }

}
