import { Component, Input } from '@angular/core';
import { Venda } from 'src/app/models/Venda.model';

@Component({
  selector: 'app-card-venda',
  templateUrl: './card-venda.component.html',
  styleUrls: []
})
export class CardVendaComponent {
  @Input() vendas!: Venda[];
}
