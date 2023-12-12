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

  openPopUp: boolean = false;

  abrirDialogo() {
    this.openPopUp = true;
  }

  fecharDialogo() {
    this.openPopUp = false;
  }
}
