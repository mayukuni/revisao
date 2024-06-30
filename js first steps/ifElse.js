function maiorNumero() {
  num1 = 15;
  num2 = 20;
  num3 = 10;

  if (num1 > num2 && num1 > num3) {
    console.log("o maior número é:", num1)
  } else if (num2 > num3) {
    console.log("o maior número é:", num2);
  } else {
    console.log("o maior número é:", num3);
  }
}

// maiorNumero()

function triangulo() {
  angulo1 = 170;
  angulo2 = 7;
  angulo3 = 3;

  if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log("não foi possivel calcular");
  } else if (angulo1 + angulo2 + angulo3 === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// triangulo()

function par(num1, num2, num3) {
  let isEven = false
  if (num1 % 2 == 0|| num2 % 2 == 0 || num3 % 2 == 0) {
    isEven = true;
  }
  console.log(isEven);
} 

// par(3, 2, 1)

function salario(valor) {
  let inss = 0;
  if (valor <= 1556.94) {
    inss = (valor / 100) * 8
  } else if (valor >= 1556.95 && valor <= 2594.92) {
    inss = (valor / 100) * 9
  } else if (valor >= 2594.92 && valor <= 5189.82) {
    inss = (valor / 100) * 11
  } else {
    inss = 570.88
  }

  salarioBase = valor - inss

  let ir = 0
  if (salarioBase <= 1903.98) {
    ir = 0
  } else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    ir = ((salarioBase / 100) * 7.5) - 142.80
  } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    ir = ((salarioBase / 100) * 15) - 354.80
  } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    ir = ((salarioBase / 100) * 22.5) - 636.13
  } else {
    ir = ((salarioBase / 100) * 27.5) - 869.36
  }

  let liquido = salarioBase - ir 
  console.log(liquido);
}

// salario(3000.00)



