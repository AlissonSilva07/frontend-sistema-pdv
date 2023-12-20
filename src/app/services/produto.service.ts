import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  todosProdutos(): Observable<Produto[]> {
      return this.http.get<Produto[]>(`${environment.baseUrl}/todos`);
  }

  todasCategorias(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.baseUrl}/categorias`);
  }

  produtoPorID(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${environment.baseUrl}/buscar/${id}`);
  }

  postarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${environment.baseUrl}/postar`, produto);
  }
}
