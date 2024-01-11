import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProdutoCarrinho } from 'src/app/models/ProdutoCarrinho.model';
import { faShoppingCart, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: []
})
export class ListaDeProdutosComponent {
  faShoppingCart = faShoppingCart;
  faTrashCan = faTrashCan;

  @Input() lista!: ProdutoCarrinho[];
  @Input() reset!: boolean;
  @Output() apagaLista = new EventEmitter();

  esvaziarLista(): void {
    this.apagaLista.emit(true);
  }
}
