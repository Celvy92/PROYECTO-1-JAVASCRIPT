// Declaramos el arreglo de frutas
const frutas = ["manzana", "plátano", "manzana", "pera", "naranja", "plátano", "manzana", "pera"];

// Creamos un objeto para almacenar la cantidad de cada tipo de fruta
const contadorFrutas = {};

// Recorremos el arreglo con un ciclo for
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    if (contadorFrutas[fruta]) {
        contadorFrutas[fruta]++;
    } else {
        contadorFrutas[fruta] = 1;
    }
}

// Imprimimos la cantidad de cada tipo de fruta
console.log("Conteo de frutas con for:");
console.log(contadorFrutas);
