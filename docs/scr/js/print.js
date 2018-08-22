const enter = document.querySelector('input'); // Traigo el input del html
const harryPotter = document.getElementById('harryPotter'); // Boton HP
const narnia = document.getElementById('narnia'); // Boton Narnia
const magos = document.getElementById('magos'); // Boton Magos

enter.addEventListener('keypress', (event)=>{
  let key = event.which || event.keyCode; // Devuelven el codigo de la tecla presionada
  if (key === 13) { // Condiciono que sea ejecute el envio con enter
    let movie = enter.value; // Si es enter guarda el valor.
    // console.log(movie);
    enter.value = ''; // Limpia el input de entrada
    getMovie(movie);
  }
});

harryPotter.addEventListener('click', event => {
  getMovie('Harry Potter');
});

narnia.addEventListener('click', event => {
  getMovie('Narnia');
});

magos.addEventListener('click', event => {
  getMovie('Magos');
});

const printInfo = (response) =>{
  console.log(response.Search);// Responde con los titulos encontrados
  let resp = response.Search;
  resp.forEach((Title) => {
    console.log(Title);
  });
};