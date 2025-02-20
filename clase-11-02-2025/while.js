//Ejemplo 1: Contador simple co while

let Contador = 1;

while (Contador <= 5){
console.log("El contador está en el ciclo:", Contador);
Contador++ //<- es equivalente a contador = contador + 1, o contador += 1

}
//Ejemplo 2: Contador en reversa

let cuentaRegresiva = 10

while (cuentaRegresiva >= 0) {
    console.log("Cuenta regresiva", cuentaRegresiva);
cuentaRegresiva--
}

//Ejemplo 3: Solicitar confirmación hasta que el usuario acepte

let confirmación = true //Confirmaciones de true o false las solemos conocer también como banderas o flags

while(confirmación){
//Otras tareas dentro del ciclo
confirmación = confirm("Quieres realizar otra operación?")//confirm devuelve true o false
console.log("Confirmación recibida", confirmación);

}