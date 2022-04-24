import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class TipoProduto extends BaseResourceModel{
   constructor(
     public id?: number,
     public tipoProduto?: string
   ){
     super();
   }

   static fromJson(jsonData: any): TipoProduto{
     return Object.assign(new TipoProduto(), jsonData);
 }
}
