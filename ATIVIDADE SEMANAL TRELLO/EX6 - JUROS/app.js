import Juros from './Juros.js';

const test1 = new Juros(10000, 0.07, 24);

console.log(test1.calcularJurosSimples());
console.log(test1.calcularJurosCompostos());

const test2 = new Juros(10000, 0.15, 10);
console.log(test2.calcularJurosSimples());
console.log(test2.calcularJurosCompostos());
