//classe pai padrão para a criação de classes de grau menor
export default class Animal {
  constructor(nome, idade, som) {
    this.nome = nome;
    this.idade = idade;
    this.som = som;
  }
}
//classe criada para atribuir nome e idade, com som fixado "latido"
export class cachorro extends Animal {
  constructor(nome, idade) {
    super(nome, idade, 'Latido');
  }
}

//classe criada para atribuir nome e idade, com som fixado "Miado"
export class gato extends Animal {
  constructor(nome, idade) {
    super(nome, idade, 'Miado');
  }
}
