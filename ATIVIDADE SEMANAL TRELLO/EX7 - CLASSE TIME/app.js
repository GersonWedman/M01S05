import Time from './Time.js';
import Partida from './Partida.js';

const times = [new Time('Gremio', 'GRE'), new Time('Inter', 'INT')];

const partidas = [new Partida('GRE', 5, 'INT', 1)];

times.forEach((time) => {
  partidas.forEach((partida) => {
    time.computarPartida(partida);
  });
  time.exibirSituacao();
});
