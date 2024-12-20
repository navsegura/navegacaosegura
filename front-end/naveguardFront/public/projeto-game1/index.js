const video = document.getElementById("video-tutorial");


pularVideo.addEventListener("click", () => {
  tutorial.style.display = "none";
  video.pause();
});

video.addEventListener("ended", () => {
  tutorial.style.display = "none"; // Oculta o vídeo
});

function checkOrientation() {
  if (window.innerWidth < window.innerHeight) {

    document.getElementById("container-main").style.display = "none";
    document.getElementById("gif-celular").style.display = "flex";
    

  } else {
    document.getElementById("gif-celular").style.display = "none";
    document.getElementById("container-main").style.display = "flex";
  }
}

window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);

checkOrientation();


const moveis = [
  background,
  ...limites,
  ...limiteOceano,
  objetoPassavel,
  ...personagensAdicionais,
  ...coordenadasPersonagem3,
  ...coordenadasPersonagemJonas,
  ...coordenadasPersonagemAntonio,
  ...coordenadasPersonagemGuilherme,
  ...coordenadasPersonagemMayla,
  ...coordenadasPersonagemJamylle,
  ...coordenadasPersonagemDigo,
  ...coordenadasPersonagemTheo,
  ...coordenadasPersonagemHeverton,
  ...coordenadasPersonagemLuisFilho,
  ...coordenadasPersonagemNivea,
  ...imagensInterativas,
  ...porcoLadoJonas,
]; //Ver oque esse ... faz

let podeInteragir = false;
let alertaExibido = false;
let movimentoTravado = false; // Variável para controlar o movimento
let colidindoComAlgum = false;


botaoProximo.addEventListener("click", () => {
  // Oculta a mensagem e destrava o movimento
  mensagemInteracao.style.display = "none";
  movimentoTravado = false;
  alertaExibido = false; // Reseta o estado do alerta
  somGuardado.stop();
  animate();
});

function animate() {
  if (movimentoTravado) return; // Se o movimento está travado, não atualiza a animação
  const checker = new ColisionChecker(player, limites);
  window.requestAnimationFrame(animate);
  background.draw();

  limites.forEach((limite) => {
    limite.draw();
  });

  limiteOceano.forEach((limite) => {
    limite.draw();
  });
  

  coordenadasPersonagem3.forEach((limite) => {
    limite.draw();
  });

  porcoLadoJonas.forEach((limite) => {
    limite.draw();
  });
  

  coordenadasPersonagemJonas.forEach((limite) => {
    limite.draw();
  });

  coordenadasPersonagemAntonio.forEach((limite) => {
    limite.draw();
  });

  coordenadasPersonagemGuilherme.forEach((limite) => {
    limite.draw();
  });

  coordenadasPersonagemMayla.forEach((limite) => {
    limite.draw();
  });

  coordenadasPersonagemJamylle.forEach((limite) => {
    limite.draw();
  });

  coordenadasPersonagemDigo.forEach((limite) => {
    limite.draw();
  });

  coordenadasPersonagemTheo.forEach((limite) => {
    limite.draw();
  });

  coordenadasPersonagemHeverton.forEach((limite) => {
    limite.draw();
  });

  coordenadasPersonagemNivea.forEach((limite) => {
    limite.draw();
  });

  coordenadasPersonagemLuisFilho.forEach((limite) => {
    limite.draw();
  });

  personagensAdicionais.forEach((personagem) => {
    personagem.draw();
  });


  player.draw();
  objetoPassavel.draw();
  imagensInterativas.forEach((personagem) => {
    personagem.draw();
  });
  let movimentoPersonagem = true;
  player.animate = false;
  if (keys.w.pressed) {
    player.animate = true;
    player.image = player.sprites.up;

    const movimento = checker.testarColisoes(0, 3);

    for (let i = 0; i < limiteOceano.length; i++) {
      const limite = limiteOceano[i];
      if (
        colisoesRetangulos({
          retangulo1: player,
          retangulo2: {
            ...limite,
            position: {
              x: limite.position.x - 3,
              y: limite.position.y,
            },
          },
        })
      ) {
        player.image = player.sprites.boatUp;
      }
    }


    ///////////////////////////////////////////////////////////////////////////////
    function verificarColisao(
      player,
      coordenadas,
      tipo,
      som,
      imagemInteracao,
      id
    ) {
      let colisaoDetectada = false;
      for (let i = 0; i < coordenadas.length; i++) {
        const limite = coordenadas[i];
        if (
          colisoesRetangulos({
            retangulo1: player,
            retangulo2: {
              ...limite,
              position: { x: limite.position.x, y: limite.position.y + 3 },
            },
          })
        ) {
          movimentoPersonagem = false; // Bloqueia o movimento do personagem
          podeInteragir = true; // Permite interação
          colisaoDetectada = true; // Marca que está colidindo

          // Define a mensagem de interação
          const spanMensagem = document.querySelector(
            "#mensagemInteracao span"
          );
          spanMensagem.innerText = mensagensInteracao[tipo];
          somGuardado = som;

          const nomePersonagem = document.querySelector(
            "#mensagemInteracao p"
          );
          
          nomePersonagem.innerText = id

          // Encontra o personagem pelo id e atualiza a imagem de interação
          const personagem = personagensAdicionais.find((p) => p.id === id);
          if (personagem) {
            personagem.image.src = imagemInteracao; // Altera a imagem para a de interação
          }

          return true; // Indica que houve uma colisão
        }
      }

      return false; // Indica que não houve colisão
    }

    const colidiuComPersonagem3 = verificarColisao(
      player,
      coordenadasPersonagem3,
      3116,
      sons.som3
    );

    const colidiuComPersonagemJonas = verificarColisao(
      player,
      coordenadasPersonagemJonas,
      2860,
      sons.somJonas,
      imagensPersonagens.spriteJonas.baixo,
      "Jonas"
    );
    const colidiuComPersonagemAntonio = verificarColisao(
      player,
      coordenadasPersonagemAntonio,
      2924,
      sons.somAntonio,
      imagensPersonagens.spriteAntonio.baixo,
      "Antonio"
    );
    const colidiuComPersonagemGuilherme = verificarColisao(
      player,
      coordenadasPersonagemGuilherme,
      2988,
      sons.somGuilherme,
      imagensPersonagens.spriteGuilherme.baixo,
      "Guilherme"
    );
    const colidiuComPersonagemMayla = verificarColisao(
      player,
      coordenadasPersonagemMayla,
      3052,
      sons.somMayla,
      imagensPersonagens.spriteMayla.baixo,
      "Mayla"
    );
    const colidiuComPersonagemJamyle = verificarColisao(
      player,
      coordenadasPersonagemJamylle,
      2989,
      sons.somMyle,
      imagensPersonagens.spriteJamyle.baixo,
      "Jamyle"
    );
    const colidiuComPersonagemDigo = verificarColisao(
      player,
      coordenadasPersonagemDigo,
      2925,
      sons.somMenino,
      imagensPersonagens.spriteDigo.baixo,
      "Digo"
    );
    const colidiuComPersonagemTheo = verificarColisao(
      player,
      coordenadasPersonagemTheo,
      2861,
      sons.somTheo,
      imagensPersonagens.spriteTheo.baixo,
      "Theo"
    );
    const colidiuComPersonagemHeverton = verificarColisao(
      player,
      coordenadasPersonagemHeverton,
      2862,
      sons.somHeverton,
      imagensPersonagens.spriteHeverton.baixo,
      "Heverton"
    );
    const colidiuComPersonagemNivea = verificarColisao(
      player,
      coordenadasPersonagemNivea,
      3110,
      sons.somNivea,
      imagensPersonagens.spriteNivea.baixo,
      "Nivea"
    );
    const colidiuComPersonagemLuisFilho = verificarColisao(
      player,
      coordenadasPersonagemLuisFilho,
      3046,
      sons.somLuis,
      imagensPersonagens.spriteLuis.baixo,
      "Luis"
    );
    


    // Se não houve colisão
    if (
      !colidiuComPersonagem3 &&
      !colidiuComPersonagemJonas &&
      !colidiuComPersonagemAntonio &&
      !colidiuComPersonagemGuilherme &&
      !colidiuComPersonagemMayla &&
      !colidiuComPersonagemJamyle &&
      !colidiuComPersonagemDigo &&
      !colidiuComPersonagemTheo &&
      !colidiuComPersonagemHeverton &&
      !colidiuComPersonagemNivea &&
      !colidiuComPersonagemLuisFilho
    ) {
      podeInteragir = false; // Se não está colidindo, não pode interagir
      alertaExibido = false; // Reseta a variável de alerta
    }
    ///////////////////////////////////////////////////////////////////////////////
    setInterval(() => {
      if (!podeInteragir) {
        alertaExibido = false;
      }
    }, 100); // Verifica a cada 100 ms

    if (movimento && movimentoPersonagem)
      moveis.forEach((movel) => {
        movel.position.y += 3;
      });
  } else if (keys.a.pressed) {
    player.animate = true;
    player.image = player.sprites.left;


    const movimento = checker.testarColisoes(3, 0);

    for (let i = 0; i < limiteOceano.length; i++) {
      const limite = limiteOceano[i];
      if (
        colisoesRetangulos({
          retangulo1: player,
          retangulo2: {
            ...limite,
            position: {
              x: limite.position.x - 3,
              y: limite.position.y,
            },
          },
        })
      ) {
        player.image = player.sprites.boatLeft;
      }
    }


    ///////////////////////////////////////////////////////////////////////////////
    function verificarColisao(
      player,
      coordenadas,
      tipo,
      som,
      imagemInteracao,
      id
    ) {
      let colisaoDetectada = false;
      for (let i = 0; i < coordenadas.length; i++) {
        const limite = coordenadas[i];
        if (
          colisoesRetangulos({
            retangulo1: player,
            retangulo2: {
              ...limite,
              position: { x: limite.position.x + 3, y: limite.position.y },
            },
          })
        ) {
          movimentoPersonagem = false; // Bloqueia o movimento do personagem
          podeInteragir = true; // Permite interação
          colisaoDetectada = true; // Marca que está colidindo

          // Define a mensagem de interação
          const spanMensagem = document.querySelector(
            "#mensagemInteracao span"
          );

          spanMensagem.innerText = mensagensInteracao[tipo];
          somGuardado = som;

          const nomePersonagem = document.querySelector(
            "#mensagemInteracao p"
          );
          
          nomePersonagem.innerText = id

          // Encontra o personagem pelo id e atualiza a imagem de interação
          const personagem = personagensAdicionais.find((p) => p.id === id);
          if (personagem) {
            personagem.image.src = imagemInteracao; // Altera a imagem para a de interação
          }

          return true; // Indica que houve uma colisão
        }
      }

      return false; // Indica que não houve colisão
    }

    const colidiuComPersonagem3 = verificarColisao(
      player,
      coordenadasPersonagem3,
      3116,
      sons.som3
    );

    const colidiuComPersonagemJonas = verificarColisao(
      player,
      coordenadasPersonagemJonas,
      2860,
      sons.somJonas,
      imagensPersonagens.spriteJonas.direita,
      "Jonas"
    );
    const colidiuComPersonagemAntonio = verificarColisao(
      player,
      coordenadasPersonagemAntonio,
      2924,
      sons.somAntonio,
      imagensPersonagens.spriteAntonio.direita,
      "Antonio"
    );
    const colidiuComPersonagemGuilherme = verificarColisao(
      player,
      coordenadasPersonagemGuilherme,
      2988,
      sons.somGuilherme,
      imagensPersonagens.spriteGuilherme.direita,
      "Guilherme"
    );
    const colidiuComPersonagemMayla = verificarColisao(
      player,
      coordenadasPersonagemMayla,
      3052,
      sons.somMayla,
      imagensPersonagens.spriteMayla.direita,
      "Mayla"
    );
    const colidiuComPersonagemJamyle = verificarColisao(
      player,
      coordenadasPersonagemJamylle,
      2989,
      sons.somMyle,
      imagensPersonagens.spriteJamyle.direita,
      "Jamyle"
    );
    const colidiuComPersonagemDigo = verificarColisao(
      player,
      coordenadasPersonagemDigo,
      2925,
      sons.somMenino,
      imagensPersonagens.spriteDigo.direita,
      "Digo"
    );
    const colidiuComPersonagemTheo = verificarColisao(
      player,
      coordenadasPersonagemTheo,
      2861,
      sons.somTheo,
      imagensPersonagens.spriteTheo.direita,
      "Theo"
    );
    const colidiuComPersonagemHeverton = verificarColisao(
      player,
      coordenadasPersonagemHeverton,
      2862,
      sons.somHeverton,
      imagensPersonagens.spriteHeverton.direita,
      "Heverton"
    );
    const colidiuComPersonagemNivea = verificarColisao(
      player,
      coordenadasPersonagemNivea,
      3110,
      sons.somNivea,
      imagensPersonagens.spriteNivea.direita,
      "Nivea"
    );
    const colidiuComPersonagemLuisFilho = verificarColisao(
      player,
      coordenadasPersonagemLuisFilho,
      3046,
      sons.somLuis,
      imagensPersonagens.spriteLuis.direita,
      "Luis"
    );

    // Se não houve colisão
    if (
      !colidiuComPersonagem3 &&
      !colidiuComPersonagemJonas &&
      !colidiuComPersonagemAntonio &&
      !colidiuComPersonagemGuilherme &&
      !colidiuComPersonagemMayla &&
      !colidiuComPersonagemJamyle &&
      !colidiuComPersonagemDigo &&
      !colidiuComPersonagemTheo &&
      !colidiuComPersonagemHeverton &&
      !colidiuComPersonagemNivea &&
      !colidiuComPersonagemLuisFilho
    ) {
      podeInteragir = false; // Se não está colidindo, não pode interagir
      alertaExibido = false; // Reseta a variável de alerta
    }
    ///////////////////////////////////////////////////////////////////////////////
    setInterval(() => {
      if (!podeInteragir) {
        alertaExibido = false;
      }
    }, 100); // Verifica a cada 100 ms

    if (movimento && movimentoPersonagem)
      moveis.forEach((movel) => {
        movel.position.x += 3;
      });
  } else if (keys.s.pressed) {
    player.animate = true;
    player.image = player.sprites.down;
   
    const movimento = checker.testarColisoes(0, -3);

    for (let i = 0; i < limiteOceano.length; i++) {
      const limite = limiteOceano[i];
      if (
        colisoesRetangulos({
          retangulo1: player,
          retangulo2: {
            ...limite,
            position: {
              x: limite.position.x - 3,
              y: limite.position.y,
            },
          },
        })
      ) {
        player.image = player.sprites.boatDown;
      }
    }


    ///////////////////////////////////////////////////////////////////////////////
    function verificarColisao(
      player,
      coordenadas,
      tipo,
      som,
      imagemInteracao,
      id
    ) {
      let colisaoDetectada = false;
      for (let i = 0; i < coordenadas.length; i++) {
        const limite = coordenadas[i];
        if (
          colisoesRetangulos({
            retangulo1: player,
            retangulo2: {
              ...limite,
              position: { x: limite.position.x, y: limite.position.y - 3 },
            },
          })
        ) {
          movimentoPersonagem = false; // Bloqueia o movimento do personagem
          podeInteragir = true; // Permite interação
          colisaoDetectada = true; // Marca que está colidindo

          // Define a mensagem de interação
          const spanMensagem = document.querySelector(
            "#mensagemInteracao span"
          );
          spanMensagem.innerText = mensagensInteracao[tipo];
          somGuardado = som;

          const nomePersonagem = document.querySelector(
            "#mensagemInteracao p"
          );
          
          nomePersonagem.innerText = id

          // Encontra o personagem pelo id e atualiza a imagem de interação
          const personagem = personagensAdicionais.find((p) => p.id === id);
          if (personagem) {
            personagem.image.src = imagemInteracao; // Altera a imagem para a de interação
          }

          return true; // Indica que houve uma colisão
        }
      }

      return false; // Indica que não houve colisão
    }

    const colidiuComPersonagem3 = verificarColisao(
      player,
      coordenadasPersonagem3,
      3116,
      sons.som3
    );

    const colidiuComPersonagemJonas = verificarColisao(
      player,
      coordenadasPersonagemJonas,
      2860,
      sons.somJonas,
      imagensPersonagens.spriteJonas.cima,
      "Jonas"
    );
    const colidiuComPersonagemAntonio = verificarColisao(
      player,
      coordenadasPersonagemAntonio,
      2924,
      sons.somAntonio,
      imagensPersonagens.spriteAntonio.cima,
      "Antonio"
    );
    const colidiuComPersonagemGuilherme = verificarColisao(
      player,
      coordenadasPersonagemGuilherme,
      2988,
      sons.somGuilherme,
      imagensPersonagens.spriteGuilherme.cima,
      "Guilherme"
    );
    const colidiuComPersonagemMayla = verificarColisao(
      player,
      coordenadasPersonagemMayla,
      3052,
      sons.somMayla,
      imagensPersonagens.spriteMayla.cima,
      "Mayla"
    );
    const colidiuComPersonagemJamyle = verificarColisao(
      player,
      coordenadasPersonagemJamylle,
      2989,
      sons.somMyle,
      imagensPersonagens.spriteJamyle.cima,
      "Jamyle"
    );
    const colidiuComPersonagemDigo = verificarColisao(
      player,
      coordenadasPersonagemDigo,
      2925,
      sons.som3,
      imagensPersonagens.spriteDigo.cima,
      "Digo"
    );
    const colidiuComPersonagemTheo = verificarColisao(
      player,
      coordenadasPersonagemTheo,
      2861,
      sons.somTheo,
      imagensPersonagens.spriteTheo.cima,
      "Theo"
    );
    const colidiuComPersonagemHeverton = verificarColisao(
      player,
      coordenadasPersonagemHeverton,
      2862,
      sons.somHeverton,
      imagensPersonagens.spriteHeverton.cima,
      "Heverton"
    );
    const colidiuComPersonagemNivea = verificarColisao(
      player,
      coordenadasPersonagemNivea,
      3110,
      sons.somNivea,
      imagensPersonagens.spriteNivea.cima,
      "Nivea"
    );
    const colidiuComPersonagemLuisFilho = verificarColisao(
      player,
      coordenadasPersonagemLuisFilho,
      3046,
      sons.somLuis,
      imagensPersonagens.spriteLuis.cima,
      "Luis"
    );

    // Se não houve colisão
    if (
      !colidiuComPersonagem3 &&
      !colidiuComPersonagemJonas &&
      !colidiuComPersonagemAntonio &&
      !colidiuComPersonagemGuilherme &&
      !colidiuComPersonagemMayla &&
      !colidiuComPersonagemJamyle &&
      !colidiuComPersonagemDigo &&
      !colidiuComPersonagemTheo &&
      !colidiuComPersonagemHeverton &&
      !colidiuComPersonagemNivea &&
      !colidiuComPersonagemLuisFilho
    ) {
      podeInteragir = false; // Se não está colidindo, não pode interagir
      alertaExibido = false; // Reseta a variável de alerta
    }
    ///////////////////////////////////////////////////////////////////////////////
    setInterval(() => {
      if (!podeInteragir) {
        alertaExibido = false;
      }
    }, 100); // Verifica a cada 100 ms

    if (movimento && movimentoPersonagem)
      moveis.forEach((movel) => {
        movel.position.y -= 3;
      });
  } else if (keys.d.pressed) {
    player.animate = true;
    player.image = player.sprites.right;

    for (let i = 0; i < limiteOceano.length; i++) {
      const limite = limiteOceano[i];
      if (
        colisoesRetangulos({
          retangulo1: player,
          retangulo2: {
            ...limite,
            position: {
              x: limite.position.x - 3,
              y: limite.position.y,
            },
          },
        })
      ) {
        player.image = player.sprites.boatRight;
      }
    }


    const movimento = checker.testarColisoes(-3 , 0);

    ///////////////////////////////////////////////////////////////////////////////
    function verificarColisao(
      player,
      coordenadas,
      tipo,
      som,
      imagemInteracao,
      id
    ) {
      let colisaoDetectada = false;
      for (let i = 0; i < coordenadas.length; i++) {
        const limite = coordenadas[i];
        if (
          colisoesRetangulos({
            retangulo1: player,
            retangulo2: {
              ...limite,
              position: { x: limite.position.x - 3, y: limite.position.y },
            },
          })
        ) {
          movimentoPersonagem = false; // Bloqueia o movimento do personagem
          podeInteragir = true; // Permite interação
          colisaoDetectada = true; // Marca que está colidindo

          // Define a mensagem de interação
          const spanMensagem = document.querySelector(
            "#mensagemInteracao span"
          );
          spanMensagem.innerText = mensagensInteracao[tipo];
          somGuardado = som;

          const nomePersonagem = document.querySelector(
            "#mensagemInteracao p"
          );
          
          nomePersonagem.innerText = id

          // Encontra o personagem pelo id e atualiza a imagem de interação
          const personagem = personagensAdicionais.find((p) => p.id === id);
          if (personagem) {
            personagem.image.src = imagemInteracao; // Altera a imagem para a de interação
          }

          return true; // Indica que houve uma colisão
        }
      }

      return false; // Indica que não houve colisão
    }

    const colidiuComPersonagem3 = verificarColisao(
      player,
      coordenadasPersonagem3,
      3116,
      sons.som3
    );

    const colidiuComPersonagemJonas = verificarColisao(
      player,
      coordenadasPersonagemJonas,
      2860,
      sons.somJonas,
      imagensPersonagens.spriteJonas.esquerda,
      "Jonas"
    );
    const colidiuComPersonagemAntonio = verificarColisao(
      player,
      coordenadasPersonagemAntonio,
      2924,
      sons.somAntonio,
      imagensPersonagens.spriteAntonio.esquerda,
      "Antonio"
    );
    const colidiuComPersonagemGuilherme = verificarColisao(
      player,
      coordenadasPersonagemGuilherme,
      2988,
      sons.somGuilherme,
      imagensPersonagens.spriteGuilherme.esquerda,
      "Guilherme"
    );
    const colidiuComPersonagemMayla = verificarColisao(
      player,
      coordenadasPersonagemMayla,
      3052,
      sons.somMayla,
      imagensPersonagens.spriteMayla.esquerda,
      "Mayla"
    );
    const colidiuComPersonagemJamyle = verificarColisao(
      player,
      coordenadasPersonagemJamylle,
      2989,
      sons.somMyle,
      imagensPersonagens.spriteJamyle.esquerda,
      "Jamyle"
    );
    const colidiuComPersonagemDigo = verificarColisao(
      player,
      coordenadasPersonagemDigo,
      2925,
      sons.som3,
      imagensPersonagens.spriteDigo.esquerda,
      "Digo"
    );
    const colidiuComPersonagemTheo = verificarColisao(
      player,
      coordenadasPersonagemTheo,
      2861,
      sons.somTheo,
      imagensPersonagens.spriteTheo.esquerda,
      "Theo"
    );
    const colidiuComPersonagemHeverton = verificarColisao(
      player,
      coordenadasPersonagemHeverton,
      2862,
      sons.somHeverton,
      imagensPersonagens.spriteHeverton.esquerda,
      "Heverton"
    );
    const colidiuComPersonagemNivea = verificarColisao(
      player,
      coordenadasPersonagemNivea,
      3110,
      sons.somNivea,
      imagensPersonagens.spriteNivea.esquerda,
      "Nivea"
    );
    const colidiuComPersonagemLuisFilho = verificarColisao(
      player,
      coordenadasPersonagemLuisFilho,
      3046,
      sons.somLuis,
      imagensPersonagens.spriteLuis.esquerda,
      "Luis"
    );

    // Se não houve colisão
    if (
      !colidiuComPersonagem3 &&
      !colidiuComPersonagemJonas &&
      !colidiuComPersonagemAntonio &&
      !colidiuComPersonagemGuilherme &&
      !colidiuComPersonagemMayla &&
      !colidiuComPersonagemJamyle &&
      !colidiuComPersonagemDigo &&
      !colidiuComPersonagemTheo &&
      !colidiuComPersonagemHeverton &&
      !colidiuComPersonagemNivea &&
      !colidiuComPersonagemLuisFilho
    ) {
      podeInteragir = false; // Se não está colidindo, não pode interagir
      alertaExibido = false; // Reseta a variável de alerta
    }
    ///////////////////////////////////////////////////////////////////////////////
    setInterval(() => {
      if (!podeInteragir) {
        alertaExibido = false;
      }
    }, 100); // Verifica a cada 100 ms

    if (movimento && movimentoPersonagem)
      moveis.forEach((movel) => {
        movel.position.x -= 3;
      });
  }
  
}

function executarInteracao() {
  if (podeInteragir && !alertaExibido && !somGuardado.playing()) {
    alertaExibido = true;
    podeInteragir = false;

    if (somGuardado) {
      somGuardado.play(); // Método correto para tocar o som usando Howler
    }
    mensagemInteracao.style.display = "flex"; // Exibe a mensagem
    movimentoTravado = true; // Trava o movimento
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    executarInteracao();
  }
});

const botaoInteragir = document.getElementById("interactionButton");

botaoInteragir.addEventListener("touchstart", () => {
  executarInteracao();
  e.preventDefault();
});

animate();

audio.Map.play();
