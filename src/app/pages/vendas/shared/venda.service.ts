import { Injectable } from '@angular/core';
import { Venda } from './venda';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  private vendasUrl = 'api/vendas/';
  constructor(private http: HttpClient) { }

  getVendas(): Observable<Venda[]> {
    return this.http.get<Venda[]>(this.vendasUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createVenda(venda: Venda): Observable<Venda> {
    venda.id = null;
    return this.http.post<Venda>(this.vendasUrl, venda).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editVenda(venda: Venda): Observable<any> {
    return this.http.put(this.vendasUrl + venda.id, venda);
  }

  deleteVenda(id: number): Observable<any> {
    return this.http.delete(this.vendasUrl + id);
  }

}
