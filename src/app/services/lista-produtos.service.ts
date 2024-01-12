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

  getTotalPreco(): number {
    let totalPreco: number = 0;
    for(let preco of this.lista) {
      totalPreco = totalPreco + preco.getTotal();
    }
    return this.arredondaPreço(totalPreco);
  }

  getTotalItens(): number {
    let totalItens: number = 0;
    for(let item of this.lista) {
      totalItens = totalItens + item.getQtd();
    }
    return totalItens;
  }

  getTroco(valRecebido: number): number {
    return this.arredondaPreço(valRecebido - this.getTotalPreco());
  }

  //Funcão auxiliar pra arredondamento de moeda
  arredondaPreço(preco: number): number {
    preco.toPrecision(2);
    return preco;
  }
}
