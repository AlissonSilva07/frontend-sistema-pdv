import { Component } from '@angular/core';

import { faTrash, faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: []
})
export class ListarProdutosComponent {
  faTrash = faTrash;
  faEdit = faEdit;
  faTrashCan = faTrashCan;

  openPopUpExcluir: boolean = false;

  abrirDialogoExcluir() {
    this.openPopUpExcluir = true;
  }

  fecharDialogoExcluir() {
    this.openPopUpExcluir = false;
  }
}
