import { Component, Input } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Produto } from 'src/app/models/Produto.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: []
})
export class InputComponent {
  faMagnifyingGlass = faMagnifyingGlass;

  @Input() texto = "";
  @Input() listaProdutos: Produto[] = [];
  
  //Filtragem de produtos
  filtrarProdutos(idFiltrar: any): void {
    let produto = this.listaProdutos.find(produtoFiltrado => produtoFiltrado.idProduto == idFiltrar);
    console.log(produto);
  }
}
