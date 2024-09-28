function openPopup(title, description) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-description').innerText = description;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Función para mostrar favoritos (puedes personalizar más tarde)
function showFavorites() {
    alert("Esta funcionalidad aún no está implementada.");
}

function toggleButton(event) {
    event.stopPropagation(); // Evita que se active el popup
    const button = event.target;
    button.classList.toggle('red'); // Cambia el color del botón
}

