// Reinicializamos el objeto para probar con while
const contadorFrutasWhile = {};

// Usamos un ciclo while para recorrer el arreglo
let i = 0;
while (i < frutas.length) {
    let fruta = frutas[i];
    if (contadorFrutasWhile[fruta]) {
        contadorFrutasWhile[fruta]++;
    } else {
        contadorFrutasWhile[fruta] = 1;
    }
    i++;
}

// Imprimimos la cantidad de cada tipo de fruta
console.log("Conteo de frutas con while:");
console.log(contadorFrutasWhile);
