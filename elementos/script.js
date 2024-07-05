// Crie um irmão para elementoOndeVoceEsta.
let elemento = document.createElement('h1')
elemento.innerHTML = 'oiiii'
let pai = document.getElementById('pai');
pai.appendChild(elemento);
// Crie um filho para elementoOndeVoceEsta.
let filho = document.createElement('h3');
filho.innerHTML = 'epaaa';
let outroPai = document.getElementById('elementoOndeVoceEsta')
outroPai.appendChild(filho)
// Crie um filho para primeiroFilhoDoFilho.
let outroFilho = document.createElement('p');
outroFilho.innerHTML = 'ihaaa';
let paiDoFilho = document.getElementById('primeiroFilhoDoFilho')
paiDoFilho.appendChild(outroFilho)
// A partir desse filho criado, acesse terceiroFilho.
let terceiro = outroFilho.parentNode.parentNode.nextSibling.nextSibling
console.log(terceiro);