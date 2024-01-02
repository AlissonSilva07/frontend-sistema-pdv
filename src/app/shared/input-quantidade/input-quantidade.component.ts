import { Component, Input } from '@angular/core';
import { Produto } from 'src/app/models/Produto.model';

@Component({
  selector: 'app-input-quantidade',
  templateUrl: './input-quantidade.component.html',
  styleUrls: []
})
export class InputQuantidadeComponent {

  @Input() produtoFiltrado!: Produto;


  //Input de quantidade
  quantidade: number = 1;

  aumentar() {  
      this.quantidade++;
  }

  diminuir() {
      this.quantidade--;
  }
}
