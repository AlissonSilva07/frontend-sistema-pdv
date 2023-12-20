import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: []
})
export class CadastrarProdutosComponent implements OnInit {

  categoria?: string[] = [];

  constructor(private productService: ProdutoService) {}
  
  ngOnInit(): void { 
    this.todasCategorias();
   }

  todasCategorias(): void {
    this.productService.todasCategorias()
    .subscribe({
      next: data => {
        this.categoria = data;
        console.log(data);
      },
      error: e => console.log(e)
    })
  }

  produtoForm = new FormGroup({
    titulo: new FormControl('', [Validators.required, Validators.minLength(8)]),
    categoriaSelect: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.maxLength(100)),
    valorUnitario: new FormControl('', [Validators.required, Validators.min(0.01)])
  })

  get titulo() {
    return this.produtoForm.get('titulo');
  }

  get categoriaSelect() {
    return this.produtoForm.get('categoriaSelect');
  }

  get descricao() {
    return this.produtoForm.get('descricao');
  }

  get valorUnitario() {
    return this.produtoForm.get('valorUnitario');
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
    this.produtoForm.valid ? this.abrirDialogoIncluir() : alert("Todos os campos precisam estar preenchidos");
    this.resetForm();
  }

}
