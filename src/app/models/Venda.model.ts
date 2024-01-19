import { ProdutoCarrinho } from "./ProdutoCarrinho.class";

export interface Venda {
    idVenda?: string;
    dataCriacao: string;
    valorTotal: number;
    troco: number;
    carrinho: ProdutoCarrinho[];
}