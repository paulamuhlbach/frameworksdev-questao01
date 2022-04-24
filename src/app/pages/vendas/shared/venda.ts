import { Cliente } from './../../clientes/shared/cliente';

export interface Venda{
     id: number,
     idCliente: number,
     cliente: Cliente,
     data: string,
     totalValor: string

}
