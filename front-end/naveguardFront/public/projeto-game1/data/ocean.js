const limiteOceano = []

const oceano = [];
for (let i = 0; i < cordOceano.length; i += 100) {
  oceano.push(cordOceano.slice(i, 100 + i));
}


oceano.forEach((linha, i) => {
    linha.forEach((coluna, j) => {
      if (coluna === 4098)
        limiteOceano.push(
          new Limite({
            position: {
              x: j * Limite.width + offset.x,
              y: i * Limite.height + offset.y,
            },
          })
        );
    });
  });