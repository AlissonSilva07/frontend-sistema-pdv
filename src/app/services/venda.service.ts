import { Injectable } from '@angular/core';
import { Venda } from '../models/Venda.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor(private http: HttpClient) { }

  getVendas(): Observable<Venda[]> {
    return this.http.get<Venda[]>(`${environment.urlVendas}/todas`);
  }

  postarVenda(venda: any): Observable<any> {
    return this.http.post(`${environment.urlVendas}/postar`, venda);
  }
}
