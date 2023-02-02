import Funcionario from './Funcionario.js';

//criação instancia funcionário (ada)
const ada = new Funcionario('023.266.940-66', 'Ada Lovelace', 1000);
//confirmar salário inicial armazenado
console.log(ada.salario); //1000
//promover (dar aumento de salário) ao funcionário
ada.promover(50);
//verificar se o aumento foi aplicado corretamente
console.log(ada.salario); //1500
//verificar se armazenou nome completo
console.log(ada.nomeCompleto);
//imprimir o cpf armazenado
console.log(ada.cpf);

// FUNÇÃO QUE REALIZA VALIDAÇÃO DE CPF
function _cpf(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf == '') return false;
  if (
    cpf.length != 11 ||
    cpf == '00000000000' ||
    cpf == '11111111111' ||
    cpf == '22222222222' ||
    cpf == '33333333333' ||
    cpf == '44444444444' ||
    cpf == '55555555555' ||
    cpf == '66666666666' ||
    cpf == '77777777777' ||
    cpf == '88888888888' ||
    cpf == '99999999999'
  )
    return false;
  var add = 0;
  for (var i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
  var rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cpf.charAt(9))) return false;
  add = 0;
  for (i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cpf.charAt(10))) return false;
  return true;
}

function validarCPF(valor) {
  if (!_cpf(valor)) {
    alert('CPF Inválido');
    console.log('CPF Inválido');
    //apaga o valor
    valor.value = '';
  } else {
    alert('CPF Válido');
    console.log('CPF Válido');
  }
}
//realizar a validação do cpf - função que retorna o alert chamará a função que faz a validação matemática.
validarCPF(ada.cpf);
//validar se cpf ainda está armazenado corretamente
console.log(ada.cpf);
//EX1 - concluído-------------------------------------------------------
