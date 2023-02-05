import Usuario from './Usuario.js';

console.log('m1-s05-e08');

const fieldEmail = document.getElementById('campo-email');
const fieldPass = document.getElementById('campo-senha');
const accessbutton = document.getElementById('acessar');
const message = document.getElementById('mensagem');

const usuarios = [
  new Usuario('Gerson', 'gersonwedman@terra.com.br', '123456'),
  new Usuario('Joao', 'joao@terra.com.br', '1234561'),
];

accessbutton.addEventListener('click', () => {
  const email = fieldEmail.value;
  const senha = fieldPass.value;

  let usuarioEncontrado = null;

  if (email && senha) {
    usuarioEncontrado = usuarios.find((usuario) => {
      return usuario.autenticar(email, senha);
    });
  }

  if (usuarioEncontrado) {
    message.innerHTML = `Olá, ${usuarioEncontrado.nome}! Acesso Válido!`;
    fieldEmail.value = '';
    fieldPass.value = '';
  } else {
    message.innerHTML = 'Credenciais Inválidas!';
  }
});
