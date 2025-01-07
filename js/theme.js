const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

function getRandomColor() {
  const colors = [
    '#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51', // Palette 1
    '#ff6f61', '#6b5b95', '#88b04b', '#f7cac9', '#92a8d1', // Palette 2
    '#d4a5a5', '#d4c5a5', '#a5d4c5', '#a5b5d4', '#c5a5d4'  // Palette 3
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function applyRandomColors() {
  document.documentElement.style.setProperty('--primary', getRandomColor());
  document.documentElement.style.setProperty('--secondary', getRandomColor());
  document.documentElement.style.setProperty('--accent', getRandomColor());
  document.documentElement.style.setProperty('--button-bg', getRandomColor());
}

applyRandomColors();

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  applyRandomColors();
  updateThemeIcon(newTheme);
});

// Set initial icon
updateThemeIcon(savedTheme);

function updateThemeIcon(theme) {
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  if (theme === 'dark') {
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  } else {
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  }
}
