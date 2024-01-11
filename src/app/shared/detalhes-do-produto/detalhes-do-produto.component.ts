import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Produto } from 'src/app/models/Produto.model';
import { faMagnifyingGlass, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-detalhes-do-produto',
  templateUrl: './detalhes-do-produto.component.html',
  styleUrls: []
})
export class DetalhesDoProdutoComponent {
  faCircleExclamation = faCircleExclamation;
  faMagnifyingGlass = faMagnifyingGlass;

  @Input() produtoDetalhe!: Produto;
  @Input() msgRetorno!: any;
  @Input() error!: boolean;
}
