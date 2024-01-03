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

  adicionarAoCarrinho(): void {
    const carr: ProdutoCarrinho[] = [];
    if (this.produtoPesquisa) {
      let prod = new ProdutoCarrinho(1, this.produtoPesquisa.idProduto, this.produtoPesquisa.nomeProduto, this.quantidadeInput, this.produtoPesquisa.valUnitario, (this.produtoPesquisa.valUnitario * this.quantidadeInput));
      carr.push(prod);
      console.log(carr)
    }
  }

  //algoritmo lista de produtos
}
