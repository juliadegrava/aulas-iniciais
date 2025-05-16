// 1. Calculadora simples
let primeiroNumero = 20;
let segundoNumero = 2;
let operacao = "*";
let valorFinal;

switch (operacao) {
  case "+":
    valorFinal = primeiroNumero + segundoNumero;
    console.log(`O resultado do cálculo é ${valorFinal}.`);

    break;
  case "-":
    valorFinal = primeiroNumero - segundoNumero;
    console.log(`O resultado do cálculo é ${valorFinal}.`);

    break;
  case "*":
    valorFinal = primeiroNumero * segundoNumero;
    console.log(`O resultado do cálculo é ${valorFinal}.`);

    break;
  case "/":
    valorFinal = primeiroNumero / segundoNumero;
    console.log(`O resultado do cálculo é ${valorFinal}.`);

    break;

  default:
    break;
}

// 2. Verificar se o número é positivo, negativo ou zero
let numeroUsuario = -8;
let sinalNumero;

if (numeroUsuario <= 0) {
  sinalNumero = "Número negativo.";
} else if (numeroUsuario >= 0) {
  sinalNumero = "Número positivo.";
}
console.log(sinalNumero);

// 3. Verificar se pode votar
let idadeUsuario;

idadeUsuario = 17

if (idadeUsuario >= 16) {
    console.log(`Com ${idadeUsuario} anos você já pode votar.`);
    
} 

// 4. Verificar duas condições com && e ||
let numberA = 18;
let numberB = 8;

if (numberA > 10 && numberB > 10) {
    console.log("Ambos são maiores do que 10.");
    
} else if (numberA < 10 && numberB < 10) {
    console.log("Ambos são menores que 10.");
    
} if (numberA < 5 || numberB < 5) {
    console.log("Pelo menos um dos números é menor que 5.");
    
} else { 
    console.log("Ambos são maiores que 5.");
    
}

// 5. Mostrar números de 1 à 10
let numeros;

for (let numeros = 1; numeros <= 10; numeros++) {
    console.log(numeros);
    
}

// 6. Somar os números de 1 à 5
let soma = 0;

for (let number = 1; number <= 5; number++) {
    soma += number
    
} console.log(`A soma dos números de 1 à 5 é ${soma}.`);

// 7. Mostrar números pares de 0 a 20
for (let pares = 0; pares <= 20; pares++) {
    if (pares % 2 === 0) {
        console.log(`Os números pares que existem entre 1 e 20 são ${pares}.`);
        
    }
    
}

// 8. Tabuada de 8
let numero = 8;
let resultado = 0;

for (let tabuada8 = 1; tabuada8 <= 10; tabuada8++) {
    resultado = numero * tabuada8
    console.log(`${numero} * ${tabuada8} = ${resultado}.`);
    
    
}

// 9. Contar de 20 até 0, de 2 em 2
for (let contagem = 20; contagem >= 0; contagem -= 2) {
    console.log(contagem);
}

// 10. Contar de 1 até 5 usando while
let numeroo = 1;

while (numeroo <= 5) {
console.log(numeroo);
numeroo++;
}

// 11. Mostrar apenas números ímpares de 1 a 15
let numeroImpar = 1;
console.log("Os números ímpares de 1 a 15 são:");
while (numeroImpar <= 15) {
    if (numeroImpar % 2 !== 0) {
        console.log(numeroImpar);
    }
numeroImpar++;
}

// 12. Contar até o usuário digitar um número maior que 100
let numeroDigitado = 1;
let contagemDoUsuario = 1;

while (numeroDigitado <= 100) {
    console.log(`Contando: ${contagemDoUsuario}`);
    numeroDigitado += 10
    contagemDoUsuario++;    
}
console.log(`O usuário digitou um número maior que 100. Número digitado: ${numeroDigitado}.`);