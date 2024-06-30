// Acesse o elemento where-are-you.
console.log(document.querySelector('#first-child-of-child').parentNode);
// Acesse parent a partir de where-are-you e adicione uma color a ele.
document.querySelector('#where-are-you').parentNode.style.color = 'red';
// Acesse o first-child-of-child e adicione um texto a ele. Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso.
document.querySelector('#where-are-you').firstElementChild.innerHTML = 'red';
// Acesse o first-child a partir de parent.
console.log(document.querySelector('#parent').firstElementChild)
// Acesse o first-child a partir de where-are-you.
console.log(document.querySelector('#where-are-you').previousElementSibling);
// Acesse o texto Attention! a partir de where-are-you.
console.log(document.querySelector('#where-are-you').nextSibling);
// Acesse o third-child a partir de where-are-you.
console.log(document.querySelector('#where-are-you').nextElementSibling);
// Acesse o third-child a partir de parent.
console.log(document.querySelector('#parent').lastElementChild.previousElementSibling)