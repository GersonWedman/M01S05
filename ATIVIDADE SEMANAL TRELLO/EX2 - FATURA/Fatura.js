// export default class Factura2 {
//   id;
//   descricao;
//   quantia;
//   preco;

//   constructor(id, descricao, quantia, preco) {
//     this.id = id;
//     this.descricao = descricao;
//     this.quantia = quantia;
//     this.preco = preco;
//   }

//   obterValorTotal() {
//     return this.quantia * this.preco;
//   }
//   get ValorTotal() {
//     return this.obterValorTotal();
//   }
// }

export default class Fatura {
  id;
  descricao;
  quantia;
  preco;
  constructor(id, descricao, quantia, preco) {
    this.id = id;
    this.descricao = descricao;
    this.quantia = quantia;
    this.preco = preco;
    //executa o método corrigirValor para o caso de o valor ser menor que 0, zerar o mesmo. E para quantidade, idem.
    this.corrigirValor();
  }
  //corrigirValor = caso quantidade ou preco negativo, ira zerar o mesmo.
  corrigirValor() {
    if (this.quantia < 0) {
      this.quantia = 0;
    }
    if (this.preco < 0) {
      this.preco = 0;
    }
  }
  //método obterValorTotal que retornará o valor da fatura por item.
  get obterValorTotal() {
    return this.quantia * this.preco;
  }
}

//após inserção do get, obterValorTotal estará acessível sem os ();
