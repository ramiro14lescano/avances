class Juego {
  constructor(){
    this.inspector = new Personaje(width,height-60);
    this.plataformas = [];
    this.escombros = [];
  }
  iniciar() {
    this.inspector.actualizar;
  }
  
  dibujar() {
    this.inspector.dibujar;
  }
  
  reiniciar() {
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
   this.inspector.teclaSoltada(k)
  }
   teclaApretada(k){
   this.inspector.teclaApretada(k)
  }
}
