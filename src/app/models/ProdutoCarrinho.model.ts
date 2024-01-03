export class ProdutoCarrinho {
    private idItem: number;
    private codigo: number | undefined;
    private titulo: string;
    private qtd: number;
    private valUnit: number;
    private total: number;

    constructor(idItem: number, codigo: number | undefined, titulo: string, qtd: number, valUnit: number, total: number) {
        this.idItem = idItem;
        this.codigo = codigo;
        this.titulo = titulo;
        this.qtd = qtd;
        this.valUnit = valUnit;
        this.total = total;
    }
}