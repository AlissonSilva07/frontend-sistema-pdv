import { Component} from '@angular/core';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoCarrinho } from 'src/app/models/ProdutoCarrinho.class';
import { Venda } from 'src/app/models/Venda.class';
import { ListaProdutosService } from 'src/app/services/lista-produtos.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VendaService } from 'src/app/services/venda.service';

@Component({
  selector: 'app-tela-venda',
  templateUrl: './tela-venda.component.html',
  styleUrls: []
})
export class TelaVendaComponent {

  faClose = faClose;

  produtoPesquisa!: Produto;
  msgRetorno!: string;
  error!: boolean;
  openPopUpConfirmaVenda: boolean = false;

  constructor(private produtoService: ProdutoService,
              private listaService: ListaProdutosService,
              private vendaService: VendaService,
              private router: Router) {}

  //Buscar produto por ID
  buscarProdutoPorID(idFiltrar: number) {
    return this.produtoService.produtoPorID(idFiltrar)
      .subscribe({
        next: res => {
          this.produtoPesquisa = res;
          this.error = false;
        },
        error: err => {
          this.msgRetorno = err.error;
          this.error = true;
        }
      })
  }

  //Serviços de Output
  produtoFiltradoReceiver(produtoFiltrado: any): void {
    this.buscarProdutoPorID(produtoFiltrado);
  }

  quantidadeReceiver(quantidade: number): void {
    this.quantidadeInput = quantidade;
  }

  //Contador de Input
  quantidadeInput: number = 1;

  //Algoritmo que constrói a lista de produtos
  carr: ProdutoCarrinho[] = this.listaService.getLista();
  totalPreco: number = this.listaService.getTotalPreco();
  totalItens: number = this.listaService.getTotalItens();
  troco!: number;
  exibeResetCarrinho: boolean = false;

  //Função que adiciona o produto ao carrinho
  adicionarAoCarrinho(): void {
    if (this.produtoPesquisa) {
      let prod = new ProdutoCarrinho(this.produtoPesquisa.idProduto, this.produtoPesquisa.nomeProduto, this.quantidadeInput, this.produtoPesquisa.valUnitario, (this.produtoPesquisa.valUnitario * this.quantidadeInput));
      this.listaService.adicionarProduto(prod);
      this.atualizaLista();
      this.resetaCampos();      
      this.exibeResetCarrinho = true;      
    }
  }

  adicionarVenda(): void {
    let novaVenda = new Venda(this.dadosClienteForm.value.nomeCliente!, this.dadosClienteForm.value.telefone!, this.arredondaPreco(this.listaService.getTotalPreco()), this.arredondaPreco(this.troco), this.listaService.getLista());
    this.vendaService.postarVenda(novaVenda).subscribe({
      next: res => {
        console.log(res);
      },
      error: e => console.log(e)
    });
    this.resetaLista();
    this.router.navigate(['/historico']);
  }

  resetaCampos(): void {
    this.quantidadeInput = 1;
    this.troco = 0;
  }

  resetaLista(): void {
    this.listaService.limparLista();
    this.carr =this.listaService.getLista();
  }

  atualizaLista(): void {    
    this.totalPreco = this.listaService.getTotalPreco();
    this.totalItens = this.listaService.getTotalItens();
  }

  //Funções vindas de output
  esvaziaReceiver(esvazia: boolean): void {
    if (esvazia) {
      this.listaService.limparLista();
      this.carr = this.listaService.getLista();
      this.totalPreco = this.listaService.getTotalPreco();
      this.totalItens = this.listaService.getTotalItens();
      this.exibeResetCarrinho = false;
    }
  }

  trocoReceiver(recebido: number): void {
    if (recebido > this.listaService.getTotalPreco()) {
      this.troco = this.listaService.getTroco(recebido);
    } else {
      alert('O valor recebido não pode ser menor que o valor a se pagar.')
    }
  }

  adicionaVendaReceiver(finaliza: boolean) {
    if (finaliza && this.carr.length > 0) {
      this.openPopUpConfirmaVenda = true;
    } else {
      alert('Você não finalizou a venda.')
    }
  }

  //Funcão auxiliar pra arredondamento de moeda
  arredondaPreco(preco: number): number {
    return Math.round(preco * 1000) / 1000;
  }

  //Dados do cliente
  dadosClienteForm = new FormGroup({
    nomeCliente: new FormControl('', [Validators.required]),
    telefone: new FormControl('', Validators.required),
  })

  get nomeCliente() {
    return this.dadosClienteForm.get('nomeCliente');
  }

  get telefone() {
    return this.dadosClienteForm.get('telefone');
  }
}
