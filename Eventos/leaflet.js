// 1. Crea unha páxina web que visualice un mapa centrado en base á xeolocalización da
// persoa usuaria.
// Configura o mapa para que ao pulsar nun punto, se engada un marcador con un
// popup que informe sobre o posicionamento (latitude, lonxitude). Cada vez que se
// pulse nun novo punto do mapa, o marcador aparecerá posicionado na nova
// localización pulsada informando sobre as coordenadas actuais.
// Fai que as coordenadas aparezan con 6 cifras decimais.

if ('geolocation' in navigator) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(
    function (posicion) {
      console.log(posicion);
      // desestruturación de obxectos
      const { latitude, longitude } = posicion.coords;
      console.log(`latitude: ${latitude}, lonxitude: ${longitude}`);
    },
    function (error) {
      console.log(`ERROR(${error.code}): ${error.message}`);
    }
  );
} else {
  /* geolocation IS NOT available */
}
const map = L.map('map', { center: [42.87876, -8.547238], zoom: 17 });
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let marker = L.marker();
let popup = L.popup();

function onMapClick(e) {
  const { lat, lng } = e.latlng;

  marker.setLatLng([lat, lng]).addTo(map);
  marker
    .bindPopup(`Latitude: ${lat.toFixed(6)}<br>Lonxitude: ${lng.toFixed(6)}`)
    .openPopup();
}
map.on('click', onMapClick);

// 2. Crea unha aplicación web na que se poidan marcar puntos nun mapa e que se
// almacenen no LocalStorage. A aplicación debe ofrecer as seguintes funcionalidades:

// a. Inicialmente debe mostrar un mapa centrado en Galicia ou Santiago de
// Compostela, o que ti escollas.

// b. No lateral da páxina, haberá unha zona reservada para mostrar o listado de
// puntos creados no mapa.

// c. Cando se pulse sobre punto do mapa aparecerá un formulario no lateral con,
// polo menos, unha caixa de texto para escribir unha descrición do punto. A
// caixa de texto debe ter o foco de forma automática. Podes engadir máis
// campos ao formulario para describir mellor o novo punto.
// 8
// APIs de JavaScript

// d. Para gardar un novo punto no mapa, simplemente haberá que pulsar
// ENTER, estando o foco na caixa de texto.

// e. A aplicación almacena a lista de puntos gardados e mostra no lateral unha
// lista coa descrición de cada un en todo momento.

// f. Cando se pulsa sobre un punto da lista especificada no apartado anterior, o
// mapa reposicionarase mostrando o marcador no centro xunto con un popup
// coa descrición do punto.

// g. Deben poder eliminarse marcadores.

// h. Os puntos gardados na aplicación deben permanecer aínda que se cerre o
// navegador.
