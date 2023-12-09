import { Component } from '@angular/core';

@Component({
  selector: 'app-input-quantidade',
  templateUrl: './input-quantidade.component.html',
  styleUrls: []
})
export class InputQuantidadeComponent {
  quantidade: number = 1;

  aumentar() {  
      this.quantidade++;
  }

  diminuir() {
      this.quantidade--;
  }
}
