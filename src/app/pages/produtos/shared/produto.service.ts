import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService{

  private produtosUrl = 'api/produtos/';
  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.produtosUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createProduto(produto: Produto): Observable<Produto> {
    produto.id = null;
    return this.http.post<Produto>(this.produtosUrl, produto).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editProduto(produto: Produto): Observable<any> {
    return this.http.put(this.produtosUrl + produto.id, produto);
  }

  deleteProduto(id: number): Observable<any> {
    return this.http.delete(this.produtosUrl + id);
  }

}
