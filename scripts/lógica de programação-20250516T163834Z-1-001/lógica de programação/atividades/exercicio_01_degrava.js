/*
1. Verificador de Idade (10 pontos)

Crie um programa que receba um array com as idades de 5 pessoas: `[17, 21, 16, 25, 19]`

- Verifique quantas pessoas são maiores de idade (idade >= 18)
- Verifique quantas pessoas são menores de idade (idade < 18)
- Exiba as duas contagens no console
*/

// declarei as variáveis
const idades = [17, 21, 16, 25, 19];
let contadorMaiores18 = 0;
let contadorMenores18 = 0;

for (let i = 0; i < idades.length; i++) {
    if (idades[i] >=  18) { // adicionei a condição de que se alguma idade dentro do laço de repetição for maior ou igual a 18
        contadorMaiores18++; // adicioná-la à lista
    }
    if (idades[i] <  18) { // adicionei a condição de que se alguma idade dentro do laço de repetição for menor que 18
        contadorMenores18++; // adicioná-la à lista
    }
    
};

console.log(`Número de pessoas maiores de idade: ${contadorMaiores18}.`);
console.log(`Número de pessoas menores de idade: ${contadorMenores18}`);
// exibi a mensagem no console