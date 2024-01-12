import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.component.html',
  styleUrls: []
})
export class FinalizarComponent {
  faCalculator = faCalculator;
  recebido!: number;

  @Input() totalPreco!: number;
  @Input() totalItens!: number;
  @Input() trocoRecebido: number = 0;
  @Output() mandaTroco = new EventEmitter();
  @Output() adicionaVenda = new EventEmitter();

  calculaTroco(): void {
    this.mandaTroco.emit(this.recebido);
  }

  adicionarVenda(): void {
    this.adicionaVenda.emit(true);
  }
}
