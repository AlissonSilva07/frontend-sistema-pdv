import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { faTrash, faEdit, faTrashCan, faFaceSadTear, faClose, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: []
})
export class ListarProdutosComponent {

  //Ícones usados
  faClose = faClose;
  faFaceSadTear = faFaceSadTear;
  faTrash = faTrash;
  faEdit = faEdit;
  faTrashCan = faTrashCan;
  faCircleExclamation = faCircleExclamation;

  produtos: Produto[] = [];
  listaCategoria: string[] = [];

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

  //Deletar Produtos
  arrayDeletar: number[] = [];

  apagarSelecionados() {
    const selecionados = this.produtos.filter(p => p.isChecked);
    const ids: (undefined | number)[] = selecionados.map(i => i.idProduto);
    
    this.produtoService.deletarProduto(ids)
    .subscribe({
      next: res => {
        window.location.reload();
        this.arrayDeletar = [];
      },
      error: e => console.error(e)
    })
  }

  apagarPorID(): void {
    this.produtoService.deletarProduto(this.arrayDeletar)
    .subscribe({
      next: res => {
        window.location.reload();
        this.arrayDeletar = [];
      },
      error: e => console.error(e)
    })
  }

  //Atualizar Produto
  idAtualizar: number = 0;
  nomeProdutoAtualizar!: string;
  msgErro!: string;

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

  onSubmitAtualizar() {
    if (this.produtoFormAtualizar.valid) {
      this.atualizarPorId();
      this.resetForm();
    } else {
      this.msgErro = 'Preencha todos os campos antes de enviar.';
      setTimeout(() => {
        this.msgErro = '';
      }, 2000);
    }
  }

  //Contagem de selects
  contagemSelect!: number;

  contar() {
    this.contagemSelect = 0;
    this.produtos.forEach(i => {
      i.isChecked == true ? this.contagemSelect++ : this.contagemSelect;
    })
  }

  //Controles de popup
  openPopUpExcluir: boolean = false;

  abrirDialogoExcluir(idExcluir: any) {
    this.openPopUpExcluir = true;
    this.arrayDeletar.push(idExcluir);
  }

  fecharDialogoExcluir() {
    this.openPopUpExcluir = false;
  }

  openPopUpExcluirVarios: boolean = false;

  abrirDialogoExcluirVarios() {
    this.openPopUpExcluirVarios = true;
  }

  fecharDialogoExcluirVarios() {
    this.openPopUpExcluirVarios = false;
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
  
  resetForm() {
    this.produtoFormAtualizar.reset();
  }
}
