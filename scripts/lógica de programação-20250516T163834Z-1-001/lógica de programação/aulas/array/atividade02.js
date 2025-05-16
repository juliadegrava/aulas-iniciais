let amigos = [
    "davi",
    "bianca",
    "arthur",
    "gabriel",
    "ana beatriz"
]
console.log(amigos[2]);

amigos[0] = "eu mesmo";

console.log(amigos.length - 1);
amigos[5] = "murilo";

amigos[amigos.length] = "eloisa"

console.table(amigos);
console.log(`Tamanho final do array: ${amigos.length}`);
