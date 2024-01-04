import { Component, Input } from '@angular/core';
import { ProdutoCarrinho } from 'src/app/models/ProdutoCarrinho.model';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: []
})
export class ListaDeProdutosComponent {
  @Input() lista!: ProdutoCarrinho[];
}
