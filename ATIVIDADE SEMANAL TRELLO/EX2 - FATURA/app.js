import Fatura from './Fatura.js';

const melao = new Fatura(123, 'Melao', 2, 3);
const valor = melao.obterValorTotal;

console.log(melao);
console.log(valor);
