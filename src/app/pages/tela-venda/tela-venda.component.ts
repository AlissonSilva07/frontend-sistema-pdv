import { Component } from '@angular/core';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoCarrinho } from 'src/app/models/ProdutoCarrinho.model';
import { ListaProdutosService } from 'src/app/services/lista-produtos.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-tela-venda',
  templateUrl: './tela-venda.component.html',
  styleUrls: []
})
export class TelaVendaComponent {

  produtoPesquisa!: Produto;
  msgRetorno!: string;
  error!: boolean;

  constructor(private produtoService: ProdutoService,
              private listaService: ListaProdutosService) {}

  //Buscar produto por ID
  buscarProdutoPorID(idFiltrar: number) {
    return this.produtoService.produtoPorID(idFiltrar)
      .subscribe({
        next: res => {
          this.produtoPesquisa = res;
          this.error = false;
        },
        error: err => {
          this.msgRetorno = err.error;
          this.error = true;
        }
      })
  }

  //Serviços de Output
  produtoFiltradoReceiver(produtoFiltrado: any): void {
    this.buscarProdutoPorID(produtoFiltrado);
  }

  quantidadeReceiver(quantidade: number): void {
    this.quantidadeInput = quantidade;
  }

  //Contador de Input
  quantidadeInput: number = 1;

  //Algoritmo que constrói a lista de produtos
  carr: ProdutoCarrinho[] = this.listaService.getLista();
  totalPreco: number = this.listaService.getTotalPreco();
  totalItens: number = this.listaService.getTotalItens();
  troco!: number;
  exibeResetCarrinho: boolean = false;

  //Função que adiciona o produto ao carrinho
  adicionarAoCarrinho(): void {
    if (this.produtoPesquisa) {
      let prod = new ProdutoCarrinho(this.produtoPesquisa.idProduto, this.produtoPesquisa.nomeProduto, this.quantidadeInput, this.produtoPesquisa.valUnitario, this.arredondaPreço(this.produtoPesquisa.valUnitario * this.quantidadeInput));
      this.listaService.adicionarProduto(prod);
      this.totalPreco = this.arredondaPreço(this.listaService.getTotalPreco());
      this.totalItens = this.listaService.getTotalItens();
      this.exibeResetCarrinho = true;
    }
  }

  //Funções vindas de output
  esvaziaReceiver(esvazia: boolean): void {
    if (esvazia) {
      this.listaService.limparLista();
      this.carr = this.listaService.getLista();
      this.totalPreco = this.listaService.getTotalPreco();
      this.totalItens = this.listaService.getTotalItens();
      this.exibeResetCarrinho = false;
    }
  }

  trocoReceiver(recebido: number): void {
    this.troco = this.listaService.getTroco(recebido);
  }


  //Funcão auxiliar pra arredondamento de moeda
  arredondaPreço(preco: number): number {
    preco.toPrecision(2);
    return preco;
  }
}
