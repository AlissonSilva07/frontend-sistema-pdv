import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaVendaComponent } from './pages/tela-venda/tela-venda.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TelaHistoricoComponent } from './pages/tela-historico/tela-historico.component';
import { TelaInicioComponent } from './pages/tela-inicio/tela-inicio.component';
import { TelaProdutosComponent } from './pages/tela-produtos/tela-produtos.component';
import { InputComponent } from './shared/input/input.component';
import { CardVendaComponent } from './shared/card-venda/card-venda.component';
import { FinalizarComponent } from './shared/finalizar/finalizar.component';
import { MainButtonComponent } from './shared/main-button/main-button.component';
import { ListaDeProdutosComponent } from './shared/lista-de-produtos/lista-de-produtos.component';
import { DetalhesDoProdutoComponent } from './shared/detalhes-do-produto/detalhes-do-produto.component';
import { InputQuantidadeComponent } from './shared/input-quantidade/input-quantidade.component';
import { ButtonIconComponent } from './shared/button-icon/button-icon.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ListarProdutosComponent } from './pages/tela-produtos/listar-produtos/listar-produtos.component';
import { CadastrarProdutosComponent } from './pages/tela-produtos/cadastrar-produtos/cadastrar-produtos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VendasHojeComponent } from './shared/vendas-hoje/vendas-hoje.component';
import { VendasMaisVendidosComponent } from './shared/vendas-mais-vendidos/vendas-mais-vendidos.component';
import { UltimasVendasComponent } from './shared/ultimas-vendas/ultimas-vendas.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaVendaComponent,
    SidebarComponent,
    TelaHistoricoComponent,
    TelaInicioComponent,
    TelaProdutosComponent,
    InputComponent,
    CardVendaComponent,
    FinalizarComponent,
    MainButtonComponent,
    ListaDeProdutosComponent,
    DetalhesDoProdutoComponent,
    InputQuantidadeComponent,
    ButtonIconComponent,
    NavbarComponent,
    ListarProdutosComponent,
    CadastrarProdutosComponent,
    VendasHojeComponent,
    VendasMaisVendidosComponent,
    UltimasVendasComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
