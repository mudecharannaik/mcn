document.addEventListener('DOMContentLoaded', () => {

    // 1. Dynamic Quote Generator
    const localQuotes = [
      "In God we trust, all others must bring data. – W. Edwards Deming",
      "Data is the new oil. – Clive Humby",
      "Without data, you're just another person with an opinion. – W. Edwards Deming",
      "The goal is to turn data into information, and information into insight. – Carly Fiorina",
      "Errors using inadequate data are much less than those using no data at all. – Charles Babbage"
    ];

    async function updateQuote() {
      const quoteEl = document.getElementById('quote-display');
      try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) throw new Error('API Offline');
        const data = await response.json();
        quoteEl.textContent = `"${data.content}" – ${data.author}`;
      } catch (error) {
        const randomIndex = Math.floor(Math.random() * localQuotes.length);
        quoteEl.textContent = localQuotes[randomIndex];
      }
    }
    updateQuote();
    setInterval(updateQuote, 15000);


    // 2. Real-Time Clock
    function updateTime() {
      const timeEl = document.getElementById('time-display');
      const now = new Date();
      timeEl.textContent = now.toLocaleTimeString([], { 
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true 
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
                weatherEl.innerHTML = `<i class="fas fa-cloud-sun"></i> ${data.current_weather.temperature}°C`;
              }
            } catch (error) {
              weatherEl.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Weather error`;
            }
          },
          () => { weatherEl.innerHTML = `<i class="fas fa-location-arrow"></i> Loc. Denied`; }
        );
      } else {
        weatherEl.innerHTML = `Geolocation not supported`;
      }
    }
    fetchWeather();


    // 4. Dark/Light Mode Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');

    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
      } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
      }
    });

    // 5. "Learn More" Button Smooth Scroll
    const learnMoreBtn = document.querySelector('.btn-learn-more');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            document.getElementById('projects').scrollIntoView({ 
                behavior: 'smooth', block: 'start'
            });
        });
    }

    // 6. Dynamic Footer Year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
});

// 7. Contact Form Logic
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const bio = document.getElementById('bio').value;
        
        // Target email address
        const targetEmail = "mcnk@gmail.com"; 
        
        // Format Email
        const subject = encodeURIComponent(`New Portfolio Message from ${firstName} ${lastName}`);
        const bodyText = `Name: ${firstName} ${lastName}\nSender Email: ${email}\n\nMessage:\n${bio}`;
        const body = encodeURIComponent(bodyText);
        
        // Open Mail Client
        window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
        
        // Clear Form
        contactForm.reset();
      });
    }