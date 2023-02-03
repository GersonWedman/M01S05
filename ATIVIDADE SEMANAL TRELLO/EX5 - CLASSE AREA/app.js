import { CalculadoraDeArea } from './CalculadoraDeArea.js';
//console.log('Exercicio 5');

const teste2 = new CalculadoraDeArea('triangulo', 6, 8);
console.log(teste2);
const areaQA2 = teste2.calcular();
console.log(areaQA2);

const teste = new CalculadoraDeArea('quadrado', 4, 4);
console.log(teste);
const areaQA = teste.calcular();
console.log(areaQA);

const teste3 = new CalculadoraDeArea('retangulo', 4, 6);
console.log(teste3);
const areaQA3 = teste3.calcular();
console.log(areaQA3);
