import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { faTrash, faEdit, faTrashCan, faFaceSadTear, faClose } from '@fortawesome/free-solid-svg-icons';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: []
})
export class ListarProdutosComponent {

  produtos?: Produto[];
  listaCategoria?: string[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.listarProdutos();
    this.todasCategorias();
  }

  //Lista de Produtos
  listarProdutos(): void {
    this.produtoService.todosProdutos()
    .subscribe({
      next: data => {
        this.produtos = data;
      },
      error: e => console.log(e)
    });
  }

  //Lista de Categorias
  todasCategorias(): void {
    this.produtoService.todasCategorias()
    .subscribe({
      next: data => {
        this.listaCategoria = data;
      },
      error: e => console.log(e)
    })
  }

  //Deletar Produto
  idDeletar: number = 0;

  apagarPorID(): void {
    this.produtoService.deletarProduto(this.idDeletar)
    .subscribe({
      next: res => {
        console.log("O produto de id " + this.idDeletar + "foi apagado.");
        window.location.reload();
      },
      error: e => console.error(e)
    })
  }

  //Atualizar Produto
  idAtualizar: number = 0;
  nomeProdutoAtualizar!: string;

  atualizarPorId(): void {
    var dataAtualizar = this.produtoFormAtualizar.value;
    this.produtoService.atualizarProduto(this.idAtualizar, dataAtualizar)
    .subscribe({
      next: res => {
        console.log(res);
        window.location.reload();
      },
      error: e => console.log(e)
    })
  }

  //Ícones usados
  faClose = faClose;
  faFaceSadTear = faFaceSadTear;
  faTrash = faTrash;
  faEdit = faEdit;
  faTrashCan = faTrashCan;

  //Controles de popup
  openPopUpExcluir: boolean = false;

  abrirDialogoExcluir(idExcluir: any) {
    this.openPopUpExcluir = true;
    this.idDeletar = idExcluir;
  }

  fecharDialogoExcluir() {
    this.openPopUpExcluir = false;
  }

  openPopUpEditar: boolean = false;

  abrirDialogoEditar(idEditar: any, nomeEditar: any) {
    this.openPopUpEditar = true;
    this.idAtualizar = idEditar;
    this.nomeProdutoAtualizar = nomeEditar;
  }

  fecharDialogoEditar() {
    this.openPopUpEditar = false;
  }

  //Dados de formulario
  produtoFormAtualizar = new FormGroup({
    nomeProduto: new FormControl('', [Validators.required, Validators.minLength(6)]),
    categoria: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.maxLength(100)),
    valUnitario: new FormControl('', [Validators.required, Validators.min(0.01)])
  })

  get nomeProduto() {
    return this.produtoFormAtualizar.get('nomeProduto');
  }

  get categoria() {
    return this.produtoFormAtualizar.get('categoria');
  }

  get descricao() {
    return this.produtoFormAtualizar.get('descricao');
  }

  get valUnitario() {
    return this.produtoFormAtualizar.get('valUnitario');
  }
}
