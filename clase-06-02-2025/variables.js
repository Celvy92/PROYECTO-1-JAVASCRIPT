/*
Diferencias entre var -let y const en Javascript
-var: se puede reasignar y redeclaras en cualquier parte del código.
-let: se puede reasignar, pero NO se puede redeclarar en el mismo ámbito.
-const: no se puede reasignar ni redeclarar; es un valor constante
*/

//VAR
var nombre = "Celeste"   //Declaramos una variable con var
nombre = "Kendra"     //Reasignando el valor de nombre
var nombre = "Lya"   //Redeclaro la variable sin problema
console.log(nombre)

//LET
let apellido ="Hernández" //Declarando la variable con let
apellido = "Arauz" //Reasignando el valor de apellido
//let apellido = "Peralta" //Esto daría error por que no se puede redeclarar en el mismo ámbito

//CONST
const gravedad = 9.81 M/s2" //Declaramos una constante con const
gravedad = "10.1 M/s2" //Esto daría error por que no se puede reasignar constantes
const gravedad = "1.0 M/s2" //Esto daría error por que no se puede redeclarar una constante en el mimso ámbito.
