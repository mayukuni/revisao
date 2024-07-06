const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('subtitulo');
let caixa = document.getElementsByClassName('tech')[0]


// 1. Copie esse arquivo e edite apenas ele.
// 1.1. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// .tech {
//   transform: translateY(-20px);
// }
// caixa.style.transform = 'translateY(0px)';


// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como é possível fazer isso? Dica: Lembre-se do método `.classList.remove`.
let lista = document.getElementsByClassName('container')[0]
let item = lista.children
const adicionarClasse = (event) => {
  for (let index = 0; index < item.length; index += 1) {
    if (item[index].className === 'tech') {
      item[index].classList.remove('tech')
    }
    caixa = event.target.classList.add('tech')
  }
  input.value = ''
}
lista.addEventListener('click', adicionarClasse)

// const handleChangeTech = (event) => {
//   const techElement = document.querySelector('.tech');
//   techElement.classList.remove('tech');
//   event.target.classList.add('tech');
//   input.value = '';
// }

// firstLi.addEventListener('click', handleChangeTech);
// secondLi.addEventListener('click', handleChangeTech);
// thirdLi.addEventListener('click', handleChangeTech);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech'.
const texto = () => {
  let caixa = document.getElementsByClassName('tech')[0]
  caixa.innerHTML = input.value
}

input.addEventListener('keyup', texto)

// input.addEventListener('input', (event) => {
//   const techElement = document.querySelector('.tech');
//   techElement.innerText = event.target.value;
// });


// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy',
// redirecione para alguma página.
// 4.1. Que tal redirecionar para seu portfólio? Dica: Lembre-se dos métodos `window.location.replace` e `window.open`.
const redireciona = () => {
  // O event é passado como um parâmetro para a função.
  window.open('https://github.com/mayukuni', '_blank')
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}
myWebpage.addEventListener('dblclick', redireciona);

// myWebpage.addEventListener('dblclick', () => {
//   window.location.replace('https://blog.betrybe.com/');
// });

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo.
const alteraCor = (event) => {
  if (event.type === 'mouseover') {
    event.target.style.color = 'red';
  } else if (event.type === 'mouseout') {
    event.target.style.color = ''; 
  }
}
myWebpage.addEventListener('mouseover', alteraCor);
myWebpage.addEventListener('mouseout', alteraCor);

// myWebpage.addEventListener('mouseover', (event) => {
//   event.target.style.color = 'red';
// });

// myWebpage.addEventListener('mouseout', (event) => {
//   event.target.style.color = 'unset';
// });

// Segue abaixo um exemplo de uso do event.target.

const resetText = (event) => {
  // O event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na função retornará o objeto 'firstLi'.