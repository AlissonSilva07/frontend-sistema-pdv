import { Component } from '@angular/core';
import { Produto } from 'src/app/models/Produto.model';
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

  produtoFiltradoReceiver(produtoFiltrado: any): void {
    this.buscarProdutoPorID(produtoFiltrado);
  }

}
