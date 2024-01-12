import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Produto } from 'src/app/models/Produto.model';

@Component({
  selector: 'app-input-quantidade',
  templateUrl: './input-quantidade.component.html',
  styleUrls: []
})
export class InputQuantidadeComponent {
  
  @Output() totalContador = new EventEmitter();

  //Input de quantidade
  @Input() quantidadeInput: number = 1;

  atualizar() {
    this.totalContador.emit(this.quantidadeInput);
    console.log(this.quantidadeInput);
  }

  aumentar() {  
    this.quantidadeInput++;
    this.atualizar();
  }

  diminuir() {
    this.quantidadeInput--;
    this.atualizar();
  }
}
