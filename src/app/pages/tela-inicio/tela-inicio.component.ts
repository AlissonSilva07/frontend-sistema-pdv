import { Component } from '@angular/core';
import { saudacaoMessage } from 'src/app/functions/saudacaoMessage';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
  styleUrls: []
})
export class TelaInicioComponent {
  vendedor: string = 'Juliano Yang';

  mensagemCompleta: string = `${saudacaoMessage()}, ${this.vendedor}.`;
}
