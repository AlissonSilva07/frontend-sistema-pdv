import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/services/produto.service';
import { faClose, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: []
})
export class CadastrarProdutosComponent implements OnInit {

  //Ícones usados
  faClose = faClose;
  faCircleExclamation = faCircleExclamation;

  listaCategoria?: string[] = [];

  constructor(private productService: ProdutoService) {}
  
  ngOnInit(): void { 
    this.todasCategorias();
   }

  //Busca todas as categorias e adiciona nas options
  todasCategorias(): void {
    this.productService.todasCategorias()
    .subscribe({
      next: data => {
        this.listaCategoria = data;
      },
      error: e => console.log(e)
    })
  }

  //Postar novo produto
  msgErro!: string;

  salvarProduto(): void {
    var data = this.produtoForm.value;
    this.productService.postarProduto(data)
    .subscribe({
      next: res => {
        console.log(res);
      },
      error: e => console.log(e)
    })
  }

  onSubmit() {
    if (this.produtoForm.valid) {
      this.salvarProduto();
      this.resetForm();
      this.abrirDialogoIncluir();
    } else {
      this.msgErro = 'Preencha todos os campos antes de enviar.';
      setTimeout(() => {
        this.msgErro = '';
      }, 2000);
    }
  }

  //Dados de formulario
  produtoForm = new FormGroup({
    nomeProduto: new FormControl('', [Validators.required, Validators.minLength(6)]),
    categoria: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.maxLength(100)),
    valUnitario: new FormControl('', [Validators.required, Validators.min(0.01)])
  })

  get nomeProduto() {
    return this.produtoForm.get('nomeProduto');
  }

  get categoria() {
    return this.produtoForm.get('categoria');
  }

  get descricao() {
    return this.produtoForm.get('descricao');
  }

  get valUnitario() {
    return this.produtoForm.get('valUnitario');
  }

  openPopUpIncluir: boolean = false;

  abrirDialogoIncluir() {
    this.openPopUpIncluir = true;
  }

  fecharDialogoIncluir() {
    this.openPopUpIncluir = false;
  }

  resetForm() {
    this.produtoForm.reset();
  }
}
