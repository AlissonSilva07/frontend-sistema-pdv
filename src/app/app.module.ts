import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
