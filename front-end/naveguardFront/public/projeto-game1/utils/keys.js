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

const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");

// Lógica de movimentação com os botões
upButton.addEventListener("mousedown", () => keys.w.pressed = true);
upButton.addEventListener("mouseup", () => keys.w.pressed = false);

downButton.addEventListener("mousedown", () => keys.s.pressed = true);
downButton.addEventListener("mouseup", () => keys.s.pressed = false);

leftButton.addEventListener("mousedown", () => keys.a.pressed = true);
leftButton.addEventListener("mouseup", () => keys.a.pressed = false);

rightButton.addEventListener("mousedown", () => keys.d.pressed = true);
rightButton.addEventListener("mouseup", () => keys.d.pressed = false);

upButton.addEventListener("touchstart", (e) => {
  e.preventDefault();
  keys.w.pressed = true;
});
upButton.addEventListener("touchend", () => keys.w.pressed = false);

downButton.addEventListener("touchstart", (e) => {
  e.preventDefault();
  keys.s.pressed = true;
});
downButton.addEventListener("touchend", () => keys.s.pressed = false);

leftButton.addEventListener("touchstart", (e) => {
  e.preventDefault();
  keys.a.pressed = true;
});
leftButton.addEventListener("touchend", () => keys.a.pressed = false);

rightButton.addEventListener("touchstart", (e) => {
  e.preventDefault();
  keys.d.pressed = true;
});
rightButton.addEventListener("touchend", () => keys.d.pressed = false);