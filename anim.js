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
  { text: "Tengo ganas", time: 0 },
  { text: "Tengo tiempo y mil canciones que cantarte", time: 3 },
  { text: "Tengo historias, tengo cosas que contarte", time: 6 },
  { text: "Mas hoy tengo tu llegada", time: 9 },
  { text: "Y mi mano voy a darte", time: 12 },
  { text: "Es tan lindo cuando existe un sentimiento", time: 15 },
  { text: "Y cuando quieres", time: 18 },
  { text: "Cuando cuentas, sin callarte", time: 21 },
  { text: "Que prefieres", time: 24 },
  { text: "Por ejemplo yo quisiera si no es mucho", time: 27 },
  { text: "Que te quedes", time: 30 },
  { text: "Dame solo un momento", time: 33 },
  { text: "Dame amor del más cierto", time: 36 },
  { text: "No te pido más nada", time: 39 },
  { text: "Dame de tu mirada", time: 42 },
  { text: "Y de tus sentimientos", time: 45 },
  { text: "Siente si estoy sintiendo", time: 48 },
  { text: "No te quedes", time: 51 },
  { text: "No revises el pasado que entristece", time: 54 },
  { text: "No te niegues si el amor te pertenece", time: 57 },
  { text: "Ven y siéntate a mi lado", time: 60 },
  { text: "Mira el día que amanece", time: 63 },
  { text: "No respondas callada", time: 66 },
  { text: "Mucho menos ahora", time: 69 },
  { text: "No me digas mañana", time: 72 },
  { text: "Es que vi que pasabas", time: 75 },
  { text: "Me acerqué porque pienso", time: 78 },
  { text: "Que por ti yo esperaba", time: 81 },
  { text: "Tengo ganas", time: 84 },
  { text: "Tengo tiempo y mil canciones que cantarte", time: 87 },
  { text: "Tengo historias, tengo cosas que contarte", time: 90 },
  { text: "Mas hoy tengo tu llegada", time: 93 },
  { text: "Y mi mano voy a darte", time: 96 },
  { text: "Voy a darte", time: 99 }
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
 