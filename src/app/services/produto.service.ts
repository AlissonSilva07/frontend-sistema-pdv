import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { Produto } from '../models/Produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  todosProdutos(): Observable<Produto[]> {
      return this.http.get<Produto[]>(`${environment.urlProdutos}/todos`);
  }

  todasCategorias(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.urlProdutos}/categorias`);
  }

  produtoPorID(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${environment.urlProdutos}/buscar/${id}`);
  }

  postarProduto(produto: any): Observable<any> {
    return this.http.post(`${environment.urlProdutos}/postar`, produto);
  }

  deletarProduto(ids: (undefined | number)[]): Observable<(undefined | number)[]> {
    return this.http.delete<(undefined | number)[]>(`${environment.urlProdutos}/deletar/${ids}`);
  }

  atualizarProduto(idAtualizar: number, produtoAtualizar: any): Observable<any> {
    return this.http.put(`${environment.urlProdutos}/atualizar/${idAtualizar}`, produtoAtualizar);
  }
}
