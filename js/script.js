// 1. Dynamic Quote Generator (Hybrid API + Fallback Array)
// You can expand this array to hold your 2,000+ specific Data & Indian quotes.
const localQuotes = [
  "In God we trust, all others must bring data. – W. Edwards Deming",
  "Data is the new oil. – Clive Humby",
  "Arise, awake, and stop not till the goal is reached. – Swami Vivekananda",
  "Torture the data, and it will confess to anything. – Ronald Coase",
  "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, knowledge makes you great. – A.P.J. Abdul Kalam",
  "Without data, you're just another person with an opinion. – W. Edwards Deming",
  "You have the right to work, but never to the fruit of work. – Bhagavad Gita",
  "The goal is to turn data into information, and information into insight. – Carly Fiorina",
  "Be the change that you wish to see in the world. – Mahatma Gandhi",
  "Errors using inadequate data are much less than those using no data at all. – Charles Babbage"
];

async function updateQuote() {
  const quoteEl = document.getElementById('quote-display');
  
  try {
    // Attempt to fetch from the Quotable API (using tags for relevance)
    const response = await fetch('https://api.quotable.io/random');
    
    // If the API is down or returns an error, throw to the catch block
    if (!response.ok) throw new Error('API Offline or Rate Limited');
    
    const data = await response.json();
    
    // Format and display the API quote
    quoteEl.textContent = `${data.content} – ${data.author}`;
    
  } catch (error) {
    // BEST SCENARIO FALLBACK: If the API fails, serve a quote from your 2000+ local list
    const randomIndex = Math.floor(Math.random() * localQuotes.length);
    quoteEl.textContent = localQuotes[randomIndex];
  }
}

// Initialize quote and set interval to change every 15 seconds 
// (15s prevents the free API from blocking you for requesting too fast)
updateQuote();
setInterval(updateQuote, 15000);


// 2. Real-Time Clock (12-hour format)
function updateTime() {
  const timeEl = document.getElementById('time-display');
  const now = new Date();
  
  timeEl.textContent = now.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    hour12: true 
  });
}

updateTime();
setInterval(updateTime, 1000);


// 3. Geolocation & Weather Fetching
function fetchWeather() {
  const weatherEl = document.getElementById('weather-display');

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
          const data = await response.json();
          
          if (data && data.current_weather) {
            const temp = data.current_weather.temperature;
            weatherEl.innerHTML = `<i class="fas fa-cloud-sun"></i> ${temp}°C`;
          }
        } catch (error) {
          console.error("Error fetching weather:", error);
          weatherEl.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Weather error`;
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        weatherEl.innerHTML = `<i class="fas fa-location-arrow"></i> Loc. Denied`;
      }
    );
  } else {
    weatherEl.innerHTML = `Geolocation not supported`;
  }
}

fetchWeather();


// 4. Dark/Light Mode Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

// Check if user has a saved preference in local storage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Toggle theme on button click
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    themeIcon.classList.replace('fa-moon', 'fa-sun'); // Switch icon to sun
    localStorage.setItem('theme', 'dark'); // Save preference
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon'); // Switch icon to moon
    localStorage.setItem('theme', 'light'); // Save preference
  }
});

/// ==========================================
// PART 1: HERO SECTION LOGIC
// ==========================================

const typeWriterElement = document.getElementById('typewriter-text');
const wordsToType = ["Data Analyst.", "Data Enthusiast.", "Problem Solver."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = wordsToType[wordIndex];
  
  if (isDeleting) {
    typeWriterElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typeWriterElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    typingSpeed = 2000; 
    isDeleting = true;
  } 
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % wordsToType.length; 
    typingSpeed = 500; 
  }

  setTimeout(typeEffect, typingSpeed);
}

setTimeout(typeEffect, 1000);

// ==========================================
// SCROLL ANIMATION OBSERVER (Arrow Collision)
// ==========================================

// Create the observer to watch when the divider enters the screen
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('collide'); // Trigger animation
    } else {
      entry.target.classList.remove('collide'); // Reset when out of view
    }
  });
}, { threshold: 0.5 }); // Triggers when 50% of the element is visible on screen

// Target the specific divider and start observing
const longDivider = document.getElementById('long-scroll-divider');
if (longDivider) {
  observer.observe(longDivider);
}

// Start observing the divider
const scrollDivider = document.getElementById('scroll-divider');
if (scrollDivider) {
  observer.observe(scrollDivider);
}

// ==========================================
// 7. IP INFO API FETCHING (Part 6)
// ==========================================
async function fetchIpInfo() {
  const ipCard = document.getElementById('ip-info-card');
  if (!ipCard) return;

  try {
    // Using ipify for secure HTTPS fetching
    const response = await fetch('https://api.ipify.org?format=json');
    if (!response.ok) throw new Error('API Offline');
    const data = await response.json();

    // Inject the IP data using a clean, perfectly centered layout
    // This perfectly matches the 'Global Page Views' card next to it!
    ipCard.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 15px; height: 100%;">
        <p style="font-size: 1.2rem; font-weight: 600; color: var(--text-color); margin: 0; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 1px;">
          Your Public IP Address
        </p>
        <p style="font-size: clamp(1.5rem, 5vw, 2.2rem); font-weight: 700; color: var(--btn-bg); margin: 0; word-break: break-all; overflow-wrap: break-word;">
          ${data.ip}
        </p>
      </div>
    `;
  } catch (error) {
    console.error("Error fetching IP info:", error);
    ipCard.innerHTML = `
      <p style="color: var(--text-color); text-align: center;">
        <i class="fas fa-exclamation-triangle" style="color: #ffcc00;"></i> 
        Unable to load connection info.
      </p>`;
  }
}

// Trigger the function immediately
fetchIpInfo();

// ==========================================
// 8. DYNAMIC FOOTER YEAR
// ==========================================
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ==========================================
// 9. CONTACT FORM LOGIC
// ==========================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    // Prevent the website from refreshing
    e.preventDefault(); 
    
    // Grab all the text the user typed
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const bio = document.getElementById('bio').value;
    
    // Your hidden email address
    const targetEmail = "mcnk@gmail.com"; 
    
    // Create the Email Subject Line
    const subject = encodeURIComponent(`New Portfolio Message from ${firstName} ${lastName}`);
    
    // Format the Email Body
    const bodyText = `Name: ${firstName} ${lastName}\nSender Email: ${email}\n\nMessage:\n${bio}`;
    const body = encodeURIComponent(bodyText);
    
    // Open the user's default Mail app (Gmail, Outlook, Apple Mail, etc.)
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    
    // Clear the form after sending
    contactForm.reset();
  });
}