//Ejercicio 2.1: Dado el array [3, 7, 2, 9, 5], calcula su suma usando for o for...of.
let array = [3, 7, 2, 9, 5];
let suma = 0;

for (let numero of array) {
    suma += numero;
}

console.log(suma); // Resultado: 26
//Ejercicio 2.2: Encuentra el número mayor en el array [12, 45, 6, 89, 23].
let arrray = [12, 45, 6, 89, 23];
let mayor = Math.max(...array);

console.log(mayor); // Resultado: 89

//Ejercicio 2.3: Filtra los números menores a 10 del array [15, 3, 8, 12, 1] y crea un nuevo array.
let arrrray = [15, 3, 8, 12, 1];

let nuevoArray = array.filter(num => num < 10);

console.log(nuevoArray); // Resultado: [3, 8, 1]

