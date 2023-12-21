import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: []
})
export class CadastrarProdutosComponent implements OnInit {

  listaCategoria?: string[] = [];

  constructor(private productService: ProdutoService) {}
  
  ngOnInit(): void { 
    this.todasCategorias();
   }

  todasCategorias(): void {
    this.productService.todasCategorias()
    .subscribe({
      next: data => {
        this.listaCategoria = data;
        console.log(data);
      },
      error: e => console.log(e)
    })
  }

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

  onSubmit() {
    try {
      this.produtoForm.valid ? this.abrirDialogoIncluir() : alert("Todos os campos precisam estar preenchidos");
      this.salvarProduto()
      this.resetForm();
    } catch (e) {
      console.error(e);
    }
  }

}
