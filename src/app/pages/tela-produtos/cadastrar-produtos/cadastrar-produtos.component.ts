import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: []
})
export class CadastrarProdutosComponent {
  openPopUpIncluir: boolean = false;

  abrirDialogoIncluir() {
    this.openPopUpIncluir = true;
  }

  fecharDialogoIncluir() {
    this.openPopUpIncluir = false;
  }
  
  categoria = ['Cereais', 'Bebidas', 'Carnes'];

  produtoForm = new FormGroup({
    titulo: new FormControl(''),
    categoriaSelect: new FormControl(''),
    valorUnitario: new FormControl('')
  })

}
