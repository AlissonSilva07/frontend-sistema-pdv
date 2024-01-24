import { ProdutoCarrinho } from "./ProdutoCarrinho.class";

export interface Venda {
    idVenda?: string;
    dataCriacao: string;
    nomeCliente: string;
    telefone: string;
    valorTotal: number;
    troco: number;
    carrinho: ProdutoCarrinho[];
}