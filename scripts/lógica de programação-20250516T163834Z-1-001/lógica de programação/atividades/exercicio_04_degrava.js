/*
4. Transformador de Temperaturas (15 pontos)

Crie um programa que converta uma lista de temperaturas de Celsius para Fahrenheit:

- Use o array: `[0, 10, 20, 30, 40]` (temperaturas em Celsius)
- Crie um novo array com as temperaturas convertidas para Fahrenheit usando a fórmula: F = C * 9/5 + 32
- Exiba ambos os arrays lado a lado usando console.table()
*/

// declarei as variáveis
const temperaturasEmCelsius = [0, 10, 20, 30, 40]
let temperaturasEmFahrenheit = [];

for (let i = 0; i < temperaturasEmCelsius.length; i++) {
    temperaturasEmFahrenheit[i] = temperaturasEmCelsius[i] * 9/5 + 32 
} // converti as temperaturas em celsius para Fahrenheit usando a fórmula: F = C * 9/5 + 32

console.table(temperaturasEmFahrenheit)
// exibi a lista no console