import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from 'src/app/models/Produto.model';

@Component({
  selector: 'app-input-quantidade',
  templateUrl: './input-quantidade.component.html',
  styleUrls: []
})
export class InputQuantidadeComponent {

  @Output() totalContador = new EventEmitter();

  //Input de quantidade
  quantidadeAtual: number = 1;

  aumentar() {  
    this.quantidadeAtual++;
    this.totalContador.emit(this.quantidadeAtual);
  }

  diminuir() {
    this.quantidadeAtual--;
    this.totalContador.emit(this.quantidadeAtual);
  }
}
