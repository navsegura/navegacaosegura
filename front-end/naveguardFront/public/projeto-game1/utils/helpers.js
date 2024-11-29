function colisoesRetangulos({ retangulo1, retangulo2 }) {
  return (
    retangulo1.position.x + retangulo1.width >= retangulo2.position.x &&
    retangulo1.position.x <= retangulo2.position.x + retangulo2.width &&
    retangulo1.position.y <= retangulo2.position.y + retangulo2.height &&
    retangulo1.position.y + retangulo1.height >= retangulo2.position.y
  );
}
