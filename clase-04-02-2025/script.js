/*
TIPOS DE DATOS DE JAVASCRIPT
*/

// Tipo: Number (Número)
var edad = 25
var precio = 15.59
var puntos = 0
var temperatura = -28

// Tipo: String (Texto
var nombre = "Celeste" //Con comillas dobles
var saludo = 'Hola, ¿Cómo te llamas?' //Con comillas simples
var character = "c"
var edadCadena = "25"

//Tipo: Boolean (Booleano)
var esMayor = true //Verdadero
var tienePermiso =false //Falso

//Tipo: Symbol (Identificador único)
var indentificador1 = Symbol("id")
var identificador2 = Symbol("id")

//Tipo: BigInt (Números muy grandes)
var numeroGrande =637372294749018283737n //Notar la "n" al final

/*
    NULL, UNDEFINED y NaN en Javascript
*/

//Tipo: Null (Valor vacio Intencionalmente)
var vacio = null

//Tipo: undefined (Valor NO asignado)
var sinDefinir

//Tipo NaN (Not a Number - Un no numero , esto pasa cuando una operación no es un número válido)
var resultadoInvalido = "Hola" * 10

/*
    ¿Qué es console log?
    console.log se usa para mostrar valores en la consola del navegador.
    Es útil para depurar y enetender como funcionan las variables en el código.
*/


console.log(edad)
console.log(nombre)

/*
    ¿Qué es typeof?
    typeof nos permite conocer el tipo de dato de una variable.
    Es útil para depuración y validaciones de código.
*/

console.log(typeof edad)
console.log(typeof edadCadena)