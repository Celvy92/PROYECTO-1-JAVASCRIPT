    //HERENCIA


    //Paso 1. Creación de la clase principal (clase padre, superclase)
    class Persona {
        constructor(nombre, edad){
                //En el constructor inicilizamos atributos de la clase
            this.nombre = nombre
            this.edad = edad
        }
            //Métodos de la clase
            saludar(nombrePersona){
                console.log("Hola," nombrePersona);
            }
    }

    let persona1 = new Persona("Isaac", 21)
    console.log("Hola,", nombrePersona); 

//Paso 2. Crear una subclase (Estudiante)
class Estudiante extends Persona{
    constructor(nombre, edad, materias){
        //Para poder heredar los atributos de la clase padre, tengo que llamar primero al 
        //super constuctor 
        super(nombre, edad)
        //el método super() es equivalente a si yo copiara y pegara los atributos y métodos de la 
        //super clase en mi clase hijo
    }
    // saludar()
}

let estudiante1 = new Estudiante("Celeste", 24, ["Conducta del consumidor", "Investigacion de mercados"])
console.log(estudiante1); 
//console.log(persona1.obtenerMaterias()); -Me devuelve error porque la superclase NO hereda los métodos 
//y atributos de su clase hijo. 

let estudiante2 = new Estudiante("Karla", 24, ["Fundamentos de Administración", "Finanzas corporativas"])
console.log(estudiante2);

class EstudianteMusica extends Estudiante{
    constructor(nombre, edad, materias, instrumento){
        //Llamo al constructor de la clase padre de EstudianteMusica, que en este caso es Estudiante 
super(nombre, edad, materias)
this.instrumento
    }
    //Métodos
}

let EstudianteMusica = new EstudianteMusica("Anayanci", 24, ["Música", "Letras", "Guitarra"])
console.log("Estudiante de música" EstudianteMusica);
console.log(EstudianteMusica.saludar("Salomé")); 