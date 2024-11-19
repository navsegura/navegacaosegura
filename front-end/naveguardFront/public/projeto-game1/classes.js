class Sprite {
  constructor({ position, image, frames = { max: 1 }, sprites, animate = false, velocity }) {
    this.position = position;
    this.image = image;
    this.frames = { ...frames, valor: 0, elapsed: 0 };
    this.sprites = sprites;
    this.velocity = velocity

    this.image.onload = () => {
      this.width = this.image.width / this.frames.max;
      this.height = this.image.height;
    };

    this.animate = animate;
  }

  draw() {
    c.drawImage(
      this.image, // Seleciona a varial do personagem para começar a desenhar
      this.frames.valor * this.width, // sx
      0, // sy
      this.image.width / this.frames.max, //Define o tamanho do comprimento no corte
      this.image.height, //Define o tamanho da largura no corte
      this.position.x,
      this.position.y,
      this.image.width / this.frames.max,
      this.image.height
    );

    if (!this.animate) return;

    if (this.frames.max > 1) {
      this.frames.elapsed++;
    }

    if (this.frames.elapsed % this.velocity === 0) {
      //Velocidade da animação do boneco andando
      if (this.frames.valor < this.frames.max - 1) this.frames.valor++;
      else this.frames.valor = 0;
    }
  }
}

class Limite {
  static width = 64;
  static height = 64;
  constructor({ position }) {
    this.position = position;
    this.width = 64;
    this.height = 64;
  }

  draw() {
    c.fillStyle = "rgba(255, 0, 0, 0.0)";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

class ColisionChecker {
  constructor(player, limites) {
    this.player = player;
    this.limites = limites;
  }

  testarColisoes(offsetX = 0, offsetY = 3) { // Permite personalizar o deslocamento
    for (let i = 0; i < this.limites.length; i++) {
      const limite = this.limites[i];
      const limitePosicionado = {
        ...limite,
        position: {
          x: limite.position.x + offsetX,
          y: limite.position.y + offsetY,
        },
      };
      
      if (this.colisoesRetangulos(this.player, limitePosicionado)) {
        return false; // Se houver colisão, retorna false e interrompe a verificação
      }
    }
    return true; // Se nenhuma colisão for detectada, retorna true
  }

  colisoesRetangulos(retangulo1, retangulo2) {
    // Função que verifica a colisão entre dois retângulos
    return (
      retangulo1.position.x + retangulo1.width >= retangulo2.position.x &&
      retangulo1.position.x <= retangulo2.position.x + retangulo2.width &&
      retangulo1.position.y <= retangulo2.position.y + retangulo2.height &&
      retangulo1.position.y + retangulo1.height >= retangulo2.position.y
    );
  }
}




