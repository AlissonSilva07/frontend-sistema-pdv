import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() produtoFiltrado = new EventEmitter();
  @Output() filterSuccess = new EventEmitter();
  @Output() filterFailure = new EventEmitter();

  exibirReload: boolean = false;
  exibirErro: boolean = false;
  
  //Filtragem de produtos
  filtrarProdutos(idFiltrar: any): void {
    let produtoSaída = this.listaProdutos.find(p => p.idProduto == idFiltrar);

    if (produtoSaída) {
      this.produtoFiltrado.emit(produtoSaída.idProduto);
      this.sucessoFiltro();
    } else {
      this.erroFiltro();
    }
  }

  sucessoFiltro(): void {
    this.filterSuccess.emit(this.exibirReload = true);
  }

  erroFiltro(): void {
    this.filterFailure.emit(this.exibirErro = true);
  }
}
