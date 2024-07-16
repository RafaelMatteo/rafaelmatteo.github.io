// Scripts del sitio

//
// function cargarOtraPagina(pag) {
//     // Especifica la URL de la otra página que deseas cargar
//     var urlOtraPagina = pag;

//     // Utiliza la función fetch para obtener el contenido de la otra página
//     fetch(urlOtraPagina)
//         .then(response => response.text())
//         .then(data => {
//         // Actualiza el contenido del elemento main con el contenido de la otra página
//         document.getElementById("main").innerHTML = data;
//         })
//         .catch(error => console.error('Error:', error));
// }
//

function cargarOtraPagina(url) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        document.getElementById("main").innerHTML = html;
        if (window.location.href.endsWith(url)) {
          // Reemplaza el estado actual si la URL es la misma
          history.replaceState({ url: url }, '', url);
        } else {
          // Agrega un nuevo estado al historial si la URL es diferente
          history.pushState({ url: url }, '', url);
        }
      })
      .catch(err => console.warn('Algo salió mal.', err));
  }
  
  // Escucha eventos de popstate para manejar el botón "atrás" del navegador
  window.addEventListener('popstate', function(event) {
    if (event.state && event.state.url) {
      cargarOtraPagina(event.state.url);
    }
  });

