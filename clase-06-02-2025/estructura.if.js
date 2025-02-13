/*
Estructura de control IF en Javascript 
-permite ejecutar código sólo si se cumple una condición. 
-puede usarse con operadores de comparación y lógicos.
*/

let edad = 18
let tieneINE = true

//Condicional simple
if(edad >= 18 && tieneINE){
    console.log("Tienes los requisitos para votar ")
}

console.log("Fin de la ejecución");
//Condicional con else
if(edad >= 18 && tieneINE){
    console.log();
}else{
    console.log("uno o más requisitos no se cumplen, verifica tu información");
}

//Condicional con else if
if(edad < 13){
    console.log("Eres un niño");
}else if(edad < 18){
    console.log("Eres un adolescente")
}else{
    console.log("Eres un adulto")

}

console.log("Fin de la ejecución");

let tieneEntrada = false
if(!tieneEntrada){
    console.log("Debe comprar una entrada");
}
console.log("Fin de la ejecución");
