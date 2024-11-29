//ESTOU USANDO O FOR EACH 


const coordenadaFumaca = tiposDeObjetos[2098];
const coordenadaFumaca2 = tiposDeObjetos[2096];
const coordenadaFumaca3 = tiposDeObjetos[2095];
const coordenadaFumaca4 = tiposDeObjetos[2097];
const porcoLadoJonas = tiposDeObjetos[4950];
const pato1 = tiposDeObjetos[4151];
const pato2 = tiposDeObjetos[4152];
const pato3 = tiposDeObjetos[4153];
const pato4 = tiposDeObjetos[4198];
const olhos = tiposDeObjetos[4197];
const olhos2 = tiposDeObjetos[4199];
const passaro1 = tiposDeObjetos[4200];
const passaro2 = tiposDeObjetos[4201];
const passaro3 = tiposDeObjetos[4202];
const passaro4 = tiposDeObjetos[4203];
const passaro5 = tiposDeObjetos[4204];
const passaro6 = tiposDeObjetos[4205];
const ovelha1 = tiposDeObjetos[4207];
const ovelha2 = tiposDeObjetos[4208];
const porco = tiposDeObjetos[4209];
const porco2 = tiposDeObjetos[4210];
const porco3 = tiposDeObjetos[4211];

const imagensInterativas = [];

function criarPropsInterativos(coordenadas, imagemSrc, frames, velocity) {
  const imagemProps = new Image();
  imagemProps.src = imagemSrc; // Define a imagem para todos os personagens que serão criados com essas coordenadas
  coordenadas.forEach((coordenada) => {
    const prop = new Sprite({
      position: { x: coordenada.position.x, y: coordenada.position.y },
      image: imagemProps,
      frames: { max: frames },
      velocity:velocity,
      animate: true // Ajuste conforme necessário
    });

    imagensInterativas.push(prop);
  });
}


criarPropsInterativos(
  coordenadaFumaca,
  imagensPersonagens.Fumaca.imagem1,
  30, // frames
  20 //velocity
);


criarPropsInterativos(
    coordenadaFumaca2,
    imagensPersonagens.Fumaca.imagem2,
    30, // frames
    20 //velocity
  );

  criarPropsInterativos(
    coordenadaFumaca3,
    imagensPersonagens.Fumaca.imagem3,
    30, // frames
    20 //velocity
  );

  criarPropsInterativos(
    coordenadaFumaca4,
    imagensPersonagens.Fumaca.imagem4,
    30, // frames
    20 //velocity
  );

  criarPropsInterativos(
    porcoLadoJonas,
    imagensPersonagens.Animais.vaca,
    4, // frames
    150 // velocity
  );

  criarPropsInterativos(
    pato1,
    imagensPersonagens.Animais.patoEsquerda,
    4, // frames
    150 // velocity
  );

  criarPropsInterativos(
    pato2,
    imagensPersonagens.Animais.patoDireita,
    4, // frames
    150 // velocity
  );

  criarPropsInterativos(
    pato3,
    imagensPersonagens.Animais.patoEsquerda,
    4, // frames
    150 // velocity
  );

  criarPropsInterativos(
    pato4,
    imagensPersonagens.Animais.patoDireita,
    4, // frames
    150 // velocity
  );

  criarPropsInterativos(
    olhos,
    imagensPersonagens.Animais.olhos,
    12, // frames
    20 // velocity
  );

  criarPropsInterativos(
    olhos2,
    imagensPersonagens.Animais.olhos,
    12, // frames
    30 // velocity
  );

  criarPropsInterativos(
    passaro1,
    imagensPersonagens.Animais.passaroEsquerda,
    4, // frames
    141 // velocity
  );

  criarPropsInterativos(
    passaro2,
    imagensPersonagens.Animais.passaroEsquerda,
    4, // frames
    127 // velocity
  );

  criarPropsInterativos(
    passaro3,
    imagensPersonagens.Animais.passaroDireita,
    4, // frames
    132 // velocity
  );

  criarPropsInterativos(
    passaro4,
    imagensPersonagens.Animais.passaroEsquerda,
    4, // frames
    124 // velocity
  );

  criarPropsInterativos(
    passaro5,
    imagensPersonagens.Animais.passaroDireita,
    4, // frames
    142 // velocity
  );

  criarPropsInterativos(
    passaro6,
    imagensPersonagens.Animais.passaroEsquerda,
    4, // frames
    134 // velocity
  );

  criarPropsInterativos(
    ovelha1,
    imagensPersonagens.Animais.ovelhaEsquerda,
    4, // frames
    145 // velocity
  );

  criarPropsInterativos(
    ovelha2,
    imagensPersonagens.Animais.ovelhaDireita,
    4, // frames
    150 // velocity
  );

  criarPropsInterativos(
    porco,
    imagensPersonagens.Animais.porcoEsquerda,
    4, // frames
    110 // velocity
  );

  criarPropsInterativos(
    porco2,
    imagensPersonagens.Animais.porcoDireita,
    4, // frames
    120 // velocity
  );

  criarPropsInterativos(
    porco3,
    imagensPersonagens.Animais.porcoEsquerda,
    4, // frames
    140 // velocity
  );