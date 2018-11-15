const getMovie = (movie) =>{ 
  // console.log(movie);
  fetch(`https://www.omdbapi.com/?s=${movie}&apikey=f83bf528`) // Llamo a fetch
    .then(response => response.json()) // Primer promesa que devuelve el json
    .then(response=>{
      // console.log(response);
      printInfo(response); // Mando data a impresion 
    })
    .catch(error=> error); // Con esto retorna automaticamente el error
};