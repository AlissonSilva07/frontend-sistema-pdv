import { Component, OnInit } from '@angular/core';
import { Venda } from 'src/app/models/Venda.model';
import { VendaService } from 'src/app/services/venda.service';

@Component({
  selector: 'app-tela-historico',
  templateUrl: './tela-historico.component.html',
  styleUrls: []
})
export class TelaHistoricoComponent implements OnInit{

  vendas!: Venda[];

  constructor(private vendaService: VendaService) {}

  ngOnInit(): void {
    this.getVendas();
  }

  getVendas(): void {
    this.vendaService.getVendas()
      .subscribe({
        next: data => {
          this.vendas = data;
        },
        error: e => console.log(e)
      })
  }
}
