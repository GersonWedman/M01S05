export class CalculadoraDeArea {
  tipo;
  base;
  altura;
  constructor(tipo, base, altura) {
    this.tipo = tipo;
    this.base = base;
    this.altura = altura;
  }
  calcular() {
    if (this.tipo == 'triangulo') {
      return (this.base * this.altura) / 2;
    }
    if (this.tipo == 'quadrado') {
      return this.altura * this.base;
    }
    if (this.tipo == 'retangulo') {
      return this.altura * this.base;
    }
  }
}
