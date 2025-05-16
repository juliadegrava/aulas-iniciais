/*
11. Mostrar apenas números ímpares de 1 a 15
Use while para mostrar os números ímpares de 1 a 15.

Já sei quantas voltas terei nesse problema?
Se sim, usar while
*/

let numero = 1;
// let contador = 1;

while (numero <= 15) {
    if (numero % 5 == 0) {
        console.log(numero);
        
    }

    numero++;
}
