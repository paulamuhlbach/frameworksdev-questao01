import { Injectable } from '@angular/core';
import { ProdutoVenda } from './produtoVenda';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoVendaVendaService{

  private produtoVendasUrl = 'api/produtoVendas/';
  constructor(private http: HttpClient) { }

  getProdutoVendas(): Observable<ProdutoVenda[]> {
    return this.http.get<ProdutoVenda[]>(this.produtoVendasUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createProdutoVenda(produtoVenda: ProdutoVenda): Observable<ProdutoVenda> {
    produtoVenda.id = null;
    return this.http.post<ProdutoVenda>(this.produtoVendasUrl, produtoVenda).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editProdutoVenda(produtoVenda: ProdutoVenda): Observable<any> {
    return this.http.put(this.produtoVendasUrl + produtoVenda.id, produtoVenda);
  }

  deleteProdutoVenda(id: number): Observable<any> {
    return this.http.delete(this.produtoVendasUrl + id);
  }

}
