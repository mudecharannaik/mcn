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
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        const data = await response.json();
        
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
          <div class="flex items-center space-x-2">
            <span>${data.latitude.toFixed(2)}, ${data.longitude.toFixed(2)}</span>
            <span>${Math.round(data.current_weather.temperature)}°C</span>
            <span>${data.current_weather.weathercode}</span>
          </div>
        `;
      }, (error) => {
        console.error('Error getting location:', error);
        // Fallback to default city if location permission denied
        getWeather('Hyderabad');
      });
    } else {
      // Fallback if geolocation not supported
      getWeather('Hyderabad');
    }
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
}

// Fallback weather function
async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=17.3850&longitude=78.4867&current_weather=true`
    );
    const data = await response.json();
    
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
      <div class="flex items-center space-x-2">
        <span>Hyderabad</span>
        <span>${Math.round(data.current_weather.temperature)}°C</span>
        <span>${data.current_weather.weathercode}</span>
      </div>
    `;
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
}

// Update weather every 30 minutes
getLocationWeather();
setInterval(getLocationWeather, 30 * 60 * 1000);

// Quote API integration using Animechan
async function getDailyQuote() {
  try {
    const response = await fetch('https://animechan.vercel.app/api/random');
    const data = await response.json();
    const quoteText = document.querySelector('.quote-text');
    quoteText.textContent = `"${data.quote}" - ${data.character} (${data.anime})`;
    adjustFontSizeToFit(quoteText);
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}

// Adjust font size to fit the quote box
function adjustFontSizeToFit(element) {
  const parent = element.parentElement;
  let fontSize = parseInt(window.getComputedStyle(element).fontSize);
  while (element.scrollWidth > parent.clientWidth && fontSize > 10) {
    fontSize -= 1;
    element.style.fontSize = `${fontSize}px`;
  }
}

// Get new quote whenever the user opens the website
getDailyQuote();

// Resume download functionality
document.querySelector('.resume-button').addEventListener('click', () => {
  const resumeUrl = 'https://example.com/path/to/resume.pdf';
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
