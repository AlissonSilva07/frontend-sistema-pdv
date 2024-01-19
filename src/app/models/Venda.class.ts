import { ProdutoCarrinho } from "./ProdutoCarrinho.class";


export class Venda {
    private idVenda?: string;
    private dataCriacao: string;
    private valorTotal: number;
    private troco: number;
    private carrinho: ProdutoCarrinho[];

    constructor(dataCriacao: string, valorTotal: number, troco: number, carrinho: ProdutoCarrinho[]) {
        this.dataCriacao = dataCriacao;
        this.valorTotal = valorTotal;
        this.troco = troco;
        this.carrinho = carrinho;
    }

    public getIdVenda(): string | undefined {
        return this.idVenda;
    }

    public getDataCriacao(): string {
        return this.dataCriacao;
    }

    public getValorTotal(): number {
        return this.valorTotal;
    }

    public getTroco(): number {
        return this.troco;
    }

    public getCarrinho(): ProdutoCarrinho[] {
        return this.carrinho;
    }
}