// // Percorra o array imprimindo todos os valores contidos nele com a função console.log().

// // Some todos os valores contidos no array e imprima o resultado.

// const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   console.log(`o ${index + 1}º número é ${numbers[index]}`)
//   soma = soma + numbers[index]
// }

// console.log(`a soma dos numeros da lista é ${soma}`);

// // Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

// let media = soma / numbers.length
// console.log(`a média aritmética dos números da lista é ${media}`);

// // Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

// if (media > 20) {
//   console.log("O valor da média aritmética é maior que 20");
// } else {
//   console.log("O valor da média aritmética é menor ou igual a 20");
// }

// // Utilizando for, descubra o maior valor contido no array e imprima-o.

// let maior = 0

// for (let index = 0; index < numbers.length; index += 1) {
//   if (maior < numbers[index]) {
//     maior = numbers[index]
//   } 
// }

// console.log(`o maior número é ${maior}`);

// // Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

// cont = 0

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     cont = cont + 1
//   } 
// }

// if (cont === 0) {
//   console.log("Nenhum valor ímpar encontrado");
// } else {
//   console.log(`a quantidade de numeros impares é ${cont}`);
// }

// // crie um algoritmo que imprima na tela o fatorial de 10.
// // 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
// let resultado = 0
// for (let index = 10; index > 1; index -= 1) {
//   if (index === 10) {
//     resultado = resultado + (index * (index -1))
//   } else {
//     resultado = resultado * (index - 1)
//   }
// }

// console.log(`o fatorial de 10 é ${resultado}`);

// // let fatorial = 1;
// // for (let index = 10; index > 0; index -= 1) {
// //   fatorial *= index;
// // };

// // console.log(fatorial);

// // Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.
// // De olho na dica 👀: Pesquise sobre os seguintes métodos: split(), reverse() e join();

// let palavra = 'gatinho'
// let letras = palavra.split('')
// let inverter = letras.reverse()
// let palavraInvertida = inverter.join('')
// console.log(palavraInvertida)

// // let reversed = "";
// //   for (let i = palavra.length - 1; i >= 0; i--) {
// //     reversed += palavra[i];
// //   }
// //   console.log(reversed)

// // Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n.
// n = 5;
// let asterisco = "*"
// let linha = ""

// for (let index = 0; index < n; index += 1) {
//   linha = linha + asterisco
// }
// for (let index = 0; index < n; index += 1) {
//   console.log(linha);
// }

// // Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. 
// n = 5;
// linha = ""
// for (let index = 0; index < n; index += 1) {
//   console.log(linha = linha + asterisco)
// }

// Agora, inverta o lado do triângulo.
n = 5;
linha = ""
espaco = " "
let posicao = n - 1
let asterisco = "*"
for (let index = 0; index < n; index += 1) {
  for (let i = 0; i < n; i += 1) {
    if (i < posicao) {
      linha = linha + espaco
    } else {
      linha = linha + asterisco
    }
  }
  console.log(linha)
  posicao -= 1
  linha = ''
}
