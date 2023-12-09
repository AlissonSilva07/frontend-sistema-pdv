import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaHistoricoComponent } from './pages/tela-historico/tela-historico.component';
import { TelaVendaComponent } from './pages/tela-venda/tela-venda.component';
import { TelaInicioComponent } from './pages/tela-inicio/tela-inicio.component';
import { TelaProdutosComponent } from './pages/tela-produtos/tela-produtos.component';
import { ListarProdutosComponent } from './pages/tela-produtos/listar-produtos/listar-produtos.component';
import { CadastrarProdutosComponent } from './pages/tela-produtos/cadastrar-produtos/cadastrar-produtos.component';
import { PesquisarProdutosComponent } from './pages/tela-produtos/pesquisar-produtos/pesquisar-produtos.component';

const routes: Routes = [
  {path: 'inicio', component: TelaInicioComponent},
  {path: 'vender', component: TelaVendaComponent},
  {path: 'historico', component: TelaHistoricoComponent},
  {path: 'produtos', component: TelaProdutosComponent, children: [
    {path: 'listar', component: ListarProdutosComponent},
    {path: 'cadastrar', component: CadastrarProdutosComponent},
    {path: 'pesquisar', component: PesquisarProdutosComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
