function getWeather() {
  const cityInput = document.getElementById('city');
  const city = cityInput.value;

  if (city.trim() === '') {
    alert('Please enter a city name');
    return;
  }

  const apiKey = 'f8c17e4f978a8fd1d4b656d4cee40bf3';

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const weatherInfo = document.getElementById('weather-info');
      weatherInfo.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>Temperature: ${data.main.temp} &deg;C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Humidity: ${data.main.humidity}%</p>
      `;
      cityInput.value = '';
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      alert('Error fetching weather data. Please try again.');
    });
}

function toggleDarkMode() {
  const darkModeSwitch = document.getElementById('dark-mode-switch');
  document.body.classList.toggle('dark-mode', darkModeSwitch.checked);
  document.getElementById('weather-container').classList.toggle('dark-mode', darkModeSwitch.checked);
}