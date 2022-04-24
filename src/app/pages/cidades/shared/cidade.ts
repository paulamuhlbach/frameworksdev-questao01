import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class Cidade extends BaseResourceModel{
   constructor(
     public id?: number,
     public cidade?: string,
     public estado?: string
   ){
     super();
   }

   static fromJson(jsonData: any): Cidade{
     return Object.assign(new Cidade(), jsonData);
 }
}
