const enter = document.querySelector('input'); // Traigo el input del html
const harryPotter = document.getElementById('harryPotter'); // Boton HP
const narnia = document.getElementById('narnia'); // Boton Narnia
const magos = document.getElementById('magos'); // Boton Magos
let space = document.getElementById('space'); // Div para impresion

enter.addEventListener('keypress', (event)=>{
  let key = event.which || event.keyCode; // Devuelven el codigo de la tecla presionada
  if (key === 13) { // Condiciono que sea ejecute el envio con enter
    let movie = enter.value; // Si es enter guarda el valor.
    // console.log(movie);
    enter.value = ''; // Limpia el input de entrada
    space.innerHTML = ''; // Limpia el contenedor para no sobre-escribir
    getMovie(movie);
  }
});

harryPotter.addEventListener('click', event => { // Detona click
  space.innerHTML = ''; // Limpia el contenedor antes de volver a escribir
  getMovie('Harry Potter'); // Ejecuta la funcion y pasa el parametro
});

narnia.addEventListener('click', event => { // Detona click
  space.innerHTML = ''; // Limpia el contenedor antes de volver a escribir
  getMovie('Narnia'); // Ejecuta funcion y pasa el parametro
});

magos.addEventListener('click', event => { // Detona click
  space.innerHTML = ''; // Limpia el contenedor antes de volver a escribir
  getMovie('Magos'); // Ejecuta funcion y pasa parametro
});


const printInfo = (response) =>{
  console.log(response.Search);// Responde con los titulos encontrados
  let resp = response.Search; // Guarda ruta en variable
  resp.forEach((movie) => { // Recorre la ruta
    let card = // Imprime la card
  `<div class="card border-success mb-3 rounded mx-auto d-block" style="max-width: 18rem;">
  <div class="card-header">${movie.Title}</div>
  <div class="card-body text-success">
  <a type="button" class="btn btn-primary" data-toggle="modal" data-target="#${movie.imdbID
}">
  <img class="card-img-top" src=${movie.Poster}, alt="Ups! imagen not found">
</a>
<div class="modal fade" id="${movie.imdbID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">${movie.Title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <p class="card-text">${movie.Year}</p>
       <p class="card-text">${movie.Type}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

  
       
  </div>
</div>`;

    space.innerHTML += card; // Agrega el contenido al div destinado
  });
};

