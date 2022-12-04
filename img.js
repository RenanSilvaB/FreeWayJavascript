// imagens e sons do jogo
let imgEstrada;
let imgAtor;
let carro1;
let carro2;
let carro3;

//sons
let colidiu;
let pontos;
let trilha;


function preload(){
  imgEstrada = loadImage ("IMG/estrada.png");
  imgAtor = loadImage ("IMG/ator-1.png");
  carro1 = loadImage ("IMG/carro-1.png");
  carro2 = loadImage ("IMG/carro-2.png");
  carro3 = loadImage ("IMG/carro-3.png");
  carro4 = loadImage ("IMG/carro-4.png");
  carro5 = loadImage ("IMG/carro-5.png");
  carro6 = loadImage ("IMG/carro-6.png");
  
  imgCarros = [carro1, carro2, carro3, carro4, carro5, carro6];
  
  
  colidiu = loadSound ("Sons/colidiu.mp3");
  pontos = loadSound ("Sons/pontos.wav");
  trilha = loadSound ("Sons/trilha.mp3");
}