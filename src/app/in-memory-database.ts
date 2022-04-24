import { InMemoryDbService } from "angular-in-memory-web-api";
import { TipoProduto } from './pages/tipos-produtos/shared/tipo-produto';
import { Cliente } from './pages/clientes/shared/cliente';
import { Cidade } from './pages/cidades/shared/cidade';
import { Produto } from './pages/produtos/shared/produto';
import { Venda } from "./pages/vendas/shared/venda";
import { ProdutoVenda } from "./pages/produtos-venda/shared/produtoVenda";

export class InMemoryDatabase implements InMemoryDbService {
  createDb(){
    const tiposProdutos: TipoProduto[] = [
      { id: 1, tipoProduto: 'Frutas'},
      { id: 2, tipoProduto: 'Legumes'},
      { id: 3, tipoProduto: 'Cereais'},
      { id: 4, tipoProduto: 'Bebidas'},
      { id: 5, tipoProduto: 'Carnes'}
    ];

    const produtos: Produto[] = [
      { id: 1, idTipoProduto: tiposProdutos[1].id, tipoProduto: tiposProdutos[1], produto: "Banana", valor: "3,50", medida: "kilo"},
      { id: 2, idTipoProduto: tiposProdutos[1].id, tipoProduto: tiposProdutos[1], produto: "Morango", valor: "7,80", medida: "Bandeja"},
      { id: 3, idTipoProduto: tiposProdutos[1].id, tipoProduto: tiposProdutos[1], produto: "Laranja", valor: "5,47", medida: "Kilo"},
      { id: 4, idTipoProduto: tiposProdutos[2].id, tipoProduto: tiposProdutos[2], produto: "Repolho", valor: "3,70", medida: "Unidade"},
      { id: 5, idTipoProduto: tiposProdutos[2].id, tipoProduto: tiposProdutos[2], produto: "Cenoura", valor: "10,25", medida: "Kilo"},
      { id: 5, idTipoProduto: tiposProdutos[3].id, tipoProduto: tiposProdutos[3], produto: "Arroz", valor: "5,82", medida: "Kilo"},
      { id: 5, idTipoProduto: tiposProdutos[3].id, tipoProduto: tiposProdutos[3], produto: "Lentilha", valor: "9,35", medida: "Kilo"},
      { id: 5, idTipoProduto: tiposProdutos[4].id, tipoProduto: tiposProdutos[4], produto: "Cerveja", valor: "8,90", medida: "Litro"},
      { id: 5, idTipoProduto: tiposProdutos[4].id, tipoProduto: tiposProdutos[4], produto: "Suco de Laranja", valor: "11,25", medida: "Litro"},
      { id: 5, idTipoProduto: tiposProdutos[5].id, tipoProduto: tiposProdutos[5], produto: "Galinha", valor: "9,45", medida: "Kilo"},
      { id: 5, idTipoProduto: tiposProdutos[5].id, tipoProduto: tiposProdutos[5], produto: "Costela de Gado", valor: "21,47", medida: "Kilo"},
      { id: 5, idTipoProduto: tiposProdutos[5].id, tipoProduto: tiposProdutos[5], produto: "Pernil de Porco", valor: "11,30", medida: "Kilo"},
    ];

    const cidades: Cidade[] = [
      { id: 1, nome: 'Porto Alegre', estado: 'RS'},
      { id: 2, nome: 'Eldorado do Sul', estado: 'RS'},
      { id: 3, nome: 'São Leopoldo', estado: 'RS'},
      { id: 4, nome: 'Guaíba', estado: 'RS'},
      { id: 5, nome: 'Canoas', estado: 'RS'}
    ];

    const clientes: Cliente[] = [
      { id: 1, nome: 'Patricia Silva Vargas', email: "psv@mail.com", idCidade: cidades[1].id, cidade: cidades[1]},
      { id: 2, nome: 'João Jorge Furtado',  email: "jorge@furtado.com.br", idCidade: cidades[1].id, cidade: cidades[1]},
      { id: 3, nome: 'Silvana Peres', email: "sp@mail.com", idCidade: cidades[2].id, cidade: cidades[2] },
      { id: 4, nome: 'Vitoria Assuncao', email: "vitoriav@mail.com", idCidade: cidades[1].id, cidade: cidades[1]  },
      { id: 5, nome: 'Fernanda Andrade Nunes', email: "fnunes@mail.com", idCidade: cidades[4].id, cidade: cidades[4]},
      { id: 6, nome: 'Terezinha de Jesus', email: "terezinha@mail.com", idCidade: cidades[1].id, cidade: cidades[1]  },
      { id: 11, nome: 'Ana Claudia Valdez', email: "acvaldez@mail.com", idCidade: cidades[2].id, cidade: cidades[2] },
      { id: 12, nome: 'Guilherme Costa', email: "guilhermev@costa.com", idCidade: cidades[3].id, cidade: cidades[3] },
      { id: 13, nome: 'Claudio Antunes', email: "ca@mail.com", idCidade: cidades[1].id, cidade: cidades[1]},
      { id: 14, nome: 'Claudio Pereira', email: "cpereira@provedor.com.br", idCidade: cidades[5].id, cidade: cidades[5]}
    ];

    const vendas: Venda[] = [
      {id: 1, idCliente: clientes[1].id, cliente: clientes[1], data:"21/04/2022", totalValor: "15,60"}
    ]

    const produtosVendas: ProdutoVenda[] = [
      {id: 1, idVenda: vendas[1].id, venda: vendas[1], idProduto: produtos[2].id, produto: produtos[2], quantidade: 2, valor: "15,60"}
    ]


    return { tiposProdutos, produtos, cidades, clientes, vendas, produtosVendas }
  }
}
