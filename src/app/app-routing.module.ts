import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaHistoricoComponent } from './pages/tela-historico/tela-historico.component';
import { TelaVendaComponent } from './pages/tela-venda/tela-venda.component';
import { TelaInicioComponent } from './pages/tela-inicio/tela-inicio.component';
import { TelaProdutosComponent } from './pages/tela-produtos/tela-produtos.component';

const routes: Routes = [
  {path: 'inicio', component: TelaInicioComponent},
  {path: 'vender', component: TelaVendaComponent},
  {path: 'historico', component: TelaHistoricoComponent},
  {path: 'produtos', component: TelaProdutosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
