import { Component, Input } from '@angular/core';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.component.html',
  styleUrls: []
})
export class FinalizarComponent {
  faCalculator = faCalculator;

  @Input() totalPreco!: number;
  @Input() totalItens!: number;
}
