//criar classe personagem e export default
export default class Personagem {
  //atributos nome e percentualVida
  nome;
  percentualVida;
  //indicar nome no constructor e percentualVida inicia com 100.
  constructor(nome) {
    this.nome = nome;
    this.percentualVida = 100;
    this.corrigirValor();
  }
  sofreuDano(percentualDano) {
    this.percentualVida -= percentualDano;
    this.corrigirValor();
  }
  usouKitMedico() {
    this.percentualVida += 10;
    //soma 10 pts de vida
  }
  //normalizar os valores, caso ultrapassem 100 ou fiquem menores que 0.
  corrigirValor() {
    if (this.percentualVida > 100) {
      this.percentualVida = 100;
      alert('Máximo de vida!');
    }
    if (this.percentualVida < 0) {
      this.percentualVida = 0;
      alert('Faleceu!?!?');
    }
  }
}
