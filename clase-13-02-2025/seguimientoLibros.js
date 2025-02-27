// Array para almacenar los libros leídos
let librosLeidos = [];

// Función para agregar un libro al array
function agregarLibro(titulo) {
    if (titulo) {
        librosLeidos.push(titulo);
        console.log(`Libro agregado: ${titulo}`);
    } else {
        console.log("Error: Debes ingresar un título.");
    }
}

// Función para mostrar todos los libros leídos
function mostrarLibrosLeidos() {
    if (librosLeidos.length > 0) {
        console.log("Libros leídos:");
        librosLeidos.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro}`);
        });
    } else {
        console.log("Aún no has leído ningún libro.");
    }
}

// Ejemplo de uso:
agregarLibro("Decodificado");
agregarLibro("El arte de la guerra");
agregarLibro("1984")
agregarLibro("El ruiseñor y la rosa")
agregarLibro("las 7 claves del éxito de Disney")
mostrarLibrosLeidos();
