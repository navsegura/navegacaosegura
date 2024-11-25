

const moveis = [
  background,
  ...limites,
  objetoPassavel,
  ...personagensAdicionais,
  ...coordenadasPersonagem,
  ...coordenadasPersonagem2,
  ...coordenadasPersonagem3
]; //Ver oque esse ... faz


let podeInteragir = false;
let alertaExibido = false;
let movimentoTravado = false; // Variável para controlar o movimento

botaoProximo.addEventListener("click", () => {
  // Oculta a mensagem e destrava o movimento
  mensagemInteracao.style.display = "none";
  movimentoTravado = false;
  alertaExibido = false; // Reseta o estado do alerta
  animate();
});


function animate() {
  if (movimentoTravado) return; // Se o movimento está travado, não atualiza a animação
  let colidindoComAlgum = false;
  window.requestAnimationFrame(animate);
  background.draw();
  limites.forEach((limite) => {
    limite.draw();
  });

  coordenadasPersonagem.forEach((limite) => {
    limite.draw();
  });

  coordenadasPersonagem2.forEach((limite) => {
    limite.draw();
  });

  coordenadasPersonagem3.forEach((limite) => {
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
        console.log("colidindo");
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
          console.log("colidindo");
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

    const colidiuComPersonagem1 = verificarColisao(player, coordenadasPersonagem, 1959, sons.som1);
    const colidiuComPersonagem2 = verificarColisao(player, coordenadasPersonagem2, 1958, sons.som2);
    const colidiuComPersonagem3 = verificarColisao(player, coordenadasPersonagem3, 3116, sons.som3);

    

        // Se não houve colisão
    if (!colidiuComPersonagem1 && !colidiuComPersonagem2 && !colidiuComPersonagem3) {
      podeInteragir = false; // Se não está colidindo, não pode interagir
      alertaExibido = false; // Reseta a variável de alerta
}
    ///////////////////////////////////////////////////////////////////////////////
    setInterval(() => {
      if (!podeInteragir) {
        alertaExibido = false;
      }
    }, 100); // Verifica a cada 100 ms

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
    if (movimento)
      moveis.forEach((movel) => {
        movel.position.x -= 3;
      });
  }
}

animate();

audio.Map.play();