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
  erro: boolean = false;
  msgErro!: string;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {}

  //Buscar produto por ID
  buscarProdutoPorID(idFiltrar: number) {
    return this.produtoService.produtoPorID(idFiltrar)
      .subscribe({
        next: res => {
          console.log(res);
          this.produtoPesquisa = res;
        },
        error: err => {
          this.msgErro = err.error;
        }
      })
  }

  produtoFiltradoReceiver(produtoFiltrado: any): void {
    this.buscarProdutoPorID(produtoFiltrado);
  }

}
