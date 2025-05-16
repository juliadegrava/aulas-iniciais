/* 5 - Calculadora de pontos em jogo.
Desenvolva um programa que calcule os pontos ganhos em uma fase de um jogo considerando: pontos base (100), nível de dificuldade (1 a 5, multiplicador dos pontos), se completou em tempo recorde (completouEmTempoRecorde = true - dobra os pontos) e se coletou todos os itens (coletouTodosItens = true - adiciona 150 pontos). 

pontos base: 100.
nível dificuldde: 1 a 5, multiplicador de pontos.
completouEmTempoRecorde = true - dobra os pontos.
coletouTodosItens = true - adiciona 150 pontos.
*/

const pontosBase = 100;
const nivelDificuldade = 5;
const completouEmTempoRecorde = true;
const coletouTodosItens = true;
let jogador = "Degrava Top Linda"

// Calculando os pontos totais inicialmente
let pontosTotais = pontosBase * nivelDificuldade;
console.log(`Pontos Totais: ${pontosTotais}`);

// Verificar bônus de recorde
if (completouEmTempoRecorde == true) {
      pontosTotais = pontosTotais * 2;
      console.log(`Parabéns, ${jogador}! Você bateu o recorde e dobrou os seus pontos! Pontuação: ${pontosTotais}.`);
      
}

// Verificar coleta de todos os itens
if (coletouTodosItens) {
    pontosTotais = pontosTotais + 150;
    console.log(`Parabéns, ${jogador}! Você coletou todos os itens da fase! Pontuação: ${pontosTotais}.`);
    
}

console.log(`Sua Pontuação Final foi de; ${pontosTotais} pontos!`);

if (pontosTotais > 1000) {
    console.log(`Parabéns ${jogador} GOD! Platinou o jogo`);
    
}