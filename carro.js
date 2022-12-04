let xCarros = [610, 390, 255, 699, 432, 644];
let velocidadeCarros =[3,3,4,3,4,3];
let yCarros = [150,110,200,300,45,400];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imgCarros.length; i = i+1){
    image(imgCarros[i], xCarros[i] ,yCarros[i], comprimentoCarro, alturaCarro);

  }
}

function movimentaCarro(){
  //os numeros significam a velocidade da movimentação do carrinho quanto maior mais rápido.
 for (let i = 0; i < imgCarros.length; i = i+1){
    xCarros[i] -= velocidadeCarros[i];
   } 
}


function carroVoltaPOriginal(){
  for (let i = 0; i < imgCarros.length; i = i+1){
    
    if(passouTodaTela(xCarros[i])) {
      xCarros[i] = 600;
  }
 }
}

function passouTodaTela (xCarro){
   return xCarro < -50;

}










