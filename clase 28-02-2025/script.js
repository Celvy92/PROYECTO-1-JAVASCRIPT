document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se recargue

    const commentText = document.getElementById('commentInput').value;

    if (commentText.trim() !== "") {
        // Obtener la fecha y hora actual
        const date = new Date();
        const dateString = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

        // Crear el nuevo comentario
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');

        // Crear el contenido del comentario
        commentDiv.innerHTML = `
            <p>${commentText}</p>
            <p class="date">${dateString}</p>
            <button class="deleteBtn">Eliminar</button>
        `;

        // Agregar el comentario a la lista
        document.getElementById('commentsContainer').appendChild(commentDiv);

        // Limpiar el campo de texto
        document.getElementById('commentInput').value = "";

        // Agregar funcionalidad al botón de eliminar
        const deleteButton = commentDiv.querySelector('.deleteBtn');
        deleteButton.addEventListener('click', function() {
            commentDiv.remove();
        });
    } else {
        alert("Por favor, escribe un comentario.");
    }
});
