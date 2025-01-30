// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
// var lyricsData = [
//   { text: "At the time", time: 15 },
//   { text: "The whisper of birds", time: 18 },
//   { text: "Lonely before the sun cried", time: 27 },
//   { text: "Fell from the sky", time: 32 },
//   { text: "Like water drops", time: 33 },
//   { text: "Where I'm now? I don't know why", time: 41 },
//   { text: "Nice butterflies in my hands", time: 47 },
//   { text: "Too much light for twilight", time: 54 },
//   { text: "In the mood for the flowers love", time: 59 },
//   { text: "That vision", time: 67 },
//   { text: "Really strong, blew my mind", time: 72 },
//   { text: "Silence Let me see what it was", time: 78 },
//   { text: "I only want to live in clouds", time: 83 },
//   { text: "Where I'm now? I don't know why", time: 91 },
//   { text: "Nice butterflies in my hands", time: 97 },
//   { text: "Too much light for twilight", time: 104 },
//   { text: "In the mood for the flowers love", time: 108 },
//   { text: "At the time", time: 144 },
//   { text: "The whisper of birds", time: 148 },
//   { text: "Lonely before the sun cried", time: 153 },
//   { text: "Fell from the sky", time: 158 },
//   { text: "Like water drops", time: 164 },
//   { text: "Where I'm now? I don't know why", time: 169 },
//   { text: "Nice butterflies in my hands", time: 176 },
//   { text: "Too much light for twilight", time: 183 },
//   { text: "In the mood for the flowers", time: 188 },
//   { text: "Love.", time: 140 },
// ];

var lyricsData = [
  { text: "Tengo ganas", time: -1.5 },
  { text: "Tengo tiempo y mil canciones que cantarte", time: 1.5 },
  { text: "Tengo historias, tengo cosas que contarte", time: 6.5 },
  { text: "Mas hoy tengo tu llegada", time: 11.5 },
  { text: "Y mi mano voy a darte", time: 13.5 },
  { text: "Es tan lindo cuando existe un sentimiento", time: 18.5 },
  { text: "Y cuando quieres", time: 23.5 },
  { text: "Cuando cuentas, sin callarte", time: 25.5 },
  { text: "Que prefieres", time: 28.5 },
  { text: "Por ejemplo yo quisiera si no es mucho", time: 30.5 },
  { text: "Que te quedes", time: 35.5 },
  { text: "Dame solo un momento", time: 39.5 },
  { text: "Dame amor del más cierto", time: 42.5 },
  { text: "No te pido más nada", time: 44.5 },
  { text: "Dame de tu mirada", time: 48.5 },
  { text: "Y de tus sentimientos", time: 51.5 },
  { text: "Siente si estoy sintiendo", time: 54.5 },
  { text: "No te quedes", time: 57.5 },
  { text: "No revises el pasado que entristece", time: 60.5 },
  { text: "No te niegues si el amor te pertenece", time: 64.5 },
  { text: "Ven y siéntate a mi lado", time: 69.5 },
  { text: "Mira el día que amanece", time: 72.5 },
  { text: "No respondas callada", time: 99.5 },
  { text: "Mucho menos ahora", time: 103.5 },
  { text: "No me digas mañana", time: 105.5 },
  { text: "Es que vi que pasabas", time: 110.5 },
  { text: "Me acerqué porque pienso", time: 112.5 },
  { text: "Que por ti yo esperaba", time: 115.5 },
  { text: "Tengo ganas", time: 117.5 },
  { text: "Tengo tiempo y mil canciones que cantarte", time: 120.5 },
  { text: "Tengo historias, tengo cosas que contarte", time: 125.5 },
  { text: "Mas hoy tengo tu llegada", time: 130.5 },
  { text: "Y mi mano voy a darte", time: 132.5 },
  { text: "Voy a darte", time: 134.5 }
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.3; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);
 