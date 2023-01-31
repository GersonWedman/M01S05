const btnAperta = document.getElementById('aperta');

class Funcionario {
  constructor(cpf, nome, salario) {
    this.cpf = cpf;
    this.nome = nome;
    this.salario = salario;
  }
  promover(porcentagem) {
    this.salario = this.salario * (porcentagem / 100 + 1);
  }
}

const ada = new Funcionario('99999999999', 'Ada Lovelace', 1000);

console.log(ada.salario); //1000

ada.promover(50);

console.log(ada.salario); //1500

function apertou() {
  console.log('Apertou o botão!');
}

btnAperta.onclick = apertou;
