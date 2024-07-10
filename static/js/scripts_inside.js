// Scripts del sitio

function cargarOtraPagina(pag) {
    // Especifica la URL de la otra página que deseas cargar
    var urlOtraPagina = pag;

    // Utiliza la función fetch para obtener el contenido de la otra página
    fetch(urlOtraPagina)
        .then(response => response.text())
        .then(data => {
        // Actualiza el contenido del elemento main con el contenido de la otra página
        document.getElementById("main").innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}

