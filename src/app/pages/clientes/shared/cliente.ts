import { BaseResourceModel } from '../../../shared/models/base-resource.model';
import { Cidade } from './../../cidades/shared/cidade';

export class Cliente extends BaseResourceModel{
   constructor(
     public id?: number,
     public nome?: string,
     public email?: string,
     public idCidade?: number,
     public cidade?: Cidade
   ){
     super();
   }

   static fromJson(jsonData: any): Cliente{
     return Object.assign(new Cliente(), jsonData);
 }
}
