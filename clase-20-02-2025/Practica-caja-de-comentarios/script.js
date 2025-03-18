document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("commentForm");
    const commentInput = document.getElementById("commentInput");
    const commentList = document.getElementById("commentList");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Obtener el texto del comentario
        const commentText = commentInput.value.trim();
        if (commentText === "") return;

        // Crear un nuevo elemento de comentario
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");

        // Obtener fecha y hora actual
        const now = new Date();
        const formattedDate = now.toLocaleString();

        // Insertar contenido del comentario
        commentDiv.innerHTML = `
            <p><strong>Comentario:</strong> ${commentText}</p>
            <p><small>${formattedDate}</small></p>
            <button class="delete-btn">Eliminar</button>
        `;

        // Agregar funcionalidad al botón de eliminar
        commentDiv.querySelector(".delete-btn").addEventListener("click", function () {
            commentDiv.remove();
        });

        // Agregar el comentario a la lista
        commentList.appendChild(commentDiv);

        // Limpiar el área de texto
        commentInput.value = "";
    });
});
