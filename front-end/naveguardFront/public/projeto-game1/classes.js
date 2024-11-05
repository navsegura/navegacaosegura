class Sprite {
  constructor({ position, image, frames = { max: 1 }, sprites }) {
    this.position = position;
    this.image = image;
    this.frames = { ...frames, valor: 0, elapsed: 0 };
    this.sprites = sprites;

    this.image.onload = () => {
      this.width = this.image.width / this.frames.max;
      this.height = this.image.height;
    };

    this.moving = false;
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

    if (!this.moving) return;

    if (this.frames.max > 1) {
      this.frames.elapsed++;
    }

    if (this.frames.elapsed % 20 === 0) {
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
