console.log(personagensAdicionais)

const moveis = [
  background,
  ...limites,
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
  animate();
});


function animate() {
  if (movimentoTravado) return; // Se o movimento está travado, não atualiza a animação
  window.requestAnimationFrame(animate);
  background.draw();
  limites.forEach((limite) => {
    limite.draw();
  });

  coordenadasPersonagem3.forEach((limite) => {
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


  personagensAdicionais.forEach(personagem => {
    personagem.draw();
  });


  player.draw();
  objetoPassavel.draw();
  let movimento = true;
  player.moving = false;
  if (keys.w.pressed) {
    player.moving = true;
    player.image = player.sprites.up;
    for (let i = 0; i < limites.length; i++) {
      const limite = limites[i];
      if (
        colisoesRetangulos({
          retangulo1: player,
          retangulo2: {
            ...limite,
            position: {
              x: limite.position.x,
              y: limite.position.y + 3,
            },
          },
        })
      ) {
        movimento = false;
      }
    }

    ///////////////////////////////////////////////////////////////////////////////
    function verificarColisao(player, coordenadas, tipo, som) {
      for (let i = 0; i < coordenadas.length; i++) {
        const limite = coordenadas[i];
        if (
          colisoesRetangulos({
            retangulo1: player,
            retangulo2: { 
              ...limite, 
              position: { x: limite.position.x, y: limite.position.y + 3 }
            }
          })
        ) {
          movimento = false; // Bloqueia o movimento do personagem
          podeInteragir = true; // Permite interação
          colidindoComAlgum = true; // Marca que está colidindo

          // Define a mensagem de interação
          const spanMensagem = document.querySelector('#mensagemInteracao span');
          spanMensagem.innerText = mensagensInteracao[tipo];
          somGuardado = som;
          return true; // Indica que houve uma colisão
        }
      }
      return false; // Indica que não houve colisão
    }

    const colidiuComPersonagem3 = verificarColisao(player, coordenadasPersonagem3, 3116, sons.som3);

    const colidiuComPersonagemJonas = verificarColisao(player, coordenadasPersonagemJonas, 2860, sons.som1);
    const colidiuComPersonagemAntonio = verificarColisao(player, coordenadasPersonagemAntonio, 2924, sons.som2);
    const colidiuComPersonagemGuilherme = verificarColisao(player, coordenadasPersonagemGuilherme, 2988, sons.som3);
    const colidiuComPersonagemMayla = verificarColisao(player, coordenadasPersonagemMayla, 3052, sons.som1);
    const colidiuComPersonagemJamyle = verificarColisao(player, coordenadasPersonagemJamylle, 2989, sons.som2);
    const colidiuComPersonagemDigo = verificarColisao(player, coordenadasPersonagemDigo, 2925, sons.som3);
    const colidiuComPersonagemTheo = verificarColisao(player, coordenadasPersonagemTheo, 2861, sons.som2);
    const colidiuComPersonagemHeverton = verificarColisao(player, coordenadasPersonagemHeverton, 2862, sons.som3);

        // Se não houve colisão
    if ( !colidiuComPersonagem3 && 
      !colidiuComPersonagemJonas && !colidiuComPersonagemAntonio && !colidiuComPersonagemGuilherme && 
      !colidiuComPersonagemMayla && !colidiuComPersonagemJamyle && !colidiuComPersonagemDigo && 
      !colidiuComPersonagemTheo && !colidiuComPersonagemHeverton) {
      podeInteragir = false; // Se não está colidindo, não pode interagir
      alertaExibido = false; // Reseta a variável de alerta
}
    ///////////////////////////////////////////////////////////////////////////////
    setInterval(() => {
      if (!podeInteragir) {
        alertaExibido = false;
      }
    }, 100); // Verifica a cada 100 ms


    if (movimento)
      moveis.forEach((movel) => {
        movel.position.y += 3;
      });
  } else if (keys.a.pressed) {
    player.moving = true;
    player.image = player.sprites.left;
    for (let i = 0; i < limites.length; i++) {
      const limite = limites[i];
      if (
        colisoesRetangulos({
          retangulo1: player,
          retangulo2: {
            ...limite,
            position: {
              x: limite.position.x + 3,
              y: limite.position.y,
            },
          },
        })
      ) {
        movimento = false;
      }
    }


///////////////////////////////////////////////////////////////////////////////
function verificarColisao(player, coordenadas, tipo, som) {
  for (let i = 0; i < coordenadas.length; i++) {
    const limite = coordenadas[i];
    if (
      colisoesRetangulos({
        retangulo1: player,
        retangulo2: { 
          ...limite, 
          position: { x: limite.position.x + 3, y: limite.position.y}
        }
      })
    ) {
      movimento = false; // Bloqueia o movimento do personagem
      podeInteragir = true; // Permite interação
      colidindoComAlgum = true; // Marca que está colidindo

      // Define a mensagem de interação
      const spanMensagem = document.querySelector('#mensagemInteracao span');
      spanMensagem.innerText = mensagensInteracao[tipo];
      somGuardado = som;
      return true; // Indica que houve uma colisão
    }
  }
  return false; // Indica que não houve colisão
}

const colidiuComPersonagem3 = verificarColisao(player, coordenadasPersonagem3, 3116, sons.som3);

const colidiuComPersonagemJonas = verificarColisao(player, coordenadasPersonagemJonas, 2860, sons.som1);
const colidiuComPersonagemAntonio = verificarColisao(player, coordenadasPersonagemAntonio, 2924, sons.som2);
const colidiuComPersonagemGuilherme = verificarColisao(player, coordenadasPersonagemGuilherme, 2988, sons.som3);
const colidiuComPersonagemMayla = verificarColisao(player, coordenadasPersonagemMayla, 3052, sons.som1);
const colidiuComPersonagemJamyle = verificarColisao(player, coordenadasPersonagemJamylle, 2989, sons.som2);
const colidiuComPersonagemDigo = verificarColisao(player, coordenadasPersonagemDigo, 2925, sons.som3);
const colidiuComPersonagemTheo = verificarColisao(player, coordenadasPersonagemTheo, 2861, sons.som2);
const colidiuComPersonagemHeverton = verificarColisao(player, coordenadasPersonagemHeverton, 2862, sons.som3);

    // Se não houve colisão
if (!colidiuComPersonagem3 && 
  !colidiuComPersonagemJonas && !colidiuComPersonagemAntonio && !colidiuComPersonagemGuilherme && 
  !colidiuComPersonagemMayla && !colidiuComPersonagemJamyle && !colidiuComPersonagemDigo && 
  !colidiuComPersonagemTheo && !colidiuComPersonagemHeverton) {
  podeInteragir = false; // Se não está colidindo, não pode interagir
  alertaExibido = false; // Reseta a variável de alerta
}
///////////////////////////////////////////////////////////////////////////////
setInterval(() => {
  if (!podeInteragir) {
    alertaExibido = false;
  }
}, 100); // Verifica a cada 100 ms

    if (movimento)
      moveis.forEach((movel) => {
        movel.position.x += 3;
      });
  } else if (keys.s.pressed) {
    player.moving = true;
    player.image = player.sprites.down;
    for (let i = 0; i < limites.length; i++) {
      const limite = limites[i];
      if (
        colisoesRetangulos({
          retangulo1: player,
          retangulo2: {
            ...limite,
            position: {
              x: limite.position.x,
              y: limite.position.y - 3,
            },
          },
        })
      ) {
        movimento = false;
      }
    }

    ///////////////////////////////////////////////////////////////////////////////
    function verificarColisao(player, coordenadas, tipo, som) {
      for (let i = 0; i < coordenadas.length; i++) {
        const limite = coordenadas[i];
        if (
          colisoesRetangulos({
            retangulo1: player,
            retangulo2: { 
              ...limite, 
              position: { x: limite.position.x, y: limite.position.y - 3 }
            }
          })
        ) {
          movimento = false; // Bloqueia o movimento do personagem
          podeInteragir = true; // Permite interação
          colidindoComAlgum = true; // Marca que está colidindo

          // Define a mensagem de interação
          const spanMensagem = document.querySelector('#mensagemInteracao span');
          spanMensagem.innerText = mensagensInteracao[tipo];
          somGuardado = som;
          return true; // Indica que houve uma colisão
        }
      }
      return false; // Indica que não houve colisão
    }

  
    const colidiuComPersonagem3 = verificarColisao(player, coordenadasPersonagem3, 3116, sons.som3);

    const colidiuComPersonagemJonas = verificarColisao(player, coordenadasPersonagemJonas, 2860, sons.som1);
    const colidiuComPersonagemAntonio = verificarColisao(player, coordenadasPersonagemAntonio, 2924, sons.som2);
    const colidiuComPersonagemGuilherme = verificarColisao(player, coordenadasPersonagemGuilherme, 2988, sons.som3);
    const colidiuComPersonagemMayla = verificarColisao(player, coordenadasPersonagemMayla, 3052, sons.som1);
    const colidiuComPersonagemJamyle = verificarColisao(player, coordenadasPersonagemJamylle, 2989, sons.som2);
    const colidiuComPersonagemDigo = verificarColisao(player, coordenadasPersonagemDigo, 2925, sons.som3);
    const colidiuComPersonagemTheo = verificarColisao(player, coordenadasPersonagemTheo, 2861, sons.som2);
    const colidiuComPersonagemHeverton = verificarColisao(player, coordenadasPersonagemHeverton, 2862, sons.som3);

        // Se não houve colisão
    if ( !colidiuComPersonagem3 && 
      !colidiuComPersonagemJonas && !colidiuComPersonagemAntonio && !colidiuComPersonagemGuilherme && 
      !colidiuComPersonagemMayla && !colidiuComPersonagemJamyle && !colidiuComPersonagemDigo && 
      !colidiuComPersonagemTheo && !colidiuComPersonagemHeverton) {
      podeInteragir = false; // Se não está colidindo, não pode interagir
      alertaExibido = false; // Reseta a variável de alerta
}
    ///////////////////////////////////////////////////////////////////////////////
    setInterval(() => {
      if (!podeInteragir) {
        alertaExibido = false;
      }
    }, 100); // Verifica a cada 100 ms

    if (movimento)
      moveis.forEach((movel) => {
        movel.position.y -= 3;
      });
  } else if (keys.d.pressed) {
    player.moving = true;
    player.image = player.sprites.right;
    for (let i = 0; i < limites.length; i++) {
      const limite = limites[i];
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
        movimento = false;
      }
    }


///////////////////////////////////////////////////////////////////////////////
function verificarColisao(player, coordenadas, tipo, som, imagemInteracao, id) {
  let colisaoDetectada = false;
  for (let i = 0; i < coordenadas.length; i++) {
    const limite = coordenadas[i];
    if (
      colisoesRetangulos({
        retangulo1: player,
        retangulo2: { 
          ...limite, 
          position: { x: limite.position.x - 3, y: limite.position.y }
        }
      })
    ) {
      console.log("colidindo");
      movimento = false; // Bloqueia o movimento do personagem
      podeInteragir = true; // Permite interação
      colisaoDetectada = true; // Marca que está colidindo

      // Define a mensagem de interação
      const spanMensagem = document.querySelector('#mensagemInteracao span');
      spanMensagem.innerText = mensagensInteracao[tipo];
      somGuardado = som;

        // Encontra o personagem pelo id e atualiza a imagem de interação
        const personagem = personagensAdicionais.find(p => p.id === id);
      if (personagem) {
        personagem.image.src = imagemInteracao; // Altera a imagem para a de interação
      }

      return true; // Indica que houve uma colisão
    }
  }


  return false; // Indica que não houve colisão
}

const colidiuComPersonagem3 = verificarColisao(player, coordenadasPersonagem3, 3116, sons.som3);

const colidiuComPersonagemJonas = verificarColisao(player, coordenadasPersonagemJonas, 2860, sons.som1, imagensPersonagens.spriteJonas.esquerda, "Jonas");
const colidiuComPersonagemAntonio = verificarColisao(player, coordenadasPersonagemAntonio, 2924, sons.som2, imagensPersonagens.spriteAntonio.esquerda, "Antonio");
const colidiuComPersonagemGuilherme = verificarColisao(player, coordenadasPersonagemGuilherme, 2988, sons.som3, imagensPersonagens.spriteGuilherme.esquerda, "Guilherme");
const colidiuComPersonagemMayla = verificarColisao(player, coordenadasPersonagemMayla, 3052, sons.som1, imagensPersonagens.spriteMayla.esquerda, "Mayla");
const colidiuComPersonagemJamyle = verificarColisao(player, coordenadasPersonagemJamylle, 2989, sons.som2, imagensPersonagens.spriteJamyle.esquerda, "Jamyle");
const colidiuComPersonagemDigo = verificarColisao(player, coordenadasPersonagemDigo, 2925, sons.som3, imagensPersonagens.spriteDigo.esquerda, "Digo");
const colidiuComPersonagemTheo = verificarColisao(player, coordenadasPersonagemTheo, 2861, sons.som2, imagensPersonagens.spriteTheo.esquerda, "Theo");
const colidiuComPersonagemHeverton = verificarColisao(player, coordenadasPersonagemHeverton, 2862, sons.som3, imagensPersonagens.spriteHeverton.esquerda, "Heverton");

    // Se não houve colisão
if (!colidiuComPersonagem3 && 
  !colidiuComPersonagemJonas && !colidiuComPersonagemAntonio && !colidiuComPersonagemGuilherme && 
  !colidiuComPersonagemMayla && !colidiuComPersonagemJamyle && !colidiuComPersonagemDigo && 
  !colidiuComPersonagemTheo && !colidiuComPersonagemHeverton) {
  podeInteragir = false; // Se não está colidindo, não pode interagir
  alertaExibido = false; // Reseta a variável de alerta
}
///////////////////////////////////////////////////////////////////////////////
setInterval(() => {
  if (!podeInteragir) {
    alertaExibido = false;
  }
}, 100); // Verifica a cada 100 ms

    if (movimento)
      moveis.forEach((movel) => {
        movel.position.x -= 3;
      });
  }
}

    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && podeInteragir && !alertaExibido) {
        alertaExibido = true;
        podeInteragir = false;
        
        if (somGuardado) {
          somGuardado.play(); // Método correto para tocar o som usando Howler
        }
        mensagemInteracao.style.display = "flex"; // Exibe a mensagem
        movimentoTravado = true; // Trava o movimento
      }
    });


animate();

audio.Map.play();