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
  },
});

//canvas.width / 2 - imagemPersonagem.width / 4 / 2, // Centraliza o primeiro sprite do personagem no meio com base do comprimento
//canvas.height / 2 - imagemPersonagem.height / 2, // Centraliza o primeiro sprite do personagem no meio com base na altura

//////////////////////////////////////////


////// PEGA AS COORDENADAS DE CADA PERSONAGEM PARA FAZER A BARREIRA //////
const colisoesPersonagem = [];
for (let i = 0; i < cordPersonagem.length; i += 100) {
  colisoesPersonagem.push(cordPersonagem.slice(i, 100 + i));
}

const tiposDeObjetos = {
    1959: [], //Baú
    1958: [], //Bloco Invisivel
    3116: [] // Carangueijo
  };
  
  colisoesPersonagem.forEach((linha, i) => {
    linha.forEach((coluna, j) => {
      if (tiposDeObjetos[coluna]) {
        tiposDeObjetos[coluna].push(
          new Limite({
            position: {
              x: j * Limite.width + offset.x,
              y: i * Limite.height + offset.y,
            },
          })
        );
      }
    });
  });
  
  // Acessa os objetos específicos usando o mapeamento `tiposDeObjetos`
  const coordenadasPersonagem = tiposDeObjetos[1959];
  const coordenadasPersonagem2 = tiposDeObjetos[1958];
  const coordenadasPersonagem3 = tiposDeObjetos[3116];

//////////////////////////////////////////////////////////////////////


////// POSICIONA O SPRITE DE CADA PLAYER NA COORDENADA QUE FOI PEGO ALI EM CIMA //////

  const personagensAdicionais = [];

  function criarPersonagens(coordenadas, imagemSrc) {
    const imagemPersonagem = new Image();
    imagemPersonagem.src = imagemSrc; // Define a imagem para todos os personagens que serão criados com essas coordenadas
    coordenadas.forEach(coordenada => {
      const personagem = new Sprite({
        position: { x: coordenada.position.x, y: coordenada.position.y },
        image: imagemPersonagem,
        frames: { max: 4 } // Ajuste conforme necessário
      });
      personagensAdicionais.push(personagem);
    });
  }
  
  // Chame a função com suas coordenadas
  criarPersonagens(coordenadasPersonagem2, "./img/playerBaixo.png");
  criarPersonagens(coordenadasPersonagem, "./img/playerBaixo.png");


//////////////////////////////////////////////////////////////////////