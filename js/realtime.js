// Real-time clock
function updateClock() {
  const now = new Date();
  const options = {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };
  const timeString = now.toLocaleTimeString('en-US', options);
  document.getElementById('real-time-clock').textContent = timeString;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();

// Get user location and fetch weather
async function getLocationWeather() {
  try {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude: lat, longitude: lon } = position.coords;
        await fetchWeather(lat, lon);
      }, async (error) => {
        console.error('Error getting location:', error);
        // Fallback to default city if location permission denied
        await fetchWeather(17.3850, 78.4867, 'Hyderabad');
      });
    } else {
      // Fallback if geolocation not supported
      await fetchWeather(17.3850, 78.4867, 'Hyderabad');
    }
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
}

// Fetch weather data
async function fetchWeather(lat, lon, city = '') {
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
    const data = await response.json();
    const weatherInfo = document.getElementById('weather-info');
    const weatherCode = data.current_weather.weathercode;
    const weatherIcon = getWeatherIcon(weatherCode);

    weatherInfo.innerHTML = `
      <div class="flex items-center space-x-2">
        <img src="${weatherIcon}" alt="Weather Icon" class="weather-icon">
        <span>${city || `${data.latitude.toFixed(2)}, ${data.longitude.toFixed(2)}`}</span>
        <span>${Math.round(data.current_weather.temperature)}°C</span>
      </div>
    `;
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
}

// Function to get weather icon based on weather code
function getWeatherIcon(code) {
  const icons = {
    0: 'https://www.weatherbit.io/static/img/icons/c01d.png', // Clear sky
    1: 'https://www.weatherbit.io/static/img/icons/c02d.png', // Mainly clear
    2: 'https://www.weatherbit.io/static/img/icons/c03d.png', // Partly cloudy
    3: 'https://www.weatherbit.io/static/img/icons/c04d.png', // Overcast
    45: 'https://www.weatherbit.io/static/img/icons/a05d.png', // Fog
    48: 'https://www.weatherbit.io/static/img/icons/a05d.png', // Depositing rime fog
    51: 'https://www.weatherbit.io/static/img/icons/d01d.png', // Drizzle: Light
    53: 'https://www.weatherbit.io/static/img/icons/d02d.png', // Drizzle: Moderate
    55: 'https://www.weatherbit.io/static/img/icons/d03d.png', // Drizzle: Dense intensity
    56: 'https://www.weatherbit.io/static/img/icons/f01d.png', // Freezing Drizzle: Light
    57: 'https://www.weatherbit.io/static/img/icons/f01d.png', // Freezing Drizzle: Dense intensity
    61: 'https://www.weatherbit.io/static/img/icons/r01d.png', // Rain: Slight
    63: 'https://www.weatherbit.io/static/img/icons/r02d.png', // Rain: Moderate
    65: 'https://www.weatherbit.io/static/img/icons/r03d.png', // Rain: Heavy intensity
    66: 'https://www.weatherbit.io/static/img/icons/f01d.png', // Freezing Rain: Light
    67: 'https://www.weatherbit.io/static/img/icons/f01d.png', // Freezing Rain: Heavy intensity
    71: 'https://www.weatherbit.io/static/img/icons/s01d.png', // Snow fall: Slight
    73: 'https://www.weatherbit.io/static/img/icons/s02d.png', // Snow fall: Moderate
    75: 'https://www.weatherbit.io/static/img/icons/s03d.png', // Snow fall: Heavy intensity
    77: 'https://www.weatherbit.io/static/img/icons/s04d.png', // Snow grains
    80: 'https://www.weatherbit.io/static/img/icons/r04d.png', // Rain showers: Slight
    81: 'https://www.weatherbit.io/static/img/icons/r05d.png', // Rain showers: Moderate
    82: 'https://www.weatherbit.io/static/img/icons/r06d.png', // Rain showers: Violent
    85: 'https://www.weatherbit.io/static/img/icons/s01d.png', // Snow showers slight
    86: 'https://www.weatherbit.io/static/img/icons/s02d.png', // Snow showers heavy
    95: 'https://www.weatherbit.io/static/img/icons/t01d.png', // Thunderstorm: Slight or moderate
    96: 'https://www.weatherbit.io/static/img/icons/t02d.png', // Thunderstorm with slight hail
    99: 'https://www.weatherbit.io/static/img/icons/t03d.png' // Thunderstorm with heavy hail
  };
  return icons[code] || 'https://www.weatherbit.io/static/img/icons/unknown.png'; // Default icon if code not found
}

// Update weather every 30 minutes
getLocationWeather();
setInterval(getLocationWeather, 30 * 60 * 1000);

// Fetch a random quote from the Quotes API
async function fetchRandomQuote() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/well300/quotes-api/main/quotes.json');
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];
    return { quote: randomQuote.quote, author: randomQuote.author };
  } catch (error) {
    console.error('Error fetching quote:', error);
    return { quote: "Error fetching quote", author: "Unknown" };
  }
}

// Display a random quote
async function displayRandomQuote() {
  const quoteText = document.querySelector('.quote-text');
  const quoteAuthor = document.querySelector('.quote-author');
  const { quote, author } = await fetchRandomQuote();
  quoteText.textContent = `"${quote}"`;
  quoteAuthor.textContent = `- ${author}`;
  adjustFontSizeToFit(quoteText);
}

// Adjust font size to fit the quote box
function adjustFontSizeToFit(element) {
  const parent = element.parentElement;
  let fontSize = 14; // Start with the maximum font size
  element.style.fontSize = `${fontSize}px`;
  while ((element.scrollWidth > parent.clientWidth || element.scrollHeight > parent.clientHeight) && fontSize > 10) {
    fontSize -= 1;
    element.style.fontSize = `${fontSize}px`;
  }
  element.style.overflowX = 'auto';
}

// Get new quote whenever the user opens the website
document.addEventListener('DOMContentLoaded', displayRandomQuote);

// Resume download functionality
document.querySelector('.resume-button').addEventListener('click', () => {
  const resumeUrl = 'https://docs.google.com/document/d/1GSFteTbWVrHDw3NNlsCJ1pa1bSEqD_cXzeTWCIxDkl4/export?format=pdf';
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'Mude_Charan_Naik_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// Add hover animations
document.querySelectorAll('a, button').forEach(element => {
  element.addEventListener('mouseenter', () => {
    element.classList.add('scale-105', 'transition-transform');
  });
  element.addEventListener('mouseleave', () => {
    element.classList.remove('scale-105');
  });
});
