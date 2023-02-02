//importar classe
import Personagem from './Personagem.js';
//criar constante de teste
const test = new Personagem('Gerson');
//imprimir no console informações do teste, validação.
test.sofreuDano(30);
test.sofreuDano(30);
test.sofreuDano(30); // valor seria menor que zero...mas é corrigido pela função.
test.usouKitMedico(); //soma 10 a vida
console.log(test);

const alyx = new Personagem('Alyx');
console.log(alyx);
console.log(alyx.percentualVida); //100
alyx.sofreuDano(50);
console.log(alyx.percentualVida); //50
alyx.usouKitMedico();
console.log(alyx.percentualVida);
