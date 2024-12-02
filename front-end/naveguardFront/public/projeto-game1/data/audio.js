const audio = {
  Map: new Howl({
    src: "./audio/musica-navegaurd.mp3",
    loop: true,
    html5: true,
    volume: 0.2,
    onend: function () {
      this.seek(0);
      this.play();
    },
  }),
};

const sons = {
  somJonas: new Howl({
    src: ['./audio/Jonas.wav'],
    volume: 1 // caminho para o arquivo de áudio
  }),
  somMayla: new Howl({
    src: ['./audio/Mayla.wav']}),
  somAntonio: new Howl({
    src: ['./audio/Antonio.wav']}),
  somGuilherme: new Howl({
    src: ["./audio/Guilherme.wav"],
  }),
  somLuis: new Howl({
    src: ["./audio/Luis.wav"],
  }),
  somMyle: new Howl({
    src: ["./audio/Myle.wav"],
    volume: 1,
  }),
  somHeverton: new Howl({
    src: ["./audio/Heverton.wav"],
    volume: 1,
  }),
  somNivea: new Howl({
    src: ["./audio/Nivea.wav"],
    volume: 1,
  }),
  somTheo: new Howl({
    src: ["./audio/Theo.wav"],
    volume: 1,
  }),
};
