// Definimos la función constructora para los libros
function Libro(titulo, autor, anio, estado) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.estado = estado;
    this.capitulos = [];

    // Método para describir el libro
    this.describirLibro = function () {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    };

    // Método para agregar un capítulo
    this.agregarCapitulo = function (capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capítulo "${capitulo}" agregado al libro "${this.titulo}".`);
    };

    // Método para eliminar un capítulo
    this.eliminarCapitulo = function (capitulo) {
        const index = this.capitulos.indexOf(capitulo);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log(`Capítulo "${capitulo}" eliminado del libro "${this.titulo}".`);
        } else {
            console.log(`El capítulo "${capitulo}" no existe en el libro "${this.titulo}".`);
        }
    };
}

// Creando cinco libros de ejemplo
const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "disponible");
const libro2 = new Libro("1984", "George Orwell", 1949, "prestado");
const libro3 = new Libro("El Principito", "Antoine de Saint-Exupéry", 1943, "disponible");
const libro4 = new Libro("Orgullo y prejuicio", "Jane Austen", 1813, "prestado");
const libro5 = new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", 1605, "disponible");

// Llamamos al método describirLibro de cada libro
libro1.describirLibro();
libro2.describirLibro();
libro3.describirLibro();
libro4.describirLibro();
libro5.describirLibro();

// Agregamos capítulos a un libro
libro1.agregarCapitulo("Capítulo 1: La familia Buendía");
libro1.agregarCapitulo("Capítulo 2: La peste del insomnio");

// Eliminamos un capítulo
libro1.eliminarCapitulo("Capítulo 2: La peste del insomnio");

// Mostramos los capítulos restantes
console.log(`Capítulos de "${libro1.titulo}":`, libro1.capitulos);
