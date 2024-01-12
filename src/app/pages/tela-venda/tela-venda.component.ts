import { Component } from '@angular/core';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoCarrinho } from 'src/app/models/ProdutoCarrinho.model';
import { Venda } from 'src/app/models/Venda.model';
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
      let prod = new ProdutoCarrinho(this.produtoPesquisa.idProduto, this.produtoPesquisa.nomeProduto, this.quantidadeInput, this.produtoPesquisa.valUnitario, (this.produtoPesquisa.valUnitario * this.quantidadeInput));
      this.listaService.adicionarProduto(prod);
      this.totalPreco = this.listaService.getTotalPreco();
      this.totalItens = this.listaService.getTotalItens();
      this.resetaCampos();      
      this.exibeResetCarrinho = true;      
    }
  }

  resetaCampos(): void {
    this.quantidadeInput = 1;
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
    if (recebido > this.listaService.getTotalPreco()) {
      this.troco = this.listaService.getTroco(recebido);
    } else {
      alert('O valor recebido não pode ser menor que o valor a se pagar.')
    }
  }

  adicionaVendaReceiver(finaliza: boolean) {
    if (finaliza && this.carr.length > 0) {
      //Buca a data atual
      let dataAtual = new Date().toJSON().slice(0, 10);

      let novaVenda = new Venda(dataAtual, this.listaService.getTotalPreco(), this.troco, this.listaService.getLista());
      console.log(novaVenda)
    } else {
      alert('Você não finalizou a venda.')
    }
  }


  //Funcão auxiliar pra arredondamento de moeda
  arredondaPreço(preco: number): number {
    preco.toPrecision(2);
    return preco;
  }
}
