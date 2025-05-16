const temps = [28, 31, 27, 29, 30, 32, 33];
const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
let somaTemp = 0;
let tempMedia;
let tempMax = temps[0];
let diaOcorridoMax = "";
let tempMinima = temps[0];
let diaOcorridoMin = "";

for (let i = 0; i < temps.length; i++) {
    somaTemp = somaTemp + temps[i]

} 

tempMedia = somaTemp / temps.length

console.log(`Temperatura média da semana: ${tempMedia}°C.`);


for (let i = 1; i < temps.length; i++) {
    if (temps[i] > tempMax) {
        tempMax = temps[i];
        diaOcorridoMax = diasSemana[i];
    } 

    if (temps[i] < tempMinima) {
        tempMinima = temps[i];
        diaOcorridoMin = diasSemana[i];
    }
} 

tempMedia = somaTemp / temps.length;

console.log(`A temperatura máxima foi ${tempMax}°C. Dia que ocorreu: ${diaOcorridoMax}.`);
console.log(`A temperatura mínima foi ${tempMinima}°C. Dia que ocorreu: ${diaOcorridoMin}.`);
