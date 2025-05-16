/*3. Média de Notas (10 pontos)

Crie um programa que calcule a média de notas de uma turma:

- Use o array: `[8.5, 7.0, 9.5, 6.5, 8.0, 7.5, 5.5, 6.0, 9.0, 10.0]`
- Calcule e exiba a média da turma
- Mostre quantos alunos tiraram nota acima da média
- Mostre qual foi a maior e a menor nota
*/

// declarei as variáveis
const notas = [8.5, 7.0, 9.5, 6.5, 8.0, 7.5, 5.5, 6.0, 9.0, 10.0];
let somaDasNotas = 0;
let media = 0;
let notasAcimaDaMedia = 0;
let maiorNota = notas[0]; // recebe o array na posição 0
let menorNota = notas[0]; // recebe o array na posição 0

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i] // somei todos os valores de notas
    
};

media = somaDasNotas / notas.length; // dividi a soma das notas pelo tamanho do array

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > media) // adicionei a condição de que se alguma nota for acima da média
        notasAcimaDaMedia++ // adicioná-la à lista
};
    
for (let i = 1; i < notas.length; i++) {
    if (notas[i] > maiorNota) // adicionei a condição de que se alguma nota for maior dentro da repetição do array atribuida à variável maiorNota
        maiorNota = notas[i]; // a maior nota é o maior valor repetido dentro do array

    if (notas[i] < menorNota) // adicionei a condição de que se alguma nota for menor dentro da repetição do array atribuida à variável menorNota
        menorNota = notas[i]; // a menor nota é o menor valor repetido dentro do array

};

console.log(`A média das notas da turma é ${media}`);
console.log(`${notasAcimaDaMedia} alunos tiraram nota acima da média.`);
console.log(`A maior nota foi ${maiorNota} e a menor nota foi ${menorNota}.`);
// exibi a mensagem no console