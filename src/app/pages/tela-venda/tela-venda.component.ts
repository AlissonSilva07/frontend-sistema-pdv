import { Component } from '@angular/core';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoCarrinho } from 'src/app/models/ProdutoCarrinho.model';
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

  constructor(private produtoService: ProdutoService) {}

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

  quantidadeReceiver(quantidade: any): void {
    this.quantidadeInput = quantidade;
  }

  //Contador de Input
  quantidadeInput!: number;

  //Algoritmo que constrói a lista de produtos
  carr: ProdutoCarrinho[] = [];
  exibeResetCarrinho: boolean = false;

  adicionarAoCarrinho(): void {
    if (this.produtoPesquisa) {
      let prod = new ProdutoCarrinho(this.produtoPesquisa.idProduto, this.produtoPesquisa.nomeProduto, this.quantidadeInput, this.produtoPesquisa.valUnitario, (this.produtoPesquisa.valUnitario * this.quantidadeInput));
      this.carr.push(prod);
      this.exibeResetCarrinho = true;
    }
    
    console.log(this.carr)
  }

  esvaziaReceiver(esvazia: boolean): void {
    if (esvazia == true) {
      this.carr = [];
      this.exibeResetCarrinho = false;
    }
  }
}
