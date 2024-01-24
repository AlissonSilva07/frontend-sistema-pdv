import { ProdutoCarrinho } from "./ProdutoCarrinho.class";


export class Venda {
    private idVenda?: string;
    private dataCriacao!: string;
    private nomeCliente: string;
    private telefone: string;
    private valorTotal: number;
    private troco: number;
    private carrinho: ProdutoCarrinho[];

    constructor(nomeCliente: string, telefone: string, valorTotal: number, troco: number, carrinho: ProdutoCarrinho[]) {
        this.nomeCliente = nomeCliente;
        this.telefone = telefone;
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

    public getNomeCliente(): string {
        return this.nomeCliente;
    }

    public getTelefone(): string {
        return this.telefone;
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