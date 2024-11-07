//ESTOU USANDO O FOR EACH 


const coordenadaFumaca = tiposDeObjetos[2098];
const coordenadaFumaca2 = tiposDeObjetos[2096];
const coordenadaFumaca3 = tiposDeObjetos[2095];
const coordenadaFumaca4 = tiposDeObjetos[2097];

const imagensInterativas = [];

function criarPropsInterativos(coordenadas, imagemSrc) {
  const imagemProps = new Image();
  imagemProps.src = imagemSrc; // Define a imagem para todos os personagens que serão criados com essas coordenadas
  coordenadas.forEach((coordenada) => {
    const prop = new Sprite({
      position: { x: coordenada.position.x, y: coordenada.position.y },
      image: imagemProps,
      frames: { max: 30 },
      velocity:20,
      animate: true // Ajuste conforme necessário
    });

    imagensInterativas.push(prop);
  });
}


criarPropsInterativos(
  coordenadaFumaca,
  imagensPersonagens.Fumaca.imagem1
);


criarPropsInterativos(
    coordenadaFumaca2,
    imagensPersonagens.Fumaca.imagem2
  );

  criarPropsInterativos(
    coordenadaFumaca3,
    imagensPersonagens.Fumaca.imagem3
  );

  criarPropsInterativos(
    coordenadaFumaca4,
    imagensPersonagens.Fumaca.imagem4
  );