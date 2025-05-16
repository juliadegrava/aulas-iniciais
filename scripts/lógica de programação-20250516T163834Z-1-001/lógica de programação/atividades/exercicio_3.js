/* Exercício 3 - Lista de Compras
Crie um programa que simule uma lista de compras.
1. Crie um array vazio chamado "listaDeCompras"
2. Adicione 5 itens diferentes à lista
3. Remova o primeiro item (definindo-o como undefined)
4. Substitua o item undefined por um novo item
5. Exiba a lista final
*/

let listaDeCompras = [];
listaDeCompras = [
    "Arroz",
    "Toddynho",
    "Nurgets",
    "Batata frita",
    "Gel de cabelo"
];

listaDeCompras[0] = undefined;

listaDeCompras[0] = "Sorvete";
console.log("Lista de compras:");
console.table(listaDeCompras);
