import { BaseResourceModel } from '../../../shared/models/base-resource.model';
import { TipoProduto } from '../../tipos-produtos/shared/tipo-produto';

export class Produto extends BaseResourceModel{
   constructor(
     public id?: number,
     public idTipoProduto?: number,
     public tipoProduto?: TipoProduto,
     public produto?: string,
     public valor?: string,
     public medida?: string
   ){
     super();
   }

   static fromJson(jsonData: any): Produto{
     return Object.assign(new Produto(), jsonData);
 }
}
