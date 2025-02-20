//Ejemplo 1: Crear un arreglo simple
let frutas = ["Mango", "Papaya", "Arandano", "Uva", "Naranja", "Sandia"]
console.log("Lista de frutas:", frutas);


//Ejemplo 2: Acceder a elementos de un arreglo
console.log("Primera fruta:", frutas[0]);
console.log("Segunda fruta:", frutas[1]);
console.log("Última fruta:", frutas[frutas.length - 1]); //frutas.length se refiere al Número de elementos que se encuentran dentro del arreglo, es decir, su longitud

//Ejemplo 3: Modificar un elemento del arreglo 

frutas[4] = "Guayaba"
console.log("Frutas actualizadas:", frutas);