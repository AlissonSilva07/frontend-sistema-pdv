import { Component, ElementRef, OnDestroy } from '@angular/core';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoCarrinho } from 'src/app/models/ProdutoCarrinho.model';
import { Venda } from 'src/app/models/Venda.model';
import { ListaProdutosService } from 'src/app/services/lista-produtos.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-venda',
  templateUrl: './tela-venda.component.html',
  styleUrls: []
})
export class TelaVendaComponent {

  faClose = faClose;

  produtoPesquisa!: Produto;
  msgRetorno!: string;
  error!: boolean;
  openPopUpConfirmaVenda: boolean = false;

  constructor(private produtoService: ProdutoService,
              private listaService: ListaProdutosService,
              private router: Router,
              private elementRef: ElementRef) {}

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
      this.atualizaLista();
      this.resetaCampos();      
      this.exibeResetCarrinho = true;      
    }
  }

  adicionarVenda(): void {
    //Buca a data atual
    let dataAtual = new Date().toJSON().slice(0, 10);

    let novaVenda = new Venda(dataAtual, this.arredondaPreco(this.listaService.getTotalPreco()), this.arredondaPreco(this.troco), this.listaService.getLista());
    this.resetaLista();
    this.router.navigate(['/historico']);
    console.log(novaVenda)
  }

  resetaCampos(): void {
    this.quantidadeInput = 1;
    this.troco = 0;
  }

  resetaLista(): void {
    this.listaService.limparLista();
    this.carr =this.listaService.getLista();
  }

  atualizaLista(): void {    
    this.totalPreco = this.listaService.getTotalPreco();
    this.totalItens = this.listaService.getTotalItens();
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
      this.openPopUpConfirmaVenda = true;
    } else {
      alert('Você não finalizou a venda.')
    }
  }

  //Funcão auxiliar pra arredondamento de moeda
  arredondaPreco(preco: number): number {
    return Math.round(preco * 1000) / 1000;
  }
}
