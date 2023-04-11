const apiKey = 'b6cf6bed156d9678a930200c0d7872ad';

// Function to fetch weather data for a given city
async function getWeatherData(city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await fetch(apiURL);
  const data = await response.json();
  return data;
}

// Function to fetch forecasted weather data for a given city
async function getForecastData(city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
  const response = await fetch(apiURL);
  const data = await response.json();
  return data;
}

// Function to display current weather data for a given city
function displayCurrentWeather(city, data) {
  const cityName = data.name;
  const date = new Date(data.dt * 1000).toLocaleDateString();
  const iconURL = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const temperature = data.main.temp;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;

  // Code to display the current weather data on the dashboard
  // ...
}

// Function to display forecasted weather data for a given city
function displayForecast(city, data) {
  const forecastData = data.list.filter((item) => {
    // Filter forecast data to only include data for the next 5 days
    const forecastDate = new Date(item.dt * 1000);
    const today = new Date();
    const daysDiff = (forecastDate - today) / (1000 * 3600 * 24);
    return daysDiff >= 1 && daysDiff <= 5;
  });

  // Code to display the forecast data on the dashboard
  // ...
}

// Function to handle a city search
async function handleCitySearch(city) {
  const currentData = await getWeatherData(city);
  const forecastData = await getForecastData(city);

  // Code to display the current and forecasted weather data for the given city on the dashboard
  displayCurrentWeather(city, currentData);
  displayForecast(city, forecastData);

  // Code to add the searched city to the search history on the dashboard
  // ...
}

// Event listener for the city search form
const searchForm = document.querySelector('#city-search-form');
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const city = searchForm.elements['city'].value;
  handleCitySearch(city);
});

// Event listener for the search history on the dashboard
const searchHistory = document.querySelector('#search-history');
searchHistory.addEventListener('click', (event) => {
  const city = event.target.textContent;
  handleCitySearch(city);
});
