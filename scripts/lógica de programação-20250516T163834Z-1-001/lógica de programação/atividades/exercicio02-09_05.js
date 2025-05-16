const views = [1200, 850, 1100, 1350, 950]
const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"]
// Enquete sobre um novo corte de cabelo na QUINTA-FEIRA, o que aumentou as views

let maisViews = views[0];
let diaMaisViews = "";
let viewsNoPeriodo = 0;
let storiesPopulares = 0;
let mediaDiaria = 0;

for (let i = 0; i < views.length; i++) {
  if (views[i] > maisViews) {
    maisViews = views[i];
    diaMaisViews = diasSemana[i];
  }
} console.log(`Dia com mais vizualizações (${maisViews} Views): ${diaMaisViews}-Feira.`);


for (let i = 0; i < views.length; i++) {
    viewsNoPeriodo += views[i]

} console.log(`Total de vizualizações no período: ${viewsNoPeriodo} Views.`);

for (let i = 0; i < views.length; i++) {
    if (views[i] > 1000) {
        storiesPopulares++;
    }
} console.log(`Quantidade de stories populares: ${storiesPopulares}.`);


mediaDiaria = viewsNoPeriodo / views.length;

console.log(`A média diária de visualizações é: ${mediaDiaria}.`);

