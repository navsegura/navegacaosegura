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
    3116: [], // Carangueijo
    2860: [], // Jonas
    2924: [], // Antonio
    2988: [], // Guilherme
    3052: [], // Mayla
    2989: [], // Jamylle
    2925: [], // Digo
    2861: [], // Theo
    2862: [], // Heverton
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
  const coordenadasPersonagem3 = tiposDeObjetos[3116];

  const coordenadasPersonagemJonas = tiposDeObjetos[2860];
  const coordenadasPersonagemAntonio = tiposDeObjetos[2924];
  const coordenadasPersonagemGuilherme = tiposDeObjetos[2988];
  const coordenadasPersonagemMayla = tiposDeObjetos[3052];
  const coordenadasPersonagemJamylle = tiposDeObjetos[2989];
  const coordenadasPersonagemDigo = tiposDeObjetos[2925];
  const coordenadasPersonagemTheo = tiposDeObjetos[2861];
  const coordenadasPersonagemHeverton = tiposDeObjetos[2862];

//////////////////////////////////////////////////////////////////////


////// POSICIONA O SPRITE DE CADA PLAYER NA COORDENADA QUE FOI PEGO ALI EM CIMA //////

  const personagensAdicionais = [];

  function criarPersonagens(coordenadas, imagemSrc, id) {
    const imagemPersonagem = new Image();
    imagemPersonagem.src = imagemSrc; // Define a imagem para todos os personagens que serão criados com essas coordenadas
    coordenadas.forEach(coordenada => {
      const personagem = new Sprite({
        position: { x: coordenada.position.x, y: coordenada.position.y },
        image: imagemPersonagem,
        frames: { max: 4 } // Ajuste conforme necessário
      });

      personagem.id = id; // Cria um ID único para cada personagem

      personagensAdicionais.push(personagem);
    });
  }
  
  const imagensPersonagens = {
    spriteJonas: {
      baixo: "./img/Jonas/playerBaixo.png",
      esquerda: "./img/Jonas/playerEsquerda.png",
      direita: "./img/Jonas/playerDireita.png",
      cima: "./img/Jonas/playerCima.png"
    },

    spriteTheo: {
      baixo: "./img/Theo/playerBaixo.png",
      esquerda: "./img/Theo/playerEsquerda.png",
      direita: "./img/Theo/playerDireita.png",
      cima: "./img/Theo/playerCima.png"
    },

    spriteAntonio: {
      baixo: "./img/Antonio/playerBaixo.png",
      esquerda: "./img/Antonio/playerEsquerda.png",
      direita: "./img/Antonio/playerDireita.png",
      cima: "./img/Antonio/playerCima.png"
    },

    spriteMayla: {
      baixo: "./img/Mayla/playerBaixo.png",
      esquerda: "./img/Mayla/playerEsquerda.png",
      direita: "./img/Mayla/playerDireita.png",
      cima: "./img/Mayla/playerCima.png"
    },

    spriteHeverton: {
      baixo: "./img/Heverton/playerBaixo.png",
      esquerda: "./img/Heverton/playerEsquerda.png",
      direita: "./img/Heverton/playerDireita.png",
      cima: "./img/Heverton/playerCima.png"
    },

    spriteGuilherme: {
      baixo: "./img/Guilherme/playerBaixo.png",
      esquerda: "./img/Guilherme/playerEsquerda.png",
      direita: "./img/Guilherme/playerDireita.png",
      cima: "./img/Guilherme/playerCima.png"
    },

    spriteDigo: {
      baixo: "./img/Digo/playerBaixo.png",
      esquerda: "./img/Digo/playerEsquerda.png",
      direita: "./img/Digo/playerDireita.png",
      cima: "./img/Digo/playerCima.png"
    },

    spriteJamyle: {
      baixo: "./img/Jamyle/playerBaixo.png",
      esquerda: "./img/Jamyle/playerEsquerda.png",
      direita: "./img/Jamyle/playerDireita.png",
      cima: "./img/Jamyle/playerCima.png"
    }
  }

  // Chame a função com suas coordenadas
  criarPersonagens(coordenadasPersonagemJonas, imagensPersonagens.spriteJonas.baixo, "Jonas");
  criarPersonagens(coordenadasPersonagemAntonio, imagensPersonagens.spriteAntonio.baixo, "Antonio");
  criarPersonagens(coordenadasPersonagemGuilherme, imagensPersonagens.spriteGuilherme.baixo, "Guilherme");
  criarPersonagens(coordenadasPersonagemMayla, imagensPersonagens.spriteMayla.baixo, "Mayla");
  criarPersonagens(coordenadasPersonagemJamylle, imagensPersonagens.spriteJamyle.baixo, "Jamyle");
  criarPersonagens(coordenadasPersonagemDigo, imagensPersonagens.spriteDigo.baixo, "Digo");
  criarPersonagens(coordenadasPersonagemTheo, imagensPersonagens.spriteTheo.baixo, "Theo");
  criarPersonagens(coordenadasPersonagemHeverton, imagensPersonagens.spriteHeverton.baixo, "Heverton");


//////////////////////////////////////////////////////////////////////




