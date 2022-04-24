import { Injectable } from '@angular/core';
import { TipoProduto } from './tipo-produto';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipoProdutoService{

  private tiposProdutosUrl = 'api/tiposProdutos/';
  constructor(private http: HttpClient) { }

  getProdutos(): Observable<TipoProduto[]> {
    return this.http.get<TipoProduto[]>(this.tiposProdutosUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createProduto(tipoProduto: TipoProduto): Observable<TipoProduto> {
    tipoProduto.id = null;
    return this.http.post<TipoProduto>(this.tiposProdutosUrl, tipoProduto).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editProduto(tipoProduto: TipoProduto): Observable<any> {
    return this.http.put(this.tiposProdutosUrl + tipoProduto.id, tipoProduto);
  }

  deleteProduto(id: number): Observable<any> {
    return this.http.delete(this.tiposProdutosUrl + id);
  }

}
