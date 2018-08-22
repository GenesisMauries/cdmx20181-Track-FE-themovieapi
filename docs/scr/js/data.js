window.getData = (movie) =>{ // Generamos la funcion que necesita el test
  // console.log(movie);
  fetch(`http://www.omdbapi.com/?s=${movie}&apikey=f83bf528`) // Llamo a fetch
    .then(response => response.json()) // Primer promesa que devuelve el json
    .then(response=>{
      console.log(response);
      renderInfo(response); // Mando data a una nueva funcion
    })
    .catch(error=> error); // Con esto retorna automaticamente el error
};