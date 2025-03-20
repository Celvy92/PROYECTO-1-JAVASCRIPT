document.addEventListener("DOMContentLoaded", () => {
    const campoContraseña = document.getElementById("contraseña");
    const sliderLongitud = document.getElementById("longitud");
    const valorLongitud = document.getElementById("valorLongitud");
    const checkMayusculas = document.getElementById("mayusculas");
    const checkMinusculas = document.getElementById("minusculas");
    const checkNumeros = document.getElementById("numeros");
    const checkSimbolos = document.getElementById("simbolos");
    const btnGenerar = document.getElementById("generarBtn");
    const btnCopiar = document.getElementById("copiarBtn");
    const nivelSeguridad = document.getElementById("nivelSeguridad");
    const barras = document.querySelectorAll(".barra");

    // Actualizar el valor del slider
    sliderLongitud.addEventListener("input", () => {
        valorLongitud.textContent = sliderLongitud.value;
    });

    // Generar contraseña
    btnGenerar.addEventListener("click", () => {
        const longitud = parseInt(sliderLongitud.value);
        const incluirMayusculas = checkMayusculas.checked;
        const incluirMinusculas = checkMinusculas.checked;
        const incluirNumeros = checkNumeros.checked;
        const incluirSimbolos = checkSimbolos.checked;

        campoContraseña.value = generarContraseña(longitud, incluirMayusculas, incluirMinusculas, incluirNumeros, incluirSimbolos);
        actualizarSeguridad(campoContraseña.value);
    });

    // Función para generar contraseña
    function generarContraseña(longitud, mayusculas, minusculas, numeros, simbolos) {
        const caracteresMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const caracteresMinus = "abcdefghijklmnopqrstuvwxyz";
        const caracteresNum = "0123456789";
        const caracteresSimb = "!@#$%^&*()_+[]{}|;:,.<>?";

        let caracteresDisponibles = "";
        if (mayusculas) caracteresDisponibles += caracteresMayus;
        if (minusculas) caracteresDisponibles += caracteresMinus;
        if (numeros) caracteresDisponibles += caracteresNum;
        if (simbolos) caracteresDisponibles += caracteresSimb;

        if (caracteresDisponibles === "") return "Selecciona opciones";

        let contraseña = "";
        for (let i = 0; i < longitud; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteresDisponibles.length);
            contraseña += caracteresDisponibles[indiceAleatorio];
        }

        return contraseña;
    }

    // Copiar contraseña
    btnCopiar.addEventListener("click", () => {
        if (campoContraseña.value !== "") {
            navigator.clipboard.writeText(campoContraseña.value);
            alert("Contraseña copiada al portapapeles");
        }
    });

    // Actualizar seguridad de la contraseña
    function actualizarSeguridad(contraseña) {
        let seguridad = 0;
        if (contraseña.length >= 8) seguridad++;
        if (/[A-Z]/.test(contraseña)) seguridad++;
        if (/[a-z]/.test(contraseña)) seguridad++;
        if (/[0-9]/.test(contraseña)) seguridad++;
        if (/[^A-Za-z0-9]/.test(contraseña)) seguridad++;

        const niveles = ["DÉBIL", "MEDIA", "FUERTE", "MUY FUERTE"];
        nivelSeguridad.textContent = niveles[seguridad - 1] || "DÉBIL";

        barras.forEach((barra, indice) => {
            barra.style.background = indice < seguridad ? "#28a745" : "gray";
        });
    }
});
