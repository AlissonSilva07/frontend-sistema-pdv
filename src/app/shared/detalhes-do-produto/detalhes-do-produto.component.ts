import { Component, Input } from '@angular/core';
import { Produto } from 'src/app/models/Produto.model';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-detalhes-do-produto',
  templateUrl: './detalhes-do-produto.component.html',
  styleUrls: []
})
export class DetalhesDoProdutoComponent {
  faMagnifyingGlass = faMagnifyingGlass;

  @Input() produtoDetalhe!: Produto;
  @Input() erro!: boolean;
  @Input() msg!: string;
}
