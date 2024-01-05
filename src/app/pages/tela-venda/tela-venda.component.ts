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
    console.log(quantidade)
  }

  //Contador de Input
  quantidadeInput: number = 1;

  //Algoritmo que constrói a lista de produtos
  carr: ProdutoCarrinho[] = this.listaService.getLista();
  exibeResetCarrinho: boolean = false;

  adicionarAoCarrinho(): void {
    if (this.produtoPesquisa) {
      let arredondado: number = Math.round((this.produtoPesquisa.valUnitario * this.quantidadeInput)* 100) / 100;
      let prod = new ProdutoCarrinho(this.produtoPesquisa.idProduto, this.produtoPesquisa.nomeProduto, this.quantidadeInput, this.produtoPesquisa.valUnitario, arredondado);
      this.listaService.adicionarProduto(prod);
      this.exibeResetCarrinho = true;
    }
  }

  esvaziaReceiver(esvazia: boolean): void {
    if (esvazia) {
      this.listaService.limparLista();
      this.carr = this.listaService.getLista();
      this.exibeResetCarrinho = false;
    }
  }
}
