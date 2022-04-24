import { TipoProduto } from '../../tipos-produtos/shared/tipo-produto';

export interface Produto {

     id: number,
     idTipoProduto: number,
     tipoProduto: TipoProduto,
     produto: string,
     valor: string,
     medida: string

}
