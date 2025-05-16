/*
Você e seus amigos (Lucas, Pedro, Ana e Julia) criaram um grupo para jogar "Vavazinho"
juntos. Cada um comprou itens cosméticos no jogo (skins, sprays, faquinha) no último mês
e vocês querem saber quanto o grupo gastou no total.

Os gastos individuais foram (em reais):
[25, 75, 30, 55, 45]  // Seus gastos, Lucas, Pedro, Ana, Julia

Desenvolva um programa que calcule e exiba:
1. O gasto total do grupo
2. O valor médio gasto por pessoa
3. Quanto cada pessoa gastou acima ou abaixo da média
*/

const gastos = [25, 75, 30, 55, 45];
const nomes = ["Degrava", "Lucas", "Pedro", "Ana", "Júlia"]

let gastosTotais = 0;
let media = 0;

for (let i = 0; i < gastos.length; i++) {
    gastosTotais += gastos[i]

}

media = gastosTotais / gastos.length;

console.log(`O gasto da galerinha vavazeira foi: R$ ${gastosTotais},00.`);
console.log(`Valor médio gasto por pessoa: R$ ${media.toFixed(2)}.`);

for (let i = 0; i < gastos.length; i++) {
    let diferenca = gastos[i] - media;

    if (diferenca > 0) {
        console.log(`${nomes[i]} gastou R$ ${diferenca.toFixed(2)} acima da média.`);
        
    } else if (diferenca < 0) {
        console.log(`${nomes[i]} gastou R${Math.abs(diferenca).toFixed(2)} abaixo da média.`);
        
    } else {
        console.log(`${nomes[i]} gastou exatamente a média.`);
        
    }
}
