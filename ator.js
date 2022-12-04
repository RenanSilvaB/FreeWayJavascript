//movimentação ator.
let yAtor = 366;
let xAtor = 60;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imgAtor, xAtor, yAtor, 30 ,30);
}


function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    
    yAtor -= 3;
  }
  
   if (keyIsDown(DOWN_ARROW)){
     if (podeSeMover()){
        yAtor += 3;
  }       
}
    if (keyIsDown(LEFT_ARROW)){
     
    xAtor -= 3;
  
}
      if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }

}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imgCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
  if (colisao){
    voltaAtorPosicaoInicial();
    colidiu.play();
      if (pontosMaiorQZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  fill (255,215,0)
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width /5, 25)
}

function marcaPontos(){
  if (yAtor < 3){
    meusPontos += 1; yAtor = 366;
    pontos.play();
  }
  
}

function pontosMaiorQZero(){
  return meusPontos > 0
}

function podeSeMover(){
   return yAtor < 366
}