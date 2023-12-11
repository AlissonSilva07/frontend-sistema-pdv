import { Component } from '@angular/core';

import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: []
})
export class ListarProdutosComponent {
  faTrash = faTrash;
  faEdit = faEdit;

  openPopUp: boolean = false;

  abrirDialogo() {
    this.openPopUp = true;
  }
}
