// 1. Cálculo do troco
let valorTotal;
let valorPago;
let troco;

troco = valorPago - valorTotal;
console.log(`O troco será de R$${troco} reais.`);

// 2. Conversão de temperatura
let tc;
let tf;
let formula;

formula = tc * 9/5;
tf = formula + 32;
console.log(`A temperatura ${tc}°Celsius é equivalente à ${tf}°Fahrenheit.`);

// 3. verificação de um ano bissexto
let diasAno;
let anoEscolhido;

diasAno = 365;
anoEscolhido = 2023;

if (diasAno == 366 ){
    console.log(`O ano de ${anoEscolhido} é bissexto.`);
} else { console.log(`O ano de ${anoEscolhido} não é bissexto.`);
}

// 4. Calcular média escolar e situação do aluno
let nota1;
let nota2;
let nota3;
let somaNotas;
let quantidadeInstrumentosAvaliativos;

nota1 = 6;
nota2 = 4;
nota3 = 8;
quantidadeInstrumentosAvaliativos = 3;

somaNotas = nota1 + nota2 + nota3;
mediaFinal = somaNotas / quantidadeInstrumentosAvaliativos;
if (mediaFinal >= 7) {
    console.log(`Parabéns, você está aprovado! Sua média final: ${mediaFinal}.`);  
} else {
     console.log(`Você foi reprovado... Média final: ${mediaFinal}.`);  
}

// 5. Conversão de minutos para horas e minutos
let minutosTotais;
let horas;

minutosTotais = 120;
horas = minutosTotais / 60;
console.log(`${minutosTotais} minutos equivalem a ${horas} horas.`);

// 6. Cálculo de desconto de uma compra
let valorCompra;
let descontoEmReais;
let valorComDesconto;

valorCompra = 455;
descontoEmReais = 25;

valorComDesconto = valorCompra - descontoEmReais;
console.log(`O valor final da compra é de R$${valorComDesconto} reais.`);

// 9. Cálculo do IMC
let massaEmKg;
let altura;
let imc;
let alturaAoQuadrado;

alturaAoQuadrado = altura * altura;
imc = massaEmKg / alturaAoQuadrado;
console.log(`O seu Índice de Massa Corporal (IMC) é igual a ${imc}.`);

// 11. Cáculo de consumo de combustível
let kmRodados;
let mlGastosPorKm;
let valorEmLitros;
let consumoTotal;

kmRodados = 300;
mlGastosPorKm = 300;

valorEmLitros = mlGastosPorKm / 1000;
consumoTotal = kmRodados * valorEmLitros;
console.log(`O total de litros que seu carro consumiu na viagem foi ${consumoTotal}L.`);

// 12. Conversão de idade para dias
let idade;
let diasVividos;

diasVividos = idade * 365;
console.log(`Quem possui ${idade} anos de idade viveu em média ${diasVividos} dias.`);

// 15. Contagem de números ímpares
let num;

num = 18062008

if (num % 2 === 0) {
    console.log(`O número ${num} é par.`);
    
} else {
    console.log(`O número ${num} é impar.`);
    
}

// 16. Comparação de preços por unidade
let precoProduto1;
let precoProduto2;
let quantidadeProduto1;
let quantidadeProduto2;
let precoPorUnidade1;
let precoPorUnidade2;

precoProduto1 = 25;
quantidadeProduto1 = 2000;
precoProduto2 = 20;
quantidadeProduto2 = 980;

precoPorUnidade1 = precoProduto1 / quantidadeProduto1;
precoPorUnidade2 = precoProduto2 / quantidadeProduto2;
console.log(`O preço por grama do produto 1 é R$${precoPorUnidade1}.`);
console.log(`O preço por grama do produto 2 é R$${precoPorUnidade2}.`);

if (precoPorUnidade1 < precoPorUnidade2) {
    console.log("O produto 1 tem o melhor custo-benefício.");
    
} else if (precoPorUnidade1 > precoPorUnidade2) {
    console.log("O produto B tem o melhor custo-benefício.");
    
} else {
    console.log("Ambos os produtos compensam e tem o mesmo custo-benefício");
    
}

// 17. Cálculo do perímetro de um retângulo
let valorAltura;
let valorLargura;
let lado1e3;
let lado2e4;
let perimetro;
let cmOuMetros;

valorAltura = 20;
valorLargura = 12;
cmOuMetros = "cm";

lado1e3 = valorAltura * 2;
lado2e4 = valorLargura * 2;
perimetro = lado1e3 + lado2e4;
console.log(`O perímetro do retângulo é de ${perimetro}${cmOuMetros}.`);

// 18. Cálculo do tempo estimado de viagem
let distancia;
let velocidadeMedia;
let tempoEstimado;

distancia = 300;
velocidadeMedia = 90;

tempoEstimado = distancia / velocidadeMedia;
console.log(`O tempo estimado de viagem será de ${tempoEstimado} horas.`);

// 19. Simulação de sorteio aleatório
let quantidadeNumeros;
let numeroSorteado;

quantidadeNumeros = 50;
numeroSorteado = 18;

console.log(`O número sorteado é ${numeroSorteado}.`);

// 20. Conversão de notas para conceitos
let notaB;
let notaC;
let notaD;
let somaNotasNumericas
let mediaNotas;
let quantidadesNotasNumericas;

notaB = 10;
notaC = 5;
notaD = 7;
quantidadesNotasNumericas = 3;

somaNotasNumericas = notaB + notaC + notaD;
mediaNotas = somaNotasNumericas / quantidadesNotasNumericas

if (mediaNotas >= 1 && mediaNotas <= 2) {
    console.log("Você é um aluno F.");
    
} else if (mediaNotas >= 3 && mediaNotas <= 4) {
    console.log("Você é um aluno D.");
    
} else if (mediaNotas >= 5 && mediaNotas <= 6) {
    console.log("Você é um aluno nota C.");
    
} else if (mediaNotas >= 7 && mediaNotas <= 8) {
    console.log("Você é um aluno nota B.");
    
} else if (mediaNotas >= 9 && mediaNotas <= 10) {
    console.log("Você é um aluno nota A.");
    
}

// 21. Cálculo de fatorial
let number;
let fatorial;

number = 8;
fatorial = 1;

fatorial = fatorial * number;
fatorial = fatorial * (number - 1);
fatorial = fatorial * (number - 2);
fatorial = fatorial * (number - 3);
fatorial = fatorial * (number - 4);
fatorial = fatorial * (number - 5);
fatorial = fatorial * (number - 6);
fatorial = fatorial * (number - 7);
console.log(`O fatorial do número ${number} é ${fatorial}.`);

// 22. Separação de pares e ímpares
let numero1;
let numero2;
let numero3;
let numero4;

numero1 = 243;
numero2 = 320;
numero3 = 1806;
numero4 = 549;

if (numero1 % 2 === 0) {
    console.log(`O número ${numero1} é par.`);
    
} else {
    console.log(`O número ${numero1} é impar.`);
    
} 
if (numero2 % 2 === 0) {
    console.log(`O número ${numero2} é par.`);
    
} else {
    console.log(`O número ${numero2} é impar.`);
    
} 
if (numero3 % 2 === 0) {
    console.log(`O número ${numero3} é par.`);
    
} else {
    console.log(`O número ${numero3} é impar.`);
    
} 
if (numero4 % 2 === 0) {
    console.log(`O número ${numero4} é par.`);
    
} else {
    console.log(`O número ${numero4} é impar.`);
    
}

// 25. Cálculo da média ponderada de um conjunto de notas
let nota;
let notaa;
let notaaa;
let notaaaa;
let notasSomadas;
let quantidadeNotas;
let mediaPonderada;

nota = 60;
notaa = 70;
notaaa = 90;
notaaaa = 65;
quantidadeNotas = 4;

notasSomadas = nota + notaa + notaaa + notaaaa;
mediaPonderada = notasSomadas / quantidadeNotas;
console.log(`A média ponderada do conjunto de notas é ${mediaPonderada}`);

// 26. Cálculo de horas trabalhadas
let horarioEntrada;
let horarioSaida;
let horasTrabalhadas;

horarioEntrada = 8
horarioSaida = 16
horasTrabalhadas = horarioSaida - horarioEntrada
console.log(`Total de horas trabalhadas: ${horasTrabalhadas}.`);


// 27. Divisão de conta de restaurante
let valorConta;
let participantes;
let valorDividido;

valorDividido = valorConta / participantes;
console.log(`Cada participante irá pagar R$${valorDividido}.`);

// 28. Conversão de moeda
let valorAtual;
let moedaAtual;
let moedaDesejada;
let cotacaoMoedaDesejada;
let conversao;

valorAtual = 30;
moedaAtual = "reais";
moedaDesejada = "dólares";
cotacaoMoedaDesejada = 5.73;

conversao = valorAtual / cotacaoMoedaDesejada;
console.log(`${valorAtual} ${moedaAtual} correspondem a aproximadamente ${conversao} ${moedaDesejada}.`);
