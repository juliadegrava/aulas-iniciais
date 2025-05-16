/* Exercício 1 - Média de Notas
Você está desenvolvendo um sistema para uma escola que precisa calcular a média
das notas de uma turma. Crie um array com 5 notas e calcule a média.
*/

let notas = [5.7, 9.0, 8.5, 7.0, 9.5];
let soma = 0;
let media;

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i]
    media = soma / notas.length
};

console.log(`A média total é ${media}.`);
