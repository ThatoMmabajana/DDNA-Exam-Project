document.addEventListener('DOMContentLoaded', () => {
  getWeather();
});

function getWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(fetchWeather, showError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function fetchWeather(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const apiKey = '6eb7416e6f4852ed8dfa74edc7ea844b';

  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  fetch(weatherApiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherData = data;
      displayWeather(weatherData);
    })
    .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(weatherData) {
  const locationElem = document.getElementById('location');
  const dayElem = document.getElementById('day');
  const temperatureElem = document.getElementById('temperature');
  const weatherIconElem = document.getElementById('weather-icon');
  const weatherDescriptionElem = document.getElementById('weather-description');

  const locationName = `${weatherData.name}, ${weatherData.sys.country}`;
  const dayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const temperature = `${Math.round(weatherData.main.temp)}°C`;
  const iconCode = weatherData.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

  locationElem.textContent = ` ${locationName}`;
  dayElem.textContent = ` ${dayOfWeek}`;
  temperatureElem.textContent = ` ${temperature}`;
  weatherIconElem.style.backgroundImage = `url(${iconUrl})`;
  weatherDescriptionElem.textContent = ` ${weatherData.weather[0].description}`;
}

function showError(error) {
  alert(`Error getting location: ${error.message}`);
}
