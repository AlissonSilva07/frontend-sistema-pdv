import { Produto } from "./Produto.model";

export interface Venda {
    idVenda: string,
    nomeCliente: string,
    valorTotal: number,
    carrinho: Produto[]
}