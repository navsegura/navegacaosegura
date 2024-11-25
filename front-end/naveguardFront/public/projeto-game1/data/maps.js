const limites = [];

const offset = {
  x: -920,
  y: -150,
};

const colisoesMapa = [];
for (let i = 0; i < colisoes.length; i += 100) {
  colisoesMapa.push(colisoes.slice(i, 100 + i));
}

colisoesMapa.forEach((linha, i) => {
    linha.forEach((coluna, j) => {
      if (coluna === 4097)
        limites.push(
          new Limite({
            position: {
              x: j * Limite.width + offset.x,
              y: i * Limite.height + offset.y,
            },
          })
        );
    });
  });

  const background = new Sprite({
    position: {
      x: offset.x,
      y: offset.y,
    },
    image: image,
  });
  
  const objetoPassavel = new Sprite({
    position: {
      x: offset.x,
      y: offset.y,
    },
    image: imagemObjetoPassaveis,
  });
  