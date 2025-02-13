/*
Operadores de Javascript

Tipos:
-Matematicos: para realizar calculos. 
*/

//operadores matematicos

let suma = 5 + 3
let resta = 6 - 2
let multiplicacion = 4 * 7
let division = 6 / 2
let modulo = 10 % 3
let exponente = 2 ** 3

console.log(suma, resta, multiplicacion, division, modulo, exponente);

/*
jerarquia de operaciones matematicas. 
1. Paréntesis ()
2. Exponentes **
3. Multiplicación y División /
4. Suma + y Resta -
*/

//Ejemplos de jerarquia
let operacion1 = 10 + 5 * 2 // 10 + (5 * 2) = 20
let operacion2 = (10 + 5) * 2 // 15 * 2 = 30

console.log(operacion1, operacion2);

//operadores de comparación
let mayor = 10 > 5 //Mayor que
let menor = 3 < 8 //Menor que
let igual = 5 == "5"// Comparacion de VALOR (true)
let estrictamenteIgual = 5 === "5" //Comparación estricta de VALOR y TIPO DE DATO (false)
var diferente = 5 != "5" //Diferente (false)
let estrictamenteDiferente = 5 !== "5" //Estrictamente diferente (true)

console.log(mayor, menor, igual, estrictamenteIgual, diferente, estrictamenteDiferente);


//Operadores lógicos
let and = (10 > 5 ) && (3 < 8) //AND (true)
let or = (10 > 5) || (3 < 8)//OR (true)
let not = !(10 > 5)// NOT (false)

console.log(and, or, not);

/*
Jerarquia de operadores lógicos
1. NOT (!) ->se evalúa primero
2. AND (&&) ->se evalúa segundo
3. OR (||) ->se evalúa al final

Nota: Siempre se evalúa lo que haya entre paréntesis primero
*/

//Ejemplo de jerarquia de operadores lógicos
var logico1= true || false && false //Primero evalúo AND = true || false = true
var logico2 = (true || false) && false //(true) && false = false
