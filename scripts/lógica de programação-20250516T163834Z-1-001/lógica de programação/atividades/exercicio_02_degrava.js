/*
2. Verificador de Números (10 pontos)

Dado o array de números: `[12, 5, 8, 21, 16, 7, 30, 45, 13, 27]`

- Conte quantos números são pares
- Conte quantos números são ímpares
- Conte quantos números são maiores que 20
- Exiba os resultados no console
*/

// declarei as variáveis
const numeros = [12, 5, 8, 21, 16, 7, 30, 45, 13, 27];
let contadorPares = 0;
let contadorImpares = 0;
let MaioresQue20 = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) { // adicionei a condição de que se o resto da divisão do número for igual a 0
        contadorPares++ // adicioná-lo à lista

    }

    contadorImpares = numeros.length - contadorPares // subtraí o tamanho do array pela quantidade de números pares, pois os que sobraram são os ímpares
    
    
    if (numeros[i] > 20) { //adicionei a condição de que se algum número for maior que 20
        MaioresQue20++; // adicioná-lo à lista
    }
    
}

console.log(`Quantidade de números pares: ${contadorPares}.`);
console.log(`Quantidade de números ímpares: ${contadorImpares}.`);
console.log(`Quantidade de números maiores do que 20: ${MaioresQue20}.`);
// exibi a mensagem no console