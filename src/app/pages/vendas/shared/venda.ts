import { BaseResourceModel } from '../../../shared/models/base-resource.model';
import { Cliente } from './../../clientes/shared/cliente';

export class Venda extends BaseResourceModel{
   constructor(
     public id?: number,
     public idCliente?: number,
     public cliente?: Cliente,
     public data?: string,
     public totalValor?: string
   ){
     super();
   }

   static fromJson(jsonData: any): Venda{
     return Object.assign(new Venda(), jsonData);
 }
}
