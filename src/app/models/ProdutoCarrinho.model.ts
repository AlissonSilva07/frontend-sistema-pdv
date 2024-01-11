export class ProdutoCarrinho {
    static count: number = 1;
    private idItem: number;
    private codigo: number | undefined;
    private titulo: string;
    private qtd: number;
    private valUnit: number;
    private total: number;

    constructor(codigo: number | undefined, titulo: string, qtd: number, valUnit: number, total: number) {
        this.idItem = ProdutoCarrinho.count++;
        this.codigo = codigo;
        this.titulo = titulo;
        this.qtd = qtd;
        this.valUnit = valUnit;
        this.total = total;
    }

    public getIdItem(): number {
        return this.idItem;
    }

    public getCodigo(): number | undefined {
        return this.codigo;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getQtd(): number {
        return this.qtd;
    }

    public getVal(): number {
        return this.valUnit;
    }

    public getTotal(): number {
        return this.total;
    }




}