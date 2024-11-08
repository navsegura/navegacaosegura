// const limites = []; //ESSAS VARIAVEIS ESTÃO SENDO USADAS TANTO NO PERSONAGENS.JS TANTO NO MAPS.JS

// const offset = {
//   x: -920,
//   y: -150,
// };

////// DESENHA O PERSONAGEM PRINCIPAL //////
const player = new Sprite({
  position: {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - 68 / 2,
  },
  image: imagemPersonagemBaixo,
  frames: {
    max: 4,
  },
  sprites: {
    up: imagemPersonagemCima,
    left: imagemPersonagemEsquerda,
    right: imagemPersonagemDireita,
    down: imagemPersonagemBaixo,
    boatRight: imagemPersonagemBarcoDireita,
    boatLeft: imagemPersonagemBarcoEsquerda,
    boatUp: imagemPersonagemBarcoCima,
    boatDown: imagemPersonagemBarcoBaixo,
  },
  velocity:20
});

//canvas.width / 2 - imagemPersonagem.width / 4 / 2, // Centraliza o primeiro sprite do personagem no meio com base do comprimento
//canvas.height / 2 - imagemPersonagem.height / 2, // Centraliza o primeiro sprite do personagem no meio com base na altura

// Acessa os objetos específicos usando o mapeamento `tiposDeObjetos`
const coordenadasPersonagem3 = tiposDeObjetos[3116];

const coordenadasPersonagemJonas = tiposDeObjetos[2860];
const coordenadasPersonagemAntonio = tiposDeObjetos[2924];
const coordenadasPersonagemGuilherme = tiposDeObjetos[2988];
const coordenadasPersonagemMayla = tiposDeObjetos[3052];
const coordenadasPersonagemJamylle = tiposDeObjetos[2989];
const coordenadasPersonagemDigo = tiposDeObjetos[2925];
const coordenadasPersonagemTheo = tiposDeObjetos[2861];
const coordenadasPersonagemHeverton = tiposDeObjetos[2862];
const coordenadasPersonagemNivea = tiposDeObjetos[3110];
const coordenadasPersonagemLuisFilho = tiposDeObjetos[3046];


////// POSICIONA O SPRITE DE CADA PLAYER NA COORDENADA QUE FOI PEGO ALI EM CIMA //////

const personagensAdicionais = [];

function criarPersonagens(coordenadas, imagemSrc, id) {
  const imagemPersonagem = new Image();
  imagemPersonagem.src = imagemSrc; // Define a imagem para todos os personagens que serão criados com essas coordenadas
  coordenadas.forEach((coordenada) => {
    const personagem = new Sprite({
      position: { x: coordenada.position.x, y: coordenada.position.y },
      image: imagemPersonagem,
      frames: { max: 4 }, // Ajuste conforme necessário
    });

    personagem.id = id; // Cria um ID único para cada personagem

    personagensAdicionais.push(personagem);
  });
}


// Chame a função com suas coordenadas
criarPersonagens(
  coordenadasPersonagemJonas,
  imagensPersonagens.spriteJonas.baixo,
  "Jonas"
);
criarPersonagens(
  coordenadasPersonagemAntonio,
  imagensPersonagens.spriteAntonio.baixo,
  "Antonio"
);
criarPersonagens(
  coordenadasPersonagemGuilherme,
  imagensPersonagens.spriteGuilherme.baixo,
  "Guilherme"
);
criarPersonagens(
  coordenadasPersonagemMayla,
  imagensPersonagens.spriteMayla.baixo,
  "Mayla"
);
criarPersonagens(
  coordenadasPersonagemJamylle,
  imagensPersonagens.spriteJamyle.baixo,
  "Jamyle"
);
criarPersonagens(
  coordenadasPersonagemDigo,
  imagensPersonagens.spriteDigo.baixo,
  "Digo"
);
criarPersonagens(
  coordenadasPersonagemTheo,
  imagensPersonagens.spriteTheo.baixo,
  "Theo"
);
criarPersonagens(
  coordenadasPersonagemHeverton,
  imagensPersonagens.spriteHeverton.baixo,
  "Heverton"
);
criarPersonagens(
  coordenadasPersonagemNivea,
  imagensPersonagens.spriteNivea.baixo,
  "Nivea"
);
criarPersonagens(
  coordenadasPersonagemLuisFilho,
  imagensPersonagens.spriteLuis.baixo,
  "LuisFilho"
);

