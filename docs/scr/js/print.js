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
   `<div class="card-deck">
   <div class="card bg-light">
     <div class="card-body text-center">
     <img class="card-img-top" src=${movie.Poster}, alt="Ups! imagen not found">
       <p class="card-text">${movie.Title}</p>
       <p class="card-text">${movie.Year}</p>
       <p class="card-text">${movie.Type}</p>
     </div>
   </div>`;
    space.innerHTML += card; // Agrega el contenido al div destinado
  });
};