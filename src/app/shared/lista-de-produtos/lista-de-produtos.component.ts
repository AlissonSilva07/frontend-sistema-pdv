import { Component, Input } from '@angular/core';
import { ProdutoCarrinho } from 'src/app/models/ProdutoCarrinho.model';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: []
})
export class ListaDeProdutosComponent {
  faShoppingCart = faShoppingCart;
  
  @Input() lista!: ProdutoCarrinho[];
}
