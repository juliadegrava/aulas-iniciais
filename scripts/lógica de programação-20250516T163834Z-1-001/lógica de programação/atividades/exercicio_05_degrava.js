/*
5. Calculadora de Desconto (15 pontos)

Uma loja está com uma promoção onde produtos com preço acima de 100 reais têm 10% de desconto:

- Use o array de preços: `[150, 50, 220, 80, 120, 30, 480, 70, 90, 190]`
- Crie um novo array onde cada preço já esteja com o desconto aplicado (se necessário)
- Calcule quanto a loja vai perder com os descontos
- Calcule o valor médio dos produtos após os descontos
*/

// declarei as variáveis
const precos = [150, 50, 220, 80, 120, 30, 480, 70, 90, 190];
let precoComDesconto = [];
let valorDesconto = 10
let descontoCadaProduto = [];

for (let i = 0; i < precos.length; i++) {
    if (precos[i] > 100) { // adicionei a condição de que se algum preço for acima de 100 reais
        precoComDesconto[i] = precos[i] / 100 * valorDesconto // aplicar desconto de 10%
    } else {
        precoComDesconto = precos
    }
    descontoCadaProduto = precos[i] - precoComDesconto[i]
    descontoCadaProduto += perdaDaLoja[i]
}
 
 

