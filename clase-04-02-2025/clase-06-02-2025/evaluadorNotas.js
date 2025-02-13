// Función para evaluar la nota de un estudiante
function evaluarNota(nota) {
    if (nota >= 90) {
        console.log(`Nota: ${nota} - Excelente`);
    } else if (nota >= 75) {
        console.log(`Nota: ${nota} - Bien`);
    } else if (nota >= 60) {
        console.log(`Nota: ${nota} - Suficiente`);
    } else {
        console.log(`Nota: ${nota} - No aprobaste`);
    }
}

// Pruebas con diferentes valores de nota
evaluarNota(95);  // Excelente
evaluarNota(80);  // Bien
evaluarNota(70);  // Suficiente
evaluarNota(50);  // No aprobaste
evaluarNota(0);   // No aprobaste

// Prueba con un valor aleatorio entre 0 y 100
let notaAleatoria = Math.floor(Math.random() * 101);
console.log("Probando con nota aleatoria:");
evaluarNota(notaAleatoria);
