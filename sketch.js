 function setup() {
  createCanvas(600, 400);
   trilha.loop();
}

function draw() {
  background(imgEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  carroVoltaPOriginal();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}


