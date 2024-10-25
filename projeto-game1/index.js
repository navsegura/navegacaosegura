const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

canvas.width = 1250;
canvas.height = 600;

const colisoesMapa = [];
for (let i = 0; i < colisoes.length; i += 100) {
  colisoesMapa.push(colisoes.slice(i, 100 + i));
}


const limites = [];

const offset = {
  x: -920,
  y: -150,
};

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

const image = new Image();
image.src = "./img/Mapa-Naveguard-(TestarMovimentacao).png";

const imagemPersonagemBaixo = new Image();
imagemPersonagemBaixo.src = "./img/playerDown.png";

const imagemPersonagemCima = new Image();
imagemPersonagemCima.src = "./img/playerUp.png";

const imagemPersonagemDireita = new Image();
imagemPersonagemDireita.src = "./img/playerRight.png";

const imagemPersonagemEsquerda = new Image();
imagemPersonagemEsquerda.src = "./img/playerLeft.png";

const imagemObjetoPassaveis = new Image();
imagemObjetoPassaveis.src = "./img/Objetos-Passaveis.png"



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
  }
});

//canvas.width / 2 - imagemPersonagem.width / 4 / 2, // Centraliza o primeiro sprite do personagem no meio com base do comprimento
//canvas.height / 2 - imagemPersonagem.height / 2, // Centraliza o primeiro sprite do personagem no meio com base na altura

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


const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

const moveis = [background, ...limites, objetoPassavel]; //Ver oque esse ... faz

function colisoesRetangulos({ retangulo1, retangulo2 }) {
  return (
    retangulo1.position.x + retangulo1.width >= retangulo2.position.x &&
    retangulo1.position.x <= retangulo2.position.x + retangulo2.width &&
    retangulo1.position.y <= retangulo2.position.y + retangulo2.height &&
    retangulo1.position.y + retangulo1.height >= retangulo2.position.y
  );
}

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  limites.forEach((limite) => {
    limite.draw();
  });

  player.draw();
  objetoPassavel.draw();
  let movimento = true
  player.moving = false;
  if (keys.w.pressed) {
    player.moving = true;
    player.image = player.sprites.up
    for (let i = 0; i < limites.length; i++) {
      const limite = limites[i]
      if (
        colisoesRetangulos({
          retangulo1: player,
          retangulo2: {...limite, position: {
            x:limite.position.x,
            y:limite.position.y + 3
          }}
        })
      ) {
        console.log("colidindo");
        movimento = false
      }
    }
    if (movimento) 
    moveis.forEach((movel) => {
      movel.position.y += 3;
    });
  } else if (keys.a.pressed) {
    player.moving = true;
    player.image = player.sprites.left
    for (let i = 0; i < limites.length; i++) {
      const limite = limites[i]
      if (
        colisoesRetangulos({
          retangulo1: player,
          retangulo2: {...limite, position: {
            x:limite.position.x + 3,
            y:limite.position.y
          }}
        })
      ) {
        console.log("colidindo");
        movimento = false
      }
    }
    if (movimento) 
    moveis.forEach((movel) => {
      movel.position.x += 3;
    });
  } else if (keys.s.pressed) {
    player.moving = true;
    player.image = player.sprites.down
    for (let i = 0; i < limites.length; i++) {
      const limite = limites[i]
      if (
        colisoesRetangulos({
          retangulo1: player,
          retangulo2: {...limite, position: {
            x:limite.position.x,
            y:limite.position.y - 3
          }}
        })
      ) {
        console.log("colidindo");
        movimento = false
      }
    }
    if (movimento) 
    moveis.forEach((movel) => {
      movel.position.y -= 3;
    });
  } else if (keys.d.pressed) {
    player.moving = true;
    player.image = player.sprites.right
    for (let i = 0; i < limites.length; i++) {
      const limite = limites[i]
      if (
        colisoesRetangulos({
          retangulo1: player,
          retangulo2: {...limite, position: {
            x:limite.position.x - 3,
            y:limite.position.y
          }}
        })
      ) {
        console.log("colidindo");
        movimento = false
      }
    }
    if (movimento) 
    moveis.forEach((movel) => {
      movel.position.x -= 3;
    });
  }
}

animate();

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      break;
    case "ArrowUp":
      keys.w.pressed = true;
      break;
    case "a":
      keys.a.pressed = true;
      break;
    case "ArrowLeft":
      keys.a.pressed = true;
      break;
    case "s":
      keys.s.pressed = true;
      break;
    case "ArrowDown":
      keys.s.pressed = true;
      break;
    case "d":
      keys.d.pressed = true;
      break;
    case "ArrowRight":
      keys.d.pressed = true;
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "ArrowUp":
      keys.w.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "ArrowLeft":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "ArrowDown":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
    case "ArrowRight":
      keys.d.pressed = false;
      break;
  }
});
