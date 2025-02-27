//FUNCIONES CON JAVASCRIPT

/*
    Una función es un bloque de código REUTILIZABLE que realiza una tarea en especifico
    Nos permite escribir código más organizado y evitar repetir instrucciones 
*/


//Sintaxis básica de una función
function saludar (){
    console.log("Hola mundo!");
}


//Paso 2. Llamar a la función, o la estamos ejecutando
saludar()
saludar()
saludar()//Puedo llamarla cuantas veces quiera 


//Creo una función parámetros y argumentos
//Los parámetros son variables que una función recibe al ser llamada
function saludarPersona(nombre) {
    console.log("Hola ", nombre, "!");
}

//Aquí "nombre" es un parámetro y "Blanca" es el argumento
saludarPersona("Blanca")
saludarPersona("Alejandra")
saludarPersona("Cipriano")

//Si no especificamos un return, la función nos devuelve undefined
console.log(saludar());
console.log(saludarPersona("Kitty"));

 //Una función puede devolver un valor con "return"
 function suma(num1, num2){
    return num1 + num2
 }

 console.log(suma(9,6));
 console.log(suma(7,10));
 console.log(suma("Hola"," a todos"));

 function resta(num1, num2){
    let resta = num1 - num2
    return resta
 }

 console.log(resta(2,10))//Guardamos el resultado en una variable
 console.log(resultado);

 function saludoMayuscula(nombre) {
    function mayuscula(string){
    return string.toUpperCase()
 }
 return mayuscula (nombre)
}

console.log(saludoMayuscula)("Kendra"));
//console.log(mayuscula("Hola")); //Devuelve error porque mayuscula sólo vive dentro de saludoMayuscula
