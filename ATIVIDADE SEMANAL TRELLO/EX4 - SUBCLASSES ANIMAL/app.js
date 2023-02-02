import Animal from './Animal.js';
import { cachorro } from './Animal.js';
import { gato } from './Animal.js';

//printa Exercício 4 para mostrar que está linkado corretamente.
console.log('Exercício 4');

//criação de instancia de cachorro.
const snoopy = new cachorro('snoopy', 10);
console.log(snoopy.som);
//criação de instancia de gato.
const frajola = new gato('frajola', 8);
//testes para verificar se os valores são condizentes.
console.log(frajola.som);
console.log(snoopy);
console.log(frajola);
