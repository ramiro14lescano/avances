class Personaje{
  constructor(x,y){
    this.posX=x;
    this.posY=y;
    this.tam=60;
    this.enSuelo=true;
    this.moverDer=false;
    this.moverIzq=false;
  }
  
  actualizar(){
    if(this.moverDer===true){
      this.posX++;
    }
    if(this.moverIzq===true){
      this.posY++;
    }
  }
  
  dibujar(){
    push();
    rectMode(CENTER);
    fill(200, 220, 255);
    stroke(0);
    rect(this.posX, this.posY, this.tam, this.tam);
    pop();
  }
  teclaApretada(k){
    if (k === "a" || k === "A") {
      this.movIzq = true;
    }
    if (k === "d" || k === "D") {
      this.movDer = true;
    }
    if (k === " ") {
      this.saltar();
    }
  }
    
  teclaSoltada(k){
    if (k === "a" || k === "A") {
      this.movIzq = false;
    }
    if (k === "d" || k === "D") {
      this.movDer = false;
    }
  }
  
}
