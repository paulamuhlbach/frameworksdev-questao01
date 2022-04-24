import { Cidade } from './../../cidades/shared/cidade';

export interface Cliente{
     id: number,
     nome: string,
     email: string,
     idCidade: number,
     cidade: Cidade

}
