import { Venda } from './../../vendas/shared/venda';
import { Produto } from '../../produtos/shared/produto';

export interface ProdutoVenda{

     id: number,
     idVenda: number,
     venda: Venda,
     idProduto: number,
     produto: Produto,
     quantidade: number,
     valor: string

}
