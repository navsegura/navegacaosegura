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
  2989: [], // Jamyle
  2925: [], // Digo
  2861: [], // Theo
  2862: [], // Heverton
  3110: [], //Nivea
  3046: [], //Luis-Filho-Nivea
  2098: [], // Fumaça Casa-Laranja
  2096: [], // Fumaça Casa-Roxa
  2095: [], // Fumaça Casa-Vermelha
  2097: [], // Fumaça Casa-Verde
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



