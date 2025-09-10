// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "../prediccciones/imagenes/guss.jpg",
  "../prediccciones/imagenes/isa.jpg",
  "../prediccciones/imagenes/manuel.jpg",
  "../prediccciones/imagenes/tom.jpg",
  "../prediccciones/imagenes/meli.jpg",
  "../prediccciones/imagenes/todos.jpg",
];

const titulos = [
  "Gus",
  "Isa",
  "Fandiño",
  "Tom",
  "Meli",
  "CLICK DE NUEVO",
];

const frases = [
  "Bajista. No se escucha. Kinda funny.",
  "Hermosa, magnífica, espectacular, tecladista dotada de talento.",
  "Bateria, es mandón, toca 25 instrumentos.",
  "Guitarrista, se enoja cuando tiene hambre. ¡JAZZ!",
  "Vocalista, líder de la banda, escribe las mejores letras.¡es PERFECTA!",
  "¡Somos FulHaus!",

];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3

  console.log(indice)

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();