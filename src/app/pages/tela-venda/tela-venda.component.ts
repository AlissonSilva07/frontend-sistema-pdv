import { Component } from '@angular/core';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-tela-venda',
  templateUrl: './tela-venda.component.html',
  styleUrls: []
})
export class TelaVendaComponent {
  produtos: Produto[] = [];
  produtosFilter: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this.produtoService.todosProdutos()
    .subscribe({
      next: data => {
        this.produtos = data;
      },
      error: e => console.log(e)
    });
  }

  //Filtrar Produtos
  produtoFiltradoReceiver(produtoFiltrado: any): void {
    console.log(produtoFiltrado)
    this.produtosFilter = this.produtos.filter(p => p.idProduto == produtoFiltrado);
  }

  exibeReload: boolean = false;
  exibirReload(reload: boolean): void {
    this.exibeReload = reload;
  }

  exibeFalha: boolean = false;
  exibirFalha(falha: boolean): void {
    this.exibeFalha = falha;
    setTimeout(() => {
      this.exibeFalha = false;
    }, 2000);
  }

  recarregarLista(): void {
    this.listarProdutos();
    this.exibeReload = false;
  }

}
