import { Component } from '@angular/core';

import { faTrash, faEdit, faTrashCan, faFaceSadTear } from '@fortawesome/free-solid-svg-icons';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: []
})
export class ListarProdutosComponent {

  produtos?: Produto[];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  //Lista de Produtos
  listarProdutos(): void {
    this.produtoService.todosProdutos()
    .subscribe({
      next: data => {
        this.produtos = data;
        console.log(data);
      },
      error: e => console.log(e)
    });
  }

  //Ícones usados
  faFaceSadTear = faFaceSadTear;
  faTrash = faTrash;
  faEdit = faEdit;
  faTrashCan = faTrashCan;

  //Controles de popup
  openPopUpExcluir: boolean = false;

  abrirDialogoExcluir() {
    this.openPopUpExcluir = true;
  }

  fecharDialogoExcluir() {
    this.openPopUpExcluir = false;
  }
}
