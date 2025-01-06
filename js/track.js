function trackVisitor(type, url) {
  fetch('http://localhost:3000/track', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ type, url })
  });
}

// Track page visit
trackVisitor('visit', window.location.href);

// Track redirects
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    trackVisitor('redirect', link.href);
  });
});
