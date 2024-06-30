function xadrez(peça) {
  peça = peça.toLowerCase()
  switch (peça) {
    case "bispo":
      console.log("Bispo -> Diagonais.");      
      break;
    case "peao":
      console.log("Peão -> Uma casa para frente, no primeiro movimento podem ser duas casas.");      
      break;
    case "cavalo":
      console.log("Cavalo -> 'L' pode pular sobre as peças.");      
      break; 
    case "torre":
      console.log("Torre -> Horizontal e vertical.");      
      break;
    case "rainha":
      console.log("Rainha -> Diagonal, horizontal e vertical.");      
      break;
    case "rei":
      console.log("Rei -> Uma casa para qualquer direção.");      
      break;
    default:
      console.log("essa peça não existe");
      break;
  }
}

xadrez("rainha")