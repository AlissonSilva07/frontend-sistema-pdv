import { Injectable } from '@angular/core';
import { ProdutoCarrinho } from '../models/ProdutoCarrinho.model';

@Injectable({
  providedIn: 'root'
})
export class ListaProdutosService {

  lista: ProdutoCarrinho[] = [];

  constructor() { }

  adicionarProduto(produto: ProdutoCarrinho): void {
    this.lista.push(produto);
  }

  getLista(): ProdutoCarrinho[] {
    return this.lista;
  }

  limparLista() {
    this.lista = [];
    return this.lista;
  }

}
