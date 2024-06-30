// const reader = {
//   name: 'Julia',
//   lastName: 'Pessoa',
//   age: 21,
//   favoriteBooks: [
//     {
//       title: 'O Senhor dos Anéis - a Sociedade do Anel',
//       author: 'J. R. R. Tolkien',
//       publisher: 'Martins Fontes',
//     },
//   ],
// };

// // 1 - Acesse as chaves name, lastName e title e exiba informações em um console.log() no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”.
// console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama ${reader.favoriteBooks[0].title}.`);

// // 2 - Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos. Atribua a essa chave um objeto que contenha as seguintes informações:
// let newBook = {
//   title: 'Harry Potter e o Prisioneiro de Azkaban',
//   author: 'JK Rowling',
//   publisher: 'Rocco',
// }
// reader.favoriteBooks.push(newBook)

// console.log(reader.favoriteBooks);

// console.log(`${reader.name} tem ${reader.favoriteBooks.length} livros favoritos`);

// const order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       },
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       },
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     },
//   },
//   payment: {
//     total: 60,
//   },
// };
// // Complete a função customerInfo() para que seu retorno seja: 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'.
// const customerInfo = (fullOrder) => {
//   return `Olá, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Número: ${order.address.number}, AP: ${order.address.apartment}.`
// }
// // console.log(order.name)
// console.log(customerInfo(order));

// // Complete a função orderModifier() para que seu retorno seja: 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.
// // Modifique o nome da pessoa compradora para Luiz Silva;
// // Modifique o valor total da compra para R$ 50,00.
// const orderModifier = (fullOrder) => {
//   order.name = "Luiz Silva";
//   order.payment.total = 50;
//   return `Olá, ${order.name}, o valor total de seu pedido de ${Object.keys(order.order.pizza).join(', ')} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00.`
// }

// console.log(orderModifier(order));
// console.log(Object.keys(order.order.pizza));

// const school = {
//   lessons: [
//     {
//       course: 'Python',
//       students: 20,
//       professor: 'Carlos Patrício',
//       shift: 'Manhã',
//     },
//     {
//       course: 'Kotlin',
//       students: 10,
//       professor: 'Gabriel Oliva',
//       shift: 'Noite',
//     },
//     {
//       course: 'JavaScript',
//       students: 738,
//       professor: 'Gustavo Caetano',
//       shift: 'Tarde',
//     },
//     {
//       course: 'MongoDB',
//       students: 50,
//       shift: 'Noite',
//     },
//   ]
// };

// // Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve possuir dois parâmetros: o objeto e a posição no array.
// const chave = (obj, posicao) => {
//   return Object.values(obj.lessons[posicao-1])
// }
// // const getValueByNumber = (obj, index) => Object.values(obj)[index];

// console.log(chave(school, 2));


// // Crie uma função que retorne a soma do número total de estudantes em todos os cursos.
// const total = (obj) => {
//   let soma = 0
//   for (let index = 0; index < obj.lessons.length; index += 1) {
//     soma = soma + obj.lessons[index].students
//   }
//   return soma
// }

// console.log(total(school))

// // Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.
// const Key = (obj, key) => {
//   for (let index = 0; index < obj.lessons.length; index += 1) {
//     if (obj.lessons[index][key] === undefined) {
//       return false
//     } 
//   }
//   return true
// }

// // const verifyProp = (obj, key) => {
// //   for (let index = 0; index < obj.lessons.length; index += 1) {
// //     if (obj.lessons[index][key] === undefined) {
// //       return false;
// //     }
// //   }
// //   return true;
// // }

// console.log(Key(school, 'course'));
// // Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.
// const change = (obj, curso, valor) => {
//   for (let index = 0; index < obj.lessons.length; index += 1) {
//     if (obj.lessons[index]['course'] === curso) {
//       obj.lessons[index]['shift'] = valor
//     } 
//   }
//   return obj
// }
// console.log(change(school, 'Python', "Noite"));

// const changeKey = (obj, course, value) => {
//   // Encontra o elemento que o course é igual a Python
//   let findCourse;
//   for (let index = 0; index < obj.lessons.length; index += 1) {
//     let element = obj.lessons[index];
//     if (element.course === course) {
//       findCourse = element;
//       break;
//     }
//   }

//   // Condição para exibir o resultado. Caso o findCourse seja undefined, significa que o curso não foi encontrado.
//   if (findCourse !== undefined) {
//     findCourse.shift = value;
//     return findCourse;
//   } else {
//     return 'Curso não encontrado.';
//   }
// };

// console.log(changeKey(school, 'Python', 'Noite'));

// Alterar quantidades para um obj
// Por meio do array de frutas chamado basket, crie um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor.
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const frutas = (array) => {
  let cont = 0;
  let fruta = '';
  let quantidades = []
  let frutaFinal = ''
  let contFinal = 0
  for (let index = 0; index < array.length; index += 1) {
    if (fruta === '') {
      fruta = array[index]
      for (let i = 0; i < array.length; i += 1) {
        if (fruta === array[i]) {
          cont += 1
        }
      }
      frutaFinal = fruta
      contFinal = cont
      fruta = '';
      cont = 0;
    }
    if (quantidades.length === 0) {
      quantidades[index] = `${frutaFinal}: ${contFinal}`
    } 
    let repetido = quantidades.filter(palavra => palavra.includes(frutaFinal))
    for(let indice = 0; indice < quantidades.length; indice += 1) {
      if (repetido.length === 0){
        quantidades[index] = `${frutaFinal}: ${contFinal}`
      }
    }
  }
  let removeVazio = quantidades.filter(item => item !== undefined);
  return removeVazio;
}

console.log(frutas(basket));

// // Criação de objeto
// const result = {};

// // Loop que irá contar quantas vezes cada fruta aparece no array basket
// for (let index = 0; index < basket.length; index += 1) {
//   let fruit = basket[index];
//   // Se a propriedade com o nome da fruta ainda não existir, então ela será criada com o valor 1. Caso ela já exista, vamos incrementar o valor.
//   if (!result[fruit]) {
//     result[fruit] = 1;
//   } else {
//     result[fruit] += 1;
//   }
// };

// // Convertemos o objeto result em um array
// const entries = Object.entries(result);

// // Criação de um novo array
// let newArray = [];

// // Loop que irá verificar se o número de frutas é maior ou não do que 1. Caso seja maior, adicionamos a letra "s".
// for (let index = 0; index < entries.length; index += 1) {
//   if (entries[index][1] > 1) {
//     newArray.push(`${entries[index][1]} ${entries[index][0]}s`);
//   } else {
//     newArray.push(`${entries[index][1]} ${entries[index][0]}`);
//   }
// };

// // Exibimos a string juntando os valores do array "newArray" com uma vírgula e um espaço em branco.
// console.log(`Sua cesta possui: ${newArray.join(', ')}.`);