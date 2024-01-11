import { Injectable } from '@angular/core';
import { Venda } from '../models/Venda.model';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  vendas!: Venda[];

  constructor() { }

  adicionaVenda(vendaAdc: Venda): void {
    this.vendas.push(vendaAdc);
  }

  getVendas(): Venda[] {
    return this.vendas;
  }

  imprimeVendas():void {
    console.log(this.vendas);
  }
}
