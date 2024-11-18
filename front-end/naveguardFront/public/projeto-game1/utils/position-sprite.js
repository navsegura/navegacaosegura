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
  4150: [], //Porco Lado Jonas
  4151: [], // Pato 1
  4152: [], // Pato 2
  4153: [], // Pato 3
  4198: [], // Pato 4
  4197: [], //Olhos
  4199: [], //Olhos 2
  4200: [], // Passaro1
  4201: [], // Passaro2
  4202: [], // Passaro3
  4203: [], // Passaro4
  4204: [], // Passaro5 
  4205: [], // Passaro6
  4207: [], //Ovelha1
  4208: [], //Ovelha2
  4209: [], // Porco1
  4210: [], //Porco2
  4211: [], // Porco3
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



