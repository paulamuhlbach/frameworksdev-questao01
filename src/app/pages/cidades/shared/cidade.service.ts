import { Injectable } from '@angular/core';
import { Cidade } from './cidade';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CidadeService  {

  private cidadesUrl = 'api/cidades/';
  constructor(private http: HttpClient) { }

  getCidades(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.cidadesUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createCidade(cidade: Cidade): Observable<Cidade> {
    cidade.id = null;
    return this.http.post<Cidade>(this.cidadesUrl, cidade).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editCidade(cidade: Cidade): Observable<any> {
    return this.http.put(this.cidadesUrl + cidade.id, cidade);
  }

  deleteCidade(id: number): Observable<any> {
    return this.http.delete(this.cidadesUrl + id);
  }

}
