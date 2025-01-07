document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('http://localhost:3000/visitorCount');
    const data = await response.json();
    document.getElementById('count').textContent = data.count;
  } catch (error) {
    console.error('Error fetching visitor count:', error);
  }
});
