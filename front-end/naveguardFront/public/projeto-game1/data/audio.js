const audio = {
    Map: new Howl({
        src: "./audio/musica-navegaurd.mp3",
        loop: true,
        html5: true,
        volume: 0.5,
        onend: function() {
          this.seek(0);
          this.play();
      }
    })
}

const sons = {
    // som1: new Howl({
    //   src: ['./audio/Jonas-Audioo.mp3'],
    //   volume: 10 // caminho para o arquivo de áudio
    // }),
    som1: new Howl({
        src: ['./audio/posso-te-ligar-agora.mp3'] // caminho para o arquivo de áudio
      }),
    som2: new Howl({
      src: ['./audio/tot.mp3'] // caminho para o arquivo de áudio
    }),
    som3: new Howl({
        src: ['./audio/Carlos-Gritandoo.mp3'],
        volume: 5 // caminho para o arquivo de áudio
      })

  };