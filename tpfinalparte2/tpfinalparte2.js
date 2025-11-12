let juego;

function setup() {
  createCanvas(640, 480);

  juego=new Juego();
}


function draw() {
  background(155);
  juego.iniciar;
  juego.dibujar;
}

function keyPressed() {
  juego.teclaPresionada(key);
}
function keyReleased() {
  juego.teclaSoltada(key);
}
