import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { faTrash, faEdit, faTrashCan, faFaceSadTear, faClose } from '@fortawesome/free-solid-svg-icons';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: []
})
export class ListarProdutosComponent {

  produtos?: Produto[];

  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  //Lista de Produtos
  listarProdutos(): void {
    this.produtoService.todosProdutos()
    .subscribe({
      next: data => {
        this.produtos = data;
      },
      error: e => console.log(e)
    });
  }

  //Deletar Produto
  idDeletar: number = 0;

  apagarPorID(): void {
    this.produtoService.deletarProduto(this.idDeletar)
    .subscribe({
      next: res => {
        console.log("O produto de id " + this.idDeletar + "foi apagado.");
        window.location.reload();
      },
      error: e => console.error(e)
    })
  }

  //Ícones usados
  faClose = faClose;
  faFaceSadTear = faFaceSadTear;
  faTrash = faTrash;
  faEdit = faEdit;
  faTrashCan = faTrashCan;

  //Controles de popup
  openPopUp: boolean = false;

  abrirDialogoExcluir(idExcluir: any) {
    this.openPopUp = true;
    this.idDeletar = idExcluir;
  }

  fecharDialogo() {
    this.openPopUp = false;
  }
}
