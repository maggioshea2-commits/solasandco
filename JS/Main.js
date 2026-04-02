var buttons = document.querySelectorAll('.acc-btn');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    var content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});
var seanfhocail = [
  "Ní neart go cur le chéile — There is no strength without unity",
  "Is fearr Gaeilge briste ná Béarla cliste — Broken Irish is better than clever English",
  "Mol an óige agus tiocfaidh sí — Praise the young and they will flourish",
  "Ní bhíonn an rath ach mar a mbíonn an smacht — There is no luck without discipline",
  "Is binn béal ina thost — A silent mouth is sweet",
  "Ar scáth a chéile a mhaireann na daoine — People live in each other's shelter",
  "Níl aon tinteán mar do thinteán féin — There is no hearth like your own hearth"
];

function getQuote() {
  var random = Math.floor(Math.random() * seanfhocail.length);
  document.getElementById('quote-text').textContent = seanfhocail[random];
}

getQuote();

fetch('https://api.open-meteo.com/v1/forecast?latitude=53.3498&longitude=-6.2603&current_weather=true')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var temp = Math.round(data.current_weather.temperature);
    var code = data.current_weather.weathercode;

    document.getElementById('weather-temp').textContent = 'Dublin: ' + temp + '°C';

    var desc = 'Mixed conditions';
    if (code === 0) desc = 'Clear sky';
    if (code === 1 || code === 2) desc = 'Partly cloudy';
    if (code === 3) desc = 'Overcast';
    if (code >= 51 && code <= 67) desc = 'Rainy';
    if (code >= 71 && code <= 77) desc = 'Snowy';
    if (code >= 80 && code <= 82) desc = 'Showers';
    document.getElementById('weather-desc').textContent = desc;

    var tip = 'A dewy primer will brighten your look on a grey day!';
    if (code >= 51 && code <= 82) tip = 'Rainy today! Use waterproof mascara and setting spray.';
    if (code === 0) tip = 'Rare Irish sunshine! Don\'t forget your SPF today.';
    if (temp < 5) tip = 'It\'s freezing! Apply extra moisturiser before your foundation.';
    document.getElementById('weather-tip').textContent = tip;
  });
