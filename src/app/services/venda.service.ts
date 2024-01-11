import { Injectable } from '@angular/core';
import { Venda } from '../models/Venda.model';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  venda!: Venda;

  constructor() { }

  adicionaVenda(vendaAdc: Venda): void {
    this.venda = vendaAdc;
  }

  imprimeVenda():void {
    console.log(this.venda);
  }
}
