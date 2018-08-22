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
    space.innerHTML = '';
    getMovie(movie);
  }
});

harryPotter.addEventListener('click', event => {
  space.innerHTML = '';
  getMovie('Harry Potter');
});

narnia.addEventListener('click', event => {
  space.innerHTML = '';
  getMovie('Narnia');
});

magos.addEventListener('click', event => {
  space.innerHTML = '';
  getMovie('Magos');
});


const printInfo = (response) =>{
  console.log(response.Search);// Responde con los titulos encontrados
  let resp = response.Search;
  resp.forEach((movie) => {  
    let card = 
   `<div class="card-deck">
   <div class="card bg-light">
     <div class="card-body text-center">
     <img class="card-img-top" src=${movie.Poster}, alt="Ups! imagen not found">
       <p class="card-text">${movie.Title}</p>
       <p class="card-text">${movie.Year}</p>
       <p class="card-text">${movie.Type}</p>
     </div>
   </div>`;
    
    //   `<div class="card" style="width:400px">
    //   <img class="card-img-top" src=${movie.Poster}, alt="Ups! imagen not found">
    //   <div class="card-body">
    //     <h4 class="card-title">${movie.Title}</h4>
    //     <p class="card-text">${movie.Type}</p>
    //     <p class="card-text">${movie.Year}</p>  
    //   </div>
    // </div>`;
    space.innerHTML += card;
  });
};