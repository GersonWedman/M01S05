console.log('aula1');

const vetor = [2, 3, 4, 6, 7];

if (Array.isArray(vetor)) {
  console.log('É vetor!');
} else {
  console.log('Não é vetor!');
}

vetor.forEach((n) => console.log(n));

console.log(vetor.filter((n) => n % 2 === 0));

function apertou() {
  console.log('Apertou o botão!');
}
//----------------------------------------
class Retangulo {
  #base;
  #altura;
  constructor(b, a) {
    this.base = b;
    this.altura = a;
  }
  calcularArea() {
    const area = this.base * this.altura;
    console.log(area);
  }

  base() {
    console.log(base);
  }
}

const r1 = new Retangulo(4, 6);
console.log(r1.base);
r1.calcularArea();
