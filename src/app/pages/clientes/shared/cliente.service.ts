import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientesUrl = 'api/clientes/';
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clientesUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createCliente(cliente: Cliente): Observable<Cliente> {
    cliente.id = null;
    return this.http.post<Cliente>(this.clientesUrl, cliente).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editCliente(cliente: Cliente): Observable<any> {
    return this.http.put(this.clientesUrl + cliente.id, cliente);
  }

  deleteCliente(id: number): Observable<any> {
    return this.http.delete(this.clientesUrl + id);
  }

}
