let frutas = ["Melón"]//Creamos el arreglo 
let otrasFrutas = ["Uva", "Aguacate"]

//Métodos comunes en arreglos 

//.push(<nuevoElemento>) -> Agrega un elemento al FINAL del arreglo
frutas.push("Sandia")
frutas.push("Guanábana")
frutas.push(otrasFrutas) //-> length = 4 porque agrega todo el arreglo completo en la última posición
console.log("Despues de push", frutas);

//.pop() -> Elimina el último elemento del arreglo
console.log(frutas.pop()); //Obtengo el último elemento y lo saco de la estructura
console.log("Después de pop", frutas);

//.unshift(<nuevoElemento>) ->Agregamos un elemento al INICIO del arreglo
frutas.unshift("Arandanos")
console.log("Después de unshift", frutas);

//.shift() -> Elimina el PRIMER elemento
console.log(frutas.shift());
console.log("Después de shift"; frutas);


// .map() -> CREA un nuevo arreglo transforrmando cada elemento de mi arreglo
/*
    .map() recorre cada elemento del arreglo original y devuelve un nuevo arreglo con los elmentos transformados. 
    el arreglo original NO se modifica
*/

//Ejemplo 1: Multiplicamos cada elemento (item) del arreglo por dos
let numeros =[1,2,3]

let numerosPorDos = numeros.map( (numero) => numero * 2)
    
console.log("Números multiplicados por dos", numeroPorDos);

//Ejemplo 2: Convertir cada fruta en mayúsculas 
let frutasEnMayusculas = frutas.map((fruta) => fruta.toUpperCase()) //toUpperCase() convierte caracteres en mayúsculas
console.log("Frutas en mayúsculas", frutasEnMayusculas);

"CADENA".toLowerCase() //Convierte caracteres en minúsculas

//let frutasEnMinuscula = 
frutasEnMayusculas.map((fruta) =>
frutasEnMayusculas.toLowerCase()) //Me devuelve error porque trato de convertir en minusculas un arreglo
//console.log("Ejercicio 1.1", frutasEnMinuscula);

let frutasEnMinuscula = frutas.map((fruta) => 
fruta.toLowerCase())
console.log("Ejercicio 1.2". frutasEnMinusculas);


//.sort() -> Ordena los elementos del arreglo en orden alfabético 
/*
    .sort() cambia el orden de los elementos del arreglo original de manera alfabética o númerica si se proporciona una FUNCIÓN de comparación.
    Este método MODIFICA el arreglo original
*/

let verduras =["Calabaza", "Espinaca", "Zanahoria"]

console.log("verduras ordenadas alfabeticamente A-Z", verduras.sort()); //Ordena el arreglo de manera alfabetica si no colocamos ningún argumento
console.log("Verduras ordenadas Z-A", verduras.reverse());//Revertimos los elementos del arreglo


//.sort() con números -> IMPORTANTE que si usamos sort directamente con números, los ordenara como texto
let numerosOrdenadosIncorrectamente = [9,15,10,31,26,6,7]
console.log("Números ordenados incorrectamente", numerosOrdenadosIncorrectamente.sort());

//Para ordenar correctamente números debemos proporcionar una FUNCIÓN de comparación
let numerosOrdenadosCorrectamente = [9,15,10,31,26,6,7]
console.log("Numeros Ordenados correctamente", numerosOrdenadosCorrectamente.sort((num1, num2)=>a-b));

/*
La función de comparación toma dos números (num1 y num2)
-Si num1 es MENOR que num2, la resta da un número NEGATIVO, entonces num1 va antes que num2
-Si num1 es MAYOR que num2, la resta da un número POSITIVO, entonces num1 va después que num2
-Si num1 y num2 son iguales, la resta da cero y su orden no cambia 
Nota-Estas opciones se van a repetir en cada iteración hasta que los números esten ordenados
*/

let numerosOrdenadosMayorMenor = [9,15,10,31,26,6,7]

console.log("Números ordenados mayor a menor", numerosOrdenadosCorrectamente.sort((num1, num2)=>num2-num1))