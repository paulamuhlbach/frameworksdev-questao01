import { BaseResourceModel } from '../../../shared/models/base-resource.model';
import { Venda } from './../../vendas/shared/venda';
import { Produto } from '../../produtos/shared/produto';

export class ProdutoVenda extends BaseResourceModel{
   constructor(
     public id?: number,
     public idVenda?: number,
     public venda?: Venda,
     public idProduto?: number,
     public produto?: Produto,
     public quantidade?: number,
     public valor?: string
   ){
     super();
   }

   static fromJson(jsonData: any): ProdutoVenda{
     return Object.assign(new ProdutoVenda(), jsonData);
 }
}
