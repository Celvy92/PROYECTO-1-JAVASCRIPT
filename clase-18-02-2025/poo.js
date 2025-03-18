/*
        POO
        - CLASE: Es una plantilla para crear objetos, define atributos y métodos. Se define 
        con la palabra reservada class seguido del nombre empezando por mayúscula y en singular. 
        - OBJETO: Es la instancia de una clase, con ss propios valores para los 
        atributos definidos en la clase. 
        - ATRIBUTO: Son las caracteristicas o propiedades de una clase. 
        - MÉTODOS: Son las funciones dentro de una clase que definen el comportamiento de los objetos. 
        - CONSTRUCTOR: Es un método especial de una clase que se ejecuta automaticamente al crear un
        objeto. Sirve para inicializar los atributos de la clase. 

 */
let edad = "Una edad" 
let edad = "Una nacionalidad"
        //PASO 1: Definición de una clase con sus atributos y métodos
        class Persona {

            //ATRIBUTOS dentro del CONSTRUCTORa
            constructor(nombre, edad, nacionalidad) {
                this.nombre
                this.edad
                this.nacionalidad
            }

            //MÉTODOS DE LA CLASE
            saludar(){
           console.log ("Hola, mi nombre es", this.nombre, "tengo", edad, "años, soy", nacionalidad);

            }
        }

        //PASO 2. Creación del/los objetos a partir de la clase
        let persona1 = new Persona("Celeste", 24, "Mexicana")

        console.log(persona1)
        //PASO 3. Llamar a los métdos de mi objeto 
        persona1.saludar()

        //Ejercicio: Crear un objeto a partir de la clase persona con los datos de nombre = Lucia
        //edad =30 y nacionalidad = Canadiense
        let persona2 =new Persona("Alejandro", 25, "Frances")