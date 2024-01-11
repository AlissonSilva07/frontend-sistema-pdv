export interface Produto {
    idProduto?: number;
    dataCriacao: string;
    nomeProduto: string;
    categoria: string;
    descricao: string;
    valUnitario: number;
    isChecked?: boolean;
}